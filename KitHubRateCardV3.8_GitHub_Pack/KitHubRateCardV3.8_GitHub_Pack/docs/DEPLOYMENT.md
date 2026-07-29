# Deployment

## Recommended trial model

- Store the source and version history in GitHub.
- Publish only the `site` folder through Netlify.
- Keep the Quote Builder as a separate internal local tool.
- Use the Netlify trial address until institutional domain and ownership decisions are approved.

## Git-linked Netlify deployment

1. Upload this repository to GitHub.
2. In Netlify, choose to add a project from Git.
3. Select the repository.
4. Leave the build command blank.
5. Netlify should read `netlify.toml` and use `site` as the publish directory.
6. Deploy the project.
7. Check that the main address opens the rate card rather than the repository files.

Every approved change to the configured production branch can then trigger a new deployment.

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
- Test desktop and mobile widths.
- Add an item to the basket.
- Refresh and confirm the basket behaves as expected.
- Generate an Excel request list.
- Confirm the filename and workbook contents.
- Start the prepared email.
- Confirm that no archive, documentation or repository-only file is exposed through the site URL.

## Rollback

For a Git-linked project, revert the release commit or redeploy a known good Netlify deployment.

The matching archived HTML file should always remain in `archive` so the approved release can be restored without reconstructing it.

## Production decisions still required

Before treating the service as permanent, record decisions on:

- Institutional GitHub ownership.
- Institutional Netlify ownership.
- At least two authorised maintainers where available.
- Custom Middlesex domain and DNS ownership.
- Technical support and release approval.
- Accessibility and browser support.
- Security, privacy and retention requirements for any future API or database.
