import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { MarkdownBlock } from "@/components/MarkdownBlock";
import { useEffect } from "react";

const privacyContent = `# Datenschutzerklärung

**Stand:** 22. November 2023

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

**Noreja Intelligence GmbH**
Bruck 12
6914 Hohenweiler
Österreich

**Telefon:** +43 69010149533
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

## 7. Ihre Rechte

Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:

- **Auskunftsrecht:** Sie haben das Recht, Auskunft über die von uns verarbeiteten personenbezogenen Daten zu verlangen.
- **Berichtigungsrecht:** Sie haben das Recht auf Berichtigung unrichtiger oder unvollständiger Daten.
- **Löschungsrecht:** Sie haben das Recht auf Löschung Ihrer personenbezogenen Daten.
- **Einschränkungsrecht:** Sie haben das Recht auf Einschränkung der Verarbeitung.
- **Widerspruchsrecht:** Sie haben das Recht, der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen.
- **Datenübertragbarkeit:** Sie haben das Recht auf Übertragbarkeit Ihrer Daten.

## 8. Kontakt

Bei Fragen zum Datenschutz wenden Sie sich bitte an:

**E-Mail:** info@noreja.com
**Telefon:** +43 69010149533`;

export default function PrivacyPolicy() {
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
              Datenschutz<span className="text-noreja-main">erklärung</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Informationen zum Schutz Ihrer personenbezogenen Daten
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
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
              content={privacyContent}
              className="text-foreground"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
