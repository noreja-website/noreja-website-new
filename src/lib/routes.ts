import { Language } from './translations';

// Route mappings for both languages
export const routes = {
  home: {
    de: '/de',
    en: '/en',
  },
  functionalities: {
    de: '/de/plattform',
    en: '/en/platform',
  },
  pricing: {
    de: '/de/preise',
    en: '/en/pricing',
  },
  successStories: {
    de: '/de/success-stories',
    en: '/en/success-stories',
  },
  successStoryDetail: {
    de: '/de/success-story/:companyName',
    en: '/en/success-story/:companyName',
  },
  partners: {
    de: '/de/partner',
    en: '/en/partners',
  },
  team: {
    de: '/de/team',
    en: '/en/team',
  },
  events: {
    de: '/de/veranstaltungen',
    en: '/en/events',
  },
  downloads: {
    de: '/de/downloads',
    en: '/en/downloads',
  },
  downloadThankYou: {
    de: '/de/download-vielen-dank',
    en: '/en/download-thank-you',
  },
  useCases: {
    de: '/de/use-cases/:useCaseName',
    en: '/en/use-cases/:useCaseName',
  },
  contact: {
    de: '/de/kontakt',
    en: '/en/contact',
  },
  imprint: {
    de: '/de/impressum',
    en: '/en/imprint',
  },
  privacy: {
    de: '/de/datenschutz',
    en: '/en/privacy',
  },
  blog: {
    de: '/de/blog',
    en: '/en/blog',
  },
  blogCategory: {
    de: '/de/blog/:category',
    en: '/en/blog/:category',
  },
  terms: {
    de: '/de/nutzungsbedingungen',
    en: '/en/terms',
  },
  maintenance: {
    de: '/maintenance',
    en: '/maintenance',
  },
} as const;

// Reverse mapping: from path to route key
const pathToRouteKey: Record<string, keyof typeof routes> = {
  '/de': 'home',
  '/en': 'home',
  '/de/plattform': 'functionalities',
  '/en/platform': 'functionalities',
  '/de/preise': 'pricing',
  '/en/pricing': 'pricing',
  '/de/success-stories': 'successStories',
  '/en/success-stories': 'successStories',
  '/de/partner': 'partners',
  '/en/partners': 'partners',
  '/de/team': 'team',
  '/en/team': 'team',
  '/de/veranstaltungen': 'events',
  '/en/events': 'events',
  '/de/downloads': 'downloads',
  '/en/downloads': 'downloads',
  '/de/kontakt': 'contact',
  '/en/contact': 'contact',
  '/de/impressum': 'imprint',
  '/en/imprint': 'imprint',
  '/de/datenschutz': 'privacy',
  '/en/privacy': 'privacy',
  '/de/blog': 'blog',
  '/en/blog': 'blog',
  '/de/nutzungsbedingungen': 'terms',
  '/en/terms': 'terms',
  '/de/download-vielen-dank': 'downloadThankYou',
  '/en/download-thank-you': 'downloadThankYou',
  '/maintenance': 'maintenance',
};

/**
 * Extract language from URL pathname
 */
export function getLanguageFromPath(pathname: string): Language {
  if (pathname.startsWith('/de')) {
    return 'de';
  }
  if (pathname.startsWith('/en')) {
    return 'en';
  }
  // Default to German for root and unknown paths
  return 'de';
}

/**
 * Check if pathname has a language prefix
 */
export function isLanguageRoute(pathname: string): boolean {
  return pathname.startsWith('/de/') || pathname.startsWith('/en/') || pathname === '/de' || pathname === '/en';
}

/**
 * Get the route path for a given route key and language
 */
export function getRoutePath(routeKey: keyof typeof routes, lang: Language, params?: Record<string, string>): string {
  const route = routes[routeKey][lang];
  
  if (!params) {
    return route;
  }
  
  // Replace dynamic parameters
  let path = route;
  for (const [key, value] of Object.entries(params)) {
    path = path.replace(`:${key}`, value);
  }
  
  return path;
}

/**
 * Translate current route to target language
 * Preserves dynamic parameters (companyName, category, useCaseName)
 */
export function translateRoute(pathname: string, targetLang: Language): string {
  // Handle root paths
  if (pathname === '/' || pathname === '/de' || pathname === '/en') {
    return routes.home[targetLang];
  }
  
  // Handle maintenance (same for both)
  if (pathname === '/maintenance') {
    return '/maintenance';
  }
  
  // Extract current language
  const currentLang = getLanguageFromPath(pathname);
  
  // If already in target language, return as-is
  if (currentLang === targetLang && isLanguageRoute(pathname)) {
    return pathname;
  }
  
  // Remove language prefix to get base path
  const basePath = pathname.replace(/^\/de|\/en/, '') || '/';
  
  // Handle dynamic routes
  // Success story detail: /de/success-story/:companyName or /en/success-story/:companyName
  const successStoryMatch = pathname.match(/^\/(?:de|en)\/success-story\/(.+)$/);
  if (successStoryMatch) {
    return getRoutePath('successStoryDetail', targetLang, { companyName: successStoryMatch[1] });
  }
  
  // Blog category: /de/blog/:category or /en/blog/:category
  const blogCategoryMatch = pathname.match(/^\/(?:de|en)\/blog\/(.+)$/);
  if (blogCategoryMatch) {
    return getRoutePath('blogCategory', targetLang, { category: blogCategoryMatch[1] });
  }
  
  // Use cases: /de/use-cases/:useCaseName or /en/use-cases/:useCaseName
  const useCaseMatch = pathname.match(/^\/(?:de|en)\/use-cases\/(.+)$/);
  if (useCaseMatch) {
    return getRoutePath('useCases', targetLang, { useCaseName: useCaseMatch[1] });
  }
  
  // Try to find matching route key from base path
  const normalizedPath = basePath === '/' ? '/de' : `/de${basePath}`;
  const routeKey = pathToRouteKey[normalizedPath];
  
  if (routeKey) {
    return routes[routeKey][targetLang];
  }
  
  // Fallback: if we can't translate, return home in target language
  return routes.home[targetLang];
}

/**
 * Get route key from pathname (for internal use)
 */
export function getRouteKeyFromPath(pathname: string): keyof typeof routes | null {
  // Handle root paths
  if (pathname === '/' || pathname === '/de' || pathname === '/en') {
    return 'home';
  }
  
  // Handle maintenance
  if (pathname === '/maintenance') {
    return 'maintenance';
  }
  
  // Remove language prefix
  const basePath = pathname.replace(/^\/de|\/en/, '') || '/';
  const normalizedPath = basePath === '/' ? '/de' : `/de${basePath}`;
  
  // Check for dynamic routes first
  if (pathname.match(/^\/(?:de|en)\/success-story\//)) {
    return 'successStoryDetail';
  }
  if (pathname.match(/^\/(?:de|en)\/blog\//) && pathname.split('/').length > 3) {
    return 'blogCategory';
  }
  if (pathname.match(/^\/(?:de|en)\/use-cases\//)) {
    return 'useCases';
  }
  
  return pathToRouteKey[normalizedPath] || null;
}

