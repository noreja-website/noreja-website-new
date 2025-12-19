// Dynamically import all partner logos (lazy loading)
const partnerLogoImages = import.meta.glob<{ default: string }>(
  '../assets/partners/*.{png,jpg,jpeg,svg,webp}',
  { eager: false }
);

// Dynamically import all white partner logos (lazy loading)
const partnerLogoImagesWhite = import.meta.glob<{ default: string }>(
  '../assets/partners/partners_white/*.{png,jpg,jpeg,svg,webp}',
  { eager: false }
);

// Dynamically import all partner face photos (lazy loading)
const partnerFaceImages = import.meta.glob<{ default: string }>(
  '../assets/partnerFaces/*.{png,jpg,jpeg}',
  { eager: false }
);

// Dynamically import all customer logos (lazy loading)
const customersLogoImages = import.meta.glob<{ default: string }>(
  '../assets/customers/*.{png,jpg,jpeg,svg,webp}',
  { eager: false }
);

// Dynamically import all other logos (lazy loading)
const otherLogosImages = import.meta.glob<{ default: string }>(
  '../assets/other_logos/*.{png,jpg,jpeg,svg,webp}',
  { eager: false }
);

// Cache for loaded images
const imageCache = new Map<string, string>();

// Helper function to get image path from imports (async)
const getImagePath = async (
  images: Record<string, () => Promise<{ default: string }>>,
  filename: string,
  sourceType?: string
): Promise<string> => {
  if (!filename) return '';
  
  const cacheKey = sourceType ? `${sourceType}-${filename}` : filename;
  
  // Check cache first
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey)!;
  }

  try {
    const entry = Object.entries(images).find(([path]) => 
      path.toLowerCase().includes(filename.toLowerCase())
    );
    
    if (entry) {
      const module = await entry[1]();
      const url = module.default;
      imageCache.set(cacheKey, url);
      return url;
    }
  } catch (error) {
    console.warn(`Failed to load image: ${filename}`, error);
  }
  
  return '';
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

// Base structure with image filenames and source collections
interface PartnerBase {
  id: string;
  name: string;
  isPartner: boolean;
  partnerType: PartnerType;
  logoFilename: string;
  logoSource: 'partners' | 'partners_white' | 'customers' | 'other_logos';
  logoFilenameWhite?: string;
  logoSize: PartnerLogoSize;
  personPhotoFilename?: string;
  website: string;
  category?: PartnerCategory | null;
  quote?: string;
  quoteAuthor?: string;
  linkedin?: string;
  preferOriginalLogo?: boolean;
}

const partnersBase: PartnerBase[] = [
  {
    id: "1",
    name: "Aptean Austria GmbH",
    isPartner: true,
    partnerType: 'businessWithQuote',
    logoFilename: "aptean_logo.svg",
    logoSource: 'partners',
    logoFilenameWhite: "aptean_white.png",
    logoSize: 'medium',
    personPhotoFilename: "markus_neumayr_locker_aptean.jpg",
    website: "https://aptean.de/",
    category: "industry",
    quote: "Mit der Lösung von Noreja können die Geschäftsprozesse unserer ERP-Suite rs2 in wenigen Tagen auf Schwachstellen durchleuchtet werden.\n\nDabei werden selbst komplexe Zusammenhänge in den Daten korrekt abgebildet - ohne dass wir einen Event-Log benötigen.\n\nZudem haben mich die KI-Features beeindruckt, die sehr gut auf Fehlerursachen und Interpretationsunterstützung ausgerichtet sind.",
    quoteAuthor: "Markus Neumayr, General Manager Aptean Austria",
    linkedin: "https://www.linkedin.com/in/markus-neumayr-110a71104/"
  },
  {
    id: "2",
    name: "Miragon GmbH",
    isPartner: true,
    partnerType: 'businessWithQuote',
    logoFilename: "miragon_logo.svg",
    logoSource: 'partners',
    logoFilenameWhite: "miragon_white.png",
    logoSize: 'medium',
    personPhotoFilename: "thomas_heinrichs_miragon.jpeg",
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
    logoFilename: "changeenablers_logo.png",
    logoSource: 'partners',
    logoSize: 'small',
    personPhotoFilename: "niyi_changeenablers.jpg",
    website: "https://changeenablers.net/ce_home.html",
    category: "consulting",
    quote: "Noreja has completely redefined how we think about process intelligence. Unlike traditional tools that depend on complex log data, Noreja's approach requires no logs at all—dramatically reducing setup effort and accelerating our time to market. Within weeks, we were uncovering insights that would have taken months with other solutions.\n\nWhat truly sets Noreja apart is the depth of causal insights it delivers. Powered by cutting-edge AI, the platform doesn't just surface correlations—it helps us understand why things happen, enabling smarter decisions with confidence.\n\nOn top of that, the value for money is outstanding, enabling organizations to accessing enterprise-grade intelligence at a fraction of the usual cost. Noreja has become an indispensable partner in driving efficiency, growth, and innovation.",
    quoteAuthor: "Niyi Ogunbiyi, Co-Founder",
    linkedin: "https://www.linkedin.com/in/niyi-ogunbiyi/"
  },
  {
    id: "4",
    name: "Waits GmbH",
    isPartner: true,
    partnerType: 'businessWithQuote',
    logoFilename: "waits_logo.svg",
    logoSource: 'partners',
    logoFilenameWhite: "waits_white.png",
    logoSize: 'medium',
    personPhotoFilename: "christian_waits.png",
    website: "https://www.waits-gmbh.de/",
    category: "consulting",
    quote: "Die Partnerschaft mit noreja bedeutet uns sehr viel.\nAls CEO der WAITS Software- und Prozessberatungsgesellschaft mbH ist es mir wichtig einen starken Partner an unserer Seite zu wissen, welcher genau wie wir, das Wohlergehen und die Resilienz des Kunden im Fokus hat.\nAuf dieser Basis lässt sich eine langfristige Beziehung untereinander und zu den Kunden aufbauen.",
    quoteAuthor: "Christian M. Mzyk, CEO",
    linkedin: "https://www.linkedin.com/in/christian-m-mzyk-%F0%9F%92%BB-039b7a51/"
  },
  {
    id: "5",
    name: "Nexigo GmbH",
    isPartner: true,
    partnerType: 'businessWithQuote',
    logoFilename: "nexigo_logo.png",
    logoSource: 'partners',
    logoFilenameWhite: "nexigo_white.png",
    logoSize: 'medium',
    personPhotoFilename: "marcel_schober_nexigo.jpeg",
    website: "https://nexigo.io/",
    category: "consulting",
    quote: "Durch diese Partnerschaft schaffen wir eine sehr gute Lösung, die Unternehmen dabei hilft, ihr ERP-System zu optimieren und ihre Prozesse nachhaltig zu verbessern.",
    quoteAuthor: "Marcel Schober, Geschäftsführer",
    linkedin: "https://www.linkedin.com/in/marcel-schober-62b041163/"
  },
  {
    id: "6",
    name: "BOC Products & Services AG",
    isPartner: true,
    partnerType: 'businessWithQuote',
    logoFilename: "BOC-logo-white.png",
    logoSource: 'partners_white',
    logoFilenameWhite: "BOC-logo-white.png",
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
    logoFilename: "vienesse_logo.png",
    logoSource: 'partners',
    logoFilenameWhite: "vienesse_logo_white.svg",
    logoSize: 'medium',
    personPhotoFilename: "robin_lange_vienesse.jpeg",
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
    logoFilename: "schleswiger_logo.svg",
    logoSource: 'partners_white',
    logoFilenameWhite: "schleswiger_white.png",
    logoSize: 'medium',
    personPhotoFilename: "stefan_best_schleswiger.jpeg",
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
    logoFilename: "novofactum_logo.png",
    logoSource: 'partners',
    logoFilenameWhite: "novofactum_white.png",
    logoSize: 'xlarge',
    personPhotoFilename: "christian_riffner_novofactum.jpeg",
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
    logoFilename: "fortlane_white.png",
    logoSource: 'partners_white',
    logoFilenameWhite: "fortlane_white.png",
    logoSize: 'xlarge',
    personPhotoFilename: "Christoph_Blum_fortlane.png",
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
    logoFilename: "",
    logoSource: 'partners',
    logoSize: 'medium',
    personPhotoFilename: "gordana_mcnamara.jpg",
    website: "",
    category: null,
    quote: "Noreja steht für die nächste Generation von Prozessintelligenz. Es ist eine der wenigen Plattformen, die wirklich die Lücke zwischen Daten, Entscheidungen und Wirkung schließt. Durch den Verzicht auf komplexe Logdaten macht Noreja Prozessoptimierung endlich für jedes Unternehmen zugänglich: schnell, intuitiv und erkenntnisgetrieben. Was Noreja wirklich auszeichnet, sind die KI-basierten Kausal-Analysen, die sofort aufzeigen, warum Daten vom Ziel abweichen, und Teams befähigen, mit Klarheit und Geschwindigkeit zu handeln. Für mich ist Noreja nicht nur ein weiteres Process Mining Tool, sondern ein Katalysator dafür, wie moderne Unternehmen lernen, sich anpassen und wachsen.",
    quoteAuthor: "Gordana McNamara, Interims CCO/CRO | Go-to-market Advisor | Noreja Advisory Board Member",
    linkedin: "https://www.linkedin.com/in/gordana-mcnamara/"
  },
  {
    id: "12",
    name: "PwC Österreich GmbH",
    isPartner: true,
    partnerType: 'businessWithoutQuote',
    logoFilename: "pwc_logo-white.png",
    logoSource: 'partners_white',
    logoSize: 'medium',
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
    logoFilename: "humboldt_logo.png",
    logoSource: 'partners',
    logoSize: 'xlarge',
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
    logoFilename: "wu_logo_white.png",
    logoSource: 'partners_white',
    logoSize: 'medium',
    website: "https://www.wu.ac.at/",
    category: "academic",
    quote: "",
    quoteAuthor: "",
    linkedin: "",
  },
  {
    id: "15",
    name: "BRANDL TALOS",
    isPartner: true,
    partnerType: 'businessWithoutQuote',
    logoFilename: "naehrboden_logo.png",
    logoSource: 'partners',
    logoSize: 'medium',
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
    logoFilename: "juzo_logo_white.png",
    logoSource: 'customers',
    logoSize: 'medium',
    personPhotoFilename: "florian_lindermayr_juzo.jpeg",
    website: "https://www.juzo.com/de",
    category: null,
    quote: "Im Proof of Value mit Noreja konnten wir innerhalb weniger Wochen und mit minimalem Aufwand wertvolle Einblicke in unseren Fertigungsprozess sowie das angrenzende Auftragsmanagement auf Basis unseres Oxaion-ERPs gewinnen. Die strukturierte Analyse schuf Transparenz zu Durchlaufzeiten, Prozessstrukturen und potenziellen Verstößen. Im anschließenden Workshop haben wir einige Anwendungsfälle für weitergehende Optimierungen identifiziert, die wir nun weiter evaluieren.",
    quoteAuthor: "Florian Lindermayr, Assistant to the CEO",
    linkedin: "https://www.linkedin.com/in/florian-lindermayr-96a36a1ba/"
  },
  {
    id: "17",
    name: "Zalando SE",
    isPartner: false,
    partnerType: 'advisorWithQuote',
    logoFilename: "zalando_wordmark_white_RGB.png",
    logoSource: 'other_logos',
    logoSize: 'small',
    personPhotoFilename: "steven_knoblich_zalando.jpeg",
    website: "https://corporate.zalando.com/de",
    category: null,
    quote: "Aus meiner Sicht die gegenwärtig beste Lösung für Process Analysten um effizient Prozessanomalien mittels einzigartiger Visualisierung zu identifizieren und geeignete Maßnahmen zu initiieren.",
    quoteAuthor: "Steven Knoblich, Principal Manager",
    linkedin: "https://www.linkedin.com/in/steven-knoblich-72bb53173/"
  },
  {
    id: "18",
    name: "hector GmbH",
    isPartner: false,
    partnerType: 'advisorWithQuote',
    logoFilename: "hector_logo_white.png",
    logoSource: 'customers',
    logoSize: 'small',
    personPhotoFilename: "michael_grasse_hector.jpeg",
    website: "https://www.hector.global/",
    category: null,
    quote: "Mit der Noreja haben wir die Analyse unseres Claim-Management-Prozesses durchgeführt. Wir konnten innerhalb kürzester Zeit die Struktur des Prozesses offenlegen und z.B. Re-Openings bei den Schadenfällen identifizieren, Engpässe aufgrund von verzögerten Rechnungen oder nachträgliche Korrekturen bei den Rückstellungen.",
    quoteAuthor: "Michael Grassée, Geschäftsführer",
    linkedin: "https://www.linkedin.com/in/michael-grass%C3%A9e-bbb7a911/"
  },
  {
    id: "19",
    name: "Fortlane Partners Consulting GmbH",
    isPartner: false,
    partnerType: 'advisorWithQuote',
    logoFilename: "fortlane_white.png",
    logoSource: 'partners_white',
    logoFilenameWhite: "fortlane_white.png",
    logoSize: 'xlarge',
    personPhotoFilename: "pirmin_mutter_fortlane.jpg",
    website: "https://www.fortlane.com/de",
    category: "consulting",
    quote: "Companies overlook the importance of cash. We unlock cashflow potential, improving transparency and financial performance.",
    quoteAuthor: "Pirmin Mutter, Principal",
    linkedin: "https://www.linkedin.com/in/pirmin-mutter/"
  },
  {
    id: "20",
    name: "Kemény Boehme Consultants SE",
    isPartner: false,
    partnerType: 'advisorWithQuote',
    logoFilename: "kbc_white.png",
    logoSource: 'partners_white',
    logoFilenameWhite: "kbc_white.png",
    logoSize: 'xlarge',
    personPhotoFilename: "philipp_berger_kbc.jpg",
    website: "https://kbc-consultants.com/de/",
    category: "consulting",
    quote: "Die Zusammenarbeit mit noreja war von Anfang an unkompliziert und auf Augenhöhe. Wir teilen die gleiche Haltung: pragmatisch vorgehen und den Kundennutzen in den Mittelpunkt stellen. Die Process Mining Suite ist intuitiv zu bedienen und ermöglicht es uns, schnell relevante Potenziale zu identifizieren, um dann die passenden Verbesserungsmaßnahmen zu implementieren.",
    quoteAuthor: "Philipp Berger, Manager | Lead Analytics, BI, AI",
    linkedin: "https://www.linkedin.com/in/philipp-berger-a37707186/"
  },
  {
    id: "21",
    name: "Nord LB",
    isPartner: false,
    partnerType: 'advisorWithQuote',
    logoFilename: "nordlb_logo_white.png",
    logoSource: 'customers',
    logoFilenameWhite: "nordlb_logo_white.png",
    logoSize: 'xlarge',
    personPhotoFilename: "tatjana_meyer_nordlb.jpeg",
    website: "https://www.nordlb.com/",
    category: "consulting",
    quote: "Noreja ermöglicht uns, Process Mining strukturiert und systematisch einzusetzen, um die Ausführung unserer IT-Prozesse in den Zielsystemen – wie ServiceNow – nachhaltig auf ein hohes Qualitätsniveau zu heben.",
    quoteAuthor: "Tatjana Meyer, IT Strategie / Prozesse",
    linkedin: "https://www.linkedin.com/in/tatjana-meyer-992930260/"
  }
];

// Helper to get the correct image collection based on source
const getImageCollection = (source: PartnerBase['logoSource']) => {
  switch (source) {
    case 'partners':
      return partnerLogoImages;
    case 'partners_white':
      return partnerLogoImagesWhite;
    case 'customers':
      return customersLogoImages;
    case 'other_logos':
      return otherLogosImages;
    default:
      return partnerLogoImages;
  }
};

// Async getter that loads images and returns fully populated Partner array
export const getPartners = async (): Promise<Partner[]> => {
  try {
    const imagePromises = partnersBase.map(async (partner) => {
      try {
        const logoUrl = partner.logoFilename 
          ? await getImagePath(getImageCollection(partner.logoSource), partner.logoFilename, partner.logoSource)
          : '';
        
        const logoUrlWhite = partner.logoFilenameWhite
          ? await getImagePath(partnerLogoImagesWhite, partner.logoFilenameWhite, 'partners_white')
          : undefined;
        
        const personPhotoUrl = partner.personPhotoFilename
          ? await getImagePath(partnerFaceImages, partner.personPhotoFilename, 'partnerFaces')
          : undefined;
        
        return {
          id: partner.id,
          name: partner.name,
          isPartner: partner.isPartner,
          partnerType: partner.partnerType,
          logoUrl,
          logoUrlWhite,
          logoSize: partner.logoSize,
          personPhotoUrl,
          website: partner.website,
          category: partner.category,
          quote: partner.quote,
          quoteAuthor: partner.quoteAuthor,
          linkedin: partner.linkedin,
          preferOriginalLogo: partner.preferOriginalLogo
        };
      } catch (error) {
        // If individual partner image loading fails, return partner with empty image URLs
        console.warn(`Failed to load images for partner ${partner.name}:`, error);
        return {
          id: partner.id,
          name: partner.name,
          isPartner: partner.isPartner,
          partnerType: partner.partnerType,
          logoUrl: '',
          logoUrlWhite: undefined,
          logoSize: partner.logoSize,
          personPhotoUrl: undefined,
          website: partner.website,
          category: partner.category,
          quote: partner.quote,
          quoteAuthor: partner.quoteAuthor,
          linkedin: partner.linkedin,
          preferOriginalLogo: partner.preferOriginalLogo
        };
      }
    });
    
    const result = await Promise.all(imagePromises);
    
    // Ensure we always return at least the base partners
    if (result.length === 0) {
      console.warn('getPartners: No partners loaded, returning fallback');
      return partnersBase.map(partner => ({
        id: partner.id,
        name: partner.name,
        isPartner: partner.isPartner,
        partnerType: partner.partnerType,
        logoUrl: '',
        logoUrlWhite: undefined,
        logoSize: partner.logoSize,
        personPhotoUrl: undefined,
        website: partner.website,
        category: partner.category,
        quote: partner.quote,
        quoteAuthor: partner.quoteAuthor,
        linkedin: partner.linkedin,
        preferOriginalLogo: partner.preferOriginalLogo
      }));
    }
    
    return result;
  } catch (error) {
    console.error('Error loading partners:', error);
    // Return partners with empty image URLs as fallback
    return partnersBase.map(partner => ({
      id: partner.id,
      name: partner.name,
      isPartner: partner.isPartner,
      partnerType: partner.partnerType,
      logoUrl: '',
      logoUrlWhite: undefined,
      logoSize: partner.logoSize,
      personPhotoUrl: undefined,
      website: partner.website,
      category: partner.category,
      quote: partner.quote,
      quoteAuthor: partner.quoteAuthor,
      linkedin: partner.linkedin,
      preferOriginalLogo: partner.preferOriginalLogo
    }));
  }
};

// Cache for loaded partners
let partnersCache: Partner[] | null = null;

// Synchronous getter that returns cached data (loads on first access)
export const partners: Partner[] = [];

// Initialize function to load images
let initializationPromise: Promise<void> | null = null;

export const initializePartnersData = async (): Promise<void> => {
  if (initializationPromise) {
    return initializationPromise;
  }
  
  initializationPromise = (async () => {
    try {
      if (!partnersCache) {
        partnersCache = await getPartners();
        
        // Ensure we got partners back
        if (partnersCache.length === 0) {
          console.warn('initializePartnersData: getPartners returned empty array, using fallback');
          partnersCache = partnersBase.map(p => ({
            id: p.id,
            name: p.name,
            isPartner: p.isPartner,
            partnerType: p.partnerType,
            logoUrl: '',
            logoUrlWhite: undefined,
            logoSize: p.logoSize,
            personPhotoUrl: undefined,
            website: p.website,
            category: p.category,
            quote: p.quote,
            quoteAuthor: p.quoteAuthor,
            linkedin: p.linkedin,
            preferOriginalLogo: p.preferOriginalLogo
          }));
        }
        
        partners.length = 0;
        partners.push(...partnersCache);
      }
    } catch (error) {
      console.error('Error initializing partners data:', error);
      // Ensure partners array is populated even on error
      if (partners.length === 0) {
        const fallbackPartners = partnersBase.map(p => ({
          id: p.id,
          name: p.name,
          isPartner: p.isPartner,
          partnerType: p.partnerType,
          logoUrl: '',
          logoUrlWhite: undefined,
          logoSize: p.logoSize,
          personPhotoUrl: undefined,
          website: p.website,
          category: p.category,
          quote: p.quote,
          quoteAuthor: p.quoteAuthor,
          linkedin: p.linkedin,
          preferOriginalLogo: p.preferOriginalLogo
        }));
        partners.length = 0;
        partners.push(...fallbackPartners);
        partnersCache = fallbackPartners;
      }
    }
  })();
  
  return initializationPromise;
};

// Lightweight function that only loads face photos for partners with photos and quotes
// Used by PartnerPhotosGrid to avoid loading all logo images
export const getPartnersForGrid = async (): Promise<Partner[]> => {
  try {
    // Filter to only partners with photos and quotes
    const partnersWithPhotos = partnersBase.filter(
      (partner) =>
        (partner.partnerType === 'businessWithQuote' || partner.partnerType === 'advisorWithQuote') &&
        partner.personPhotoFilename &&
        partner.quote
    );

    // Load face photos and logos (logos needed for modal dialog)
    const imagePromises = partnersWithPhotos.map(async (partner) => {
      try {
        const logoUrl = partner.logoFilename 
          ? await getImagePath(getImageCollection(partner.logoSource), partner.logoFilename, partner.logoSource)
          : '';
        
        const logoUrlWhite = partner.logoFilenameWhite
          ? await getImagePath(partnerLogoImagesWhite, partner.logoFilenameWhite, 'partners_white')
          : undefined;
        
        const personPhotoUrl = partner.personPhotoFilename
          ? await getImagePath(partnerFaceImages, partner.personPhotoFilename, 'partnerFaces')
          : undefined;

        return {
          id: partner.id,
          name: partner.name,
          isPartner: partner.isPartner,
          partnerType: partner.partnerType,
          logoUrl,
          logoUrlWhite,
          logoSize: partner.logoSize,
          personPhotoUrl,
          website: partner.website,
          category: partner.category,
          quote: partner.quote,
          quoteAuthor: partner.quoteAuthor,
          linkedin: partner.linkedin,
          preferOriginalLogo: partner.preferOriginalLogo
        };
      } catch (error) {
        // If individual partner image loading fails, still return partner but without images
        console.warn(`Failed to load images for partner ${partner.name}:`, error);
        return {
          id: partner.id,
          name: partner.name,
          isPartner: partner.isPartner,
          partnerType: partner.partnerType,
          logoUrl: '',
          logoUrlWhite: undefined,
          logoSize: partner.logoSize,
          personPhotoUrl: undefined,
          website: partner.website,
          category: partner.category,
          quote: partner.quote,
          quoteAuthor: partner.quoteAuthor,
          linkedin: partner.linkedin,
          preferOriginalLogo: partner.preferOriginalLogo
        };
      }
    });

    const result = await Promise.all(imagePromises);
    return result;
  } catch (error) {
    console.error('Error loading partners for grid:', error);
    // Return empty array on error - component will handle gracefully
    return [];
  }
};