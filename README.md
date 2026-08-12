# stevens.fyi — Portfolio

Personal portfolio site for [stevens.fyi](https://stevens.fyi).

Plain static HTML/CSS/JS (no framework, no build step) deployed to
**Cloudflare Pages** via GitHub Actions on every push to `main`.

## Structure

```
public/            # Site root — deployed as-is
  index.html       # Single-page portfolio
  styles.css       # Design system (dark, minimal)
  app.js           # Tiny progressive-enhancement script
  404.html
  robots.txt
  favicon.svg
.github/workflows/deploy.yml   # Auto-deploy to Cloudflare Pages
```

## Deploy

Push to `main` → GitHub Actions runs `wrangler pages deploy public`
against the `portfolio` Pages project. Custom domain: `stevens.fyi`.

Repo secrets required:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## Local preview

```bash
python3 -m http.server 8080 --directory public
```
