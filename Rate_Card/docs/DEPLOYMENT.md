# Deployment

## Recommended operating model

- Store the source and version history in GitHub.
- Publish only the `site` folder through Netlify.
- Keep the Quote Builder as a separate internal local tool.
- Use the Netlify trial address until institutional domain and ownership decisions are approved.

## Clean repository structure

The extracted pack should be uploaded so these items appear directly at the GitHub repository root:

```text
README.md
netlify.toml
site/
archive/
docs/
.github/
```

Do not leave the repository inside an obsolete version-named pack folder.

## Git-linked Netlify deployment

1. Upload the repository contents to GitHub.
2. In Netlify, add or open the project connected to the Git repository.
3. Select the production branch, normally `main`.
4. Leave the build command blank.
5. Leave the base directory blank when the repository has the clean root structure above.
6. Set the publish directory to `site`, or allow `netlify.toml` to provide it.
7. Deploy the project.
8. Confirm that the main address opens the rate card.

Every approved commit to the configured production branch can trigger a new deployment.

## Replacing the earlier nested pack

The original trial repository may contain one or more nested folders with version numbers in their names.

For the clean structure:

1. Upload the contents of the extracted `Rate_Card` folder to the repository root.
2. Confirm the new root-level `site/index.html` is present.
3. Remove the obsolete nested pack folders only after the new files are committed successfully.
4. In Netlify, clear the old Base directory value.
5. Keep the Publish directory as `site`.
6. Trigger a deploy and verify the live site.

## Manual Netlify trial deployment

For a quick demonstration without Git integration:

1. Open the extracted repository pack.
2. Locate the `site` folder.
3. Drag the `site` folder into Netlify's manual deployment area.
4. Use the temporary `netlify.app` address for stakeholder review.

Do not drag the complete repository pack into a manual site deployment. Only the contents of `site` are intended to be public.

## Deployment checks

After every deployment:

- Open the main URL in a private browser window.
- Force-refresh the page to avoid an old cached copy.
- Confirm the expected version appears in the footer.
- Test Equipment, Rooms & Spaces and Basket tabs.
- Add equipment and a room to the basket.
- Test a weekend equipment request.
- Test at least one hourly, half-day and multi-day room request.
- Generate an Excel Booking Request and confirm the filename and contents.
- Start the prepared email and confirm the recipient and wording.
- Confirm no archive, documentation or repository-only file is exposed through the public site URL.

## Rollback

Two rollback routes are available:

1. Revert the release commit in GitHub and allow Netlify to redeploy it.
2. Republish a previous successful deploy from Netlify.

The matching approved HTML file should remain in `archive` so the release can be restored without reconstructing it.

## Production decisions still required

Before treating the service as permanent, record decisions on:

- Institutional GitHub ownership.
- Institutional Netlify ownership.
- At least two authorised maintainers where available.
- Custom Middlesex domain and DNS ownership.
- Technical support and release approval.
- Accessibility and browser support.
- Ownership of annual closure-calendar updates.
- Security, privacy and retention requirements for any future API or database.
