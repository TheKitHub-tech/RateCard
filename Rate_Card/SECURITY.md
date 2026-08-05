# Security and data handling

## Scope

This application is a static client-side rate card. It does not currently use a database, server-side API, payment service or user account system.

## Never commit

Do not commit any of the following:

- Client names, email addresses or phone numbers.
- Generated Booking Request spreadsheets.
- Booking records, quotations or correspondence.
- Passwords, tokens, API keys or private keys.
- Internal-only University records.
- Unapproved copyrighted product imagery.

Deleting a secret from a later commit does not remove it from Git history. Treat any committed secret as compromised and report it immediately.

## Current browser-data behaviour

- Basket contents are stored in browser session storage so they can survive a page refresh during the current browser session.
- Contact-detail fields are not intentionally stored by the application.
- The Excel Booking Request is generated locally on the user's device.
- The application opens a prepared `mailto:` draft but cannot attach the spreadsheet automatically.
- The application does not intentionally transmit form data to Netlify or another backend.
- The application does not intentionally use cookies, analytics or advertising trackers.

Users on shared computers should clear the basket and close the browser after use.

## Public-code assumption

Even when the GitHub repository is private, the deployed static application's HTML, CSS, JavaScript, catalogue data and room rates are delivered to the visitor's browser and can be inspected. Do not rely on repository privacy to protect anything embedded in the published site.

## Hosting review

Before permanent production launch, the service owner should confirm:

- Institutional ownership of the repository and hosting project.
- Access and recovery arrangements.
- Hosting logs and privacy arrangements.
- Domain and DNS ownership.
- Browser and accessibility expectations.
- Ownership of annual bank-holiday and campus-closure updates.
- Whether a formal privacy or data-protection review is required.

Any future API, automated form submission, database, account system or payment function requires a separate security, GDPR, retention and access-control review.

## Reporting a problem

Report suspected security, privacy or data-handling issues privately to:

`thekithub@mdx.ac.uk`

Do not place personal data, credentials or detailed exploit information in a public GitHub issue.
