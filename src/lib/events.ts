export interface EventData {
  id: string;
  title: string;
  description: {
    de: string;
    en: string;
  };
  date: Date;
  endDate?: Date;
  location: {
    type: 'online' | 'onsite' | 'hybrid';
    address?: string;
    platform?: string;
  };
  registration: {
    required: boolean;
    url?: string;
    deadline?: Date;
    capacity?: number;
    spotsLeft?: number;
  };
  type: 'webinar' | 'conference' | 'workshop' | 'announcement' | 'exhibition';
  featured?: boolean;
  logo?: string;
  image?: string;
  cta?: {
    text: string;
    url: string;
    type: 'register' | 'learn-more' | 'view-details';
  };
}

// Mock events data - replace with your actual data source
export const eventData: EventData[] = [
  {
    id: '1',
    title: 'Workflow Analytica Berlin',
    description: {
      de: 'Die WorkflowAnalytica ist eine führende Konferenz für Business Process Management (BPM) im deutschsprachigen Raum. Auf der Veranstaltung im Colosseum Berlin treffen sich Expert:innen aus Deutschland, Österreich und der Schweiz, um aktuelle BPM-Trends, Methoden und Tools zu diskutieren mit Vorträgen, interaktiven Sessions und umfangreichen Networking-Gelegenheiten.',
      en: 'WorkflowAnalytica is one of the leading Business Process Management (BPM) conferences in the DACH region. The event in Berlin brings together experts from Germany, Austria, and Switzerland to discuss current BPM trends, automation strategies, data-driven process analysis, and innovative workflow solutions supported by keynote sessions, interactive workshops, and networking opportunities.'
    },
    date: new Date('2025-05-07'),
    endDate: new Date('2025-05-08'),
    location: {
      type: 'onsite',
      address: 'Colosseum, Berlin, Germany',
    },
    registration: {
      required: false,
    },
    type: 'conference',
    featured: true,
    image: '/api/placeholder/400/250'
  },
  {
    id: '2',
    title: 'Wie GenAI und Process Intelligence das Prozessmanagement revolutionieren',
    description: {
      de: 'In diesem Expertenforum geht es darum, wie generative KI (GenAI) und moderne Process-Intelligence-Ansätze das Prozessmanagement verändern können. Themen sind unter anderem: Automatisierung, datengetriebene Prozessanalyse und neue Wege der Prozessoptimierung.',
      en: 'This expert forum explores how Generative AI and Process Intelligence are reshaping modern process management. Key topics include AI-enabled automation, advanced process analytics, and new ways to improve efficiency and decision-making in organizations.'
    },
    date: new Date('2025-09-26'),
    location: {
      type: 'onsite',
      address: 'Berlin, Germany',
    },
    registration: {
      required: true,
    },
    type: 'conference'
  },
  {
    id: '3',
    title: 'Österreich als KI-Standort – Innovationsbooster für Unternehmen?',
    description: {
      de: 'Diese Veranstaltung behandelt Österreichs Potenzial als Standort für Künstliche Intelligenz. Es wird diskutiert, wie Unternehmen durch den Einsatz von KI ihre Innovationskraft stärken und neue Wettbewerbsvorteile gewinnen können.',
      en: 'This event focuses on Austria\'s potential as a competitive AI hub and examines how companies can leverage artificial intelligence to drive innovation. Experts discuss opportunities, regulatory considerations, and strategies for integrating AI into business operations.'
    },
    date: new Date('2025-10-22'),
    location: {
      type: 'onsite',
      address: 'Vienna, Austria',
    },
    registration: {
      required: false
    },
    type: 'conference',
    featured: true
  },
  {
    id: '4',
    title: 'Born Global Launchpad Event Vienna',
    description: {
      de: 'Das Born Global Launchpad Event richtet sich an Start-ups und junge Unternehmen mit globalen Ambitionen. Ziel ist es, Gründer:innen zu unterstützen, internationale Märkte zu erschließen mit Know-how, Vernetzung und Impulsen für internationales Wachstum.',
      en: 'The Born Global Launchpad aims to support globally oriented start-ups and scale-ups. The event offers insights on international market expansion, go-to-market strategies, and global networking opportunities, helping young companies accelerate their international growth.'
    },
    date: new Date('2025-10-28'),
    location: {
      type: 'onsite',
      address: 'Vienna, Austria'
    },
    registration: {
      required: true,
      url: '/contact'
    },
    type: 'conference'
  },
  {
    id: '5',
    title: 'PZM Summit',
    description: {
      de: 'Der PZM Summit bringt Expert:innen und Interessierte aus den Bereichen Prozessmanagement, Digitalisierung und Automatisierung zusammen. Thematisch werden aktuelle Trends, Best Practices und Herausforderungen im professionellen Prozessmanagement diskutiert.',
      en: 'The PZM Summit brings together professionals from process management, digitalization, and automation. The program typically includes discussions on future BPM trends, best practices, implementation challenges, and innovative approaches to managing business processes.'
    },
    date: new Date('2025-11-19'),
    endDate: new Date('2025-11-20'),
    location: {
      type: 'onsite',
      address: 'Vienna, Austria'
    },
    registration: {
      required: false
    },
    type: 'conference'
  },
  {
    id: '6',
    title: 'SPS Smart Production Solution Nürnberg',
    description: {
      de: 'Die SPS ist eine der weltweit führenden Fachmessen für smarte und digitale Automatisierung. Bei der Ausgabe 2025 treffen sich Entscheider:innen, Entwickler:innen und Visionäre der Automatisierungsbranche, um neue Technologien für industrielle Produktion von Sensorik bis KI-gestützter Fertigung zu präsentieren und über die Zukunft der Automatisierung zu diskutieren. Rund 1.150 Aussteller aus aller Welt werden erwartet.',
      en: 'SPS is one of the world\'s premier trade fairs for smart and digital automation. The 2025 edition showcases the full spectrum of modern industrial production technologies, from sensors and control systems to AI-powered manufacturing solutions. It\'s a key meeting point for industry leaders, engineers, and innovators shaping the future of production.'
    },
    date: new Date('2025-11-25'),
    endDate: new Date('2025-11-27'),
    location: {
      type: 'onsite',
      address: 'Nuremberg, Germany'
    },
    registration: {
      required: false
    },
    type: 'exhibition'
  },
  {
    id: '7',
    title: 'Deep Tech Night',
    description: {
      de: 'Die Deep Tech Night ist ein Satellite Event des AsiaBerlin Summit und richtet sich an Deep-Tech-Startups, Investor:innen und Tech-Interessierte. Themenbereiche sind KI, Photonik, Netzwerke, Deep-Tech-Innovation mit Pitches, Networking und Einblicken in zukunftsweisende Technologien.',
      en: 'Deep Tech Night is part of the AsiaBerlin Summit ecosystem and brings together deep-tech startups, investors, and technology enthusiasts. The event highlights innovations in areas such as AI, photonics, robotics, and deep-tech ecosystems, offering pitches, demos, and networking with international stakeholders.'
    },
    date: new Date('2025-11-27'),
    location: {
      type: 'onsite',
      address: 'Berlin, Germany',
    },
    registration: {
      required: false
    },
    type: 'conference'
  },
  {
    id: '8',
    title: 'i2B Pitch Competition',
    description: {
      de: 'Beim i2b Event (organisiert von i2b – ideas to business) werden Businesspläne ausgewertet und ausgezeichnet. Der Wettbewerb richtet sich an Gründer:innen und Start-ups — mit Chancen auf Preise, Feedback und wertvolle Kontakte.',
      en: 'Part of the "ideas to business" (i2b) initiative, this event features Austria\'s major business plan competition. Start-ups and founders present their projects, receive expert feedback, and compete for awards while connecting with investors, partners, and the broader entrepreneurial community.'
    },
    date: new Date('2025-11-17'),
    location: {
      type: 'onsite',
      address: 'WKO, Vienna, Austria',
    },
    registration: {
      required: false
    },
    type: 'conference'
  },
  {
    id: '9',
    title: 'i2B Pitch Competition - Award Ceremony',
    description: {
      de: 'Beim i2b Event (organisiert von i2b – ideas to business) werden Businesspläne ausgewertet und ausgezeichnet. Der Wettbewerb richtet sich an Gründer:innen und Start-ups — mit Chancen auf Preise, Feedback und wertvolle Kontakte. Die Prämierungsgala markiert den Abschluss des Wettbewerbs und bietet den Teilnehmer:innen eine Bühne für ihre Ideen.',
      en: 'Part of the "ideas to business" (i2b) initiative, this event marks the final award ceremony of Austria\'s major business plan competition. Start-ups and founders present their projects, receive expert feedback, and compete for awards while connecting with investors, partners, and the broader entrepreneurial community.'
    },
    date: new Date('2025-12-04'),
    location: {
      type: 'onsite',
      address: 'WKO, Vienna, Austria',
    },
    registration: {
      required: false
    },
    type: 'conference'
  }
];

export const getUpcomingEvents = (): EventData[] => {
  const now = new Date();
  return eventData
    .filter(event => event.date > now)
    .sort((a, b) => a.date.getTime() - b.date.getTime());
};

export const getPastEvents = (): EventData[] => {
  const now = new Date();
  return eventData
    .filter(event => event.date <= now)
    .sort((a, b) => b.date.getTime() - a.date.getTime());
};

export const getFeaturedEvents = (): EventData[] => {
  return getUpcomingEvents().filter(event => event.featured);
};

// Helper function to get event description based on language
export const getEventDescription = (event: EventData, language: 'de' | 'en'): string => {
  return event.description[language];
};