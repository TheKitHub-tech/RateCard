[README.md](https://github.com/user-attachments/files/30740477/README.md)
# The Kit Hub External Hire Rate Card

A browser-based external hire rate card for the Kit Hub at Middlesex University London.

**Current release:** V4.3  
**Status:** Working prototype for stakeholder review and controlled trial use  
**Live application file:** `site/index.html`

## What the tool does

The rate card allows a prospective client to:

- Browse, search and filter the Kit Hub equipment catalogue.
- Choose equipment hire dates or enter a manual number of chargeable days.
- Request equipment across a weekend using the required Friday collection and Monday return period.
- Browse 37 rooms and spaces across six categories.
- Select one shared room date and whole-hour time window, or enter a manual number of room-hire days.
- See room charges calculated automatically using the published hourly, half-day and multi-day rates.
- Add equipment, rooms and optional services to one shared basket.
- Enter client and production contact details.
- Generate an Excel Booking Request locally in the browser.
- Open a pre-addressed email to `thekithub@mdx.ac.uk`.

## Booking status

Submitting a Booking Request does not confirm a booking. Equipment and room requests remain subject to availability, staffing, technical approval and written confirmation from the Kit Hub.

The application does not reserve stock or rooms, take payment, or create a server-side booking record.

## Important pricing and booking rules

### Equipment

- Equipment pricing uses the embedded 1-day, 3-day and 5-day rate structure.
- A manual number of chargeable days can be used instead of selecting dates.
- The Kit Hub does not operate at weekends.
- Equipment requested for Saturday or Sunday is adjusted to collection on Friday and return on Monday.
- A weekend-only equipment request is therefore charged as a four-day hire.
- This weekend adjustment applies to equipment only, not rooms.

### Rooms & Spaces

- Customers choose dates and whole-hour times rather than selecting a pricing tier.
- Same-day requests use hourly pricing for 1 to 3 hours, the listed half-day rate for 4 hours, and the listed 1-day rate for 5 hours or more.
- TV Studio A has no half-day rate, so a 4-hour request uses its listed 1-day price.
- Multi-day requests use the published 1-day, 3-day and 5-day rates and the agreed intermediate-day calculations.
- Ritterman Dance Studio, Ravensfield Theatre and Grove Dance Theatre include one mandatory technical-support charge per affected room.
- Room requests use one shared date and time window. Different room windows require a separate Booking Request.

More detail is recorded in [`docs/PRICING_AND_BOOKING_RULES.md`](docs/PRICING_AND_BOOKING_RULES.md).

## Data and privacy

The application is a static client-side website. It has no database, account system, payment service or server-side submission process.

- Booking Request spreadsheets are generated on the user's device.
- Contact fields are used only to prepare the spreadsheet and email draft and are not intentionally stored by the application.
- Basket contents are stored in browser session storage so they can survive a page refresh during the current browser session.
- The application does not intentionally use cookies, analytics or advertising trackers.
- The website cannot attach the downloaded spreadsheet to an email automatically. The user must attach it before sending.
- Users on shared devices should clear the basket and close the browser after use.
- Generated Booking Requests and client information must never be committed to this repository.

See [`SECURITY.md`](SECURITY.md) for the repository rules.

## Repository structure

```text
kit-hub-rate-card/
├── site/
│   └── index.html                 # File published by Netlify
├── archive/
│   └── KitHubRateCardV4.3.html    # Preserved versioned release
├── docs/
│   ├── DEPLOYMENT.md
│   ├── HANDOVER.md
│   ├── PRICING_AND_BOOKING_RULES.md
│   ├── RELEASE_PROCESS.md
│   └── TESTING_CHECKLIST.md
├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE.md
├── .gitignore
├── CHANGELOG.md
├── CONTRIBUTING.md
├── NOTICE.md
├── PACK_CONTENTS.txt
├── SECURITY.md
├── SHA256SUMS.txt
├── VERSION
├── netlify.toml
└── README.md
```

The `site` folder is the only folder Netlify publishes. The versioned file in `archive` remains in GitHub and is not part of the public site.

## Open locally

Open this file in a modern browser:

```text
site/index.html
```

No installation or build process is required for normal use.

For a local web-server test, run this from the repository root:

```bash
python3 -m http.server 8000 --directory site
```

Then open:

```text
http://localhost:8000
```

## Upload this pack to GitHub

1. Extract `Rate_Card.zip`.
2. Open the extracted `Rate_Card` folder.
3. Upload the contents of that folder to the repository root.
4. Confirm that `README.md`, `netlify.toml`, `site` and `archive` appear directly at the repository root.
5. Do not upload the ZIP as the only repository file. GitHub does not unpack it automatically.

If replacing the earlier nested repository layout, remove the obsolete version-named pack folders after confirming the new root structure is correct.

## Deploy to Netlify

The repository is arranged for Netlify with no build command and `site` as the publish directory.

When the repository files sit directly at the GitHub repository root:

```text
Base directory: blank
Build command: blank
Publish directory: site
```

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for deployment, verification and rollback instructions.

## Updating the rate card

Do not edit an archived release in place.

1. Create a new versioned HTML file, for example `KitHubRateCardV4.4.html`.
2. Make and test the changes in that file.
3. Add the approved file to `archive`.
4. Copy the approved file to `site/index.html`.
5. Update `VERSION`, `CHANGELOG.md` and any affected documentation.
6. Commit the release with a clear message.
7. Verify the Netlify deployment.

Full instructions are in [`docs/RELEASE_PROCESS.md`](docs/RELEASE_PROCESS.md).

## Known limitations

- The catalogue, room data and pricing are embedded in the single HTML application.
- Published client-side HTML, CSS, JavaScript and rate data can be inspected by visitors.
- A standard `mailto:` link cannot attach the generated Excel file automatically.
- The Quote Builder requires a later compatibility pass for automatic room-line importing.
- Room opening hours, weekend availability and closure dates remain subject to Kit Hub confirmation.
- The embedded England and Wales bank-holiday and Christmas closure calendar is configured for 2026 to 2028 and must be reviewed annually.

## Ownership and handover

The permanent repository and Netlify project should not depend on one person's private account. Complete the ownership record in [`docs/HANDOVER.md`](docs/HANDOVER.md), retain at least two authorised maintainers where the selected services allow it, and use institutional contact details for recovery and billing.

## Support

Operational enquiries: `thekithub@mdx.ac.uk`
