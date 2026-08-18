# Deployment

## Current architecture

The public rate card is one self-contained static HTML file. It has no server, database, build process or environment variables.

GitHub provides source control, version history and release documentation. Netlify publishes the contents of `site/`.

## Required repository structure

```text
repository root/
  netlify.toml
  site/
    index.html
  archive/
    KitHubRateCardV4.3.html
    KitHubRateCardV4.30.html
```

`site/index.html` must be byte-for-byte identical to the current archived release.

## Netlify settings

- Base directory: blank
- Build command: blank
- Publish directory: `site`
- Production branch: normally `main`

Do not point Netlify at `archive/`, the repository root or an old nested pack directory.

## Deployment flow

1. Complete the release checklist.
2. Commit the repository contents to GitHub.
3. Push or merge to the production branch.
4. Wait for the connected Netlify site to deploy.
5. Confirm the footer version and run the live smoke test.

## Rollback

Preferred rollback options:

1. Restore the last successful Netlify deployment.
2. Copy the required archived release to `site/index.html`, commit and redeploy.
3. Revert the release commit in GitHub.

Never edit the archived rollback file while performing a rollback.

## Ownership information still required

The institution should formally record:

- GitHub repository owner and administrators;
- Netlify site owner and administrators;
- production branch and approval process;
- live URL and any official MDX domain/DNS owner;
- release approver;
- named backup owner;
- recovery procedure if the current maintainer is unavailable.

Do not place credentials in this document or repository.
