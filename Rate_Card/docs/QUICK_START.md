# Quick start: review and publish V5.1

This guide assumes the existing GitHub repository is already connected to Netlify.

## 1. Review the delivery

Extract `Kit_Hub_Rate_Card_V5.1_Review.zip`.

The extracted folder mirrors the current GitHub repository and should contain:

```text
HANDOVER.md
README.md
Rate_Card/
data/
```

Do not upload the ZIP itself and do not introduce another nested package-folder layer.

The current live HTML is:

```text
Rate_Card/site/index.html
```

Its release copy is:

```text
Rate_Card/archive/KitHubRateCardV5.1.html
```

Those two files must be byte-for-byte identical. Keep the earlier archive files unchanged.

## 2. Test before committing

From the `Rate_Card` folder, run:

```bash
npm install
npm test
```

Also complete the checks in `docs/TESTING_CHECKLIST.md`, particularly:

- room starts at both `09:00` and `09:30`;
- end times retain complete-hour booking lengths;
- Excel import-template download and re-import;
- Booking Request Excel/PDF export;
- Safari and Chrome on a smaller MacBook screen;
- mobile portrait layout.

## 3. Commit through a release branch

In GitHub Desktop:

1. Fetch and pull the current `main` branch.
2. Create `release/v5.1`.
3. Copy the reviewed files into the matching repository locations.
4. Review every changed file.
5. Commit with `Release rate card V5.1`.
6. Publish the branch and open a Pull Request into `main`.
7. Merge after review.

## 4. Confirm Netlify

The current repository keeps `netlify.toml` inside `Rate_Card/`. Preserve the working Netlify base-directory and publish settings unless the hosting arrangement is deliberately changed.

Expected application settings are:

- Base directory: `Rate_Card`, where configured for the current nested repository structure
- Build command: blank
- Publish directory: `site`
- Production branch: `main`

After deployment:

1. Open the live site in a private window or force-refresh it.
2. Confirm the footer says `KitHubRateCardV5.1`.
3. Open Equipment, Rooms & Spaces and Basket.
4. Download the Excel template and import a small test list.
5. Create a room request beginning at `09:30` and ending at `10:30`.
6. Export a Booking Request and test it in Quote Builder V3.2.
7. Check the site on the intended MacBook and a phone.

## 5. Rollback

If the release fails, restore the last successful Netlify deployment or copy `archive/KitHubRateCardV5.0.html` to `site/index.html`, commit the rollback and redeploy. Never edit an archived release.
