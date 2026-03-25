import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const API_KEY = process.env.BING_API_KEY;
const SITE_URL = "https://www.bravesecurity.se";
const BASE = "https://ssl.bing.com/webmaster/api.svc/json";
const OUT_DIR = "docs/seo-data";

if (!API_KEY) {
  console.error("Missing BING_API_KEY");
  process.exit(1);
}

function parseDate(d) {
  const ms = parseInt(d.replace(/\/Date\((\d+)[^)]*\)\//, "$1"));
  return new Date(ms).toISOString().split("T")[0];
}

function toCSV(rows, headers) {
  const lines = [headers.join(",")];
  for (const row of rows) {
    lines.push(headers.map(h => {
      const val = row[h] ?? "";
      return String(val).includes(",") ? `"${val}"` : val;
    }).join(","));
  }
  return lines.join("\n");
}

function saveCSV(filename, rows, headers) {
  mkdirSync(OUT_DIR, { recursive: true });
  const path = join(OUT_DIR, filename);
  writeFileSync(path, toCSV(rows, headers), "utf-8");
  console.log(`  Sparad: ${path} (${rows.length} rader)`);
}

async function bingGet(endpoint, params = {}) {
  const url = new URL(`${BASE}/${endpoint}`);
  url.searchParams.set("apikey", API_KEY);
  url.searchParams.set("siteUrl", SITE_URL);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${endpoint} → HTTP ${res.status}`);
  const data = await res.json();
  return data.d ?? data;
}

const month = new Date().toISOString().slice(0, 7); // YYYY-MM

// Page traffic
console.log("Hämtar page traffic...");
const pages = await bingGet("GetPageStats").catch(e => { console.error(e.message); return null; });
if (pages?.length) {
  const rows = pages.map(p => ({
    Date: parseDate(p.Date),
    Url: p.Query,
    Clicks: p.Clicks,
    Impressions: p.Impressions,
    AvgClickPosition: p.AvgClickPosition,
    AvgImpressionPosition: p.AvgImpressionPosition,
  }));
  saveCSV(`bing-pages-${month}.csv`, rows, ["Date", "Url", "Clicks", "Impressions", "AvgClickPosition", "AvgImpressionPosition"]);
}

// Crawl stats
console.log("Hämtar crawl stats...");
const crawl = await bingGet("GetCrawlStats").catch(e => { console.error(e.message); return null; });
if (crawl?.length) {
  const rows = crawl.map(c => ({
    Date: parseDate(c.Date),
    CrawledPages: c.CrawledPages,
    InIndex: c.InIndex,
    CrawlErrors: c.CrawlErrors,
    Code2xx: c.Code2xx,
    Code4xx: c.Code4xx,
    Code5xx: c.Code5xx,
    BlockedByRobotsTxt: c.BlockedByRobotsTxt,
    AllOtherCodes: c.AllOtherCodes,
  }));
  saveCSV(`bing-crawl-${month}.csv`, rows, ["Date", "CrawledPages", "InIndex", "CrawlErrors", "Code2xx", "Code4xx", "Code5xx", "BlockedByRobotsTxt", "AllOtherCodes"]);

  const errors = rows.filter(r => r.CrawlErrors > 0);
  if (errors.length) {
    console.log(`\n⚠ CrawlErrors hittades på ${errors.length} datum:`);
    errors.forEach(r => console.log(`  ${r.Date}: ${r.CrawlErrors} fel`));
  }
}

// Query stats (söktermer)
console.log("\nHämtar query stats...");
const queries = await bingGet("GetQueryStats").catch(e => { console.error(e.message); return null; });
if (queries?.length) {
  const rows = queries.map(q => ({
    Date: parseDate(q.Date),
    Query: q.Query,
    Clicks: q.Clicks,
    Impressions: q.Impressions,
    AvgClickPosition: q.AvgClickPosition,
    AvgImpressionPosition: q.AvgImpressionPosition,
  }));
  saveCSV(`bing-queries-${month}.csv`, rows, ["Date", "Query", "Clicks", "Impressions", "AvgClickPosition", "AvgImpressionPosition"]);
}

console.log("\nKlart.");
