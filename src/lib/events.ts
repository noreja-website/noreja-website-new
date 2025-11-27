export interface EventData {
  id: string;
  title: string;
  description: string;
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
    description: 'TODO',
    date: new Date('2025-05-07'),
    endDate: new Date('2025-05-08'),
    location: {
      type: 'onsite',
      address: 'Colloseum, Berlin, Germany',
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
    description: 'TODO',
    date: new Date('2025-09-26'),
    location: {
      type: 'onsite',
      address: 'WU Wien, Vienna, Austria',
    },
    registration: {
      required: true,
    },
    type: 'conference'
  },
  {
    id: '3',
    title: 'Österreich als KI-Standort – Innovationsbooster für Unternehmen?',
    description: 'TODO',
    date: new Date('2025-10-22'),
    location: {
      type: 'online'
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
    description: 'TODO',
    date: new Date('2025-10-28'),
    location: {
      type: 'onsite',
      address: 'Munich Business Center, Germany'
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
    description: 'TODO',
    date: new Date('2025-11-19'),
    endDate: new Date('2025-11-20'),
    location: {
      type: 'online',
      platform: 'Zoom'
    },
    registration: {
      required: false
    },
    type: 'conference'
  },
  {
    id: '6',
    title: 'SPS Smart Production Solution Nürnberg',
    description: 'TODO',
    date: new Date('2025-11-25'),
    endDate: new Date('2025-11-27'),
    location: {
      type: 'onsite',
      address: 'Nürberg, Germany'
    },
    registration: {
      required: false
    },
    type: 'exhibition'
  },
  {
    id: '7',
    title: 'Deep Tech Night',
    description: 'TODO',
    date: new Date('2025-11-27'),
    location: {
      type: 'onsite',
    },
    registration: {
      required: false
    },
    type: 'conference'
  },
  {
    id: '8',
    title: 'i2B Pitch Competition',
    description: 'TODO',
    date: new Date('2025-11-17'),
    location: {
      type: 'onsite',
      address: 'WKO, Wien, Austria',
    },
    registration: {
      required: false
    },
    type: 'conference'
  },
  {
    id: '9',
    title: 'i2B Pitch Competition - Award Ceremony',
    description: 'TODO',
    date: new Date('2025-12-04'),
    location: {
      type: 'onsite',
      address: 'WKO, Wien, Austria',
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