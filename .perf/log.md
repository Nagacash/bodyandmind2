# Performance log — sub-50ms page load

## Test Protocol
- Build: production (`pnpm run build`)
- Server: `pnpm exec next start -p 3000`
- Base URL: http://127.0.0.1:3000
- Cache state: warm (production server, repeated curl requests)
- Tool: `~/.claude/skills/sub-50ms-page-load/scripts/measure-pages.sh`
- Runs per page: 5; record median
- Network: localhost (no throttling)
- Primary metric: curl `time_total` (full HTML response)
- Date: 2026-07-03

## Baseline — 2026-07-03
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

## Final — 2026-07-03
(all pages < 50 ms: **yes**)

Slowest page: `/` at **6.32 ms** median. No code changes required for server HTML delivery budget.

**Note:** This metric measures pre-rendered HTML over localhost. Client-side hydration, JS bundle parse, and image loading are separate from this curl gate. Homepage First Load JS is ~202 kB in build output.
