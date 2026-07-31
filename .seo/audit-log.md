# SEO/GEO Audit Log — 2026-07-03

## Axis scores (iteration 2, post-fix)

| Axis | Score | Notes |
|------|-------|-------|
| Crawlability | **Pass** | robots.txt allows all; sitemap 6 URLs; imprint/privacy 301 → DE routes |
| Indexation | **Pass** | Single canonical per page; /documentation noindex; no conflicting tags |
| Page intent | **OK** | Biography on `/about-me`; legacy `/#UberMich` redirects via client hash map |
| Titles & meta | **Pass** | Unique titles; kontakt title deduplicated; descriptions updated for 2024 titles |
| Internal links | **Pass** | /about-me linked from footer + Über mich section; legal nav fixed |
| Structured data | **Pass** | Organization, WebSite, Person, LocalBusiness, FAQPage, ContactPage present |
| Source citations (GEO) | **Warn** | Presse section links media; no outbound refs on service claims |
| Answer-first (GEO) | **Warn** | Hero + Über mich + /about-me BLUF added; service queries still partial |

## Baseline findings (iteration 1)

- **Critical**: Duplicate canonical on every subpage (`layout.tsx` hardcoded `href="/"` + page metadata)
- **High**: /about-me orphan (sitemap only)
- **High**: /documentation indexed template page
- **High**: Mobile nav pointed to /imprint / /privacy (placeholder + noindex)
- **Medium**: Person schema award stale (2023 only)
- **Medium**: No BLUF on homepage biography targets

## Post-fix crawl

- File: `.seo/crawl-20260703-postfix.json`
- Pages: 6 | Critical: 0 | High: 0
