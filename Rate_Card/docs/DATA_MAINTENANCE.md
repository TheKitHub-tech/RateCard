# Data maintenance

## Equipment catalogue

Equipment lives in the embedded `ITEMS` array.

Each item can contain:

- stable ID;
- category;
- group;
- brand;
- public item name;
- 1-day, 3-day and 5-day prices;
- optional description;
- duplicate-name flag.

Use the newest approved spreadsheet as the source of truth. V5.0 brand corrections were reconciled against `Kit_Hub_Full_Rate_Card_Corrected_Brands.xlsx`.

When editing:

1. Preserve stable IDs for surviving items.
2. Preserve exact public names unless an approved naming correction exists.
3. Check category, group, brand and description.
4. Validate numeric 1-day, 3-day and 5-day prices.
5. Search package component references before deleting an item.
6. Test interface, Excel and PDF output.

Do not add a new row for a kit component that is not independently hired. Put that information in the kit description instead.

## Packages

Packages reference equipment IDs and quantities. They do not have a price or discount.

After any item change:

- confirm every package reference resolves;
- confirm intended quantities;
- confirm adding overlapping packages accumulates quantities;
- confirm exports show the component lines rather than a package-priced line.

## Rooms

Rooms live in `ROOMS`. Published room rates must come from the newest approved room-rate source.

Preserve the current public naming corrections:

- Studio A -> TV Studio A
- Studio B -> TV Studio B
- Podcast Studio A -> Podcast Studio
- Podcast Studio B -> Radio Studio

Do not derive listed half-day, 1-day, 3-day or 5-day prices from hourly prices.

## Closure calendar

`ROOM_CONFIGURED_YEARS`, `ENGLAND_WALES_BANK_HOLIDAYS` and the Christmas closure generator require annual review.

Before adding a year:

1. verify England and Wales bank-holiday dates from an authoritative source;
2. confirm the University's actual Christmas closure;
3. update the configured-year set and tests;
4. test closed and open dates around every boundary.

## Current V5.0 counts

- Equipment items: 514
- Rooms and spaces: 37
- Equipment packages: 5

Count changes must be intentional and recorded in `CHANGELOG.md`.
