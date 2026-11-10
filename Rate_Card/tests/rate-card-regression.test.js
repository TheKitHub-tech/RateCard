const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { JSDOM, VirtualConsole } = require('jsdom');

const root = path.resolve(__dirname, '..');
const sourcePath = path.join(root, 'site', 'index.html');
const source = fs.readFileSync(sourcePath, 'utf8');

function matchData(pattern, label) {
  const match = source.match(pattern);
  assert(match, `${label} data not found`);
  return match[1];
}

const items = JSON.parse(matchData(/const ITEMS = (\[.*?\]);\n\s*const PACKAGE_CATEGORY/s, 'ITEMS'));
const packages = Function(`return (${matchData(/const PACKAGES = (\[[\s\S]*?\n\s*\]);\n\s*const PERIODS/, 'PACKAGES')})`)();
const rooms = JSON.parse(matchData(/const ROOMS = (\[.*?\]);\n\s*const ROOM_BY_ID/s, 'ROOMS'));

assert.strictEqual(items.length, 514, 'Equipment catalogue count changed');
assert.strictEqual(rooms.length, 37, 'Room catalogue count changed');
assert.strictEqual(packages.length, 5, 'Package count changed');

const itemById = new Map(items.map(item => [item.id, item]));
assert(!itemById.has('RC-0089'), 'Cartoni tripod must not exist as a separate item');
assert.strictEqual(
  itemById.get('RC-0098')?.description,
  'Includes Cartoni Lightweight Tripod (KPTZ721/100)',
  'Cartoni Jib kit description changed'
);

for (const packagePreset of packages) {
  assert(packagePreset.components.length > 0, `${packagePreset.name} has no components`);
  for (const component of packagePreset.components) {
    assert(itemById.has(component.id), `${packagePreset.name} contains unknown item ${component.id}`);
    assert(Number.isInteger(component.qty) && component.qty > 0, `${packagePreset.name} has an invalid quantity`);
  }
}

const expectedRoomNames = new Set(['TV Studio A', 'TV Studio B', 'Podcast Studio', 'Radio Studio']);
for (const roomName of expectedRoomNames) assert(rooms.some(room => room.name === roomName), `Missing room name ${roomName}`);
assert(!rooms.some(room => ['Studio B', 'Podcast Studio A', 'Podcast Studio B'].includes(room.name)), 'Old room display name remains');

const runtimeErrors = [];
const virtualConsole = new VirtualConsole();
virtualConsole.on('jsdomError', error => runtimeErrors.push(error));
virtualConsole.on('error', error => runtimeErrors.push(error));

const dom = new JSDOM(source, {
  runScripts: 'dangerously',
  url: 'https://example.test/',
  pretendToBeVisual: true,
  virtualConsole,
  beforeParse(window) {
    window.scrollTo = () => {};
    window.HTMLElement.prototype.scrollIntoView = () => {};
    window.CSS = window.CSS || {};
    window.CSS.escape = window.CSS.escape || (value => String(value).replace(/[^a-zA-Z0-9_-]/g, '\\$&'));
    window.TextEncoder = TextEncoder;
    window.URL.createObjectURL = () => 'blob:test';
    window.URL.revokeObjectURL = () => {};
  }
});

const { window } = dom;
const { document } = window;

assert.strictEqual(runtimeErrors.length, 0, runtimeErrors.map(error => error.stack || error.message).join('\n'));
assert(document.getElementById('exportFullList'), 'Full Excel export button missing');
assert(document.getElementById('exportFullPdf'), 'Full PDF export button missing');
assert(document.getElementById('exportBasketList'), 'Basket Excel export button missing');
assert(document.getElementById('exportBasketPdf'), 'Basket PDF export button missing');
assert(document.getElementById('requestProductionName'), 'Production/client field missing');
assert(document.getElementById('downloadImportTemplate'), 'Equipment import template button missing');
assert(document.getElementById('importPanel').textContent.includes('Import kit list'), 'Equipment import panel label is incorrect');
assert.strictEqual(document.querySelectorAll('.rooms-kicker').length, 0, 'Redundant THE KIT HUB workspace labels remain');

const importTemplateFiles = window.buildImportTemplateWorkbookFiles();
const importTemplateXml = importTemplateFiles['xl/worksheets/sheet1.xml'];
assert(importTemplateXml.includes('<t>Item</t>'), 'Import template item header missing');
assert(importTemplateXml.includes('<t>Quantity</t>'), 'Import template quantity header missing');
assert(importTemplateXml.includes('<t>Number of Days (optional)</t>'), 'Import template optional days header missing');
assert(importTemplateXml.includes('<t>Notes</t>'), 'Import template notes header missing');
const parsedImportTemplate = window.parseWorksheetRows(importTemplateXml, []);
assert.strictEqual(parsedImportTemplate[0][0], 'Item', 'Import template is not readable by the site importer');
assert.strictEqual(parsedImportTemplate[0][1], 'Quantity', 'Import template quantity column is not readable by the site importer');

const warning = document.querySelector('.global-request-warning').textContent.replace(/\s+/g, ' ').trim();
assert(warning.startsWith('Submitting a request does not confirm a booking.'), 'Global request warning changed');
assert(warning.endsWith('Prices are exclusive of VAT and indicative only.'), 'VAT warning changed');
assert(!warning.includes('A booking is only confirmed when the Kit Hub confirms it in writing.'), 'Redundant warning sentence returned');

const equipmentCategories = document.querySelectorAll('#items .category-block');
const roomCategories = document.querySelectorAll('#roomsCatalogue .category-block');
assert(equipmentCategories.length > 1, 'Equipment categories did not render');
assert(roomCategories.length > 1, 'Room categories did not render');
assert.strictEqual(equipmentCategories.length, document.querySelectorAll('#items [data-category-toggle]').length, 'Equipment category toggle missing');
assert.strictEqual(roomCategories.length, document.querySelectorAll('#roomsCatalogue [data-category-toggle]').length, 'Room category toggle missing');

const firstToggle = document.querySelector('#items [data-category-toggle]');
const controlled = document.getElementById(firstToggle.getAttribute('aria-controls'));
firstToggle.click();
assert.strictEqual(firstToggle.getAttribute('aria-expanded'), 'false', 'Category did not collapse');
assert.strictEqual(controlled.hidden, true, 'Collapsed category content remains visible');
firstToggle.click();
assert.strictEqual(controlled.hidden, false, 'Category did not expand');

const startDate = document.getElementById('startDate');
const startTime = document.getElementById('startTime');
const endDate = document.getElementById('endDate');
const endTime = document.getElementById('endTime');
startTime.value = '14:30';
startTime.dispatchEvent(new window.Event('change', { bubbles: true }));
endTime.value = '09:15';
endTime.dispatchEvent(new window.Event('change', { bubbles: true }));
startDate.value = '2026-08-15';
startDate.dispatchEvent(new window.Event('change', { bubbles: true }));
endDate.value = '2026-08-16';
endDate.dispatchEvent(new window.Event('change', { bubbles: true }));

const booking = window.getBookingInfo();
assert.strictEqual(startDate.value, '2026-08-14', 'Saturday collection was not adjusted to Friday');
assert.strictEqual(endDate.value, '2026-08-17', 'Sunday return was not adjusted to Monday');
assert.strictEqual(booking.weekendBooking, true, 'Weekend booking was not detected');
assert.strictEqual(booking.days, 2, 'Weekend booking is not charged as two days');
assert.strictEqual(booking.startTime, '14:30', 'Collection time changed during weekend adjustment');
assert.strictEqual(booking.endTime, '09:15', 'Return time changed during weekend adjustment');
assert.strictEqual(document.getElementById('roomStartDate').value, '2026-08-14', 'Shared start date did not reach Rooms');
assert.strictEqual(document.getElementById('roomEndDate').value, '2026-08-17', 'Shared end date did not reach Rooms');
assert.strictEqual(document.getElementById('roomStartTime').value, '14:30', 'Shared start time did not reach Rooms');
assert.strictEqual(document.getElementById('roomEndTime').value, '09:15', 'Shared end time did not reach Rooms');
assert.strictEqual(document.getElementById('uiMessageTitle').textContent, 'Weekend equipment hire', 'Weekend pop-up did not appear');
assert(document.getElementById('uiMessageText').textContent.includes('charged as two days'), 'Weekend pop-up wording changed');

const roomStartTime = document.getElementById('roomStartTime');
const roomEndTime = document.getElementById('roomEndTime');
assert([...roomStartTime.options].some(option => option.value === '09:30'), 'Room start times do not include half-hour increments');
document.getElementById('roomStartDate').value = '2026-08-18';
document.getElementById('roomEndDate').value = '2026-08-18';
document.getElementById('roomNumberOfDays').value = '';
roomStartTime.value = '09:30';
window.updateRoomEndTimeOptions('09:30', '');
assert([...roomEndTime.options].some(option => option.value === '10:30'), 'A half-hour start does not offer matching half-hour end times');
assert(![...roomEndTime.options].some(option => option.value === '11:00'), 'A half-hour start incorrectly offers a half-hour booking length');
roomEndTime.value = '11:30';
const roomBooking = window.getRoomBookingInfo();
assert.strictEqual(roomBooking.valid, true, roomBooking.error || 'Half-hour-start room booking is invalid');
assert.strictEqual(roomBooking.durationHours, 2, 'Whole-hour duration from a half-hour start was not calculated correctly');
const halfHourStartRoomHire = window.calculateRoomHire(rooms[0], roomBooking);
assert.strictEqual(halfHourStartRoomHire.roomCharge, rooms[0].rates.hourly * 2, 'Half-hour-start room price was not calculated correctly');

const packageButton = document.querySelector('[data-package-add="PACKAGE-DOCUMENTARY-INTERVIEW"]');
assert(packageButton, 'Documentary package button missing');
packageButton.click();
const storedBasket = JSON.parse(window.sessionStorage.getItem('kitHubExternalHireBasket_v4') || '[]');
assert(storedBasket.length > 0, 'Package did not add its components to the basket');
assert(!document.getElementById('exportBasketPdf').disabled, 'Basket PDF did not enable');

document.getElementById('requestProductionName').value = 'Project North Star';
const basketFilename = window.getBasketListFilename('pdf');
const bookingFilename = window.getBookingRequestFilename();
assert(basketFilename.startsWith('Project_North_Star_basket_list_'), 'Production name missing from basket filename');
assert(bookingFilename.startsWith('Project_North_Star_booking_request_'), 'Production name missing from Booking Request filename');

const fullExcelXml = window.buildFullRateCardSheetXml('equipment');
assert(!fullExcelXml.includes('RC-0089'), 'Removed tripod remains in full Excel output');
assert(fullExcelXml.includes('RC-0098'), 'Cartoni Jib missing from full Excel output');
assert(fullExcelXml.includes('Includes Cartoni Lightweight Tripod (KPTZ721/100)'), 'Jib description missing from full Excel output');

const bookingXml = window.buildWorksheetXml();
assert(bookingXml.includes('Production / client name'), 'Production/client label missing from Booking Request');
assert(bookingXml.includes('Project North Star'), 'Production/client value missing from Booking Request');
assert(bookingXml.includes('Weekend booking, 2 days'), 'Weekend price basis missing from Booking Request');

const fullPdf = Buffer.from(window.buildFullRateCardPdfBytes());
const basketPdf = Buffer.from(window.buildBasketListPdfBytes());
assert(fullPdf.subarray(0, 8).toString().startsWith('%PDF-1.4'), 'Full rate card is not a PDF');
assert(basketPdf.subarray(0, 8).toString().startsWith('%PDF-1.4'), 'Basket export is not a PDF');
assert(fullPdf.length > 250000, 'Full rate-card PDF is unexpectedly small');
assert(basketPdf.length > 5000, 'Basket PDF is unexpectedly small');

assert(source.includes('@media (max-width: 760px)'), 'Mobile portrait stylesheet missing');
assert(source.includes('id="compact-laptop-v51"'), 'Compact laptop stylesheet missing');
assert(source.includes('@media (min-width: 761px) and (max-width: 1280px)'), 'Smaller laptop breakpoint missing');
assert(source.includes('@media (min-width: 801px) and (max-width: 1440px) and (max-height: 800px)'), 'Short laptop viewport handling missing');
assert(source.includes('KitHubRateCardV5.1'), 'V5.1 version marker missing');
assert(source.trimEnd().endsWith('</html>'), 'HTML document is truncated');

setTimeout(() => {
  assert.strictEqual(runtimeErrors.length, 0, runtimeErrors.map(error => error.stack || error.message).join('\n'));
  dom.window.close();
  console.log(JSON.stringify({
    tests: 'passed',
    equipmentItems: items.length,
    rooms: rooms.length,
    packages: packages.length,
    weekendChargeableDays: booking.days,
    halfHourRoomStarts: 'passed',
    responsiveLaptopLayout: 'passed',
    sharedBookingWindow: 'passed',
    collapsibleCategories: 'passed',
    excelExports: 'passed',
    pdfExports: 'passed',
    cartoniJibCorrection: 'passed'
  }, null, 2));
}, 120);
