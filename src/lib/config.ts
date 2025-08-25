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

export const config = {
  site: {
    name: "Noreja",
    description: "Advanced platform for digital transformation and enterprise solutions",
    url: "https://noreja.com"
  },
  // HubSpot Configuration
  // TODO: Replace with your actual HubSpot Portal ID and Form GUID
  // You can find these in your HubSpot account under Forms > [Your Form] > Embed Code
  hubspot: {
    portalId: "YOUR_HUBSPOT_PORTAL_ID", // Replace with your HubSpot Portal ID
    defaultFormGuid: "YOUR_DEFAULT_FORM_GUID", // Replace with your default form GUID for downloads
    // Optional: Different forms for different purposes
    forms: {
      download: "YOUR_DOWNLOAD_FORM_GUID",
      newsletter: "YOUR_NEWSLETTER_FORM_GUID",
      contact: "YOUR_CONTACT_FORM_GUID"
    }
  }
};