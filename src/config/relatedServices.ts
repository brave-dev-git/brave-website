export type RelatedItem = {
  label: string;
  href: string;
  description?: string;
};

export type InsightLink = {
  label: string;
  href: string;
};

export type RelatedBlock = {
  intro?: string;
  items: RelatedItem[];
  insightTags?: string[];   // vilka taggar vi filtrerar på
  insightLimit?: number;    // hur många artiklar vi visar
};

export const relatedServicesByPath: Record<string, { intro?: string; items: RelatedItem[] }> = {
  "/tjanster/mognadsanalys/": {
    intro: "Säkerhetsmognadsanalysen ger nuläge och prioritering. Ofta är nästa steg att verifiera i praktiken och sedan säkra uppföljning över tid.",
    items: [
      { label: "Assume breach", href: "/tjanster/assume-breach/", description: "Verifiera upptäckt och incidentförmåga i praktiken." },
      { label: "CISO as a Service", href: "/tjanster/ciso-as-a-service/", description: "Styrning, prioritering och uppföljning över tid." },
    ],
    insightTags: ["mognadsanalys", "mognad", "styrning", "mätning"],
    insightLimit: 2,
  },

  "/tjanster/assume-breach/": {
    intro: "Resultatet från assume breach ger ett tydligt beslutsunderlag och kan leda det till riktade förbättringsinsatser men också att etablera ett mer sammanhållet och långsiktigt säkerhetsstöd på ledningsnivå.",
    items: [
      { label: "Säkerhetsmognadsanalys", href: "/tjanster/mognadsanalys/", description: "Nuläge, gap och prioriterad roadmap." },
      { label: "CISO as a Service", href: "/tjanster/ciso-as-a-service/", description: "Håll riktning och få saker att hända." },
    ],
    insightTags: ["sårbarhet"],
    insightLimit: 2, 
    

  },

  "/tjanster/ciso-as-a-service/": {
    intro: "Säkerhetsarbetet är en resa utan slutdatum. Här är vanliga nästa hållpunkter – och insikter som hjälper er hålla kurs.",
    items: [
      { label: "Säkerhetsmognadsanalys", href: "/tjanster/mognadsanalys/", description: "Skapa gemensam nulägesbild och plan." },
      { label: "Assume breach", href: "/tjanster/assume-breach/", description: "Validera kontroller och incidentförmåga." },
    ],
    insightTags: ["styrning", "CISO", "ledning"],
    insightLimit: 2,
  },

  "/tjanster/cybersakerhetslagen/": {
    intro: "För många organisationer är säkerhetsmognadsanalys eller gapanalys ett effektivt första steg för att förstå hur väl dagens säkerhetsarbete möter kraven i cybersäkerhetslagen.",
    items: [
      { label: "Säkerhetsmognadsanalys", href: "/tjanster/mognadsanalys/", description: "Prioritera åtgärder utifrån nuläge och gap med en mognadsanalys." },
      { label: "CISO as a Service", href: "/tjanster/ciso-as-a-service/", description: "Få löpande strategiskt stöd genom CISO as a Service." },
    ],
    insightTags: ["NIS2"],
    insightLimit: 2,
},

  "/tjanster/riskworkshop/": {
    intro: "Från riskbild till prioritering och genomförande.",
    items: [
      { label: "Säkerhetsmognadsanalys", href: "/tjanster/mognadsanalys/", description: "Översätt prioritering till roadmap och åtgärder." },
      { label: "CISO as a Service", href: "/tjanster/ciso-as-a-service/", description: "Håll riktning och följ upp över tid." },
    ],
    insightTags: ["AI", "styrning"],
    insightLimit: 2,
  },

  "/ai-sakerhet/": {
    intro: "För många organisationer är nästa steg att koppla AI-arbetet till befintlig säkerhetsstyrning och riskhantering – så att AI inte blir ett parallellt spår utan en del av helheten.",
    items: [
      { label: "Riskworkshop", href: "/tjanster/riskworkshop/", description: "Riskbild och prioritering som håller." },
      { label: "CISO as a Service", href: "/tjanster/ciso-as-a-service/", description: "Stöd för beslutsfattande och uppföljning." },
    ],
    insightTags: ["AI"],
    insightLimit: 2,
  },

  "/tjanster/ledningsutbildning/": {
    intro: "Träning och styrning behöver ofta kombineras.",
    items: [
      { label: "CISO as a Service", href: "/tjanster/ciso-as-a-service/", description: "Stöd för beslutsfattande och uppföljning." },
      { label: "Riskworkshop", href: "/tjanster/riskworkshop/", description: "Gemensam riskbild och prioritering." },
    ],
    insightTags: ["styrning", "ledning"],
    insightLimit: 2,
  },
};