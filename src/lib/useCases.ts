import type { Language } from "./translations";

// Dynamically import all use case images (if they exist in the future)
const useCaseImages = import.meta.glob<{ default: string }>(
  '../assets/use_cases/**/*.{png,jpg,jpeg,svg,webp}',
  { eager: true }
);

// Helper function to get image path from imports
const getImagePath = (
  images: Record<string, { default: string }>,
  filename: string
): string => {
  const entry = Object.entries(images).find(([path]) => 
    path.toLowerCase().includes(filename.toLowerCase())
  );
  return entry ? entry[1].default : '';
};

// Helper function to get use case image path
const getUseCaseImagePath = (filename: string): string => {
  return getImagePath(useCaseImages, filename);
};

export interface UseCaseSection {
  title: string;
  content: string;
  imagePath?: string; // Optional image path
}

export interface UseCase {
  id: string;
  title: Record<Language, string>;
  shortDescription: Record<Language, string>;
  description: Record<Language, string>;
  sections: Record<Language, UseCaseSection[]>;
}

export const useCases: UseCase[] = [
  {
    id: "supply-chain",
    title: {
      en: "Supply Chain",
      de: "Supply Chain"
    },
    shortDescription: {
      en: "Optimize logistics and distribution processes",
      de: "Logistik- und Distributionsprozesse optimieren"
    },
    description: {
      en: "Transform your supply chain operations with Noreja Process Intelligence. Gain visibility into every step of your logistics processes, identify bottlenecks, and optimize distribution networks for maximum efficiency.",
      de: "Transformiere deine Supply-Chain-Operationen mit Noreja Process Intelligence. Erhalte Transparenz in jeden Schritt deiner Logistikprozesse, identifiziere Engpässe und optimiere Distributionsnetzwerke für maximale Effizienz."
    },
    sections: {
      en: [
        {
          title: "End-to-End Visibility",
          content: "Achieve complete transparency across your entire supply chain. Track orders from procurement to delivery, monitor inventory levels in real-time, and identify process deviations before they impact your operations. With Noreja, you can visualize complex multi-tier supply chains and understand how different stages interconnect."
        },
        {
          title: "Bottleneck Identification",
          content: "Quickly identify and resolve bottlenecks in your supply chain processes. Our AI-powered analysis reveals where delays occur most frequently, which suppliers cause the most issues, and where inventory gets stuck. Use these insights to optimize routing, improve supplier relationships, and reduce lead times significantly."
        },
        {
          title: "Demand Forecasting & Optimization",
          content: "Improve demand forecasting accuracy by analyzing historical process patterns and identifying trends. Optimize inventory levels, reduce stockouts and overstock situations, and align production schedules with actual demand. Noreja helps you balance efficiency with resilience in your supply chain operations."
        }
      ],
      de: [
        {
          title: "End-to-End Transparenz",
          content: "Erreiche vollständige Transparenz über deine gesamte Supply Chain. Verfolge Bestellungen von der Beschaffung bis zur Lieferung, überwache Lagerbestände in Echtzeit und identifiziere Prozessabweichungen, bevor sie deine Operationen beeinträchtigen. Mit Noreja kannst du komplexe mehrstufige Supply Chains visualisieren und verstehen, wie verschiedene Stufen miteinander verbunden sind."
        },
        {
          title: "Engpass-Identifikation",
          content: "Identifiziere und behebe schnell Engpässe in deinen Supply-Chain-Prozessen. Unsere KI-gestützte Analyse zeigt, wo Verzögerungen am häufigsten auftreten, welche Lieferanten die meisten Probleme verursachen und wo Bestände stecken bleiben. Nutze diese Erkenntnisse, um Routen zu optimieren, Lieferantenbeziehungen zu verbessern und Durchlaufzeiten erheblich zu reduzieren."
        },
        {
          title: "Nachfrageprognose & Optimierung",
          content: "Verbessere die Genauigkeit der Nachfrageprognose durch Analyse historischer Prozessmuster und Identifikation von Trends. Optimiere Lagerbestände, reduziere Fehlbestände und Überbestände und richte Produktionspläne an der tatsächlichen Nachfrage aus. Noreja hilft dir, Effizienz mit Resilienz in deinen Supply-Chain-Operationen auszubalancieren."
        }
      ]
    }
  },
  {
    id: "manufacturing",
    title: {
      en: "Manufacturing",
      de: "Produktion"
    },
    shortDescription: {
      en: "Enhance production efficiency and quality control",
      de: "Produktionseffizienz und Qualitätskontrolle verbessern"
    },
    description: {
      en: "Streamline manufacturing operations with process intelligence. Monitor production workflows, optimize resource allocation, and ensure consistent quality across all manufacturing processes.",
      de: "Optimiere Produktionsprozesse mit Process Intelligence. Überwache Produktionsabläufe, optimiere Ressourcenzuteilung und stelle konsistente Qualität in allen Produktionsprozessen sicher."
    },
    sections: {
      en: [
        {
          title: "Production Process Optimization",
          content: "Gain deep insights into your manufacturing workflows. Identify inefficiencies in production lines, optimize machine utilization, and reduce cycle times. Track how materials flow through your facility, understand where quality issues originate, and improve overall equipment effectiveness (OEE) through data-driven process improvements."
        },
        {
          title: "Quality Control & Compliance",
          content: "Ensure consistent quality standards across all production stages. Monitor quality checkpoints, track defect rates, and identify root causes of quality issues. Maintain compliance with industry standards and regulations by documenting process adherence and identifying areas where procedures need reinforcement."
        },
        {
          title: "Predictive Maintenance",
          content: "Reduce unplanned downtime through predictive maintenance insights. Analyze equipment performance patterns, identify early warning signs of potential failures, and schedule maintenance proactively. Optimize maintenance schedules to minimize production disruptions while extending equipment lifespan."
        }
      ],
      de: [
        {
          title: "Produktionsprozess-Optimierung",
          content: "Gewinne tiefe Einblicke in deine Produktionsabläufe. Identifiziere Ineffizienzen in Produktionslinien, optimiere Maschinenauslastung und reduziere Zykluszeiten. Verfolge, wie Materialien durch deine Anlage fließen, verstehe, wo Qualitätsprobleme entstehen, und verbessere die Gesamtanlageneffektivität (OEE) durch datengestützte Prozessverbesserungen."
        },
        {
          title: "Qualitätskontrolle & Compliance",
          content: "Stelle konsistente Qualitätsstandards in allen Produktionsstufen sicher. Überwache Qualitätsprüfpunkte, verfolge Fehlerquoten und identifiziere Ursachen von Qualitätsproblemen. Halte Compliance mit Branchenstandards und Vorschriften aufrecht, indem du Prozesseinhaltung dokumentierst und Bereiche identifizierst, in denen Verfahren verstärkt werden müssen."
        },
        {
          title: "Vorausschauende Wartung",
          content: "Reduziere ungeplante Ausfallzeiten durch Erkenntnisse zur vorausschauenden Wartung. Analysiere Leistungsmuster von Anlagen, identifiziere frühe Warnsignale potenzieller Ausfälle und plane Wartung proaktiv. Optimiere Wartungspläne, um Produktionsunterbrechungen zu minimieren und gleichzeitig die Lebensdauer der Anlagen zu verlängern."
        }
      ]
    }
  },
  {
    id: "insurance",
    title: {
      en: "Insurance",
      de: "Versicherung"
    },
    shortDescription: {
      en: "Streamline claims processing and risk assessment",
      de: "Schadensbearbeitung und Risikobewertung optimieren"
    },
    description: {
      en: "Transform insurance operations with intelligent process analysis. Accelerate claims processing, improve risk assessment accuracy, and enhance customer experience through optimized workflows.",
      de: "Transformiere Versicherungsoperationen mit intelligenter Prozessanalyse. Beschleunige Schadensbearbeitung, verbessere Risikobewertungsgenauigkeit und verbessere Kundenerfahrungen durch optimierte Workflows."
    },
    sections: {
      en: [
        {
          title: "Claims Processing Efficiency",
          content: "Dramatically reduce claims processing time by identifying bottlenecks and inefficiencies in your workflows. Automate routine tasks, route complex cases to the right specialists faster, and ensure consistent processing across all claims. Track processing times, identify patterns that cause delays, and optimize your claims handling processes for better customer satisfaction."
        },
        {
          title: "Risk Assessment & Underwriting",
          content: "Improve risk assessment accuracy by analyzing historical process data and identifying patterns that correlate with risk levels. Optimize underwriting workflows, reduce manual review times, and ensure consistent risk evaluation across all policies. Use process insights to refine risk models and make more informed underwriting decisions."
        },
        {
          title: "Regulatory Compliance",
          content: "Maintain compliance with insurance regulations through comprehensive process documentation and monitoring. Track adherence to required procedures, identify areas where compliance processes break down, and ensure all regulatory requirements are consistently met. Generate audit-ready documentation automatically from your process data."
        }
      ],
      de: [
        {
          title: "Schadensbearbeitungs-Effizienz",
          content: "Reduziere die Schadensbearbeitungszeit erheblich, indem du Engpässe und Ineffizienzen in deinen Workflows identifizierst. Automatisiere Routineaufgaben, leite komplexe Fälle schneller an die richtigen Spezialisten weiter und stelle konsistente Bearbeitung bei allen Schäden sicher. Verfolge Bearbeitungszeiten, identifiziere Muster, die Verzögerungen verursachen, und optimiere deine Schadensbearbeitungsprozesse für bessere Kundenzufriedenheit."
        },
        {
          title: "Risikobewertung & Underwriting",
          content: "Verbessere die Genauigkeit der Risikobewertung durch Analyse historischer Prozessdaten und Identifikation von Mustern, die mit Risikoniveaus korrelieren. Optimiere Underwriting-Workflows, reduziere manuelle Prüfzeiten und stelle konsistente Risikobewertung bei allen Policen sicher. Nutze Prozesserkenntnisse, um Risikomodelle zu verfeinern und fundiertere Underwriting-Entscheidungen zu treffen."
        },
        {
          title: "Regulatorische Compliance",
          content: "Halte Compliance mit Versicherungsvorschriften durch umfassende Prozessdokumentation und Überwachung aufrecht. Verfolge Einhaltung erforderlicher Verfahren, identifiziere Bereiche, in denen Compliance-Prozesse zusammenbrechen, und stelle sicher, dass alle regulatorischen Anforderungen konsistent erfüllt werden. Generiere auditbereite Dokumentation automatisch aus deinen Prozessdaten."
        }
      ]
    }
  },
  {
    id: "banking",
    title: {
      en: "Banking",
      de: "Banking"
    },
    shortDescription: {
      en: "Optimize financial operations and compliance",
      de: "Finanzoperationen und Compliance optimieren"
    },
    description: {
      en: "Enhance banking operations with process intelligence. Improve loan processing, optimize compliance workflows, and deliver better customer experiences through streamlined financial processes.",
      de: "Verbessere Bankoperationen mit Process Intelligence. Verbessere Kreditbearbeitung, optimiere Compliance-Workflows und liefere bessere Kundenerfahrungen durch optimierte Finanzprozesse."
    },
    sections: {
      en: [
        {
          title: "Loan Processing & Credit Assessment",
          content: "Accelerate loan processing while maintaining thorough risk assessment. Identify bottlenecks in application workflows, optimize credit evaluation processes, and reduce time-to-decision for customers. Analyze approval patterns to ensure consistent decision-making and identify opportunities to streamline without compromising risk management."
        },
        {
          title: "Compliance & Risk Management",
          content: "Ensure regulatory compliance across all banking operations. Monitor adherence to KYC (Know Your Customer) procedures, track AML (Anti-Money Laundering) workflows, and identify compliance gaps before they become issues. Automate compliance reporting and maintain comprehensive audit trails for all financial processes."
        },
        {
          title: "Customer Onboarding & Service",
          content: "Improve customer onboarding experiences by optimizing account opening processes. Reduce onboarding time, eliminate unnecessary steps, and ensure consistent service quality. Track customer service interactions to identify common issues and optimize support workflows for faster resolution times."
        }
      ],
      de: [
        {
          title: "Kreditbearbeitung & Kreditbewertung",
          content: "Beschleunige Kreditbearbeitung bei gleichzeitiger gründlicher Risikobewertung. Identifiziere Engpässe in Antrags-Workflows, optimiere Kreditbewertungsprozesse und reduziere Entscheidungszeiten für Kunden. Analysiere Genehmigungsmuster, um konsistente Entscheidungsfindung sicherzustellen und Möglichkeiten zur Optimierung zu identifizieren, ohne Risikomanagement zu beeinträchtigen."
        },
        {
          title: "Compliance & Risikomanagement",
          content: "Stelle regulatorische Compliance in allen Bankoperationen sicher. Überwache Einhaltung von KYC-Verfahren (Know Your Customer), verfolge AML-Workflows (Anti-Money Laundering) und identifiziere Compliance-Lücken, bevor sie zu Problemen werden. Automatisiere Compliance-Berichterstattung und halte umfassende Prüfpfade für alle Finanzprozesse aufrecht."
        },
        {
          title: "Kunden-Onboarding & Service",
          content: "Verbessere Kundenerfahrungen beim Onboarding durch Optimierung von Konteneröffnungsprozessen. Reduziere Onboarding-Zeit, eliminiere unnötige Schritte und stelle konsistente Servicequalität sicher. Verfolge Kundenservice-Interaktionen, um häufige Probleme zu identifizieren und Support-Workflows für schnellere Lösungszeiten zu optimieren."
        }
      ]
    }
  }
];

