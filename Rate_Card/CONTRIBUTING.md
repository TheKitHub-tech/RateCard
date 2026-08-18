# Contributing

This project uses small, versioned releases so the public site can be rolled back safely.

## Before changing anything

1. Read `docs/HANDOVER.md` and `docs/PRICING_AND_BOOKING_RULES.md`.
2. Confirm that the requested change has operational approval.
3. Use the newest approved pricing or catalogue source.
4. Do not edit an archived release.

## Making a release

1. Copy the current archived HTML to the next versioned filename.
2. Make and test the change in the new file.
3. Add the new versioned file to `archive/`.
4. Copy the exact approved file to `site/index.html`.
5. Update `VERSION`, `CHANGELOG.md`, the README and affected documents.
6. Run `npm test`.
7. Regenerate `SHA256SUMS.txt`.
8. Confirm `site/index.html` and the current archive file are identical.

See `docs/RELEASE_PROCESS.md` for the complete checklist.

## Guardrails

- Refer to the service as **the Kit Hub**.
- Use **Booking Request**, not Request List.
- Do not imply that a request confirms availability or a booking.
- Keep prices exclusive of VAT and clearly indicative.
- Do not alter room or equipment pricing formulas without approval and regression tests.
- Do not apply the equipment weekend rule to rooms.
- Do not add client data or generated files to source control.
- Avoid em dashes in customer-facing copy.
