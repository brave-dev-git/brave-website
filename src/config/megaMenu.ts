export type MegaLink = { label: string; href: string; soon?: boolean };
export type MegaGroup = { title: string; description?: string; links: MegaLink[] };

export const servicesMegaMenu: { label: string; overviewHref: string; groups: MegaGroup[] } = {
  label: "Tjänster",
  overviewHref: "/tjanster",
  groups: [
    {
      title: "Riskhantering",
      overviewHref: "/tjanster/riskhantering",
      description: "Beslut och prioriteringar som håller över tid.",
      links: [
        { label: "Riskworkshop", href: "/tjanster/riskworkshop", soon: false },
        { label: "AI & säkerhet", href: "/ai-sakerhet", soon: false },

      ],
    },
    {
      title: "Cybersäkerhet",
      overviewHref: "/tjanster/cybersakerhet",
      description: "Från nuläge till fungerande säkerhet i praktiken.",
      links: [
        { label: "Säkerhetsmognadsanalys", href: "/tjanster/mognadsanalys", soon: false },
        { label: "Assume breach", href: "/tjanster/assume-breach", soon: false },
        { label: "CISO as a Service ", href: "/tjanster/cisoaas-executive-advisor", soon: false },
        { label: "Cybersäkerhetslagen", href: "/tjanster/cybersakerhetslagen", soon: false },


      ],
    },
    {
      title: "Säkerhetskultur",
      overviewHref: "/tjanster/sakerhetskultur-och-ovning",
      description: "Träna beslut, ansvar och kommunikation..",
      links: [
        { label: "Ledningsutbildning", href: "/tjanster/ledningsutbildning", soon: false },



      ],
    },
  ],
};
