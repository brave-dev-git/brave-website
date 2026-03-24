---
description: Skapa ny insiktsartikel från bifogad text
argument-hint: [artikeltext]
allowed-tools: Read, Write, Glob, Grep
---

Skapa en ny insiktsartikel för bravesecurity.se baserat på texten nedan (eller den text användaren bifogat i konversationen).

## Artikeltext

$ARGUMENTS

---

## Instruktioner

**Steg 1 – Läs kontexten**

Läs dessa två filer för att förstå format och vilka taggar som ger relaterade tjänster:

- `src/content/insikter/nis2-som-marknadsstandard.md` — referensformat för frontmatter
- `src/pages/insikter/[...slug].astro` — `tagToService`-mappningen (rad 44–61), visar exakt vilka taggar som genererar relaterade tjänster-länkar

**Steg 2 – Analysera texten**

Utifrån artikelinnehållet, bestäm:

- **title**: Exakt som i texten
- **seoTitle**: SEO-optimerad variant, max ~65 tecken. Inkludera **inte** "– Brave Security" — det läggs till automatiskt av mallen
- **description**: 1–2 meningar som sammanfattar kärnan, max ~155 tecken
- **slug**: Kebab-case från titeln, svenska tecken → `a`, `o`, `a` (å→a, ä→a, ö→o), max ~60 tecken
- **date**: Dagens datum (se `currentDate` i systemkontexten)
- **tags**: Välj 4–7 taggar. Prioritera taggar som finns i `tagToService`-mappningen för att generera rätt relaterade tjänster. Komplettera med ämnesrelevanta taggar för framtida sökbarhet.
- **draft**: false

**Steg 3 – Formatera innehållet**

- Behåll artikelns rubriker och styckeindelning exakt
- Konvertera fet text (t.ex. "**Govern** —") till markdown-bold
- Lägg till en blank rad efter varje `**Rubrik** — text`-rad om den har löptext direkt efter
- Inget extra innehåll får läggas till

**Steg 4 – Skapa filen**

Skapa `src/content/insikter/<slug>.md` med korrekt frontmatter och formaterat innehåll.

**Steg 5 – Bekräfta**

Visa:
- Filsökvägen som skapades
- De valda taggarna och vilka tjänster de mappar till (från `tagToService`)
- Om någon tagg saknar mappning (potentiell förbättring av `tagToService`)
