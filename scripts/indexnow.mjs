const API_KEY = process.env.INDEXNOW_KEY;
const BASE = "https://www.bravesecurity.se";

if (!API_KEY) {
  console.error("Missing INDEXNOW_KEY");
  process.exit(1);
}

const paths = process.argv.slice(2);

if (!paths.length) {
  console.error("No URLs provided");
  process.exit(1);
}

const urls = [...new Set(paths)].map(p =>
  p.startsWith("http") ? p : `${BASE}${p}`
);

const body = {
  host: "www.bravesecurity.se",
  key: API_KEY,
  keyLocation: `${BASE}/${API_KEY}.txt`,
  urlList: urls
};

fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body)
})
  .then(res => {
    console.log("Status:", res.status);
    console.log("Submitted:", urls);
  })
  .catch(err => console.error(err));