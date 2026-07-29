# Contributing

This repository supports a controlled internal service-development project for the Kit Hub.

## Before changing the application

- Create an issue or written change note describing the operational need.
- Confirm the current release in `VERSION`.
- Work from the current `site/index.html` or the matching file in `archive`.
- Create a new version number for any functional or visible change.

## Development rules

- Preserve the Middlesex University visual system already used by the application.
- Use Arial for functional interface text.
- Use the existing display-heading treatment for major headings.
- Keep Middlesex red and indigo as the dominant colours.
- Avoid excessive rounded cards, decorative effects and unsupported brand treatments.
- Maintain keyboard access, readable focus states and responsive layouts.
- Do not add third-party tracking, analytics, advertising or cookies without institutional approval.
- Do not add secrets, credentials or personal data to client-side code.
- Do not commit generated request lists or client records.

## Pull requests

A pull request should state:

- What changed.
- Why it changed.
- Which browsers and screen sizes were tested.
- Whether Excel export and Quote Builder import were tested.
- Whether data handling changed.
- The proposed new version number.

Use the repository pull request template.

## Approval

A release should not replace `site/index.html` until it has passed the testing checklist and been approved by the nominated Kit Hub service owner or technical reviewer.
