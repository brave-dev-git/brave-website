# SEO-data

Exporterad data från GSC, Bing WMT och Vercel Analytics.
Används som underlag för SEO-analys och uppföljning.

## Namnkonvention

`[källa]-[typ]-[YYYY-MM].csv`

Exempel:
- `gsc-queries-2026-03.csv`
- `gsc-pages-2026-03.csv`
- `gsc-indexing-2026-03.csv`
- `bing-pages-2026-03.csv`
- `bing-crawl-errors-2026-03.csv`
- `vercel-analytics-2026-03.csv`

## Källor

| Källa | Var du exporterar |
|-------|------------------|
| GSC — queries | Performance → Search results → Exportera |
| GSC — pages | Performance → Search results → Pages-flik → Exportera |
| GSC — indexering | Indexing → Pages → exportera via tabellen |
| Bing WMT | Reports → Page Traffic / Crawl information |
| Vercel | Analytics → exportera via dashboarden |
