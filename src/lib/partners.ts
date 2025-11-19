// Dynamically import all partner logos
const partnerLogoImages = import.meta.glob<{ default: string }>(
  '../assets/partners/*.{png,jpg,jpeg,svg,webp}',
  { eager: true }
);

// Dynamically import all white partner logos
const partnerLogoImagesWhite = import.meta.glob<{ default: string }>(
  '../assets/partners/partners_white/*.{png,jpg,jpeg,svg,webp}',
  { eager: true }
);

// Dynamically import all partner face photos
const partnerFaceImages = import.meta.glob<{ default: string }>(
  '../assets/partnerFaces/*.{png,jpg,jpeg}',
  { eager: true }
);

// Dynamically import all customer logos
const customersLogoImages = import.meta.glob<{ default: string }>(
  '../assets/customers/*.{png,jpg,jpeg,svg,webp}',
  { eager: true }
);

// Dynamically import all other logos
const otherLogosImages = import.meta.glob<{ default: string }>(
  '../assets/other_logos/*.{png,jpg,jpeg,svg,webp}',
  { eager: true }
);

// Helper function to get image path from imports
const getImagePath = (
  images: Record<string, { default: string }>,
  filename: string
): string => {
  const entry = Object.entries(images).find(([path]) => 
    path.toLowerCase().includes(filename.toLowerCase())
  );
  return entry ? entry[1].default : '';
};

export type PartnerLogoSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
export type PartnerCategory =
  | 'technology'
  | 'software'
  | 'consulting'
  | 'legal'
  | 'academic'
  | 'insurance'
  | 'incubator'
  | 'advisory'
  | 'industry';

export type PartnerType =
  | 'businessWithQuote'
  | 'businessWithoutQuote'
  | 'advisorWithQuote';

export interface Partner {
  id: string;
  name: string;
  isPartner: boolean;
  partnerType: PartnerType;
  logoUrl: string;
  logoUrlWhite?: string;
  logoSize: PartnerLogoSize;
  personPhotoUrl?: string;
  website: string;
  category?: PartnerCategory | null;
  quote?: string;
  quoteAuthor?: string;
  linkedin?: string;
  /**
   * Force the colored/original logo variant on light backgrounds even when a white version exists.
   */
  preferOriginalLogo?: boolean;
}


export const partners: Partner[] = [
  {
    id: "1",
    name: "Aptean",
    isPartner: true,
    partnerType: 'businessWithQuote',
    logoUrl: getImagePath(partnerLogoImages, "aptean_logo.svg"),
    logoUrlWhite: getImagePath(partnerLogoImagesWhite, "aptean_white.png"),
    logoSize: 'medium',
    personPhotoUrl: getImagePath(partnerFaceImages, "markus_neumayr_locker_aptean.jpg"),
    website: "https://aptean.de/",
    category: "industry",
    quote: "Mit der Lösung von Noreja können die Geschäftsprozesse unserer ERP-Suite rs2 in wenigen Tagen auf Schwachstellen durchleuchtet werden.\n\nDabei werden selbst komplexe Zusammenhänge in den Daten korrekt abgebildet - ohne dass wir einen Event-Log benötigen.\n\nZudem haben mich die KI-Features beeindruckt, die sehr gut auf Fehlerursachen und Interpretationsunterstützung ausgerichtet sind.",
    quoteAuthor: "Markus Neumayr, General Manager Aptean Austria",
    linkedin: "https://www.linkedin.com/in/markus-neumayr-110a71104/"
  },
  {
    id: "2",
    name: "Miragon",
    isPartner: true,
    partnerType: 'businessWithQuote',
    logoUrl: getImagePath(partnerLogoImages, "miragon_logo.svg"),
    logoUrlWhite: getImagePath(partnerLogoImagesWhite, "miragon_white.png"),
    logoSize: 'medium',
    personPhotoUrl: getImagePath(partnerFaceImages, "thomas_heinrichs_miragon.jpeg"),
    website: "https://www.miragon.io/",
    category: "technology",
    quote: "Die Partnerschaft zwischen Miragon und Noreja ist für mich etwas Besonderes.\n\nDie Zusammenarbeit ist auf Augenhöhe, Kommunikation und Verständnis sind außergewöhnlich.\n\nDas Produkt ist technisch ausgereift, bietet einen frischen Ansatz im Process Mining und ist dabei auch erschwinglich. Dadurch können wir unser Automatisierungswissen ideal mit dem Knowhow von Noreja verbinden und so Kunden über den gesamten BPM Lifecycle hinweg ganzheitlich beraten und echten Mehrwert schaffen.",
    quoteAuthor: "Thomas Heinrichs, Growth & Smart Automation Lead",
    linkedin: "https://www.linkedin.com/in/thomas-heinrichs-907b0015a/",
    preferOriginalLogo: true
  },
  {
    id: "3",
    name: "Changeenablers Ltd.",
    isPartner: true,
    partnerType: 'businessWithQuote',
    logoUrl: getImagePath(partnerLogoImages, "changeenablers_logo.png"),
    logoSize: 'small',
    personPhotoUrl: getImagePath(partnerFaceImages, "niyi_changeenablers.jpg"),
    website: "https://changeenablers.net/ce_home.html",
    category: "consulting",
    quote: "Noreja has completely redefined how we think about process intelligence. Unlike traditional tools that depend on complex log data, Noreja's approach requires no logs at all—dramatically reducing setup effort and accelerating our time to market. Within weeks, we were uncovering insights that would have taken months with other solutions.\n\nWhat truly sets Noreja apart is the depth of causal insights it delivers. Powered by cutting-edge AI, the platform doesn't just surface correlations—it helps us understand why things happen, enabling smarter decisions with confidence.\n\nOn top of that, the value for money is outstanding, enabling organizations to accessing enterprise-grade intelligence at a fraction of the usual cost. Noreja has become an indispensable partner in driving efficiency, growth, and innovation.",
    quoteAuthor: "Niyi Ogunbiyi, Co-Founder",
    linkedin: "https://www.linkedin.com/in/niyi-ogunbiyi/"
  },
  {
    id: "4",
    name: "Waits",
    isPartner: true,
    partnerType: 'businessWithQuote',
    logoUrl: getImagePath(partnerLogoImages, "waits_logo.svg"),
    logoUrlWhite: getImagePath(partnerLogoImagesWhite, "waits_white.png"),
    logoSize: 'medium',
    personPhotoUrl: getImagePath(partnerFaceImages, "christian_waits.png"),
    website: "https://www.waits-gmbh.de/",
    category: "consulting",
    quote: "Die Partnerschaft mit noreja bedeutet uns sehr viel.\nAls CEO der WAITS Software- und Prozessberatungsgesellschaft mbH ist es mir wichtig einen starken Partner an unserer Seite zu wissen, welcher genau wie wir, das Wohlergehen und die Resilienz des Kunden im Fokus hat.\nAuf dieser Basis lässt sich eine langfristige Beziehung untereinander und zu den Kunden aufbauen.",
    quoteAuthor: "Christian M. Mzyk, CEO",
    linkedin: "https://www.linkedin.com/in/christian-m-mzyk-%F0%9F%92%BB-039b7a51/"
  },
  {
    id: "5",
    name: "Nexigo",
    isPartner: true,
    partnerType: 'businessWithQuote',
    logoUrl: getImagePath(partnerLogoImages, "nexigo_logo.png"),
    logoUrlWhite: getImagePath(partnerLogoImagesWhite, "nexigo_white.png"),
    logoSize: 'medium',
    personPhotoUrl: getImagePath(partnerFaceImages, "marcel_schober_nexigo.jpeg"),
    website: "https://nexigo.io/",
    category: "consulting",
    quote: "Durch diese Partnerschaft schaffen wir eine sehr gute Lösung, die Unternehmen dabei hilft, ihr ERP-System zu optimieren und ihre Prozesse nachhaltig zu verbessern.",
    quoteAuthor: "Marcel Schober, Geschäftsführer",
    linkedin: "https://www.linkedin.com/in/marcel-schober-62b041163/"
  },
  {
    id: "6",
    name: "BOC",
    isPartner: true,
    partnerType: 'businessWithQuote',
    logoUrl: getImagePath(partnerLogoImagesWhite, "BOC-logo-white.png"),
    logoUrlWhite: getImagePath(partnerLogoImagesWhite, "BOC-logo-white.png"),
    logoSize: 'xsmall',
    website: "https://www.boc-group.com/de",
    category: "technology",
    quote: "TODO.",
    quoteAuthor: "Tobias Rausch, TODO",
    linkedin: "https://www.linkedin.com/in/tobias-rausch-a8091757/"
  },
  {
    id: "7",
    name: "Vienesse Consulting",
    isPartner: true,
    partnerType: 'businessWithQuote',
    logoUrl: getImagePath(partnerLogoImages, "vienesse_logo.png"),
    logoUrlWhite: getImagePath(partnerLogoImagesWhite, "vienesse_logo_white.svg"),
    logoSize: 'medium',
    personPhotoUrl: getImagePath(partnerFaceImages, "robin_lange_vienesse.jpeg"),
    website: "https://vienesse-consulting.com/",
    category: "consulting",
    quote: "Bei Vienesse verbinden wir Beratung und Implementierung, damit aus Zielen messbare Ergebnisse werden. Process Mining verschafft unseren Kunden den nüchternen Blick dank echter Datenflüsse auf reale Prozesse, so reduzieren wir Kosten, erhöhen Qualität und schaffen die Basis für skalierbare Automatisierung. Mit Noreja als zuverlässigen Partner an unserer Seite setzen wir individuelle Anforderungen schnell und pragmatisch um.",
    quoteAuthor: "Robin Lange, Head of Process Science",
    linkedin: "https://www.linkedin.com/in/robin-lge/"
  },
  {
    id: "8",
    name: "Schleswiger Versicherungen",
    isPartner: false,
    partnerType: 'advisorWithQuote',
    logoUrl: getImagePath(partnerLogoImagesWhite, "schleswiger_logo.svg"),
    logoUrlWhite: getImagePath(partnerLogoImagesWhite, "schleswiger_white.png"),
    logoSize: 'medium',
    personPhotoUrl: getImagePath(partnerFaceImages, "stefan_best_schleswiger.jpeg"),
    website: "https://schleswiger.de/",
    category: null,
    quote: "Noreja hat uns dabei geholfen Kern-, Management- und Supportprozesse unseres Versicherungsdienstes aufzunehmen, zu verstehen und abzubilden. \n\n Mit Hilfe von Minerva-AI konnten wir in Rekordgeschwindigkeit aus textbasierter Dokumentation Prozessmodelle generieren.",
    quoteAuthor: "Stephan Best, Gesamtvertriebsleiter & Geschäftsführer",
    linkedin: "https://www.linkedin.com/in/stephan-best/"
  },
  {
    id: "9",
    name: "Novofactum GmbH",
    isPartner: true,
    partnerType: 'advisorWithQuote',
    logoUrl: getImagePath(partnerLogoImages, "novofactum_logo.png"),
    logoUrlWhite: getImagePath(partnerLogoImagesWhite, "novofactum_white.png"),
    logoSize: 'xlarge',
    personPhotoUrl: getImagePath(partnerFaceImages, "christian_riffner_novofactum.jpeg"),
    website: "https://www.novofactum.de/",
    category: "consulting",
    quote: "Mit Noreja können wir Salesforce-basierte Vertriebsprozesse extrem detailliert für unsere Kunden auswerten. Die Lösung arbeitet system-agnostisch und funktioniert auf allen relationalen Datenbanken sowie APIs.\n\nEine Expertenlösung mit enormem Potenzial. Für mich eine notwendige Ergänzung zu klassischen Business Intelligence Tools für jeden Entscheider.",
    quoteAuthor: "Christian Riffner, Geschäftsführer",
    linkedin: "https://www.linkedin.com/in/christian-riffner-0119b233/"
  },
  {
    id: "10",
    name: "Fortlane Partners Consulting GmbH",
    isPartner: true,
    partnerType: 'businessWithQuote',
    logoUrl: getImagePath(partnerLogoImagesWhite, "fortlane_white.png"),
    logoUrlWhite: getImagePath(partnerLogoImagesWhite, "fortlane_white.png"),
    logoSize: 'xlarge',
    personPhotoUrl: getImagePath(partnerFaceImages, "Christoph_Blum_fortlane.png"),
    website: "https://www.fortlane.com/de",
    category: "consulting",
    quote: "Process Mining ist ein Schlüsselfaktor, um strategische Transformationen nicht nur erfolgreich umzusetzen, sondern auch nachhaltig messbar zu machen. Noreja Process Intelligence schafft dabei die notwendige Transparenz, um Fortschritte klar zu quantifizieren und Organisationen nachhaltig leistungsfähiger zu gestalten.",
    quoteAuthor: "Christoph Blum, Principal",
    linkedin: "https://www.linkedin.com/in/christoph-blum/"
  },
  {
    id: "11",
    name: "Gordana McNamara",
    isPartner: false,
    partnerType: 'advisorWithQuote',
    logoUrl: "",
    logoSize: 'medium',
    personPhotoUrl: getImagePath(partnerFaceImages, "gordana_mcnamara.jpg"),
    website: "",
    category: null,
    quote: "Noreja steht für die nächste Generation von Prozessintelligenz. Es ist eine der wenigen Plattformen, die wirklich die Lücke zwischen Daten, Entscheidungen und Wirkung schließt. Durch den Verzicht auf komplexe Logdaten macht Noreja Prozessoptimierung endlich für jedes Unternehmen zugänglich: schnell, intuitiv und erkenntnisgetrieben. Was Noreja wirklich auszeichnet, sind die KI-basierten Kausal-Analysen, die sofort aufzeigen, warum Daten vom Ziel abweichen, und Teams befähigen, mit Klarheit und Geschwindigkeit zu handeln. Für mich ist Noreja nicht nur ein weiteres Process Mining Tool, sondern ein Katalysator dafür, wie moderne Unternehmen lernen, sich anpassen und wachsen.",
    quoteAuthor: "Gordana McNamara, Interims CCO/CRO | Go-to-market Advisor | Noreja Advisory Board Member",
    linkedin: "https://www.linkedin.com/in/gordana-mcnamara/"
  },
  {
    id: "12",
    name: "PwC",
    isPartner: true,
    partnerType: 'businessWithoutQuote',
    logoUrl: getImagePath(partnerLogoImagesWhite, "pwc_logo-white.png"),
    logoSize: 'medium',
    personPhotoUrl: "",
    website: "https://www.pwc.de/de/branchen-und-markte/startups/das-scale-programm.html",
    category: "incubator",
    quote: "",
    quoteAuthor: "",
    linkedin: "",
  },
  {
    id: "13",
    name: "Humboldt-Universität zu Berlin",
    isPartner: true,
    partnerType: 'businessWithoutQuote',
    logoUrl: getImagePath(partnerLogoImages, "humboldt_logo.png"),
    logoSize: 'xlarge',
    personPhotoUrl: "",
    website: "https://www.hu-berlin.de/de",
    category: "academic",
    quote: "",
    quoteAuthor: "",
    linkedin: "",
  },
  {
    id: "14",
    name: "Wirtschaftsuniversität Wien",
    isPartner: true,
    partnerType: 'businessWithoutQuote',
    logoUrl: getImagePath(partnerLogoImagesWhite, "wu_logo_white.png"),
    logoSize: 'medium',
    personPhotoUrl: "",
    website: "https://www.wu.ac.at/",
    category: "academic",
    quote: "",
    quoteAuthor: "",
    linkedin: "",
  },
  {
    id: "15",
    name: "Nährboden",
    isPartner: true,
    partnerType: 'businessWithoutQuote',
    logoUrl: getImagePath(partnerLogoImages, "naehrboden_logo.png"),
    logoSize: 'medium',
    personPhotoUrl: "",
    website: "https://brandltalos.com/kompetenzen/naehrboden/",
    category: "legal",
    quote: "",
    quoteAuthor: "",
    linkedin: "",
  },
  {
    id: "16",
    name: "Julius Zorn GmbH",
    isPartner: false,
    partnerType: 'advisorWithQuote',
    logoUrl: getImagePath(customersLogoImages, "juzo_logo_white.png"),
    logoSize: 'medium',
    personPhotoUrl: getImagePath(partnerFaceImages, "florian_lindermayr_juzo.jpeg"),
    website: "",
    category: null,
    quote: "Im Proof of Value mit Noreja konnten wir innerhalb weniger Wochen und mit minimalem Aufwand wertvolle Einblicke in unseren Fertigungsprozess sowie das angrenzende Auftragsmanagement auf Basis unseres Oxaion-ERPs gewinnen. Die strukturierte Analyse schuf Transparenz zu Durchlaufzeiten, Prozessstrukturen und potenziellen Verstößen. Im anschließenden Workshop haben wir einige Anwendungsfälle für weitergehende Optimierungen identifiziert, die wir nun weiter evaluieren.",
    quoteAuthor: "Florian Lindermayr, Assistant to the CEO",
    linkedin: "https://www.linkedin.com/in/florian-lindermayr-96a36a1ba/"
  },
  {
    id: "17",
    name: "Zalando",
    isPartner: false,
    partnerType: 'advisorWithQuote',
    logoUrl: getImagePath(otherLogosImages, "zalando_wordmark_white_RGB.png"),
    logoSize: 'small',
    personPhotoUrl: getImagePath(partnerFaceImages, "steven_knoblich_zalando.jpeg"),
    website: "",
    category: null,
    quote: "TODO",
    quoteAuthor: "Steven Knoblich, Principal Manager",
    linkedin: "https://www.linkedin.com/in/steven-knoblich-72bb53173/"
  }
];