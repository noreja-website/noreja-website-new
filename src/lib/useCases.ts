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
      en: "Discover how Noreja can increase efficiency in Supply Chain Management.",
      de: "Entdecke, wie Noreja die Effizienz im Supply Chain Management erhöhen kann."
    },
    description: {
      en: "Noreja's innovative Process Intelligence approach and Supply Chain Management are made for each other. With the ability to uncover deep structural problems across data and systems, we can solve a variety of common problems in the industry. Now we present some application areas where our solution can make your organization's processes leaner and more effective!",
      de: "Norejas innovativer Process-Intelligence-Ansatz und Supply Chain Management sind wie gemacht für einander. Mit der Fähigkeit daten- und systemüberfreifend tiefgreifende Strukturprobleme aufzudecken, können wir eine Vielzahl gängiger Probleme in der Branche lösen. Nun präsentieren wir einige Anwendungsfelder, in denen unsere Lösung die Prozesse deiner Organisation schlanker und effektiver machen kann!"
    },
    sections: {
      en: [
        {
          title: "Production Line Optimization",
          subtitle: "Increasing efficiency of processes and resources",
          content: "Production line optimization through Process Mining focuses on improving the efficiency and effectiveness of manufacturing processes. By analyzing production workflows, companies can identify bottlenecks, delays, and underutilized resources in production. For example, Process Mining can reveal that certain machines frequently stand still due to maintenance problems or that certain production steps take longer than expected. By eliminating these inefficiencies, manufacturers can streamline their processes, increase throughput, and reduce operating costs. This optimization not only improves production times but also overall product quality and customer satisfaction.",
          imagePath: getUseCaseImagePath("production-line-optimization")
        },
        {
          title: "Inventory Optimization",
          subtitle: "Avoiding overstock or understock situations",
          content: "Inventory optimization through Process Mining involves analyzing inventory levels and turnover rates to ensure efficient inventory management. By examining historical sales data, reorder patterns, and supplier lead times, companies can identify trends and forecast demand more accurately. These insights enable companies to maintain optimal inventory levels, reduce overstock, and minimize stockouts. By optimizing inventory, companies can reduce storage costs, improve cash flow, and increase service quality. Ultimately, effective inventory management leads to a more responsive supply chain and higher customer satisfaction.",
          imagePath: getUseCaseImagePath("inventory-optimization")
        },
        {
          title: "Emissions Tracking (CO2)",
          subtitle: "Reducing the ecological footprint",
          content: "Emissions tracking through Process Mining focuses on monitoring and analyzing greenhouse gas emissions throughout the supply chain. By examining data from production processes, transportation, and logistics, companies can identify the main sources of emissions and areas with improvement potential. This analysis enables companies to develop strategies to reduce their CO2 emissions, for example by optimizing transport routes or improving energy efficiency in production. By actively tracking and managing emissions, companies can meet legal requirements, strengthen their sustainability initiatives, and improve their reputation as a company.",
          imagePath: getUseCaseImagePath("emissions-tracking")
        }
      ],
      de: [
        {
          title: "Optimierung der Produktionslinie",
          subtitle: "Effizienzsteigerung der Abläufe und Ressourcen",
          content: "Die Optimierung der Produktionslinien durch Process Mining konzentriert sich auf die Verbesserung der Effizienz und Effektivität von Fertigungsprozessen. Durch die Analyse von Produktionsabläufen können Unternehmen Engpässe, Verzögerungen und nicht ausgelastete Ressourcen in der Produktion erkennen. So kann das Process Mining beispielsweise aufzeigen, dass bestimmte Maschinen aufgrund von Wartungsproblemen häufig stillstehen oder dass bestimmte Produktionsschritte länger als erwartet dauern. Durch die Beseitigung dieser Ineffizienzen können Hersteller ihre Abläufe rationalisieren, den Durchsatz erhöhen und die Betriebskosten senken. Diese Optimierung verbessert nicht nur die Produktionszeiten, sondern auch die allgemeine Produktqualität und die Kundenzufriedenheit.",
          imagePath: getUseCaseImagePath("production-line-optimization")
        },
        {
          title: "Optimierung der Lagerbestände",
          subtitle: "Vermeidung von Über- oder Unterbeständen",
          content: "Bestandsoptimierung durch Process Mining beinhaltet die Analyse von Lagerbeständen und Umschlagshäufigkeiten, um eine effiziente Bestandsverwaltung zu gewährleisten. Durch die Untersuchung historischer Verkaufsdaten, Nachbestellungsmuster und Vorlaufzeiten von Lieferanten können Unternehmen Trends erkennen und die Nachfrage genauer prognostizieren. Diese Erkenntnisse ermöglichen es Unternehmen, optimale Lagerbestände aufrechtzuerhalten, Überbestände zu reduzieren und Fehlbestände zu minimieren. Durch die Optimierung der Bestände können Unternehmen ihre Lagerhaltungskosten senken, den Cashflow verbessern und die Servicequalität steigern. Letztendlich führt eine effektive Bestandsverwaltung zu einer reaktionsfähigeren Lieferkette und einer höheren Kundenzufriedenheit.",
          imagePath: getUseCaseImagePath("inventory-optimization")
        },
        {
          title: "Emissions-Tracking (CO2)",
          subtitle: "Reduktion des ökologischen Fußabdruckes",
          content: "Die Verfolgung von Emissionen mittels Process Mining konzentriert sich auf die Überwachung und Analyse von Treibhausgasemissionen in der gesamten Lieferkette. Durch die Untersuchung von Daten aus Produktionsprozessen, Transport und Logistik können Unternehmen die wichtigsten Emissionsquellen und Bereiche mit Verbesserungspotenzial identifizieren. Diese Analyse ermöglicht es den Unternehmen, Strategien zur Verringerung ihres CO2-Ausstoßes zu entwickeln, z. B. durch die Optimierung von Transportwegen oder die Verbesserung der Energieeffizienz in der Produktion. Durch aktives Verfolgen und Verwalten von Emissionen können Unternehmen die gesetzlichen Anforderungen erfüllen, ihre Nachhaltigkeitsinitiativen verstärken und ihren Ruf als Unternehmen verbessern.",
          imagePath: getUseCaseImagePath("emissions-tracking")
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
      en: "Discover how Noreja can help achieve new productivity levels in Manufacturing.",
      de: "Entdecke, wie Noreja dabei helfen kann neue Produktivitätslevel im Manufacturing zu erreichen."
    },
    description: {
      en: "Noreja's innovative Process Intelligence approach and Manufacturing are made for each other. With the ability to uncover deep structural problems across data and systems, we can solve a variety of common problems in the industry. Now we present some application areas where our solution can make your organization's processes leaner and more effective!",
      de: "Norejas innovativer Process-Intelligence-Ansatz und Manufacturing sind wie gemacht für einander. Mit der Fähigkeit daten- und systemüberfreifend tiefgreifende Strukturprobleme aufzudecken, können wir eine Vielzahl gängiger Probleme in der Branche lösen. Nun präsentieren wir einige Anwendungsfelder, in denen unsere Lösung die Prozesse deiner Organisation schlanker und effektiver machen kann!"
    },
    sections: {
      en: [
        {
          title: "Procurement Optimization",
          subtitle: "Optimizing efficiency through reduction of manual activities",
          content: "Procurement optimization through Process Mining focuses on improving the efficiency of purchasing and supplier management processes. By analyzing procurement workflows, manufacturing companies can identify procurement delays, supplier bottlenecks, or recurring bottlenecks (e.g., in approvals or releases) that slow down the supply chain. Process analysis can, for example, reveal frequent delays with certain suppliers or anomalies in approval cycles. By optimizing procurement processes, manufacturers can shorten lead times, negotiate better supplier terms, and ensure timely availability of raw materials. This ultimately leads to cost savings and more flexible production processes.",
          imagePath: getUseCaseImagePath("capital-management")
        },
        {
          title: "Defect & Waste Reduction",
          subtitle: "Reducing time-intensive steps and rework",
          content: "Reducing defects and waste through Process Mining focuses on identifying inefficiencies that lead to product defects and material waste. By analyzing production workflows and quality control data, manufacturing companies can identify the phases or points where errors occur most frequently or where too much material is consumed. Process Mining can uncover recurring problems, such as equipment malfunctions or incorrect machine settings that lead to deviations from quality standards. By eliminating these inefficiencies, manufacturers can reduce the scrap rate, improve product quality, and lower overall production costs, leading to a more sustainable and profitable operation.",
          imagePath: getUseCaseImagePath("defect-waste-reduction")
        },
        {
          title: "Working Capital Management",
          subtitle: "Optimizing payment cycles and intelligent prioritization",
          content: "Working capital management using Process Mining focuses on optimizing the flow of capital tied up in operations, such as inventory, liabilities, and receivables. By analyzing financial transactions and operational data, companies can identify inefficiencies in payment cycles or excess inventory that burden cash flow. For example, Process Mining can reveal delays in invoicing or sluggish supplier payments that affect working capital. When these issues are addressed, manufacturers can improve their liquidity, reduce financing costs, and invest more efficiently in growth and innovation.",
          imagePath: getUseCaseImagePath("working-capital")
        }
      ],
      de: [
        {
          title: "Optimierung der Beschaffung",
          subtitle: "Optimierung der Effizienz durch Reduktion manueller Tätigkeiten",
          content: "Die Optimierung der Beschaffung mittels Process Mining konzentriert sich auf die Verbesserung der Effizienz von Einkaufs- und Lieferantenmanagementprozessen. Durch die Analyse von Beschaffungsabläufen können produzierende Unternehmen Verzögerungen bei der Beschaffung, Engpässe bei Lieferanten oder sich wiederholende Flaschenhälse (z. B. bei Genehmigungen oder Freigaben) identifizieren, die die Lieferkette verlangsamen. Die Prozessanalyse kann zum Beispiel häufige Verzögerungen bei bestimmten Lieferanten oder Anomalien in den Genehmigungszyklen aufdecken. Durch die Optimierung der Beschaffungsprozesse können Hersteller die Lead-Times verkürzen, bessere Lieferantenbedingungen aushandeln und die rechtzeitige Verfügbarkeit von Rohstoffen sicherstellen. Dies führt letztlich zu Kosteneinsparungen und flexibleren Produktionsabläufen.",
          imagePath: getUseCaseImagePath("capital-management")
        },
        {
          title: "Defekt- & Ausschussreduzierung",
          subtitle: "Reduktion zeitintensiver Schritte und Rework",
          content: "Die Verringerung von Defekten und Ausschuss durch Process Mining konzentriert sich auf die Ermittlung von Ineffizienzen, die zu Produktfehlern und Materialverschwendung führen. Durch die Analyse von Produktionsabläufen und Qualitätskontrolldaten können produzierende Unternehmen die Phasen oder Stellen ermitteln, in denen am häufigsten Fehler auftreten oder in denen zu viel Material verbraucht wird. Process Mining kann wiederkehrende Probleme aufdecken, z. B. Fehlfunktionen von Anlagen oder falsche Maschineneinstellungen, die zu Abweichungen von Qualitätsstandards führen. Durch die Beseitigung dieser Ineffizienzen können Hersteller die Ausschussrate reduzieren, die Produktqualität verbessern und die Gesamtproduktionskosten senken, was zu einem nachhaltigeren und rentableren Betrieb führt.",
          imagePath: getUseCaseImagePath("defect-waste-reduction")
        },
        {
          title: "Working-Capital-Management",
          subtitle: "Optimierung der Zahlungszyklen und intelligentes Priorisieren",
          content: "Das Working-Capital-Management mithilfe von Process Mining konzentriert sich auf die Optimierung des Flusses der im Betrieb gebundenen Kapitalmittel, wie z. B. Lagerbestände, Verbindlichkeiten und Forderungen. Durch die Analyse von Finanztransaktionen und Betriebsdaten können Unternehmen Ineffizienzen in den Zahlungszyklen oder überschüssige Bestände identifizieren, die den Cashflow belasten. So kann das Process Mining beispielsweise Verzögerungen bei der Rechnungsstellung oder schleppende Lieferantenzahlungen aufdecken, die sich auf das Betriebskapital auswirken. Wenn diese Probleme angegangen werden, können Hersteller ihre Liquidität verbessern, die Finanzierungskosten senken und effizienter in Wachstum und Innovation investieren.",
          imagePath: getUseCaseImagePath("working-capital")
        }
      ]
    },
    additionalUseCases: [
      {
        id: "shop-floor-optimization",
        title: {
          en: "Shop-Floor Optimization",
          de: "Shop-Floor-Optimierung"
        },
        description: {
          en: "The optimization of shop floors through Process Mining improves operational efficiency in production by uncovering bottlenecks and inefficiencies, thereby increasing throughput, shortening lead times, and reducing costs.",
          de: "Die Optimierung des Shop-Floors durch Process Mining verbessert die betriebliche Effizienz in der Produktion, indem sie Engpässe und Ineffizienzen aufdeckt und so den Durchsatz erhöht, die Durchlaufzeiten verkürzt und Kosten senkt."
        },
        icon: "Settings"
      },
      {
        id: "demand-output-forecast",
        title: {
          en: "Demand and Output Forecast",
          de: "Nachfrage- und Output-Prognose"
        },
        description: {
          en: "In demand and production forecasting in manufacturing, Process Mining is used to analyze historical data, improve forecast accuracy, optimize production plans, and reduce inventory costs.",
          de: "Bei der Bedarfs- und Produktionsvorhersage in der Fertigung wird Process Mining eingesetzt, um historische Daten zu analysieren, die Vorhersagegenauigkeit zu verbessern, die Produktionspläne zu optimieren und die Bestandskosten zu senken."
        },
        icon: "TrendingUp"
      },
      {
        id: "warehouse-management",
        title: {
          en: "Warehouse Management",
          de: "Lager-Management"
        },
        description: {
          en: "In inventory management in manufacturing, Process Mining is used to optimize inventory levels, reduce storage costs, avoid production delays, and improve cash flow.",
          de: "Bei der Bestandsverwaltung in der Fertigung wird Process Mining eingesetzt, um die Lagerbestände zu optimieren, die Lagerkosten zu senken, Produktionsverzögerungen zu vermeiden und den Cashflow zu verbessern."
        },
        icon: "Package"
      }
    ]
  },
  {
    id: "insurance",
    title: {
      en: "Insurance",
      de: "Versicherung"
    },
    shortDescription: {
      en: "Discover how Noreja can help analyze claims processes in insurance.",
      de: "Entdecke, wie Noreja dabei helfen kann Claims-Prozesse in der Assekuranz zu analysieren."
    },
    description: {
      en: "Noreja's innovative Process Intelligence approach and insurance are made for each other. With the ability to uncover deep structural problems across data and systems, we can solve a variety of common problems in the industry. Now we present some application areas where our solution can make your organization's processes leaner and more effective!",
      de: "Norejas innovativer Process-Intelligence-Ansatz und die Assekuranz sind wie gemacht für einander. Mit der Fähigkeit daten- und systemüberfreifend tiefgreifende Strukturprobleme aufzudecken, können wir eine Vielzahl gängiger Probleme in der Branche lösen. Nun präsentieren wir einige Anwendungsfelder, in denen unsere Lösung die Prozesse deiner Organisation schlanker und effektiver machen kann!"
    },
    sections: {
      en: [
        {
          title: "Claims Management",
          subtitle: "Processing applications faster and with fewer errors",
          content: "Claims management optimization through Process Mining focuses on improving the efficiency of the processing process. By analyzing the workflow from occurrence to claims settlement, insurers can identify bottlenecks, redundancies, and areas with delays. For example, Process Mining can reveal that certain claims cases frequently stall due to incomplete documentation or excessive manual reviews. By eliminating these inefficiencies, insurers can streamline their processes, shorten processing times, and improve customer satisfaction. This optimization not only improves the overall experience for policyholders but also reduces operating costs, allowing insurers to use their resources more effectively.",
          imagePath: getUseCaseImagePath("claims-optimisation")
        },
        {
          title: "Regulatory Compliance",
          subtitle: "Identifying compliance and legal risks",
          content: "Regulatory compliance analysis through Process Mining focuses on verifying compliance with legal standards and internal guidelines. By analyzing workflow data, insurers can identify potential compliance risks and deviations from established protocols. For example, Process Mining can uncover cases where documentation requirements are not met or procedures are not consistently followed. This transparency enables insurers to take corrective action and improve compliance training programs. By maintaining solid compliance practices, insurers can avoid penalties, protect their reputation, and foster stakeholder trust. Data protection is of utmost importance, especially given the sensitive nature of personal and financial information that insurers handle.",
          imagePath: getUseCaseImagePath("regulatory-compliance")
        },
        {
          title: "Fraud Detection",
          subtitle: "Recognize unauthorized claims",
          content: "Fraud detection through Process Mining helps identify and prevent fraudulent activities in claims and contract management. By examining transaction data and process flows, insurers can uncover unusual patterns, anomalies, or deviations from standard operating procedures. This early detection mechanism is crucial as it enables insurers to intervene before fraudulent claims are processed. In this way, companies can significantly reduce fraud-related costs while improving operational efficiency. Furthermore, this proactive approach ensures that legitimate claims are processed fairly and promptly, maintaining customer trust.",
          imagePath: getUseCaseImagePath("fraud-detection")
        }
      ],
      de: [
        {
          title: "Schadenmanagement",
          subtitle: "Anträge schneller und mit weniger Fehlern bearbeiten",
          content: "Die Optimierung des Schadensmanagements durch Process Mining konzentriert sich auf die Verbesserung der Effizienz des Bearbeitungsprozesses. Durch die Analyse des Arbeitsablaufs von der Entstehung bis zur Schadenregulierung können Versicherer Engpässe, Redundanzen und Bereiche mit Verzögerungen aufspüren. So kann das Process Mining beispielsweise aufzeigen, dass bestimmte Schadenfälle aufgrund unvollständiger Dokumentation oder übermäßiger manueller Überprüfungen häufig ins Stocken geraten. Durch die Beseitigung dieser Ineffizienzen können die Versicherer ihre Abläufe rationalisieren, die Bearbeitungszeiten verkürzen und die Kundenzufriedenheit verbessern. Diese Optimierung verbessert nicht nur das Gesamterlebnis für die Versicherungsnehmer, sondern senkt auch die Betriebskosten, so dass die Versicherer ihre Ressourcen effektiver einsetzen können.",
          imagePath: getUseCaseImagePath("claims-optimisation")
        },
        {
          title: "Regulatorische Compliance",
          subtitle: "Erkennung von Compliance- und Rechtsrisiken",
          content: "Die Analyse der regulatorischen Compliance durch Process Mining konzentriert sich darauf, die Einhaltung gesetzlicher Standards und interner Richtlinien zu überprüfen. Durch die Analyse von Workflow-Daten können Versicherer potenzielle Compliance-Risiken und Abweichungen von etablierten Protokollen erkennen. Beispielsweise können durch Process Mining Fälle aufgedeckt werden, in denen Dokumentationsanforderungen nicht erfüllt werden oder Verfahren nicht konsequent eingehalten werden. Diese Transparenz ermöglicht es den Versicherern, Korrekturmaßnahmen zu ergreifen und Schulungsprogramme zur Einhaltung der Vorschriften zu verbessern. Durch die Aufrechterhaltung solider Compliance-Praktiken können Versicherer Strafen vermeiden, ihren Ruf schützen und das Vertrauen der Beteiligten fördern. Der Datenschutz ist von größter Bedeutung, insbesondere in Anbetracht der sensiblen Natur der persönlichen und finanziellen Informationen, mit denen Versicherer umgehen.",
          imagePath: getUseCaseImagePath("regulatory-compliance")
        },
        {
          title: "Betrugserkennung",
          subtitle: "Erkennen Sie unberechtigte Forderungen",
          content: "Die Betrugserkennung durch Process Mining hilft betrügerische Aktivitäten in der Schaden- und Vertragsverwaltung zu erkennen und zu verhindern. Durch die Untersuchung von Transaktionsdaten und Prozessabläufen können Versicherer ungewöhnliche Muster, Anomalien oder Abweichungen von Standardbetriebsverfahren aufdecken. Dieser Mechanismus zur Früherkennung ist von entscheidender Bedeutung, da er es Versicherern ermöglicht, einzugreifen, bevor betrügerische Ansprüche bearbeitet werden. Auf diese Weise können Unternehmen die mit Betrug verbundenen Kosten erheblich senken und gleichzeitig die betriebliche Effizienz verbessern. Darüber hinaus stellt dieser proaktive Ansatz sicher, dass legitime Ansprüche fair und zeitnah bearbeitet werden und das Vertrauen der Kunden erhalten bleibt.",
          imagePath: getUseCaseImagePath("fraud-detection")
        }
      ]
    },
    additionalUseCases: [
      {
        id: "customer-journey-mapping",
        title: {
          en: "Customer Journey Mapping",
          de: "Customer-Journey-Mapping"
        },
        description: {
          en: "In customer journey mapping, Process Mining can be used to analyze customer interactions, identify pain points, and optimize services. This increases satisfaction and strengthens customer loyalty.",
          de: "Beim Customer Journey Mapping kann Process Mining eingesetzt werden, um Kundeninteraktionen zu analysieren, Pain-Points zu identifizieren und Dienstleistungen zu optimieren. Dies erhöht die Zufriedenheit und steigert die Kundenbindung."
        },
        icon: "Map"
      },
      {
        id: "partner-optimization",
        title: {
          en: "Partner Optimization",
          de: "Partner-Optimierung"
        },
        description: {
          en: "The optimization of preferred partners in the insurance industry can be analyzed through Process Mining to improve collaboration with third-party providers and identify the most efficient and reliable partners. This improves service and reduces costs.",
          de: "Die Optimierung bevorzugter Partner in der Versicherungsbranche kann durch Process Mining analysiert werden, um die Zusammenarbeit mit Drittanbietern zu verbessern und die effizientesten und zuverlässigsten Partner zu identifizieren. Dies verbessert den Service und senkt die Kosten."
        },
        icon: "Users"
      },
      {
        id: "reserve-adjustments",
        title: {
          en: "Reserve Adjustments",
          de: "Rückstellungs-anpassungen"
        },
        description: {
          en: "Retroactive adjustments of reserve amounts can be analyzed with Process Mining to optimize policy corrections, identify causes for reversals, and implement strategies to reduce errors.",
          de: "Nachträgliche Anpassungen der Reservebeträge können mit Process Mining analysiert werden, um Policenkorrekturen zu optimieren, Ursachen für Rückbuchungen zu identifizieren und Strategien zur Fehlerreduzierung umzusetzen."
        },
        icon: "Undo"
      }
    ]
  },
  {
    id: "banking",
    title: {
      en: "Banking",
      de: "Banking"
    },
    shortDescription: {
      en: "Discover how Noreja can help improve Compliance and Risk Management in Banking.",
      de: "Entdecke, wie Noreja dabei helfen kann Compliance and Risikomanagement im Banking zu verbessern."
    },
    description: {
      en: "Noreja's innovative Process Intelligence approach and Banking are made for each other. With the ability to uncover deep structural problems across data and systems, we can solve a variety of common problems in the industry. Now we present some application areas where our solution can make your organization's processes leaner and more effective!",
      de: "Norejas innovativer Process-Intelligence-Ansatz und Banking sind wie gemacht für einander. Mit der Fähigkeit daten- und systemüberfreifend tiefgreifende Strukturprobleme aufzudecken, können wir eine Vielzahl gängiger Probleme in der Branche lösen. Nun präsentieren wir einige Anwendungsfelder, in denen unsere Lösung die Prozesse deiner Organisation schlanker und effektiver machen kann!"
    },
    sections: {
      en: [
        {
          title: "Fraud Detection",
          subtitle: "Quickly recognize fraudulent behavior",
          content: "Fraud detection in banking through Process Mining uses data analysis to detect and prevent fraudulent activities in various transactions. By examining transaction data and user behavior patterns, banks can uncover anomalies, unusual trends, or deviations from typical customer behavior. This proactive approach enables financial institutions to detect potentially fraudulent transactions in real-time and intervene quickly before significant losses occur. By improving fraud detection capabilities, banks can significantly reduce fraud-related costs while maintaining customer trust.",
          imagePath: getUseCaseImagePath("fraud-detection")
        },
        {
          title: "Risk Management",
          subtitle: "Identifying and avoiding compliance risks",
          content: "Compliance and risk management with Process Mining is about ensuring adherence to regulatory standards and internal risk guidelines. By analyzing transaction flows and operational processes, banks can identify potential compliance risks, such as insufficient documentation or inconsistent practices. This transparency enables institutions to take corrective action, expand training programs, and improve control mechanisms. By adhering to strict compliance practices and effective risk management, banks can avoid penalties, protect their reputation, and strengthen the trust of both regulators and customers.",
          imagePath: getUseCaseImagePath("risk-management")
        },
        {
          title: "Loan Application & Approval Process",
          subtitle: "Analyzing bottlenecks for more efficient processes",
          content: "Loan application and approval using Process Mining focuses on optimizing the process structure. By examining the workflow from application to final approval, banks can identify delays, redundancies, and areas where customer experience can be improved. For example, Process Mining can reveal that certain loan types consistently require longer approval times due to complex review processes. By eliminating these inefficiencies and automating parts of the workflow, banks can accelerate the loan approval process, improve customer satisfaction, and ultimately increase loan volume.",
          imagePath: getUseCaseImagePath("loan-application-approval")
        }
      ],
      de: [
        {
          title: "Betrugserkennung",
          subtitle: "Betrügerisches Verhalten schnell erkennen",
          content: "Die Betrugserkennung im Bankwesen durch Process Mining nutzt die Datenanalyse, um betrügerische Aktivitäten bei verschiedenen Transaktionen zu erkennen und zu verhindern. Durch die Untersuchung von Transaktionsdaten und Benutzerverhaltensmustern können Banken Anomalien, ungewöhnliche Trends oder Abweichungen vom typischen Kundenverhalten aufdecken. Dieser proaktive Ansatz ermöglicht es Finanzinstituten, potenziell betrügerische Transaktionen in Echtzeit zu erkennen und schnell einzugreifen, bevor erhebliche Verluste entstehen. Durch die Verbesserung der Betrugserkennungsfunktionen können Banken die mit Betrug verbundenen Kosten erheblich senken und gleichzeitig das Vertrauen ihrer Kunden erhalten.",
          imagePath: getUseCaseImagePath("fraud-detection")
        },
        {
          title: "Riskikomanagement",
          subtitle: "Erkennung und Vermeidung von Compliancerisiken",
          content: "Beim Compliance- und Risikomanagement mit Hilfe von Process Mining geht es darum, die Einhaltung aufsichtsrechtlicher Standards und interner Risikorichtlinien zu gewährleisten. Durch die Analyse von Transaktionsflüssen und betrieblichen Abläufen können Banken potenzielle Compliance-Risiken erkennen, z. B. unzureichende Dokumentation oder inkonsistente Praktiken. Diese Transparenz ermöglicht es den Instituten, Korrekturmaßnahmen zu ergreifen, Schulungsprogramme zu erweitern und die Kontrollmechanismen zu verbessern. Durch die Einhaltung strenger Compliance-Praktiken und ein effektives Risikomanagement können Banken Strafen vermeiden, ihren Ruf schützen und das Vertrauen von Aufsichtsbehörden und Kunden gleichermaßen stärken.",
          imagePath: getUseCaseImagePath("risk-management")
        },
        {
          title: "Kreditantrag- & Approval-Prozess",
          subtitle: "Analyse von Flaschenhälsen für effizientere Abläufe",
          content: "Bei dem Darlehnsantrag und -genehmigung mithilfe von Process Mining liegt der Schwerpunkt auf der Optimierung der Prozessstruktur. Durch die Untersuchung des Arbeitsablaufs von der Antragstellung bis zur endgültigen Genehmigung können Banken Verzögerungen, Redundanzen und Bereiche identifizieren, in denen die Kundenerfahrung verbessert werden kann. So kann das Process Mining beispielsweise aufzeigen, dass bestimmte Kreditarten aufgrund komplexer Überprüfungsprozesse immer wieder längere Genehmigungszeiten erfordern. Durch die Beseitigung dieser Ineffizienzen und die Automatisierung von Teilen des Arbeitsablaufs können die Banken den Kreditgenehmigungsprozess beschleunigen, die Kundenzufriedenheit verbessern und letztendlich das Kreditvolumen erhöhen.",
          imagePath: getUseCaseImagePath("loan-application-approval")
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

