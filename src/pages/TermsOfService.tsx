import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { MarkdownBlock } from "@/components/MarkdownBlock";
import { useEffect } from "react";

const termsContent = `# Nutzungsbedingungen

**Stand:** 22. November 2023

## 1. Geltungsbereich

Diese Nutzungsbedingungen gelten für die Nutzung der Website und der Dienste der Noreja Intelligence GmbH (im Folgenden "Noreja", "wir" oder "uns").

## 2. Anbieter

**Noreja Intelligence GmbH**
Bruck 12
6914 Hohenweiler
Österreich

**Telefon:** +43 69010149533
**E-Mail:** info@noreja.com

## 3. Leistungen

Noreja bietet Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik an. Die konkreten Leistungen ergeben sich aus den jeweiligen Verträgen oder Angeboten.

## 4. Nutzung der Website

### 4.1 Zulässige Nutzung
Die Website darf nur für rechtmäßige Zwecke und in Übereinstimmung mit diesen Nutzungsbedingungen genutzt werden.

### 4.2 Verbotene Nutzung
Es ist untersagt:
- Die Website für illegale oder unerlaubte Zwecke zu nutzen
- Schädliche oder bösartige Software zu übertragen
- Die Website zu stören oder zu beschädigen
- Unbefugten Zugang zu anderen Systemen zu versuchen

## 5. Geistiges Eigentum

### 5.1 Urheberrechte
Alle Inhalte der Website, einschließlich Texte, Bilder, Grafiken, Logos und Software, sind urheberrechtlich geschützt und Eigentum von Noreja oder deren Lizenzgebern.

### 5.2 Nutzungsrechte
Die Nutzung der Website gewährt keine Rechte an den Inhalten. Jede Verwendung bedarf der vorherigen schriftlichen Zustimmung von Noreja.

## 6. Haftungsausschluss

### 6.1 Inhalte
Noreja übernimmt keine Gewähr für die Richtigkeit, Vollständigkeit oder Aktualität der auf der Website bereitgestellten Informationen.

### 6.2 Verfügbarkeit
Noreja ist bemüht, die Website ständig verfügbar zu halten, kann jedoch keine Garantie für die ununterbrochene Verfügbarkeit geben.

### 6.3 Haftungsbeschränkung
Die Haftung von Noreja ist auf Vorsatz und grobe Fahrlässigkeit beschränkt, soweit gesetzlich zulässig.

## 7. Datenschutz

Die Verarbeitung personenbezogener Daten erfolgt in Übereinstimmung mit unserer Datenschutzerklärung.

## 8. Änderungen

Noreja behält sich das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. Die geänderten Bedingungen werden auf der Website veröffentlicht.

## 9. Schlussbestimmungen

### 9.1 Anwendbares Recht
Diese Nutzungsbedingungen unterliegen österreichischem Recht.

### 9.2 Gerichtsstand
Gerichtsstand ist Feldkirch, Österreich.

### 9.3 Salvatorische Klausel
Sollten einzelne Bestimmungen dieser Nutzungsbedingungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.`;

export default function TermsOfService() {
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
              Nutzungs<span className="text-noreja-main">bedingungen</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Allgemeine Geschäftsbedingungen für die Nutzung unserer Dienste
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
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
              content={termsContent}
              className="text-foreground"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
