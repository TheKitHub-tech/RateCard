# The Kit Hub External Hire Rate Card

A browser-based external hire rate card for the Kit Hub at Middlesex University London.

**Current release:** V3.8  
**Status:** Working prototype for stakeholder review and controlled trial use  
**Live application file:** `site/index.html`

## What the tool does

The rate card allows a prospective client to:

- Search and filter the Kit Hub equipment catalogue.
- Choose a hire period using dates or a manual number of days.
- Add equipment and quantities to a basket.
- Enter client and production contact details.
- Generate an Excel request list locally in the browser.
- Open a pre-addressed email to `thekithub@mdx.ac.uk`.

The exported Excel file remains a **Request List** even though the on-screen selection area is called the **Basket**.

## Important limitations

- Prices are indicative and exclusive of VAT.
- The tool does not confirm availability or create a booking.
- The tool does not take payments.
- The website cannot attach the downloaded request list to an email automatically. The user must attach it before sending.
- The tool is a static HTML application. Published HTML, CSS, JavaScript and catalogue data can be inspected by website visitors.
- No credentials, API keys, internal records or confidential information should be added to the application.

## Data and privacy

The application has no database and does not submit client details to a server.

- Request lists are generated on the user's device.
- Client and production fields are used to build the request list and email draft.
- Basket contents are saved in the browser's local storage so the basket can survive a refresh.
- Users on a shared device should clear the basket after use.
- Request list spreadsheets and client information must never be committed to this repository.

See [`SECURITY.md`](SECURITY.md) for the repository rules.

## Repository structure

```text
kit-hub-rate-card/
├── site/
│   └── index.html                 # File published by Netlify
├── archive/
│   └── KitHubRateCardV3.8.html    # Preserved versioned release
├── docs/
│   ├── DEPLOYMENT.md
│   ├── HANDOVER.md
│   ├── RELEASE_PROCESS.md
│   └── TESTING_CHECKLIST.md
├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE.md
├── .gitignore
├── CHANGELOG.md
├── CONTRIBUTING.md
├── NOTICE.md
├── SECURITY.md
├── VERSION
├── netlify.toml
└── README.md
```

The `site` folder is the only folder Netlify publishes. Versioned files in `archive` remain in GitHub but are not placed on the public website.

## Open locally

Open this file in a modern browser:

```text
site/index.html
```

No installation, server or build process is required for normal use.

For the most realistic local test, start a simple local web server from the repository root:

```bash
python3 -m http.server 8000 --directory site
```

Then open:

```text
http://localhost:8000
```

## Upload to GitHub using the website

1. Extract the GitHub pack ZIP.
2. Create a new repository.
3. Choose **Add file**, then **Upload files**.
4. Drag the contents of the extracted `KitHubRateCardV3.8_GitHub_Pack` folder into the upload area.
5. Check that `README.md`, `netlify.toml`, `site` and `archive` appear at the repository root.
6. Commit the upload to `main`.

Do not upload the ZIP itself as the only repository file. GitHub will not unpack it automatically.

## Deploy to Netlify

The repository is already arranged for Netlify. The build command should remain blank and the publish directory is defined as `site` in `netlify.toml`.

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for Git-linked and manual trial deployment instructions.

## Updating the rate card

Do not edit the archived release in place.

1. Create a new versioned HTML file, for example `KitHubRateCardV3.9.html`.
2. Test it using the checklist in `docs/TESTING_CHECKLIST.md`.
3. Add the approved version to `archive`.
4. Copy the approved file to `site/index.html`.
5. Update `VERSION` and `CHANGELOG.md`.
6. Commit the change with a clear message.

Full instructions are in [`docs/RELEASE_PROCESS.md`](docs/RELEASE_PROCESS.md).

## Ownership and handover

The permanent repository and Netlify project should not depend on one person's private account. Complete the ownership record in [`docs/HANDOVER.md`](docs/HANDOVER.md), keep at least two authorised maintainers where the chosen services allow it, and use institutional contact details for recovery and billing.

## Support

Operational enquiries: `thekithub@mdx.ac.uk`
