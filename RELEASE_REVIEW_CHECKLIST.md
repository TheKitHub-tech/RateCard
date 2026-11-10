# V5.1 release review checklist

Prepared: 10 November 2026

This package has not been pushed to GitHub or deployed to Netlify.

## Included changes

- [ ] Room start times may use `:00` or `:30`.
- [ ] Room booking lengths remain in complete hours.
- [ ] Equipment **Advanced options** is now **Import kit list**.
- [ ] A blank Excel equipment-import template can be downloaded.
- [ ] Redundant **THE KIT HUB** labels are removed from the three workspace headings.
- [ ] Smaller MacBook and laptop layouts stack and scroll correctly.
- [ ] TV Studio A shows the approved £1,200 one-day price.

## Release files

- [ ] Root `README.md` identifies V5.1 and the actual repository structure.
- [ ] Root `HANDOVER.md` identifies V5.1 and explains the new Level 1 behaviour.
- [ ] `Rate_Card/README.md`, `CHANGELOG.md` and `VERSION` agree.
- [ ] `package.json` and `package-lock.json` both use `5.1.0`.
- [ ] `Rate_Card/site/index.html` matches `Rate_Card/archive/KitHubRateCardV5.1.html`.
- [ ] Previous archives remain unchanged.
- [ ] Deployment, testing, pricing-rule and Quote Builder notes are updated.

## Manual checks before publication

- [ ] Safari on the intended MacBook screen.
- [ ] Chrome on MacBook and Windows/PC.
- [ ] Mobile portrait.
- [ ] Excel template download and re-import.
- [ ] Booking Request Excel and PDF output.
- [ ] V5.1 Booking Request with a half-hour room start imports into Quote Builder V3.2.
- [ ] Existing Netlify base directory is confirmed before changing any deployment setting.

## Suggested GitHub release

- Branch: `release/v5.1`
- Commit: `Release rate card V5.1`
- Pull Request target: `main`
