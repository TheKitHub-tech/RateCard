# Security and data handling

## Scope

This application is a static client-side rate card. It does not currently use a database, server-side API, payment service or user account system.

## Never commit

Do not commit any of the following:

- Client names, email addresses or phone numbers.
- Generated request list spreadsheets.
- Booking records or correspondence.
- Passwords, tokens, API keys or private keys.
- Internal-only University records.
- Unapproved copyrighted product imagery.

Deleting a secret from a later commit does not remove it from Git history. Treat any committed secret as compromised and report it immediately.

## Current browser data behaviour

- The equipment basket is saved in browser local storage so it can survive a page refresh.
- Contact-detail fields are not intentionally saved to local storage.
- The Excel request list is generated locally on the user's device.
- The application opens a prepared `mailto:` draft but cannot attach the spreadsheet automatically.
- The application does not intentionally transmit form data to Netlify or another backend.

Users on shared computers should clear the basket and close the browser after use.

## Public-code assumption

Even when the GitHub repository is private, the deployed static application's HTML, CSS, JavaScript and catalogue data are delivered to the visitor's browser and can be inspected. Do not rely on repository privacy to protect anything embedded in the published site.

## Hosting review

Before production launch, the service owner should confirm:

- Institutional ownership of the repository and hosting project.
- Access and recovery arrangements.
- Hosting logs and privacy arrangements.
- Domain and DNS ownership.
- Browser and accessibility expectations.
- Whether a privacy notice or formal data-protection review is required.

## Reporting a problem

Report suspected security, privacy or data-handling issues privately to:

`thekithub@mdx.ac.uk`

Do not place personal data, credentials or detailed exploit information in a public GitHub issue.
