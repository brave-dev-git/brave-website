export type MegaLink = { label: string; href: string; soon?: boolean };
export type MegaGroup = { title: string; description?: string; links: MegaLink[] };

export const servicesMegaMenu: { label: string; overviewHref: string; groups: MegaGroup[] } = {
  label: "Tjänster",
  overviewHref: "/tjanster",
  groups: [
    {
      title: "Riskhantering",
      overviewHref: "/tjanster/riskhantering",
      description: "Beslut, prioritering och uppföljning över tid.",
      links: [
        { label: "Riskworkshop", href: "/tjanster/riskworkshop", soon: false },
        { label: "AI & säkerhet", href: "/ai-sakerhet", soon: false },
        { label: "Leverantörsrisk", href: "/tjanster/leverantorsrisk", soon: true },
        { label: "Kontinuitet & kris", href: "/tjanster/leverantorsrisk", soon: true },
      ],
    },
    {
      title: "Cybersäkerhet & informationssäkerhet",
      overviewHref: "/tjanster/cybersakerhet",
      description: "Från nuläge till kontroller och genomförande.",
      links: [
        { label: "Säkerhetsmognadsanalys", href: "/tjanster/mognadsanalys", soon: false },
        { label: "Cybersäkerhetslagen", href: "/tjanster/cybersakerhetslagen", soon: false },
        { label: "Detektions- och motståndstest", href: "/tjanster/assume-breach", soon: false },
        { label: "CISOaaS / Executive Advisor ", href: "/tjanster/cisoaas-executive-advisor", soon: false },
        { label: "Extern exponeringsanalys", href: "/tjanster/attackvektor", soon: true },
        { label: "Incidentberedskap", href: "/tjanster/incidentberedskap", soon: true },

      ],
    },
    {
      title: "Säkerhetskultur & övning",
      overviewHref: "/tjanster/sakerhetskultur-och-ovning",
      description: "Träna beslut, roller och kommunikation.",
      links: [
        { label: "Ledningsutbildning", href: "/tjanster/ledningsutbildning", soon: false },
        { label: "Regelverksutbildning", href: "/tjanster/regelverksutbildning", soon: true },
        { label: "Tabletop-övning", href: "/tjanster/tabletop-ovning", soon: true },


      ],
    },
  ],
};
