# Contributing

This repository supports a controlled internal service-development project for the Kit Hub.

## Before changing the application

- Create an issue or written change note describing the operational need.
- Confirm the current release in `VERSION`.
- Work from the current `site/index.html` or matching release in `archive`.
- Create a new version number for any functional or visible change.
- Confirm whether the change affects equipment, rooms, services, Booking Request export or Quote Builder compatibility.

## Development rules

- Preserve the Middlesex University visual system already used by the application.
- Use Arial for functional interface text and retain the existing display-heading treatment.
- Keep Middlesex red and indigo as the dominant colours.
- Avoid excessive rounded cards, decorative effects and unsupported brand treatments.
- Maintain keyboard access, readable focus states and responsive layouts.
- Use in-page interface dialogs rather than browser-native alert or confirm pop-ups.
- Do not add third-party tracking, analytics, advertising or cookies without institutional approval.
- Do not add secrets, credentials or personal data to client-side code.
- Do not commit generated Booking Requests, client records or correspondence.
- Treat the published spreadsheet rates and approved operational rules as authoritative.

## Required testing

Changes must be tested against the relevant sections of `docs/TESTING_CHECKLIST.md`, including:

- Equipment search, filters and hire calculations.
- Equipment weekend adjustment where relevant.
- Room hourly, half-day and multi-day calculations.
- Mandatory room technical-support charges.
- Shared basket behaviour.
- Excel Booking Request generation.
- Email workflow.
- Desktop and mobile layouts.
- Keyboard and focus behaviour.

## Pull requests

A pull request should state:

- What changed.
- Why it changed.
- Which browsers and screen sizes were tested.
- Which equipment and room calculations were tested.
- Whether Excel export and Quote Builder import were tested.
- Whether data handling changed.
- The proposed new version number.

Use the repository pull request template.

## Approval

A release should not replace `site/index.html` until it has passed the testing checklist and been approved by the nominated Kit Hub service owner or technical reviewer.
