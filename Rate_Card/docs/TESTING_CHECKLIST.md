# Essential testing checklist

## Landing and navigation

- [ ] Landing page shows Equipment, Rooms & Spaces, Basket count and both full-list export buttons.
- [ ] Logo returns to the landing page.
- [ ] The red warning bar remains one clean line on desktop.
- [ ] Equipment, Rooms & Spaces and Basket retain the current basket and booking window.

## Equipment

- [ ] Main search is prominent and search scope is the final filter.
- [ ] Category, group, brand and scope filters work and reset correctly.
- [ ] Category expand/collapse buttons are clear and keyboard-operable.
- [ ] Import kit list opens without moving its button to another line.
- [ ] The Excel template downloads, opens and can be re-imported.
- [ ] A template row with an Item and Quantity reaches the import review stage.
- [ ] Friday-to-Monday equipment hire is charged as two days.
- [ ] Saturday/Sunday date choices adjust to Friday/Monday.
- [ ] Weekend guidance appears as an in-page pop-up only after a weekend choice.
- [ ] KJ-103 Jib includes the Cartoni Lightweight Tripod in its description.
- [ ] The Cartoni Lightweight Tripod is not a separate item.
- [ ] All five packages add the intended component quantities and no package discount.

## Rooms & Spaces

- [ ] Search and category filters work and reset correctly.
- [ ] Category expand/collapse controls work.
- [ ] The booking window matches Equipment after changing tabs.
- [ ] Start times offer both `:00` and `:30` choices.
- [ ] A `09:00` start offers `10:00`, `11:00` and later whole-hour durations.
- [ ] A `09:30` start offers `10:30`, `11:30` and later whole-hour durations.
- [ ] Mixed-minute bookings such as `09:30` to `11:00` are not offered.
- [ ] TV Studio A four-hour requests use its one-day rate.
- [ ] TV Studio A shows £1,200 for one day, £3,600 for three days and £6,000 for five days.
- [ ] Mandatory technical support is added once per affected room.
- [ ] TV Studio B, Podcast Studio and Radio Studio use the correct public names.
- [ ] Closure dates are blocked and years beyond the configured calendar warn for review.

## Basket and exports

- [ ] Production/client name appears in generated filenames and export content.
- [ ] Booking Request Excel opens and contains equipment and room lines.
- [ ] Full Excel export contains Equipment and Rooms sheets.
- [ ] Full PDF contains equipment and rooms without clipped columns.
- [ ] Basket Excel and PDF contain only selected lines.
- [ ] The email draft is addressed to `thekithub@mdx.ac.uk` and tells the user to attach the workbook manually.
- [ ] Empty/invalid states use in-page messages rather than browser-native alerts.

## Mobile portrait

- [ ] No horizontal page scrolling at common phone widths.
- [ ] Navigation and primary buttons are large enough to tap.
- [ ] Search, filters, dates and times stack in a sensible order.
- [ ] Cards, quantity inputs and basket controls remain readable.
- [ ] Dialogs fit within the viewport and can be closed.
- [ ] Export buttons do not overlap or leave the viewport.

## Laptop and browser layout

- [ ] Safari on a smaller MacBook screen has no horizontal overflow.
- [ ] Chrome on MacBook stacks the search and booking panels cleanly at narrower widths.
- [ ] Chrome or Edge on Windows retains the full desktop layout at larger widths.
- [ ] The landing page can scroll on a short laptop viewport without clipping content.

## Final release

- [ ] Footer shows the intended version.
- [ ] `npm test` passes.
- [ ] `site/index.html` matches the current archived release exactly.
- [ ] A V5.1 Booking Request with a half-hour room start imports correctly into Quote Builder V3.2.
- [ ] `SHA256SUMS.txt` has been regenerated.
- [ ] No client data, generated exports, credentials or temporary files are included.
