# Release process

## Prepare

1. Confirm the change and its approval source.
2. Confirm the current release in `VERSION` and the footer of `site/index.html`.
3. Copy the current archived HTML to the next versioned filename.
4. Make all changes in the new versioned file.

## Update

1. Update visible and generated version references in the HTML.
2. Preserve accepted functionality unless the change explicitly replaces it.
3. Update catalogue or prices only from an approved source.
4. Update any affected documentation.
5. Add a clear entry to `CHANGELOG.md`.
6. Update `VERSION` and `package.json`.

## Validate

1. Run `npm install` when dependencies are not already installed.
2. Run `npm test`.
3. Complete `TESTING_CHECKLIST.md` on desktop and mobile portrait.
4. Generate and inspect the Excel Booking Request.
5. Generate and inspect the full rate-card and basket PDFs.
6. When export schemas change, run an end-to-end import through the current internal Quote Builder.
7. Check there are no client files, credentials or temporary exports in the repository.

## Package

1. Place the approved versioned HTML in `archive/`.
2. Copy that exact file to `site/index.html`.
3. Confirm the two files are identical.
4. Regenerate `SHA256SUMS.txt` after every file is final.
5. Build the version-neutral `Rate_Card.zip` with one top-level `Rate_Card/` folder.
6. Extract the ZIP into a temporary location and rerun the package validation.

## Publish

1. Commit with a clear message, for example `Release rate card V4.30`.
2. Push or merge to the production branch.
3. Confirm the Netlify deployment succeeds.
4. Force-refresh or use a private window.
5. Run a short live smoke test.

## Rollback rule

Do not delete or overwrite a previous archived release. GitHub and Netlify history are additional recovery routes, not substitutes for the archive.
