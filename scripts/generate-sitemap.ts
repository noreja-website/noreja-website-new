import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream, readFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import config (simple import, no dynamic globs)
import { SITE_URL } from '../src/lib/config';

// Read and parse TypeScript files to extract IDs
function extractSuccessStoryIds(): string[] {
  const filePath = resolve(__dirname, '../src/lib/successStories.ts');
  const content = readFileSync(filePath, 'utf-8');
  const ids: string[] = [];
  
  // Extract id from export const successStories array (only top-level objects)
  // Match the array content and extract ids from objects that have companyName field
  const arrayMatch = content.match(/export const successStories: SuccessStory\[\] = \[([\s\S]*?)\];/);
  if (arrayMatch) {
    const arrayContent = arrayMatch[1];
    // Match objects that start with { and have id followed by companyName (to ensure it's a top-level story object)
    const storyMatches = arrayContent.matchAll(/\{\s*id:\s*"([^"]+)"[\s\S]*?companyName:/g);
    for (const match of storyMatches) {
      ids.push(match[1]);
    }
  }
  
  return ids;
}

function extractUseCaseIds(): string[] {
  const filePath = resolve(__dirname, '../src/lib/useCases.ts');
  const content = readFileSync(filePath, 'utf-8');
  const useCaseIds: string[] = [];
  
  // Extract id from export const useCases array (only top-level objects, not nested additionalUseCases)
  // Match the array content and extract ids from objects that have title field (to ensure it's a top-level use case)
  const arrayMatch = content.match(/export const useCases: UseCase\[\] = \[([\s\S]*?)\];/);
  if (arrayMatch) {
    const arrayContent = arrayMatch[1];
    // Match objects that start with { and have id followed by title (to ensure it's a top-level use case object)
    const useCaseMatches = arrayContent.matchAll(/\{\s*id:\s*"([^"]+)"[\s\S]*?title:\s*\{/g);
    for (const match of useCaseMatches) {
      useCaseIds.push(match[1]);
    }
  }
  
  return useCaseIds;
}

// Blog categories
const blogCategories = ['innovation', 'technical', 'analysis', 'case-studies'];

interface SitemapEntry {
  url: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  lastmod?: Date;
}

function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: SITE_URL });
  const entries: SitemapEntry[] = [];

  // Helper function to add entry
  const addEntry = (path: string, priority: number, changefreq: SitemapEntry['changefreq']) => {
    entries.push({
      url: `${SITE_URL}${path}`,
      changefreq,
      priority,
      lastmod: new Date(),
    });
  };

  // Home pages (highest priority)
  addEntry('/de', 1.0, 'daily');
  addEntry('/en', 1.0, 'daily');

  // Main pages (high priority)
  addEntry('/de/plattform', 0.9, 'weekly');
  addEntry('/en/platform', 0.9, 'weekly');
  addEntry('/de/preise', 0.9, 'weekly');
  addEntry('/en/pricing', 0.9, 'weekly');
  addEntry('/de/success-stories', 0.9, 'weekly');
  addEntry('/en/success-stories', 0.9, 'weekly');
  addEntry('/de/partner', 0.8, 'weekly');
  addEntry('/en/partners', 0.8, 'weekly');
  addEntry('/de/team', 0.8, 'weekly');
  addEntry('/en/team', 0.8, 'weekly');
  addEntry('/de/veranstaltungen', 0.8, 'weekly');
  addEntry('/en/events', 0.8, 'weekly');
  addEntry('/de/downloads', 0.8, 'weekly');
  addEntry('/en/downloads', 0.8, 'weekly');
  addEntry('/de/kontakt', 0.8, 'weekly');
  addEntry('/en/contact', 0.8, 'weekly');
  addEntry('/de/blog', 0.8, 'weekly');
  addEntry('/en/blog', 0.8, 'weekly');

  // Legal pages (lower priority)
  addEntry('/de/impressum', 0.5, 'monthly');
  addEntry('/en/imprint', 0.5, 'monthly');
  addEntry('/de/datenschutz', 0.5, 'monthly');
  addEntry('/en/privacy', 0.5, 'monthly');
  addEntry('/de/nutzungsbedingungen', 0.5, 'monthly');
  addEntry('/en/terms', 0.5, 'monthly');

  // Success Story detail pages (using id, not companyName)
  const successStoryIds = extractSuccessStoryIds();
  successStoryIds.forEach((storyId) => {
    addEntry(`/de/success-story/${storyId}`, 0.7, 'monthly');
    addEntry(`/en/success-story/${storyId}`, 0.7, 'monthly');
  });

  // Use Case detail pages
  const useCaseIds = extractUseCaseIds();
  useCaseIds.forEach((useCaseId) => {
    addEntry(`/de/use-cases/${useCaseId}`, 0.7, 'monthly');
    addEntry(`/en/use-cases/${useCaseId}`, 0.7, 'monthly');
  });

  // Blog category pages
  blogCategories.forEach((category) => {
    addEntry(`/de/blog/${category}`, 0.6, 'weekly');
    addEntry(`/en/blog/${category}`, 0.6, 'weekly');
  });

  // Write entries to sitemap stream
  entries.forEach((entry) => {
    sitemap.write(entry);
  });

  sitemap.end();

  // Generate sitemap XML
  return streamToPromise(sitemap).then((sm) => {
    const outputPath = resolve(__dirname, '../public/sitemap.xml');
    const writeStream = createWriteStream(outputPath);
    
    return new Promise<void>((resolve, reject) => {
      writeStream.write(sm);
      writeStream.end();
      writeStream.on('finish', () => {
        console.log(`✅ Sitemap generated successfully at ${outputPath}`);
        console.log(`   Total URLs: ${entries.length}`);
        resolve();
      });
      writeStream.on('error', reject);
    });
  });
}

// Run the generator
generateSitemap().catch((error) => {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
});
