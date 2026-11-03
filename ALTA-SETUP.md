# ALTA Private Equity — installation and content guide

This project is a Next.js website. Run `npm ci`, then `npm run dev` or `npm run build`.

## Editorial pages
- `/insights`: Server-rendered, revalidating Yahoo Finance symbol-specific RSS headlines every 30 minutes; links to originals and attributes feeds. If blocked, a Yahoo Finance fallback is shown. Never remove provider credit. Review provider terms before commercial deployment.
- `/vlogs`: Add actual YouTube IDs and metadata to `src/data/vlogs.ts`. They display in privacy-enhanced YouTube players; no fake sample videos appear.

## Photos and motion
- Hero and secondary image use Unsplash-hosted architecture photos; replace them with properly licensed photos of buildings you can use publicly in `src/app/globals.css`. Current images are thematic visual references, **not ALTA-owned real estate**.
- Scroll parallax is lightweight and respects reduced-motion settings. The supplied ÉTALE reference informed the motion direction; this implementation uses a distinct layout and original code.

## Publishing
Run `INSTALL-ALTA.ps1` from the extracted package in Windows PowerShell. It clones the latest GitHub main, safely overlays modified files, opens VS Code, and prompts before committing/pushing. It never force-pushes. You must have Git, Node.js and VS Code installed and be signed in to GitHub.

## Accuracy
No fabricated AUM, investment returns, exits, asset ownership, or portfolio logos are included. Add factual disclosures and regulatory review if marketing securities, soliciting LPs or offering investment services.
