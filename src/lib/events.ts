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
  type: 'webinar' | 'conference' | 'workshop' | 'announcement';
  isFree: boolean;
  featured?: boolean;
  tags?: string[];
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
    title: 'AI-Powered Business Intelligence Summit 2024',
    description: 'Join industry leaders as we explore the future of AI in business intelligence. Discover cutting-edge strategies, real-world case studies, and networking opportunities.',
    date: new Date('2025-03-15T14:00:00Z'),
    endDate: new Date('2025-03-15T17:00:00Z'),
    location: {
      type: 'hybrid',
      address: 'Berlin Convention Center, Germany',
      platform: 'Zoom'
    },
    registration: {
      required: true,
      url: '/contact',
      deadline: new Date('2025-03-10T23:59:59Z'),
      capacity: 500,
      spotsLeft: 87
    },
    type: 'conference',
    isFree: false,
    featured: true,
    tags: ['AI', 'Business Intelligence', 'Strategy'],
    image: '/api/placeholder/400/250',
    cta: {
      text: 'Register Now',
      url: '/contact',
      type: 'register'
    }
  },
  {
    id: '2',
    title: 'Data Security Best Practices Webinar',
    description: 'Learn essential data security practices and compliance requirements. This free webinar covers enterprise-grade security measures and implementation strategies.',
    date: new Date('2025-12-22T10:00:00Z'),
    endDate: new Date('2025-12-22T11:30:00Z'),
    location: {
      type: 'online',
      platform: 'Microsoft Teams'
    },
    registration: {
      required: true,
      url: '/contact',
      capacity: 1000,
      spotsLeft: 234
    },
    type: 'webinar',
    isFree: true,
    tags: ['Security', 'Compliance', 'Best Practices'],
    cta: {
      text: 'Join Webinar',
      url: '/contact',
      type: 'register'
    }
  },
  {
    id: '3',
    title: 'Product Platform Update v3.2 Release',
    description: 'Exciting new features and improvements are coming to our platform. Enhanced AI capabilities, improved user interface, and advanced analytics dashboard.',
    date: new Date('2025-12-01T09:00:00Z'),
    location: {
      type: 'online'
    },
    registration: {
      required: false
    },
    type: 'webinar',
    isFree: true,
    featured: true,
    tags: ['Product Update', 'New Features', 'Platform'],
    cta: {
      text: 'Learn More',
      url: '/functionalities',
      type: 'learn-more'
    }
  },
  {
    id: 'past-1',
    title: 'Digital Transformation Workshop 2023',
    description: 'A comprehensive workshop on digital transformation strategies for modern enterprises.',
    date: new Date('2023-11-15T13:00:00Z'),
    endDate: new Date('2023-11-15T18:00:00Z'),
    location: {
      type: 'onsite',
      address: 'Munich Business Center, Germany'
    },
    registration: {
      required: true,
      url: '/contact'
    },
    type: 'workshop',
    isFree: false,
    tags: ['Digital Transformation', 'Enterprise', 'Strategy']
  },
  {
    id: 'past-2',
    title: 'Q3 Product Roadmap Announcement',
    description: 'Detailed overview of our Q3 product developments and upcoming features.',
    date: new Date('2023-10-05T15:00:00Z'),
    location: {
      type: 'online',
      platform: 'Zoom'
    },
    registration: {
      required: false
    },
    type: 'announcement',
    isFree: true,
    tags: ['Product Roadmap', 'Announcement']
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