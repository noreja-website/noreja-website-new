import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { useLanguage } from "@/contexts/LanguageContext";
import { getRoutePath } from "@/lib/routes";
import logo from "@/assets/noreja_logo_white.png";
import isoBadge from "@/assets/privacy/iso_white.png";
import gdprBadge from "@/assets/privacy/gdpr_white.png";


export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  const resourcesLinks = [
    { name: t.navigation.team, routeKey: 'team' as const, external: false },
    { name: t.navigation.downloads, routeKey: 'downloads' as const, external: false },
    { name: t.navigation.events, routeKey: 'events' as const, external: false },
    { name: t.footer.sections.referralProgram, href: siteConfig.links.referralProgram, external: true }
  ];

  const legalLinks = [
    { name: t.footer.legal.imprint, routeKey: 'imprint' as const, external: false },
    { name: t.footer.legal.privacy, routeKey: 'privacy' as const, external: false },
    { name: t.footer.legal.trustCenter, href: "https://trust.noreja.com/", external: true }
  ];

  const contactFormLink: {
    name: string;
    routeKey?: 'contact';
    href?: string;
    external: boolean;
  } = {
    name: t.footer.contact.contactForm,
    routeKey: 'contact' as const,
    external: false
  };
  
  const bookAppointmentLink = {
    name: t.footer.contact.bookAppointment,
    href: siteConfig.hubspot.appointmentBooking,
    external: true
  };

  return (
    <footer className="border-t border-border/40 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to={getRoutePath('home', language)} className="flex items-center mb-4">
              <motion.img
                src={logo}
                alt="Noreja Logo"
                className="w-36 aspect-[1308/322]"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              {t.footer.description}
            </p>
            <div className="flex space-x-4 mb-4">
              <motion.a
                href={siteConfig.links.linkedin}
                className="text-muted-foreground hover:text-primary transition-fast"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href={siteConfig.links.twitter}
                className="text-muted-foreground hover:text-primary transition-fast"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href={siteConfig.links.youtube} 
                className="text-muted-foreground hover:text-primary transition-fast"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">{t.footer.sections.resources}</h3>
            <div className="grid grid-cols-2 gap-4">
              {resourcesLinks.map((item) => (
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-fast text-sm"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.routeKey}
                    to={getRoutePath(item.routeKey, language)}
                    className="text-muted-foreground hover:text-primary transition-fast text-sm"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">{t.footer.sections.legal}</h3>
            <div className="flex flex-col space-y-2">
              {legalLinks.map((item) => (
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-fast text-sm"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.routeKey}
                    to={getRoutePath(item.routeKey, language)}
                    className="text-muted-foreground hover:text-primary transition-fast text-sm"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">{t.footer.sections.contact}</h3>
            <div className="flex flex-col space-y-2">
              {contactFormLink.external && contactFormLink.href ? (
                <a
                  href={contactFormLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-fast text-sm"
                >
                  {contactFormLink.name}
                </a>
              ) : contactFormLink.routeKey ? (
                <Link
                  to={getRoutePath(contactFormLink.routeKey, language)}
                  className="text-muted-foreground hover:text-primary transition-fast text-sm"
                >
                  {contactFormLink.name}
                </Link>
              ) : null}
              <a
                href={bookAppointmentLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold hover:opacity-80 transition-opacity"
                style={{
                  background: 'linear-gradient(to right, hsl(var(--noreja-main)), hsl(var(--noreja-secondary)))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {bookAppointmentLink.name}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {siteConfig.name}. {t.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center">
              <img
                src={isoBadge}
                alt="ISO 27001 Certified"
                className="w-20 h-12 object-contain mb-2"
                loading="lazy"
              />
              <p className="text-muted-foreground text-xs text-center whitespace-nowrap">
                {t.footer.certifications.iso}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={gdprBadge}
                alt="GDPR Compliant"
                className="w-20 h-12 object-contain mb-2"
                loading="lazy"
              />
              <p className="text-muted-foreground text-xs text-center whitespace-nowrap">
                {t.footer.certifications.gdpr}
              </p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            {t.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
}