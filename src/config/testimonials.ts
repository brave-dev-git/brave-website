export type Testimonial = {
  quote: string;
  role: string;
  company?: string;
  context?: string;
  services?: string[];
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Det var en ögonöppnare att se vad en angripare faktiskt kan göra inifrån. Vi fick en helt annan förståelse för våra verkliga risker.",
    role: "VD",
    company: "Svenskt data intelligence bolag",
    context:
      "Brave Security hjälpte oss att förstå hur vi faktiskt står emot en angripare som redan tagit sig in i vår miljö. Genom att simulera verkliga angrepp kunde vi identifiera och åtgärda kritiska sårbarheter som annars hade varit svåra att upptäcka.",
    services: ["assume-breach"],
  },
  {
    quote:
      "Det som hjälpt oss mest är att få förankring och struktur i organisationen som gjort det möjligt att arbeta med säkerhet på riktigt.",
    role: "CIO",
    company: "Svensk skogsindustri",
    context:
      "Brave Security hjälpte oss att etablera en tydlig struktur för vårt cybersäkerhetsarbete – från mission och vision till konkreta mål och årliga planer. Arbetet har skapat en stabil grund för att systematiskt höja vår mognad och motståndskraft.",
    services: ["ciso-as-a-service"],
  },
   {
    quote:
      "Vi fick en objektiv bild av vår säkerhetsmognad – och ett tydligt beslutsunderlag för vad vi skulle prioritera. Vi använder det löpande för att säkerställa att vi är på rätt väg.",
    role: "CDIO",
    company: "Internationell industrikoncern",
    context:
      "Brave Security hjälpte oss att etablera en tydlig struktur för vårt cybersäkerhetsarbete – från mission och vision till konkreta mål och årliga planer. Arbetet har skapat en stabil grund för att systematiskt höja vår mognad och motståndskraft.",
    services: ["mognadsanalys"],
  },
];
