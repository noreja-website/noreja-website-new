// Central configuration for Noreja marketing site

export const SITE_NAME = "Noreja";
export const SITE_URL = "https://noreja.com";
export const HUBSPOT_PORTAL_ID = "YOUR_HUBSPOT_PORTAL_ID";
export const HUBSPOT_FORM_GUID_DEFAULT = "YOUR_DEFAULT_FORM_GUID";
export const BLOG_SUBDOMAIN_URL = "https://blog.noreja.com";

export const siteConfig = {
  name: SITE_NAME,
  description: "Revolutionary technology solutions for the future",
  url: SITE_URL,
  links: {
    blog: BLOG_SUBDOMAIN_URL,
    twitter: "https://twitter.com/noreja",
    linkedin: "https://linkedin.com/company/noreja",
    github: "https://github.com/noreja",
    referralProgram: "https://144242473.fs1.hubspotusercontent-eu1.net/hubfs/144242473/Noreja%20Referral%20Program%20DE.pdf"
  },
  hubspot: {
    contactForm: "https://share.hsforms.com/YOUR_CONTACT_FORM_ID",
    appointmentBooking: "https://meetings-eu1.hubspot.com/schulaxshan"
  }
};

export const headerNavigation = [
  { name: "Home", href: "/" },
  { name: "Functionalities", href: "/functionalities" },
  { name: "Success Stories", href: "/success-stories" },
  { name: "Partners", href: "/partners" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" }
];

export const footerNavigation = [
  { name: "Team", href: "/team" },
  { name: "Downloads", href: "/downloads" }
];

export const legalLinks = [
  { name: "Imprint", href: "/imprint" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" }
];

export const hubspotConfig = {
  portalId: HUBSPOT_PORTAL_ID,
  forms: {
    contact: "YOUR_CONTACT_FORM_ID",
    newsletter: "YOUR_NEWSLETTER_FORM_ID",
    download: HUBSPOT_FORM_GUID_DEFAULT
  }
};

export const config = {
  site: {
    name: SITE_NAME,
    description: "Advanced platform for digital transformation and enterprise solutions",
    url: SITE_URL
  },
  hubspot: {
    portalId: HUBSPOT_PORTAL_ID,
    defaultFormGuid: HUBSPOT_FORM_GUID_DEFAULT,
    forms: {
      download: HUBSPOT_FORM_GUID_DEFAULT,
      newsletter: "YOUR_NEWSLETTER_FORM_GUID",
      contact: "YOUR_CONTACT_FORM_GUID"
    }
  }
};