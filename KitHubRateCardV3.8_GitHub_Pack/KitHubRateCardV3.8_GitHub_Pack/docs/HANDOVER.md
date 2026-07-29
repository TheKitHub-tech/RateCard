# Handover record

Complete this document before the service becomes permanent and update it whenever ownership changes.

## Service

- Service name: The Kit Hub External Hire Rate Card
- Current release: V3.8
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
5. Update `VERSION` and `CHANGELOG.md`.
6. Commit and deploy.

## Catalogue maintenance

The equipment catalogue and pricing are currently embedded in the HTML JavaScript data. Updating catalogue records requires editing and republishing the HTML application.

Long-term improvement: separate the catalogue data from the interface so authorised staff can update it without editing the complete application.

## Data handling

The current application has no server database or payment processing. Basket contents persist locally in the browser. Request lists are generated locally and sent manually by email.

Any future API, automated email submission or database must be treated as a separate reviewed project phase.

## Known limitations

- `mailto:` cannot attach the generated request list automatically.
- The catalogue is embedded in the HTML file.
- Published client-side code and catalogue data can be inspected by visitors.
- Browser and accessibility testing must be repeated after significant changes.

## Emergency recovery

1. Identify the last approved release in `archive` and `CHANGELOG.md`.
2. Copy that file to `site/index.html`.
3. Commit the rollback.
4. Redeploy or restore the corresponding Netlify deployment.
5. Record the incident and reason for rollback.
