# Handover record

Complete this document before the service becomes permanent and update it whenever ownership changes.

## Service

- Service name: The Kit Hub External Hire Rate Card
- Current release: V4.3
- Operational mailbox: thekithub@mdx.ac.uk
- Public URL: TO BE COMPLETED
- Repository URL: TO BE COMPLETED
- Netlify project name: TO BE COMPLETED
- Custom domain: TO BE COMPLETED

## Ownership

- Business or service owner: TO BE COMPLETED
- Primary technical maintainer: TO BE COMPLETED
- Secondary technical maintainer: TO BE COMPLETED
- GitHub organisation or owner: TO BE COMPLETED
- Netlify team or owner: TO BE COMPLETED
- Domain and DNS owner: TO BE COMPLETED
- Closure-calendar owner: TO BE COMPLETED
- Billing or procurement contact: TO BE COMPLETED

## Access

Record where access is managed. Do not write passwords, recovery codes or secret keys in this file.

- GitHub access managed by: TO BE COMPLETED
- Netlify access managed by: TO BE COMPLETED
- Recovery email ownership: TO BE COMPLETED
- Multi-factor authentication requirement: TO BE COMPLETED

## Release process

The live application is `site/index.html`. Approved versioned releases are kept in `archive`.

Before release:

1. Create a new versioned file.
2. Complete the testing checklist.
3. Obtain service-owner or technical approval.
4. Copy the approved file to `site/index.html`.
5. Update `VERSION`, `CHANGELOG.md` and affected documentation.
6. Commit and deploy.

## Catalogue and rate maintenance

The equipment catalogue, room catalogue, room rates and operational rules are currently embedded in the HTML JavaScript data. Updating them requires editing, testing and republishing the complete HTML application.

Authoritative source information should be preserved separately in approved operational records. Do not infer or reconstruct listed room package rates from the hourly rate.

Long-term improvement: separate approved catalogue and rate data from the interface so authorised staff can update it through a controlled workflow.

## Current operational rules

- Equipment weekend hire is adjusted to Friday collection and Monday return.
- Room requests use whole-hour times and one shared room booking window.
- Room price tiers are calculated automatically.
- Three named rooms include one mandatory technical-support charge per affected room.
- Bank holidays and the configured Christmas closure period are unavailable for room requests.
- A Booking Request is not a confirmed booking.

See `docs/PRICING_AND_BOOKING_RULES.md` for the detailed implementation rules.

## Data handling

The current application has no server database or payment processing. Basket contents persist in browser session storage. Contact details are not intentionally stored. Booking Request spreadsheets are generated locally and sent manually by email.

Any future API, automated email submission, database, user account or payment system must be treated as a separate reviewed project phase.

## Known limitations

- `mailto:` cannot attach the generated Booking Request automatically.
- The catalogue and rates are embedded in the HTML file.
- Published client-side code and rate data can be inspected by visitors.
- Quote Builder room-line compatibility requires a later update.
- The room closure calendar is configured for 2026 to 2028 and needs annual maintenance.
- Browser and accessibility testing must be repeated after significant changes.

## Emergency recovery

1. Identify the last approved release in `archive` and `CHANGELOG.md`.
2. Copy that file to `site/index.html`.
3. Update `VERSION` if required.
4. Commit the rollback.
5. Redeploy or restore the corresponding Netlify deployment.
6. Record the incident and reason for rollback.
