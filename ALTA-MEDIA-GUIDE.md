# ALTA original-design media add-on

This package **keeps the original white/cyan SEAINT design** found in `altaprivateequity-main (7)(1).zip`. It does not install the prior maritime/skyscraper/cinematic redesign.

## What changed

- Original page components, animation logic, ticker, orbit and overall visual language remain untouched.
- One new `MediaPreview` section is appended **before the existing homepage footer**.
- One new `Journal` dropdown is appended to the existing desktop/mobile navigation in EN/ES.
- `/insights` has your blog, official TradingView News Feed widget and an attributed Google News Business RSS list.
- `/insights/[slug]` displays your published original articles.
- `/vlogs` displays your YouTube videos, manually configured or from a channel RSS feed.
- Sitemap includes both new route roots.
- No new npm dependencies, SQL, API keys or existing stylesheet overrides.

## Publish your own blog posts

Edit `src/content/editorial.ts` using VS Code. A sample post is intentionally a DRAFT, so it is not published as an authentic article without your approval.

1. Edit the draft title, summary and sections in English and Spanish.
2. Change `status: "draft"` to `status: "published"` when the content is approved.
3. Duplicate the entry with a new unique `slug` to add another article.
4. Run `npm run build` and push to GitHub. Articles receive their own URLs at `/insights/your-slug`.

This is Git-managed content, not an online writing dashboard. A Supabase or other CMS can be added later without changing the original visual design.

## Add vlogs

**Manual**: edit `src/content/vlogs.ts`, add the real 11-character YouTube video ID and title to `manualVlogs`.

**Auto latest videos**: in Vercel Project → Settings → Environment Variables set `YOUTUBE_CHANNEL_ID` to the real YouTube channel ID (starts with `UC`, 24 characters total), redeploy. The server attempts YouTube's public Atom feed and caches for ~30 minutes. If YouTube blocks requests or it has no uploads, the gallery shows manually added videos/empty state instead of false results.

## Market feeds

- TradingView: official widget via `https://widgets.tradingview-widget.com/w/en/tv-news-feed.js` (updates on TradingView's side; a browser must allow third-party JavaScript).
- Google News: US Business topic RSS, **headlines only**, source names and links, revalidated approximately every 30 minutes; no full article scraping.
- Feeds may be subject to upstream availability/terms; widget credits and links remain visible. Users open external articles at their original source.

## Installation

Extract the ZIP and run `INSTALL-ALTA-MEDIA.ps1` in PowerShell, or copy the one-paste steps provided alongside the download. Installer validates GitHub origin, backs up the existing commit to a local branch, checks for uncommitted edits and refuses to proceed when unexpected original-design files differ. It never force-pushes. It runs `npm run build` before optionally pushing to main.

**Safety:** If you still have the *previous redesign* locally, the script restores the original commit `2b28dba114328e77881ca5ebd3f36d05ca8a64a8` in a NEW commit first, then adds only this media section. The previous state is preserved in a timestamped backup branch. If the homepage cannot be identified, the script stops.
