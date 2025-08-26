# Noreja - SaaS Marketing Website

A modern, responsive marketing website built with React, TypeScript, and Tailwind CSS.

## Project Overview

**URL**: https://lovable.dev/projects/ba92bb2f-03b7-4dad-95de-18c6fdc2e6b2

This project is built with:
- Vite
- TypeScript  
- React
- shadcn-ui
- Tailwind CSS

## Getting Started

### Prerequisites
- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

### Testing

```sh
# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests once (CI mode)
npm run test:run
```

## Configuration Guide

### HubSpot Integration

#### 1. Configure HubSpot Forms
Update the configuration in `src/lib/config.ts`:

```typescript
export const HUBSPOT_PORTAL_ID = "YOUR_ACTUAL_PORTAL_ID";
export const HUBSPOT_FORM_GUID_DEFAULT = "YOUR_ACTUAL_FORM_GUID";

export const hubspotConfig = {
  portalId: HUBSPOT_PORTAL_ID,
  forms: {
    contact: "YOUR_CONTACT_FORM_ID",
    newsletter: "YOUR_NEWSLETTER_FORM_ID", 
    download: HUBSPOT_FORM_GUID_DEFAULT
  }
};
```

To find your Portal ID and Form GUIDs:
1. Log into your HubSpot account
2. Navigate to Marketing → Lead Capture → Forms
3. Select your form and copy the Form ID (GUID)
4. Your Portal ID can be found in your account settings

#### 2. Add HubSpot Blog Embed
To embed your HubSpot blog listing:

**Option 1: HubSpot Widget (Recommended)**
```typescript
// In src/components/HubSpotBlogTeaser.tsx, uncomment Option 1:
useEffect(() => {
  // Option 1: Load HubSpot Blog Listing Widget
  const script = document.createElement('script');
  script.src = 'https://js.hsforms.net/forms/embed/v2.js';
  script.onload = () => {
    window.hbspt?.forms?.create({
      target: '#hubspot-blog-teaser',
      portalId: 'YOUR_PORTAL_ID',
      formId: 'blog-listing-widget-id', // Get this from HubSpot
    });
  };
  document.head.appendChild(script);
}, []);
```

**Option 2: Custom RSS Feed**
```typescript  
// In src/components/HubSpotBlogTeaser.tsx, uncomment Option 2:
useEffect(() => {
  // Option 2: Fetch from custom RSS endpoint
  fetch(`/api/blog-feed?limit=${maxItems || 3}`)
    .then(response => response.json())
    .then(posts => {
      const container = document.getElementById('hubspot-blog-teaser');
      if (container && posts) {
        container.innerHTML = posts.map(post => `
          <article>
            <h3><a href="${post.url}">${post.title}</a></h3>
            <p>${post.excerpt}</p>
          </article>
        `).join('');
      }
    });
}, [maxItems]);
```

### Content Management

#### Adding a New Download Asset
Add your asset to `src/lib/downloads.ts`:

```typescript
export const downloadAssets: DownloadAsset[] = [
  // ... existing assets
  {
    id: "new-asset-id",
    title: "New Resource Title",
    description: "Brief description of the resource",
    category: "Whitepapers", // or "Case Studies", "Templates", etc.
    fileUrl: "/downloads/new-resource.pdf",
    fileSize: "2.5 MB",
    fileType: "PDF",
    hubspotFormGuid: "form-guid-for-this-asset", // Optional: specific form
    // Use default form from config if not specified
  }
];
```

#### Adding a Success Story
Add your story to `src/lib/successStories.ts`:

```typescript
export const successStories: SuccessStory[] = [
  // ... existing stories
  {
    id: "new-story-id",
    company: "Company Name",
    industry: "Technology", // or your industry
    challenge: "Brief description of the client's challenge",
    solution: "How your solution addressed the challenge", 
    results: "Quantifiable results achieved",
    quote: "Testimonial quote from the client",
    author: "John Doe",
    authorRole: "CEO",
    companyLogo: "/images/logos/company-logo.png",
    metrics: [
      { label: "ROI Increase", value: "150%" },
      { label: "Time Saved", value: "40 hours/week" }
    ]
  }
];
```

#### Adding a Partner
Add your partner to `src/lib/partners.ts`:

```typescript
export const partners: Partner[] = [
  // ... existing partners
  {
    id: "new-partner-id",
    name: "Partner Company Name",
    description: "Brief description of the partnership and what they provide",
    logoUrl: "/images/partners/partner-logo.png",
    website: "https://partner-website.com",
    category: "Technology" // or "Consulting", "Integration", etc.
  }
];
```

#### Adding a Team Member
Add your team member to `src/lib/team.ts`:

```typescript
export const teamMembers: TeamMember[] = [
  // ... existing members
  {
    id: "new-member-id",
    name: "Jane Doe",
    role: "Senior Developer",
    oneLiner: "Brief one-line description of their expertise",
    linkedInUrl: "https://linkedin.com/in/jane-doe",
    imageUrl: "/images/team/jane-doe.jpg"
  }
];
```

## Deployment

### Using Lovable
Simply open [Lovable](https://lovable.dev/projects/ba92bb2f-03b7-4dad-95de-18c6fdc2e6b2) and click on Share → Publish.

### Custom Domain
Navigate to Project > Settings > Domains in Lovable to connect your custom domain.
Read more: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Development

### File Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn-ui components
│   └── ...             # Custom components
├── pages/              # Page components
├── lib/                # Utility functions and data
├── hooks/              # Custom React hooks
├── test/               # Test files
└── styles/             # CSS and styling
```

### Code Editing Options

**Use Lovable**: Visit the [Lovable Project](https://lovable.dev/projects/ba92bb2f-03b7-4dad-95de-18c6fdc2e6b2) and start prompting.

**Use your preferred IDE**: Clone this repo and push changes. Pushed changes will be reflected in Lovable.

**Edit directly in GitHub**: Navigate to files and click the "Edit" button.

**Use GitHub Codespaces**: Click "Code" → "Codespaces" → "New codespace" for a cloud development environment.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

For questions or support, please refer to the [Lovable documentation](https://docs.lovable.dev/) or contact our team.
