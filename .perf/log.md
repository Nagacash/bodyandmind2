# Performance log — sub-50ms page load

## Test Protocol
- Build: production (`pnpm run build`)
- Server: `pnpm exec next start -p 3000`
- Base URL: http://127.0.0.1:3000
- Cache state: warm (production server, repeated curl requests)
- Tool: `./.perf/measure-pages.sh`
- Runs per page: 5; record median
- Network: localhost (no throttling)
- Primary metric: curl `time_total` (full HTML response; redirects not followed)
- Date: 2026-07-03

## Page inventory (18 URLs)
German default locale: `/`, `/about-me`, `/kontakt`, `/datenschutz`, `/impressum`, `/documentation`, `/agb`, `/privacy`, `/imprint`

English locale: `/en`, `/en/about-me`, `/en/kontakt`, `/en/datenschutz`, `/en/impressum`, `/en/documentation`, `/en/agb`, `/en/privacy`, `/en/imprint`

Note: `/privacy` and `/imprint` (and `/en/*` equivalents) return 308 redirects to `/datenschutz` and `/impressum`; curl measures redirect response only (~0.5 ms).

## Baseline — 2026-07-03 (DE routes only, 9 pages)
(change: none — clean production build)

| Page | Median (ms) | Pass (<50)? |
|------|-------------|-------------|
| / | 6.32 | ✅ |
| /about-me | 2.92 | ✅ |
| /kontakt | 1.85 | ✅ |
| /datenschutz | 2.15 | ✅ |
| /impressum | 1.63 | ✅ |
| /documentation | 2.04 | ✅ |
| /agb | 1.53 | ✅ |
| /privacy | 1.31 | ✅ |
| /imprint | 1.28 | ✅ |

CSV: `.perf/results-baseline.csv`

## Run 2 — 2026-07-03 (full inventory, 18 pages)
(change: expanded `pages.txt` to include all EN routes; re-measured after recent i18n/button/UI changes)

| Page | Median (ms) | Pass (<50)? |
|------|-------------|-------------|
| / | 11.32 | ✅ |
| /about-me | 3.27 | ✅ |
| /kontakt | 3.07 | ✅ |
| /datenschutz | 3.21 | ✅ |
| /impressum | 3.38 | ✅ |
| /documentation | 3.48 | ✅ |
| /agb | 3.07 | ✅ |
| /privacy | 0.49 | ✅ (308 redirect) |
| /imprint | 0.55 | ✅ (308 redirect) |
| /en | 5.99 | ✅ |
| /en/about-me | 3.12 | ✅ |
| /en/kontakt | 2.38 | ✅ |
| /en/datenschutz | 3.61 | ✅ |
| /en/impressum | 3.16 | ✅ |
| /en/documentation | 4.05 | ✅ |
| /en/agb | 2.78 | ✅ |
| /en/privacy | 0.47 | ✅ (308 redirect) |
| /en/imprint | 0.43 | ✅ (308 redirect) |

CSV: `.perf/results-2026-07-03-full.csv`

**Summary:** 18/18 passed. Slowest: `/` at **11.32 ms** median.

## Final — 2026-07-03
(all pages < 50 ms: **yes**)

No server-side HTML optimizations required for the 50 ms budget. All routes are SSG-pre-rendered; middleware adds ~46 kB but does not block static HTML delivery on localhost.

**Separate from this gate:** Homepage First Load JS ~211 kB (client hydration). Track with Lighthouse/Web Vitals if end-user perceived speed becomes a concern.
