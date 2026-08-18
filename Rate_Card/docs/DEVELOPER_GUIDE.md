# Developer guide

## Application shape

The rate card is a single HTML document. There is no bundler or framework.

Main embedded data and logic include:

- `ITEMS`: equipment catalogue, prices, brands and descriptions;
- `PACKAGES`: component references and quantities;
- `ROOMS`: room catalogue, rates and mandatory-support flags;
- shared booking-window state;
- equipment and room calculators;
- basket state and rendering;
- workbook ZIP/XML generation;
- PDF byte generation;
- email preparation and in-page dialogs.

## State

The current keys are:

- Basket: `kitHubExternalHireBasket_v4`
- Shared booking window: `kitHubSharedBookingWindow_v1`

Current state uses `sessionStorage`. Migration logic may read an older basket from local storage and then remove it.

Do not change storage keys casually. A key change can make a customer's active session appear empty.

## Stable identifiers

Equipment, room and package IDs are functional references, not display decoration.

- Do not renumber surviving equipment to close an ID gap.
- Packages reference equipment by ID.
- Basket rows and exports retain equipment and room references.
- Remove or replace package references before deleting an item.

V5.0 intentionally has no `RC-0089`. `RC-0098` is the Cartoni KJ-103 Jib and includes the former tripod component in its description.

## Export architecture

The application creates standards-based files locally in the browser:

- Booking Request XLSX;
- full rate-card XLSX;
- basket-list XLSX;
- full rate-card PDF;
- basket-list PDF.

Catalogue exports read from the same `ITEMS` and `ROOMS` arrays used by the interface. Data corrections should therefore require one authoritative source edit, followed by export regression tests.

## Quote Builder integration

The current combined Booking Request contains metadata and rows for equipment, rooms and optional services. Room charges are already calculated by the public rate card and should remain locked on import unless staff deliberately edit them.

Any export-column or metadata change must be tested against the current internal Quote Builder before release.

## Automated test

`npm test` loads `site/index.html` in a browser-like runtime and checks the highest-risk behaviours.

The test is deliberately local and does not submit data or use the live site.

## Editing approach

1. Work from a copy of the current versioned archive file.
2. Keep the single-file architecture unless a formally approved migration changes it.
3. Make the smallest coherent change.
4. Add a regression assertion for every bug that could recur.
5. Run the automated test and the manual checklist.
6. Update the archive and live copy only after approval.

## Future architecture

Possible future phases include external data files, an approved backend, authenticated staff editing, direct request submission, audit logs and SISO integration. These require a separate design, privacy, security, ownership and support decision. Do not partially introduce them into the static release.
