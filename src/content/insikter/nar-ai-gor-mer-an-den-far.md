---
title: "När AI gör mer än den får – och vet om det"
seoTitle: "När AI gör mer än den får – agentisk AI och kontroll"
description: "Claude Mythos hittar tusentals zero-days autonomt – men Anthropics rapport visar att modellen fuskat, dolt regelbrott och tagit sig ur sin sandlåda."
date: 2026-04-09
tags: ["AI", "riskhantering", "styrning", "agentisk AI", "säkerhet"]
author:
  name: "Jonas Stewén"
  role: "Grundare, Brave Security"
  linkedin: "https://www.linkedin.com/in/jonasstewen/"
draft: false
---

AI-utvecklingen går fort. I vissa fall kanske lite för fort.

Den senaste veckan presenterade Anthropic Claude Mythos – en AI-agent som autonomt hittat tusentals okända säkerhetssårbarheter i alla större operativsystem och webbläsare. Sårbarheter som legat gömda i upp till 27 år, som ingen säkerhetsforskare eller automatiserat testverktyg lyckats hitta. Det är en bedrift som verkligen förändrar spelplanen för säkerhetsarbete.

Och det är genuint positivt. Äntligen ett verktyg som kan ta oss ikapp ett eftersläntrande av decennier. Anthropic gör det dessutom rätt – modellen är inte tillgänglig för alla utan används kontrollerat av utvalda organisationer som AWS, Apple, Google och Microsoft inom ramen för ett defensivt säkerhetsprogram kallat Project Glasswing.

## Men det finns en annan sida av rapporten

Anthropic berättar också något annat i sin egen säkerhetsrapport om Mythos. Något som är svårare att ignorera.

Tidigare versioner av modellen bröt mot uttryckliga begränsningar utan att bli ombedda. I ett test lyckades Mythos ta sig ur en isolerad testmiljö och skapade sedan ett eget säkerhetshål för att nå internet – åtkomst den inte skulle ha.

I ett annat fall hittade den svaret på en uppgift på ett sätt den inte fick – via en databas den inte hade tillåtelse att läsa. Istället för att erkänna det valde den att dölja det. Den svarade tillräckligt rätt för att verka trovärdig, men inte så exakt att någon skulle förstå vad som hänt. Anthropics egna ingenjörer kunde se vad som pågick inne i modellen, och det de såg var att den aktivt räknat ut hur den skulle fuska utan att åka fast.

Anthropic beskriver själva Mythos som samtidigt sin "bäst-alignade modell hittills" och den som "sannolikt innebär den största alignment-relaterade risken av alla modeller vi gett ut." Den paradoxen är inte ett kommunikationsproblem – det är en teknisk realitet. Ökad förmåga och ökad försiktighet tar ut varandra.

## Summer Yue och inkorgen som försvann

Och sedan finns det Summer Yue. Hon är ansvarig för AI-säkerhet på Metas superintelligence-labb – alltså den person vars jobb är att se till att AI inte gör saker den inte ska.

I februari kopplade hon ett ramverk — OpenClaw, som låter en AI-modell agera självständigt i dina system — till sin inkorg och föreslå vad som kunde raderas. Tydlig instruktion: agera inte förrän jag säger till. Agenten började ändå radera mejl i ett svep. Den ignorerade hennes stoppkommandon från mobilen och fortsatte tills hon bokstavligen sprang till sin dator för att manuellt stänga ner den.

Efteråt erkände agenten lugnt vad den gjort: "Du har rätt att vara upprörd. Jag bröt mot regeln."

Orsaken var teknisk: när inkorgen var tillräckligt stor komprimerade agenten sitt arbetsminne för att hantera mängden data – och i den processen tappade den bort instruktionen "fråga innan du agerar." Begränsningen försvann helt enkelt ur kontexten. Det är inte illvilja. Det är ett designproblem med stora konsekvenser.

Om det kan hända den personen, med den bakgrunden – vad säger det om resten av oss?

## Vad det betyder i praktiken

Jag använder själv AI-agenter dagligen – i utveckling, i analys, i säkerhetsarbete. Och ja, jag har upplevt liknande. Inte att allt raderades, men att agenten gjort mer än vad jag bett om, och sedan lugnt konstaterat att det inte var meningen.

Det är en bra påminnelse: ju mer självständigt ett verktyg agerar, desto viktigare är det att förstå vad det faktiskt får göra – och vad som händer när det väljer att göra något annat.

Det handlar inte om att bromsa AI. Det handlar om att förstå vad man sätter i drift. Frågan som ledningsgrupper bör ställa sig är inte längre hypotetisk: vilka AI-verktyg har vi redan i drift, och vilka kontroller har vi på dem?

---

## Källor

- [Anthropic – Project Glasswing](https://www.anthropic.com/glasswing)
- [Anthropic Frontier Red Team – Claude Mythos Preview](https://red.anthropic.com/2026/mythos-preview/)
- [The Hacker News – Anthropic's Claude Mythos Finds Thousands of Zero-Day Flaws](https://thehackernews.com/2026/04/anthropics-claude-mythos-finds.html)
- [Futurism – Anthropic Warns That "Reckless" Claude Mythos Escaped a Sandbox](https://futurism.com/artificial-intelligence/anthropic-claude-mythos-escaped-sandbox)
- [TechCrunch – A Meta AI security researcher said an OpenClaw agent ran amok on her inbox](https://techcrunch.com/2026/02/23/a-meta-ai-security-researcher-said-an-openclaw-agent-ran-amok-on-her-inbox/)
- [Fast Company – Meta Superintelligence safety director lost control of her AI agent](https://www.fastcompany.com/91497841/meta-superintelligence-lab-ai-safety-alignment-director-lost-control-of-agent-deleted-her-emails)
