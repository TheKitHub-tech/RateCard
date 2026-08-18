# Quick start: publish V4.30 tomorrow

This guide assumes the existing GitHub repository is already connected to Netlify.

## 1. Unpack the delivery

Extract `Rate_Card.zip`.

Open the extracted `Rate_Card` folder. Upload or copy the **contents inside that folder** into the GitHub repository root.

Do not upload only the ZIP. GitHub will not unpack it automatically.

The repository root should show files such as:

```text
README.md
CHANGELOG.md
VERSION
netlify.toml
site/
archive/
docs/
.github/
```

It should not contain an unnecessary second `Rate_Card/Rate_Card/` layer.

## 2. Commit the release

A suitable commit message is:

```text
Release rate card V4.30
```

Push or merge the change into the Netlify production branch, normally `main`.

## 3. Confirm Netlify settings

- Base directory: blank
- Build command: blank
- Publish directory: `site`
- Production branch: `main`, unless the existing site deliberately uses another branch

The included `netlify.toml` already sets `site` as the publish directory.

## 4. Confirm the live release

After Netlify reports a successful deployment:

1. Open the live site in a private browser window or force-refresh it.
2. Check that the footer says `KitHubRateCardV4.30`.
3. Open Equipment, Rooms & Spaces and Basket.
4. Search for `KJ-103 Jib`. Its description should include the Cartoni Lightweight Tripod.
5. Search for `KPTZ721/100`. It should appear only in the Jib description, not as a separate item.
6. Add one equipment item and one room to the basket.
7. Export the Booking Request and one PDF.
8. Check the site on a phone in portrait orientation.

If the new release fails, republish `archive/KitHubRateCardV4.3.html` as `site/index.html`, or use the earlier successful Netlify deployment while the issue is investigated.
