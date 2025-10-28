import { motion } from "framer-motion";
import { MarkdownBlock } from "@/components/MarkdownBlock";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";

const impressumContentDE = `
**Letztes Update:** 22.11.2023

**Noreja Intelligence GmbH**
Bruck 12
6914 Hohenweiler

## Geschäftsführer:

Philipp Waibel und Lukas Pfahlsberger

## Kontakt:

**Telefon:** +43 69010149533  
**E-Mail:** info@noreja.com

## Registereintrag:

FN 552351 g (Landgericht Feldkirch)

## Umsatzsteuer ID:

ATU76827034

## Tätigkeitsbereich:

Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik

## Streitschlichtung:

Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.

## Haftung für Inhalte:

Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.

Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.

## Haftung für Links:

Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.

Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.

## Urheberrecht:

Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.

Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.

## Cookies:

Cookies sind Textdateien, die automatisch bei dem Aufruf einer Webseite lokal im Browser des Besuchers abgelegt werden. Diese Website setzt Cookies ein, um das Angebot nutzerfreundlich und funktionaler zu gestalten.

Dank dieser Dateien ist es beispielsweise möglich, auf individuelle Interessen abgestimmte Informationen auf einer Seite anzuzeigen. Auch sicherheitsrelevante Funktionen zum Schutz Ihrer Privatsphäre werden durch den Einsatz von Cookies ermöglicht.

Der ausschließliche Zweck besteht also darin, unser Angebot Ihren Kundenwünschen bestmöglich anzupassen und die Seiten-Nutzung so komfortabel wie möglich zu gestalten.

Mit Anwendung der DSGVO 2018 sind Webmaster dazu verpflichtet, der unter https://eu-datenschutz.org/ veröffentlichten Grundverordnung Folge zu leisten und seine Nutzer entsprechend über die Erfassung und Auswertung von Daten in Kenntnis zu setzen. Die Rechtmäßigkeit der Verarbeitung ist in Kapitel 2, Artikel 6 der DSGVO begründet.`;

const impressumContentEN = `
**Last Updated:** November 22, 2023

**Noreja Intelligence GmbH**
Bruck 12
6914 Hohenweiler
Austria

## Managing Directors:

Philipp Waibel and Lukas Pfahlsberger

## Contact:

**Phone:** +43 69010149533  
**Email:** info@noreja.com

## Commercial Register Entry:

FN 552351 g (Landgericht Feldkirch)

## VAT ID:

ATU76827034

## Business Activity:

Services in automatic data processing and information technology

## Dispute Resolution:

We are not willing or obligated to participate in dispute resolution procedures before a consumer arbitration board.

## Liability for Contents:

As a service provider, we are responsible for our own content on these pages according to general laws. However, as a service provider, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.

Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific legal violation. Upon becoming aware of corresponding legal violations, we will remove this content immediately.

## Liability for Links:

Our offer contains links to external websites of third parties, over whose content we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking.

However, a permanent control of the contents of the linked pages is not reasonable without concrete evidence of a violation of law. Upon becoming aware of legal violations, we will remove such links immediately.

## Copyright:

The content and works created by the site operators on these pages are subject to Austrian copyright law. The reproduction, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this page are only permitted for private, non-commercial use.

Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, we ask for a corresponding notice. Upon becoming aware of legal violations, we will remove such content immediately.

## Cookies:

Cookies are text files that are automatically stored locally in the visitor's browser when a website is accessed. This website uses cookies to make the offer more user-friendly and functional.

Thanks to these files, it is possible, for example, to display information tailored to individual interests on a page. Security-relevant functions to protect your privacy are also made possible by the use of cookies.

The sole purpose is therefore to adapt our offer to your customer wishes as best as possible and to make the use of the pages as comfortable as possible.

With the application of the GDPR 2018, webmasters are obliged to follow the basic regulation published at https://eu-datenschutz.org/ and to inform their users accordingly about the collection and evaluation of data. The legality of the processing is justified in Chapter 2, Article 6 of the GDPR.`;


export default function Imprint() {
  const { language } = useLanguage();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const impressumContent = language === 'de' ? impressumContentDE : impressumContentEN;
  const title = language === 'de' ? 'Impressum' : 'Imprint';
  const subtitle = language === 'de' 
    ? 'Offenlegung gemäß § 25 Mediengesetz (MedienG) & Information gemäß § 5 E-Commerce-Gesetz (ECG)'
    : 'Disclosure according to § 25 Media Act (MedienG) & Information according to § 5 E-Commerce Act (ECG)';

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-24">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
              <span className="text-noreja-main">{title}</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impressum Section */}
      <section className="pb-20">
        <div className="w-full max-w-4xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card/50 border border-border/40 rounded-lg p-8"
          >
            <MarkdownBlock 
              content={impressumContent}
              className="text-foreground"
            />
          </motion.div>
        </div>
      </section>

      {/* AGB Button Section */}
      <section className="pb-20">
        <div className="w-full max-w-4xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-card/30 border border-border/40 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {language === 'de' ? 'Allgemeine Geschäftsbedingungen' : 'Terms and Conditions'}
              </h3>
              <p className="text-muted-foreground mb-6">
                {language === 'de' 
                  ? 'Für detaillierte Informationen zu unseren Geschäftsbedingungen laden Sie bitte das vollständige Dokument herunter.'
                  : 'For detailed information about our terms and conditions, please download the complete document.'
                }
              </p>
              <Button
                onClick={() => window.open('https://144242473.fs1.hubspotusercontent-eu1.net/hubfs/144242473/Noreja%20AGB%20V3.pdf', '_blank')}
                className="inline-flex items-center gap-2 bg-noreja-main hover:bg-noreja-main/90 text-white"
              >
                <FileText className="w-4 h-4" />
                {language === 'de' ? 'AGB herunterladen' : 'Download Terms & Conditions'}
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}