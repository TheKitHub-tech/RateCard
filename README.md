# The Kit Hub External Hire Rate Card

Current release prepared for review: **V5.1**  
Prepared: **10 November 2026**

## Supporting or taking over the Rate Card?

Start with [HANDOVER.md](HANDOVER.md). It explains the three support levels, current architecture, catalogue maintenance, release process, hosting position and future work.

The deployable application and its detailed technical documentation are inside [Rate_Card](Rate_Card/README.md).

## Repository structure

```text
HANDOVER.md                  Main Level 1, 2 and 3 handover
README.md                    Repository starting point
Rate_Card/                   Deployable application and release files
  site/index.html            Netlify production file
  archive/                   Immutable release and rollback copies
  docs/                      Detailed operations and technical guides
  tests/                     Automated regression test
  CHANGELOG.md               Release history
  VERSION                    Current release number
  netlify.toml               Netlify configuration
data/current-pricing/        Human-readable pricing reference snapshot
```

## Current release identifiers

- Public release label: `V5.1`
- Live and archived file: `KitHubRateCardV5.1.html`
- `VERSION`: `5.1`
- Package version: `5.1.0`

The application is a static HTML estimate and Booking Request tool. It does not reserve equipment, confirm bookings, take payment or store client requests in a website database.

## Deployment

Follow [Rate_Card/docs/QUICK_START.md](Rate_Card/docs/QUICK_START.md). Netlify publishes `Rate_Card/site/` in the current repository structure. Confirm the existing Netlify base-directory setting before changing any hosting configuration.

Do not commit Booking Requests, client details, credentials or security findings.
