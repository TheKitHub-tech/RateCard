# Optional Docker preview

Docker is included for reproducible handover and local preview. It is not used by the current Netlify deployment.

## Start

From the repository root:

```bash
docker compose up --build
```

Open `http://localhost:8080`.

## Stop

```bash
docker compose down
```

## What it contains

The image uses a fixed Nginx Alpine base and copies only the public `site/` folder. Archive files, documentation, tests and local dependencies are excluded from the image.

The container adds the same basic no-cache, content-type, referrer and browser-permission headers used by the static deployment configuration.

## Release behaviour

Rebuild the image after changing `site/index.html`. Docker does not replace the normal GitHub and Netlify release process.
