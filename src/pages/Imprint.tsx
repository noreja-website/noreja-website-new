import { motion } from "framer-motion";
import { ScrollText, Shield } from "lucide-react";
import { MarkdownBlock } from "@/components/MarkdownBlock";
import { useEffect } from "react";

const impressumContent = `# Impressum

**Noreja Intelligence GmbH**

Angaben gemäß § 5 TMG

## Anschrift
Europaplatz 1
10557 Berlin
Deutschland

## Kontakt
**Telefon:** +49 (0) 30 12345678
**E-Mail:** info@noreja.com
**Website:** www.noreja.com

## Geschäftsführung
Dr. Lukas Pfahlsberger (CEO)
Dr. Philipp Waibel (CTO)

## Registereintrag
**Eintragung im Handelsregister:** Amtsgericht Berlin
**Registernummer:** HRB 123456 B

## Umsatzsteuer-Identifikationsnummer
Gemäß §27 a Umsatzsteuergesetz:
**USt-IdNr.:** DE123456789

## Berufsaufsichtsbehörde
Zuständige Aufsichtsbehörde:
Senatsverwaltung für Wirtschaft, Energie und Betriebe Berlin
Martin-Luther-Straße 105
10825 Berlin

## Haftungsausschluss

### Haftung für Inhalte
Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.

### Haftung für Links
Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.

### Urheberrecht
Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.`;

const datenschutzContent = `# Datenschutzerklärung

**Stand:** 15. Januar 2024

## 1. Datenschutz auf einen Blick

### Allgemeine Hinweise
Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.

### Datenerfassung auf dieser Website
**Wer ist verantwortlich für die Datenerfassung auf dieser Website?**

Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.

**Wie erfassen wir Ihre Daten?**

Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.

## 2. Hosting

Wir hosten die Inhalte unserer Website bei folgendem Anbieter:

### Externe Hosting
Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert.

## 3. Allgemeine Hinweise und Pflichtinformationen

### Datenschutz
Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.

### Hinweis zur verantwortlichen Stelle
Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:

**Noreja Technologies GmbH**
Europaplatz 1
10557 Berlin
Deutschland

**Telefon:** +49 (0) 30 12345678
**E-Mail:** info@noreja.com

## 4. Datenerfassung auf dieser Website

### Server-Log-Dateien
Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt.

### Kontaktformular
Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.

## 5. Newsletter

### Newsletter­daten
Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind.

## 6. Cookies

### Cookies
Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.

## 7. Kontakt

Bei Fragen zum Datenschutz wenden Sie sich bitte an:

**Datenschutzbeauftragter:**
Dr. Emily Foster
**E-Mail:** datenschutz@noreja.com
**Telefon:** +49 (0) 30 12345678`;

export default function Imprint() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              Legal <span className="text-noreja-main">Information</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Impressum und Datenschutzerklärung gemäß deutschem Recht
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="pb-8">
        <div className="w-full max-w-4xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#impressum"
              className="inline-flex items-center px-6 py-3 bg-noreja-main/10 border border-noreja-main/30 rounded-lg font-semibold text-noreja-main hover:bg-noreja-main/20 transition-all"
            >
              <ScrollText className="w-5 h-5 mr-2" />
              Impressum
            </a>
            <a
              href="#datenschutz"
              className="inline-flex items-center px-6 py-3 bg-noreja-main/10 border border-noreja-main/30 rounded-lg font-semibold text-noreja-main hover:bg-noreja-main/20 transition-all"
            >
              <Shield className="w-5 h-5 mr-2" />
              Datenschutz
            </a>
          </motion.div>
        </div>
      </section>

      {/* Impressum Section */}
      <section id="impressum" className="pb-20">
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

      {/* Datenschutz Section */}
      <section id="datenschutz" className="pb-20">
        <div className="w-full max-w-4xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card/50 border border-border/40 rounded-lg p-8"
          >
            <MarkdownBlock 
              content={datenschutzContent}
              className="text-foreground"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}