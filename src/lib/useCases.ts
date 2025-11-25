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
  subtitle?: string; // Optional subtitle
  content: string;
  imagePath?: string; // Optional image path
}

export interface UseCase {
  id: string;
  title: Record<Language, string>;
  shortDescription: Record<Language, string>;
  description: Record<Language, string>;
  sections: Record<Language, UseCaseSection[]>;
  additionalUseCases?: AdditionalUseCase[]; // Optional: specific additional use cases for this use case
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
      de: "Entdecke, wie Noreja die Effizienz im Supply Chain Management erhöhen kann."
    },
    description: {
      en: "Transform your supply chain operations with Noreja Process Intelligence. Gain visibility into every step of your logistics processes, identify bottlenecks, and optimize distribution networks for maximum efficiency.",
      de: "Norejas innovativer Process-Intelligence-Ansatz und Supply Chain Management sind wie gemacht für einander. Mit der Fähigkeit daten- und systemüberfreifend tiefgreifende Strukturprobleme aufzudecken, können wir eine Vielzahl gängiger Probleme in der Branche lösen. Nun präsentieren wir einige Anwendungsfelder, in denen unsere Lösung die Prozesse deiner Organisation schlanker und effektiver machen kann!"
    },
    sections: {
      en: [
        {
          title: "End-to-End Visibility",
          subtitle: "Complete transparency across your supply chain",
          content: "Achieve complete transparency across your entire supply chain. Track orders from procurement to delivery, monitor inventory levels in real-time, and identify process deviations before they impact your operations. With Noreja, you can visualize complex multi-tier supply chains and understand how different stages interconnect."
        },
        {
          title: "Bottleneck Identification",
          subtitle: "Identify and resolve process bottlenecks",
          content: "Quickly identify and resolve bottlenecks in your supply chain processes. Our AI-powered analysis reveals where delays occur most frequently, which suppliers cause the most issues, and where inventory gets stuck. Use these insights to optimize routing, improve supplier relationships, and reduce lead times significantly."
        },
        {
          title: "Demand Forecasting & Optimization",
          subtitle: "Improve forecasting accuracy and inventory management",
          content: "Improve demand forecasting accuracy by analyzing historical process patterns and identifying trends. Optimize inventory levels, reduce stockouts and overstock situations, and align production schedules with actual demand. Noreja helps you balance efficiency with resilience in your supply chain operations."
        }
      ],
      de: [
        {
          title: "Optimierung der Produktionslinie",
          subtitle: "Effizienzsteigerung der Abläufe und Ressourcen",
          content: "Die Optimierung der Produktionslinien durch Process Mining konzentriert sich auf die Verbesserung der Effizienz und Effektivität von Fertigungsprozessen. Durch die Analyse von Produktionsabläufen können Unternehmen Engpässe, Verzögerungen und nicht ausgelastete Ressourcen in der Produktion erkennen. So kann das Process Mining beispielsweise aufzeigen, dass bestimmte Maschinen aufgrund von Wartungsproblemen häufig stillstehen oder dass bestimmte Produktionsschritte länger als erwartet dauern. Durch die Beseitigung dieser Ineffizienzen können Hersteller ihre Abläufe rationalisieren, den Durchsatz erhöhen und die Betriebskosten senken. Diese Optimierung verbessert nicht nur die Produktionszeiten, sondern auch die allgemeine Produktqualität und die Kundenzufriedenheit."
        },
        {
          title: "Optimierung der Lagerbestände",
          subtitle: "Vermeidung von Über- oder Unterbeständen",
          content: "Bestandsoptimierung durch Process Mining beinhaltet die Analyse von Lagerbeständen und Umschlagshäufigkeiten, um eine effiziente Bestandsverwaltung zu gewährleisten. Durch die Untersuchung historischer Verkaufsdaten, Nachbestellungsmuster und Vorlaufzeiten von Lieferanten können Unternehmen Trends erkennen und die Nachfrage genauer prognostizieren. Diese Erkenntnisse ermöglichen es Unternehmen, optimale Lagerbestände aufrechtzuerhalten, Überbestände zu reduzieren und Fehlbestände zu minimieren. Durch die Optimierung der Bestände können Unternehmen ihre Lagerhaltungskosten senken, den Cashflow verbessern und die Servicequalität steigern. Letztendlich führt eine effektive Bestandsverwaltung zu einer reaktionsfähigeren Lieferkette und einer höheren Kundenzufriedenheit."
        },
        {
          title: "Emissions-Tracking (CO2)",
          subtitle: "Reduktion des ökologischen Fußabdruckes",
          content: "Die Verfolgung von Emissionen mittels Process Mining konzentriert sich auf die Überwachung und Analyse von Treibhausgasemissionen in der gesamten Lieferkette. Durch die Untersuchung von Daten aus Produktionsprozessen, Transport und Logistik können Unternehmen die wichtigsten Emissionsquellen und Bereiche mit Verbesserungspotenzial identifizieren. Diese Analyse ermöglicht es den Unternehmen, Strategien zur Verringerung ihres CO2-Ausstoßes zu entwickeln, z. B. durch die Optimierung von Transportwegen oder die Verbesserung der Energieeffizienz in der Produktion. Durch aktives Verfolgen und Verwalten von Emissionen können Unternehmen die gesetzlichen Anforderungen erfüllen, ihre Nachhaltigkeitsinitiativen verstärken und ihren Ruf als Unternehmen verbessern."
        }
      ]
    },
    additionalUseCases: [
      {
        id: "supplier-performance",
        title: {
          en: "Supplier Performance Analysis",
          de: "Lieferanten-Performance-Analyse"
        },
        description: {
          en: "In supplier performance analysis, Process Mining is used to evaluate supplier efficiency, improve decision-making, reduce costs, and increase the overall performance of the supply chain.",
          de: "Bei der Analyse der Supplier-Performance wird Process Mining eingesetzt, um die Effizienz der Lieferanten zu bewerten, die Entscheidungsfindung zu verbessern, die Kosten zu senken und die Gesamtleistung der Lieferkette zu steigern."
        },
        icon: "Handshake"
      },
      {
        id: "working-capital",
        title: {
          en: "Working Capital Analysis",
          de: "Working-Capital Analyse"
        },
        description: {
          en: "In working capital analysis, Process Mining is used to optimize cash flow, improve payment processes, and increase liquidity for growth.",
          de: "Bei der Working-Capital-Analyse wird Process Mining eingesetzt, um den Cashflow zu optimieren, die Zahlungsprozesse zu verbessern und die Liquidität für das Wachstum zu erhöhen."
        },
        icon: "BarChart3"
      },
      {
        id: "quality-compliance",
        title: {
          en: "Quality Control and Compliance",
          de: "Qualitätskontrolle und Compliance"
        },
        description: {
          en: "In quality control and compliance with regulations, Process Mining is used to identify errors, ensure compliance with regulations, and reduce recalls.",
          de: "Bei der Qualitätskontrolle und Einhaltung von Vorschriften wird Process Mining eingesetzt, um Fehler zu erkennen, die Einhaltung von Vorschriften zu gewährleisten und Rückrufe zu reduzieren."
        },
        icon: "FileCheck"
      }
    ]
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
          subtitle: "Enhance efficiency and effectiveness of manufacturing processes",
          content: "Gain deep insights into your manufacturing workflows. Identify inefficiencies in production lines, optimize machine utilization, and reduce cycle times. Track how materials flow through your facility, understand where quality issues originate, and improve overall equipment effectiveness (OEE) through data-driven process improvements."
        },
        {
          title: "Quality Control & Compliance",
          subtitle: "Ensure consistent quality standards and regulatory compliance",
          content: "Ensure consistent quality standards across all production stages. Monitor quality checkpoints, track defect rates, and identify root causes of quality issues. Maintain compliance with industry standards and regulations by documenting process adherence and identifying areas where procedures need reinforcement."
        },
        {
          title: "Predictive Maintenance",
          subtitle: "Reduce unplanned downtime through proactive maintenance",
          content: "Reduce unplanned downtime through predictive maintenance insights. Analyze equipment performance patterns, identify early warning signs of potential failures, and schedule maintenance proactively. Optimize maintenance schedules to minimize production disruptions while extending equipment lifespan."
        }
      ],
      de: [
        {
          title: "Produktionsprozess-Optimierung",
          subtitle: "Verbesserung der Effizienz und Effektivität von Fertigungsprozessen",
          content: "Gewinne tiefe Einblicke in deine Produktionsabläufe. Identifiziere Ineffizienzen in Produktionslinien, optimiere Maschinenauslastung und reduziere Zykluszeiten. Verfolge, wie Materialien durch deine Anlage fließen, verstehe, wo Qualitätsprobleme entstehen, und verbessere die Gesamtanlageneffektivität (OEE) durch datengestützte Prozessverbesserungen."
        },
        {
          title: "Qualitätskontrolle & Compliance",
          subtitle: "Sicherstellung konsistenter Qualitätsstandards und regulatorischer Compliance",
          content: "Stelle konsistente Qualitätsstandards in allen Produktionsstufen sicher. Überwache Qualitätsprüfpunkte, verfolge Fehlerquoten und identifiziere Ursachen von Qualitätsproblemen. Halte Compliance mit Branchenstandards und Vorschriften aufrecht, indem du Prozesseinhaltung dokumentierst und Bereiche identifizierst, in denen Verfahren verstärkt werden müssen."
        },
        {
          title: "Vorausschauende Wartung",
          subtitle: "Reduzierung ungeplanter Ausfallzeiten durch proaktive Wartung",
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
          subtitle: "Reduce processing time and improve customer satisfaction",
          content: "Dramatically reduce claims processing time by identifying bottlenecks and inefficiencies in your workflows. Automate routine tasks, route complex cases to the right specialists faster, and ensure consistent processing across all claims. Track processing times, identify patterns that cause delays, and optimize your claims handling processes for better customer satisfaction."
        },
        {
          title: "Risk Assessment & Underwriting",
          subtitle: "Improve accuracy and consistency in risk evaluation",
          content: "Improve risk assessment accuracy by analyzing historical process data and identifying patterns that correlate with risk levels. Optimize underwriting workflows, reduce manual review times, and ensure consistent risk evaluation across all policies. Use process insights to refine risk models and make more informed underwriting decisions."
        },
        {
          title: "Regulatory Compliance",
          subtitle: "Maintain compliance through comprehensive process documentation",
          content: "Maintain compliance with insurance regulations through comprehensive process documentation and monitoring. Track adherence to required procedures, identify areas where compliance processes break down, and ensure all regulatory requirements are consistently met. Generate audit-ready documentation automatically from your process data."
        }
      ],
      de: [
        {
          title: "Schadensbearbeitungs-Effizienz",
          subtitle: "Reduzierung der Bearbeitungszeit und Verbesserung der Kundenzufriedenheit",
          content: "Reduziere die Schadensbearbeitungszeit erheblich, indem du Engpässe und Ineffizienzen in deinen Workflows identifizierst. Automatisiere Routineaufgaben, leite komplexe Fälle schneller an die richtigen Spezialisten weiter und stelle konsistente Bearbeitung bei allen Schäden sicher. Verfolge Bearbeitungszeiten, identifiziere Muster, die Verzögerungen verursachen, und optimiere deine Schadensbearbeitungsprozesse für bessere Kundenzufriedenheit."
        },
        {
          title: "Risikobewertung & Underwriting",
          subtitle: "Verbesserung der Genauigkeit und Konsistenz bei der Risikobewertung",
          content: "Verbessere die Genauigkeit der Risikobewertung durch Analyse historischer Prozessdaten und Identifikation von Mustern, die mit Risikoniveaus korrelieren. Optimiere Underwriting-Workflows, reduziere manuelle Prüfzeiten und stelle konsistente Risikobewertung bei allen Policen sicher. Nutze Prozesserkenntnisse, um Risikomodelle zu verfeinern und fundiertere Underwriting-Entscheidungen zu treffen."
        },
        {
          title: "Regulatorische Compliance",
          subtitle: "Aufrechterhaltung der Compliance durch umfassende Prozessdokumentation",
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
      de: "Entdecke, wie Noreja dabei helfen kann Compliance and Risikomanagement im Banking zu verbessern."
    },
    description: {
      en: "Enhance banking operations with process intelligence. Improve loan processing, optimize compliance workflows, and deliver better customer experiences through streamlined financial processes.",
      de: "Norejas innovativer Process-Intelligence-Ansatz und Banking sind wie gemacht für einander. Mit der Fähigkeit daten- und systemüberfreifend tiefgreifende Strukturprobleme aufzudecken, können wir eine Vielzahl gängiger Probleme in der Branche lösen. Nun präsentieren wir einige Anwendungsfelder, in denen unsere Lösung die Prozesse deiner Organisation schlanker und effektiver machen kann!"
    },
    sections: {
      en: [
        {
          title: "Loan Processing & Credit Assessment",
          subtitle: "Accelerate processing while maintaining thorough risk assessment",
          content: "Accelerate loan processing while maintaining thorough risk assessment. Identify bottlenecks in application workflows, optimize credit evaluation processes, and reduce time-to-decision for customers. Analyze approval patterns to ensure consistent decision-making and identify opportunities to streamline without compromising risk management."
        },
        {
          title: "Compliance & Risk Management",
          subtitle: "Ensure regulatory compliance across all banking operations",
          content: "Ensure regulatory compliance across all banking operations. Monitor adherence to KYC (Know Your Customer) procedures, track AML (Anti-Money Laundering) workflows, and identify compliance gaps before they become issues. Automate compliance reporting and maintain comprehensive audit trails for all financial processes."
        },
        {
          title: "Customer Onboarding & Service",
          subtitle: "Improve customer experiences through optimized processes",
          content: "Improve customer onboarding experiences by optimizing account opening processes. Reduce onboarding time, eliminate unnecessary steps, and ensure consistent service quality. Track customer service interactions to identify common issues and optimize support workflows for faster resolution times."
        }
      ],
      de: [
        {
          title: "Betrugserkennung",
          subtitle: "Betrügerisches Verhalten schnell erkennen",
          content: "Die Betrugserkennung im Bankwesen durch Process Mining nutzt die Datenanalyse, um betrügerische Aktivitäten bei verschiedenen Transaktionen zu erkennen und zu verhindern. Durch die Untersuchung von Transaktionsdaten und Benutzerverhaltensmustern können Banken Anomalien, ungewöhnliche Trends oder Abweichungen vom typischen Kundenverhalten aufdecken. Dieser proaktive Ansatz ermöglicht es Finanzinstituten, potenziell betrügerische Transaktionen in Echtzeit zu erkennen und schnell einzugreifen, bevor erhebliche Verluste entstehen. Durch die Verbesserung der Betrugserkennungsfunktionen können Banken die mit Betrug verbundenen Kosten erheblich senken und gleichzeitig das Vertrauen ihrer Kunden erhalten."
        },
        {
          title: "Riskikomanagement",
          subtitle: "Erkennung und Vermeidung von Compliancerisiken",
          content: "Beim Compliance- und Risikomanagement mit Hilfe von Process Mining geht es darum, die Einhaltung aufsichtsrechtlicher Standards und interner Risikorichtlinien zu gewährleisten. Durch die Analyse von Transaktionsflüssen und betrieblichen Abläufen können Banken potenzielle Compliance-Risiken erkennen, z. B. unzureichende Dokumentation oder inkonsistente Praktiken. Diese Transparenz ermöglicht es den Instituten, Korrekturmaßnahmen zu ergreifen, Schulungsprogramme zu erweitern und die Kontrollmechanismen zu verbessern. Durch die Einhaltung strenger Compliance-Praktiken und ein effektives Risikomanagement können Banken Strafen vermeiden, ihren Ruf schützen und das Vertrauen von Aufsichtsbehörden und Kunden gleichermaßen stärken."
        },
        {
          title: "Kreditantrag- & Approval-Prozess",
          subtitle: "Analyse von Flaschenhälsen für effizientere Abläufe",
          content: "Bei dem Darlehnsantrag und -genehmigung mithilfe von Process Mining liegt der Schwerpunkt auf der Optimierung der Prozessstruktur. Durch die Untersuchung des Arbeitsablaufs von der Antragstellung bis zur endgültigen Genehmigung können Banken Verzögerungen, Redundanzen und Bereiche identifizieren, in denen die Kundenerfahrung verbessert werden kann. So kann das Process Mining beispielsweise aufzeigen, dass bestimmte Kreditarten aufgrund komplexer Überprüfungsprozesse immer wieder längere Genehmigungszeiten erfordern. Durch die Beseitigung dieser Ineffizienzen und die Automatisierung von Teilen des Arbeitsablaufs können die Banken den Kreditgenehmigungsprozess beschleunigen, die Kundenzufriedenheit verbessern und letztendlich das Kreditvolumen erhöhen."
        }
      ]
    },
    additionalUseCases: [
      {
        id: "kyc-compliance",
        title: {
          en: "Know-Your-Customer-Compliance",
          de: "Know-Your-Customer-Compliance"
        },
        description: {
          en: "Process Mining optimizes KYC processes by uncovering bottlenecks, automating tasks, and improving data management to ensure compliance and enhance customer experience.",
          de: "Process Mining optimiert KYC-Prozesse, indem es Engpässe aufdeckt, Aufgaben automatisiert und die Datenverwaltung verbessert, um Compliance zu gewährleisten und die Kundenerfahrung zu steigern."
        },
        icon: "FileCheck"
      },
      {
        id: "credit-card-application",
        title: {
          en: "Credit Card Application",
          de: "Kreditkartenantrag"
        },
        description: {
          en: "The optimization of credit card applications through Process Mining helps banks identify reasons for rejection, delays, and customer drop-offs to improve the application process, shorten approval times, and increase customer satisfaction.",
          de: "Die Optimierung von Kreditkartenanträgen durch Process Mining hilft Banken, Ablehnungsgründe, Verzögerungen und Kundenabbrüche zu identifizieren, um den Antragsprozess zu verbessern, die Genehmigungszeiten zu verkürzen und die Kundenzufriedenheit zu steigern."
        },
        icon: "CreditCard"
      },
      {
        id: "account-opening-onboarding",
        title: {
          en: "Account Opening & Onboarding",
          de: "Kontoeröffnung & Onboarding"
        },
        description: {
          en: "The analysis of account opening processes using Process Mining helps banks identify inefficient processes and increase speed, efficiency, and customer satisfaction through automation and optimization.",
          de: "Die Analyse der Kontoeröffnungsabläufe mittels Process Mining hilft Banken, ineffiziente Prozesse zu identifizieren und durch Automatisierung und Optimierung die Geschwindigkeit, Effizienz und Kundenzufriedenheit zu steigern."
        },
        icon: "UserPlus"
      }
    ]
  }
];

// Additional use cases for the "und mehr..." section
export interface AdditionalUseCase {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon: string; // Icon name from lucide-react
}

