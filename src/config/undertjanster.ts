export type Subservice = {
  label: string;
  href: string;
  description?: string;
  soon?: boolean;
};

export type SubserviceBlock = {
  title: string;              // t.ex. "Undertjänster"
  intro?: string;             // kort rad under rubriken
  items: Subservice[];
};

export const cybersakerhetSubservices: SubserviceBlock = {
  title: "Tjänster inom cybersäkerhet",
  intro: "Från nuläge till fungerande säkerhet i praktiken.",
  items: [
    {
      label: "Säkerhetsmognadsanalys",
      href: "/tjanster/mognadsanalys/",
      description: "Nuläge, gap och prioriterad plan."
    },
    {
      label: "Assume breach",
      href: "/tjanster/assume-breach/",
      description: "Praktisk validering av det som verkligen stoppar intrång."
    },
    {
      label: "CISO as a Service",
      href: "/tjanster/ciso-as-a-service/",
      description: "Styrning, prioritering och genomförande över tid."
    },
    {
      label: "NIS2 och cybersäkerhetslagen",
      href: "/tjanster/cybersakerhetslagen/",
      description: "Gap-analys, prioriterad åtgärdsplan och struktur som håller."
    },
  ],
};

export const riskSubservices: SubserviceBlock = {
  title: "Tjänster inom riskhantering",
  intro: "Fokus på beslut och prioriteringar som håller över tid.",
  items: [
    { label: "Riskworkshop", href: "/tjanster/riskworkshop/", description: "Gemensam riskbild och tydliga prioriteringar." },
    { label: "AI & säkerhet", href: "/ai-sakerhet/", description: "Risker, krav och kontroll för AI-användning." },
  ],
};

export const kulturSubservices: SubserviceBlock = {
  title: "Tjänster inom säkerhetskultur",
  intro: "Träna beslut, ansvar och kommunikation – inte bara policy.",
  items: [
    { label: "Ledningsutbildning", href: "/tjanster/ledningsutbildning/", description: "Roller, ansvar och beslutsförmåga i praktiken." },
  ],
};