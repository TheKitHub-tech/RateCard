# Guardian handover

Last reviewed: **17 August 2026**

This is the central continuity document for the Kit Hub External Hire Rate Card.

## Current approved files

- Public rate card: `KitHubRateCardV4.30.html`
- Live repository copy: `site/index.html`
- Current release archive: `archive/KitHubRateCardV4.30.html`
- Stable pre-update rollback: `archive/KitHubRateCardV4.3.html`
- Internal Quote Builder: `KitHubQuoteBuilderV3.2.html`, maintained separately
- Repository pack: `Rate_Card.zip`, deliberately version-neutral

Do not overwrite archived releases. Future public changes start from a new versioned HTML file.

## What V4.30 contains

- 514 equipment items.
- 37 rooms and spaces.
- Five packages: Documentary Interview, Two-Camera Interview, Portrait Photography, Location Sound and Location Podcast.
- Equipment, Rooms & Spaces and Basket navigation.
- One shared basket and one shared booking window.
- Equipment weekend adjustment and two-day weekend pricing.
- Compact desktop search/date panels and a mobile portrait layout.
- Clear category expand/collapse controls.
- Excel and PDF full-rate-card exports.
- Excel and PDF selected-basket exports.
- Excel Booking Request and email preparation.
- Production/client name in export content and filenames.
- In-page confirmations and warnings.
- Static room closure calendar for 2026, 2027 and 2028.

## Latest catalogue correction

The standalone Cartoni Lightweight Tripod (KPTZ721/100), formerly `RC-0089`, was removed because it belongs to the Cartoni KJ-103 Jib kit. `RC-0098` now includes the tripod in its description.

All catalogue views and exports read from the same `ITEMS` data, so the correction appears consistently in search, basket, Excel and PDF outputs.

## Purpose and boundaries

The public site is an estimate and Booking Request tool. It does not:

- reserve equipment or rooms;
- check live availability;
- confirm a booking;
- accept payment or deposits;
- create accounts;
- store requests in a central database;
- attach the generated workbook to email automatically.

The current customer-facing warning is:

> Submitting a request does not confirm a booking. All equipment and room requests are subject to availability, staffing, technical approval and written confirmation from the Kit Hub. Prices are exclusive of VAT and indicative only.

## Architecture

The application is one self-contained HTML file containing:

- page structure and copy;
- CSS and responsive rules;
- equipment and room data;
- pricing and date logic;
- packages and basket logic;
- Excel generation;
- PDF generation;
- email preparation.

There is no application server, database, package build or API. Basket and booking-window state are stored temporarily in browser session storage. The generated files stay on the user's device until they attach and send them.

## Data sources used during V4.30 development

- Equipment and brand corrections: `Kit_Hub_Full_Rate_Card_Corrected_Brands.xlsx`.
- Package selections: `Kit_Hub_Package_Planner(1).xlsx`.
- Room prices and rules remain inherited from the approved room-rate implementation used for V4.3.

These source workbooks are not part of the public repository pack. Obtain the newest approved source before changing data.

## Quote workflow

The current internal Quote Builder is V3.2 and remains outside the public Netlify site. It has been regression-tested with the current combined Booking Request schema. It imports:

- production/client and contact details;
- equipment dates and times;
- weekend two-day pricing;
- equipment lines;
- room lines and their locked calculated charges;
- mandatory room support;
- optional services.

It preserves editable quote data in generated PDFs so staff can reopen a quote. See `QUOTE_BUILDER.md`.

## Non-negotiable guardrails

- Refer to the service as **the Kit Hub**, never the Hub.
- Use **Booking Request**, never Request List, in the public workflow.
- Keep one Basket only.
- Do not imply that a request is a confirmed booking.
- Do not claim the email attachment is automatic.
- Keep prices exclusive of VAT and indicative.
- Do not apply the equipment weekend rule to rooms.
- Do not invent a half-day rate for TV Studio A.
- Do not recalculate approved room package prices from hourly rates.
- Charge mandatory technical support once per affected room, not once per day.
- Use room start day/time, not finish time, to select the mandatory-support rate.
- Keep one room booking window per Booking Request.
- Do not restore browser-native alert or confirm dialogs.
- Do not distribute proprietary font files.
- Do not commit client data or generated requests.
- Keep the internal Quote Builder outside the public Netlify site.
- Avoid em dashes in customer-facing Kit Hub copy.

## Outstanding management information

The following items are deliberately not invented in V4.30:

- eligibility wording for alumni, external clients and other audiences;
- external terms and conditions link;
- quote response lead time;
- minimum booking notice;
- insurance and excess wording;
- deposit arrangements;
- minimum spend or minimum booking value;
- payment terms;
- wider commercial terms.

Track decisions in `OPEN_DECISIONS.md` and obtain formal approval before adding customer-facing claims.

## First steps for the next maintainer

1. Read this document, `PRICING_AND_BOOKING_RULES.md` and `RELEASE_PROCESS.md`.
2. Confirm the current live footer and `VERSION` agree.
3. Obtain the newest approved operational source.
4. Create the next versioned HTML file rather than editing an archive.
5. Preserve all accepted behaviour unless the task explicitly changes it.
6. Run automated and manual checks before publishing.
