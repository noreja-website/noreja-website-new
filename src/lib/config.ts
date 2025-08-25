// Central configuration for Noreja marketing site

export const siteConfig = {
  name: "Noreja",
  description: "Revolutionary technology solutions for the future",
  url: "https://noreja.com",
  links: {
    blog: "https://blog.noreja.com",
    twitter: "https://twitter.com/noreja",
    linkedin: "https://linkedin.com/company/noreja",
    github: "https://github.com/noreja"
  }
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Functionalities", href: "/functionalities" },
  { name: "Success Stories", href: "/success-stories" },
  { name: "Team", href: "/team" },
  { name: "Partners", href: "/partners" },
  { name: "Blog", href: "/blog" },
  { name: "Downloads", href: "/downloads" }
];

export const legalLinks = [
  { name: "Imprint", href: "/imprint" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" }
];

export const hubspotConfig = {
  // TODO: Add HubSpot portal ID
  portalId: "YOUR_HUBSPOT_PORTAL_ID",
  // TODO: Add HubSpot form IDs
  forms: {
    contact: "YOUR_CONTACT_FORM_ID",
    newsletter: "YOUR_NEWSLETTER_FORM_ID",
    download: "YOUR_DOWNLOAD_FORM_ID"
  }
};