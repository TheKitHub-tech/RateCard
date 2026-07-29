# Testing checklist

Record the browser versions and tester name in the pull request or release note.

## Core catalogue

- [ ] Page loads without visible errors.
- [ ] Search returns expected equipment.
- [ ] Category, group and brand filters work.
- [ ] Clear filters restores the catalogue.
- [ ] Asset information popovers open and close correctly.

## Hire period

- [ ] Start and end dates calculate the expected hire period.
- [ ] Manual number of days works.
- [ ] Incremental pricing above five days behaves as expected.
- [ ] Invalid or incomplete date combinations are handled clearly.

## Basket

- [ ] Add item works.
- [ ] Quantity changes update totals.
- [ ] Remove item works.
- [ ] Clear basket works.
- [ ] Basket count is correct.
- [ ] Desktop drawer opens and closes.
- [ ] Mobile basket opens and closes.
- [ ] Basket persistence after refresh behaves as expected.

## Client details and request list

- [ ] Client name exports correctly.
- [ ] Company or production exports correctly.
- [ ] Email address exports correctly.
- [ ] Phone number exports correctly.
- [ ] At least one naming field is required.
- [ ] Request list filename is safe and readable.
- [ ] Date is included in the filename.
- [ ] Excel workbook opens without repair warnings.
- [ ] Items, quantities, rates and totals are correct.
- [ ] Workbook imports into the current Quote Builder.
- [ ] Contact details populate the Quote Builder automatically.

## Email workflow

- [ ] Correct recipient is used: `thekithub@mdx.ac.uk`.
- [ ] Subject includes the relevant client or production name.
- [ ] Body contains the expected details and attachment reminder.
- [ ] Request list downloads before the email application opens.

## Responsive and accessibility checks

- [ ] Keyboard navigation reaches all interactive controls.
- [ ] Focus indicators are visible.
- [ ] Labels are associated with inputs.
- [ ] Text remains readable at 200 per cent zoom.
- [ ] No horizontal page scrolling at common mobile widths.
- [ ] Desktop layout tested at 1366 by 768 or similar.
- [ ] Mobile layout tested around 390 by 844.

## Browser coverage

- [ ] Current Chrome on Windows.
- [ ] Current Edge on Windows.
- [ ] Current Safari on macOS.
- [ ] Mobile Safari on iPhone where available.
- [ ] Mobile Chrome on Android where available.

## Deployment

- [ ] Netlify publishes only the `site` folder.
- [ ] Repository documentation and archive files are not public through the site URL.
- [ ] Security headers are present.
- [ ] Live deployment matches the approved release.
