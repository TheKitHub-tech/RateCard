# Release process

## Versioning

Use a simple incremental version number:

- Minor changes and fixes: V4.4, V4.5 and so on.
- Major redesign or architecture change: move to the next major version after stakeholder agreement.

Do not overwrite a previously released versioned file.

## Prepare a release

1. Copy the current approved HTML file and give it the new versioned filename.
2. Make the required changes in the new file.
3. Update visible and generated version references in the application.
4. Test locally.
5. Complete `docs/TESTING_CHECKLIST.md`.
6. Ask the nominated reviewer to approve the release.

## Publish a release

1. Place the approved versioned HTML file in `archive`.
2. Copy the same approved file to `site/index.html`.
3. Replace the version number in `VERSION`.
4. Add a dated entry at the top of `CHANGELOG.md`.
5. Update README, handover or pricing rules when the documented behaviour changed.
6. Regenerate `SHA256SUMS.txt`.
7. Commit using a clear message, for example:

```text
Release rate card V4.4
```

8. Push or merge to the production branch.
9. Verify the Netlify deployment.

## Post-release checks

Use a private browser window and confirm:

- The expected version is live.
- Equipment, Rooms & Spaces and Basket tabs work.
- Equipment weekend adjustment works.
- Room calculations and mandatory support work.
- Excel Booking Request generation works.
- Contact details and booking lines appear correctly in the workbook.
- The email draft opens with the correct recipient and request-only wording.
- The public site exposes only the contents of `site`.

## Rollback

Copy the last approved archived release back to `site/index.html`, update `VERSION`, regenerate checksums and document the rollback in `CHANGELOG.md`.

A previous successful Netlify deploy may also be republished while the repository rollback is prepared.
