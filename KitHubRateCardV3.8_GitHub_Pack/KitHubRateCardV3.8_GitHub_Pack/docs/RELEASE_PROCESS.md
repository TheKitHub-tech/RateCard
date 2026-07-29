# Release process

## Versioning

Use a simple incremental version number:

- Patch-style changes and fixes: V3.9, V3.10 and so on.
- Major redesign or architecture change: move to the next major version after stakeholder agreement.

Do not overwrite a previously released versioned file.

## Prepare a release

1. Copy the current approved HTML file and give it the new versioned filename.
2. Make the required changes in the new file.
3. Update any visible version label in the application.
4. Test locally.
5. Complete `docs/TESTING_CHECKLIST.md`.
6. Ask the nominated reviewer to approve the release.

## Publish a release

1. Place the approved versioned HTML file in `archive`.
2. Copy the same approved file to `site/index.html`.
3. Replace the version number in `VERSION`.
4. Add a dated entry to `CHANGELOG.md`.
5. Commit using a clear message, for example:

```text
Release rate card V3.9
```

6. Push or merge to the production branch.
7. Verify the Netlify deployment.

## Post-release check

Use a private browser window and confirm:

- The expected version is live.
- Search and filters work.
- The basket opens on desktop and mobile.
- Excel export works.
- Contact details appear in the workbook.
- The email draft opens with the correct recipient.
- The public site exposes only the contents of `site`.

## Rollback

Copy the last approved archived release back to `site/index.html`, update `VERSION` and document the rollback in `CHANGELOG.md`.
