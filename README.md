# The Kit Hub External Hire Rate Card

Current public release: **V5**  
Release date: **17 August 2026**

This repository contains the public external-hire rate card for the Kit Hub at Middlesex University London. It is a self-contained browser application published from `site/index.html`.

The site lets prospective clients:

- browse 514 equipment items and 37 rooms and spaces;
- search and filter the catalogues;
- add individual items or one of five equipment packages to a basket;
- use one shared collection/return window across Equipment and Rooms & Spaces;
- receive the special two-day Friday-to-Monday weekend equipment estimate;
- export the complete rate card as Excel or PDF;
- export a selected basket as Excel or PDF;
- create an Excel Booking Request with production/client details;
- prepare an email to the Kit Hub.

It is a **request and estimate tool**, not a live booking system. It does not reserve stock, check availability, take payment or confirm a booking.

## Repository layout

```text
site/                       Netlify publishes this folder
  index.html                Exact live copy of V4.30
archive/                    Immutable release and rollback files
docs/                       Operations, deployment and developer handover
tests/                      Automated browser-logic regression test
docker/                     Optional reproducible Nginx configuration
.github/                    Issue and pull-request templates
CHANGELOG.md                Release history
VERSION                     Current release number
netlify.toml                Netlify publish configuration
SHA256SUMS.txt              Integrity checks for the packaged files
```

Start with [docs/README.md](docs/README.md) for the documentation index. A nontechnical release guide is in [docs/QUICK_START.md](docs/QUICK_START.md), while the central handover is [docs/HANDOVER.md](docs/HANDOVER.md).

## Local preview

No build step is required. Open `site/index.html` directly in a browser, or serve the repository root with a simple local web server.

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/site/`.

## Automated check

Node.js 20 or newer is recommended.

```bash
npm install
npm test
```

The test checks catalogue counts, package references, weekend pricing, room names, collapsible categories, shared booking dates, Excel/PDF generation and the V4.30 Cartoni Jib correction.

## Optional Docker preview

Docker is not required for Netlify, but an optional reproducible static-server setup is included for handover and local testing.

```bash
docker compose up --build
```

Then open `http://localhost:8080`. See [docs/DOCKER.md](docs/DOCKER.md).

## Netlify deployment

The intended settings are:

- Base directory: blank
- Build command: blank
- Publish directory: `site`
- Production branch: `main`

`netlify.toml` already defines the publish directory. A push to the connected production branch should therefore publish `site/index.html` without a build.

## Release safety

- Do not edit `site/index.html` without also creating a new versioned file in `archive/`.
- Do not overwrite an archived release.
- Keep `site/index.html` byte-for-byte identical to the current archived release.
- Only update prices or catalogue data from an approved source.
- Never commit Booking Requests, client details or generated quote files.
- Keep the internal Quote Builder separate from the public Netlify site.

The stable pre-update rollback remains `archive/KitHubRateCardV4.3.html`. The current approved release is `archive/KitHubRateCardV4.30.html`.

## Internal Quote Builder

The current internal tool is **KitHubQuoteBuilderV3.2**. It is not included in this public repository pack. V3.2 has been regression-tested against the current combined Booking Request format, including equipment, rooms, production/client names, collection and return times, weekend pricing and editable PDF reopening. See [docs/QUOTE_BUILDER.md](docs/QUOTE_BUILDER.md).

## Rights and branding

This project was developed for the Kit Hub at Middlesex University London. Middlesex University names, logos and visual identity remain protected institutional assets. No font files are distributed in this repository.
