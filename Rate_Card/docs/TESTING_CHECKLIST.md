# Testing checklist

Record the browser versions, device sizes and tester name in the pull request or release note.

## Core navigation and catalogue

- [ ] Page loads without visible errors.
- [ ] Equipment, Rooms & Spaces and Basket tabs work.
- [ ] Tab changes do not clear the current basket or contact details.
- [ ] Equipment search returns expected items.
- [ ] Equipment category, group and brand filters work.
- [ ] Equipment clear filters restores the catalogue.
- [ ] Asset information popovers open and close correctly.
- [ ] Room search and category filters work.

## Equipment hire period

- [ ] Ordinary weekday start and end dates calculate the expected hire period.
- [ ] Manual equipment number of days works.
- [ ] Incremental equipment pricing above five days behaves as expected.
- [ ] Saturday-only equipment request adjusts to Friday through Monday and four days.
- [ ] Sunday-only equipment request adjusts to Friday through Monday and four days.
- [ ] Friday-to-Monday equipment request remains four days.
- [ ] Invalid or incomplete date combinations are handled clearly.

## Rooms & Spaces period and pricing

- [ ] Only whole-hour time values are selectable.
- [ ] Same-day end time must be later than start time.
- [ ] Manual room number of days works.
- [ ] Studio B, 10:00 to 13:00, calculates £240.00.
- [ ] Studio B, 10:00 to 14:00, calculates £320.00.
- [ ] Studio B, 10:00 to 15:00, calculates £544.00.
- [ ] TV Studio A, four hours, calculates £2,856.00 and explains the missing half-day rate.
- [ ] TV Studio A, four days, calculates £10,752.00.
- [ ] TV Studio A, seven days, calculates £16,464.00.
- [ ] Known closure dates are blocked.
- [ ] Dates beyond the configured closure years produce the intended warning.

## Mandatory and optional support

- [ ] Ritterman Dance Studio starting Friday at 17:00 adds £37.00 once.
- [ ] Ritterman Dance Studio starting Friday at 18:00 adds £75.00 once.
- [ ] Ravensfield Theatre starting Saturday adds £75.00 once.
- [ ] Grove Dance Theatre adds the correct mandatory support once.
- [ ] Mandatory support is visible in the room calculation and basket breakdown.
- [ ] Removing an affected room removes its linked mandatory support.
- [ ] Optional additional technical support remains separate.
- [ ] Technical Consultation displays contact-to-arrange wording.

## Basket

- [ ] Add equipment works.
- [ ] Add room works.
- [ ] Add optional service works.
- [ ] Equipment quantity changes update totals.
- [ ] Remove item works.
- [ ] Clear basket uses an in-page confirmation dialog.
- [ ] Basket count is correct.
- [ ] Equipment, rooms and services are visually separated.
- [ ] Basket page expands fully without overlapping the footer.
- [ ] Basket survives a page refresh during the current browser session.

## Client details and Booking Request

- [ ] Client name exports correctly.
- [ ] Company or production exports correctly.
- [ ] Email address exports correctly.
- [ ] Phone number exports correctly.
- [ ] At least one naming field is required.
- [ ] Booking Request filename is safe and readable.
- [ ] Date is included in the filename.
- [ ] Excel workbook opens without repair warnings.
- [ ] Equipment items, quantities, rates and totals are correct.
- [ ] Room dates, times, charging basis, room charge and mandatory support are correct.
- [ ] Request-only status wording is included.
- [ ] Equipment rows import into the current Quote Builder as expected.
- [ ] Any current limitation on automatic room-line import is documented.

## Email workflow

- [ ] Correct recipient is used: `thekithub@mdx.ac.uk`.
- [ ] Subject includes the relevant client or production name.
- [ ] Body contains the expected contact and request details.
- [ ] Body states that the request is not a confirmed booking.
- [ ] Attachment reminder is present.
- [ ] Booking Request downloads before the email application opens.
- [ ] Status and warning messages use in-page dialogs, not browser-native alerts.

## Responsive and accessibility checks

- [ ] Keyboard navigation reaches all interactive controls.
- [ ] Focus indicators are visible.
- [ ] Labels are associated with inputs.
- [ ] Dialog focus and dismissal behave correctly.
- [ ] Text remains readable at 200 per cent zoom.
- [ ] No horizontal page scrolling at common mobile widths.
- [ ] Desktop layout tested at 1366 by 768 or similar.
- [ ] Mobile layout tested around 390 by 844.

## Browser coverage

- [ ] Current Chrome on Windows.
- [ ] Current Edge on Windows.
- [ ] Current Safari on macOS, where available.
- [ ] Mobile Safari on iPhone, where available.
- [ ] Mobile Chrome on Android, where available.

## Deployment

- [ ] Netlify publishes only the `site` folder.
- [ ] Repository documentation and archive files are not public through the site URL.
- [ ] Security headers are present.
- [ ] Live deployment matches the approved release.
- [ ] Previous Netlify deployment remains available for rollback.
