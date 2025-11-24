import type { Language } from "./translations";

// Dynamically import all customer logos
const customerLogoImages = import.meta.glob<{ default: string }>(
  '../assets/customers/*.{png,jpg,jpeg,svg,webp}',
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

export interface SuccessStoryFinding {
  title: string;
  content: string;
}

export interface SuccessStoryDetailItem {
  imagePath?: string; // Optional image path - items can alternate between text-only and image+text
  content: string;
  number?: string; // Optional number for numbered findings (e.g., "7329")
}

export interface SuccessStory {
  id: string;
  companyName: string;
  logoUrl: string;
  summary: Record<Language, string>;
  subtitle: Record<Language, string>;
  whoIsSection: Record<Language, {
    title: string;
    content: string;
  }>;
  blindSpotsSection: Record<Language, {
    title: string;
    content: string;
  }>;
  findingsSection: Record<Language, {
    title: string;
    findings: SuccessStoryFinding[];
  }>;
  detailSection: Record<Language, {
    title: string;
    items: SuccessStoryDetailItem[]; // Variable number of items, alternating between text and image+text
  }>;
  nextStepsSection: Record<Language, {
    title: string;
    content?: string; // Optional for backward compatibility - use items instead
    imagePath?: string; // Optional for backward compatibility - use items instead
    items?: SuccessStoryDetailItem[]; // Optional items array for multiple content elements and images
  }>;
  downloadAssetId: string; // Base ID without language suffix (e.g., "success-story-megatron")
  keyStat?: Record<Language, {
    value: string;
    metric: string;
  }>;
  externalUrl: string;
  industry: Record<Language, string>;
  company_size: Record<Language, string>;
}

export const successStories: SuccessStory[] = [
  {
    id: "hector",
    companyName: "Hector",
    logoUrl: getImagePath(customerLogoImages, "hector_logo_white.png"),
    summary: {
      en: "Hector transformed their data pipeline and reduced processing time by 75% while increasing accuracy across all departments.",
      de: "Hector transformierte seine Datenpipeline und reduzierte die Verarbeitungszeit um 75%, während gleichzeitig die Genauigkeit in allen Abteilungen erhöht wurde."
    },
    subtitle: {
      en: "How Process Mining transformed claims processing efficiency",
      de: "Wie Process Mining die Effizienz der Datenverarbeitung transformiert"
    },
    whoIsSection: {
      en: {
        title: "Who is Hector?",
        content: "Hector is an innovative insurer in the field of motor vehicle insurance solutions and sees itself as an innovation leader. As a digital pioneer, the focus is on efficient processes through their own scalable and adaptable platform ZEUSS®, which leads to lower premiums."
      },
      de: {
        title: "Wer ist Hector?",
        content: "Hector ist ein innovativer Assekuradeur im Bereich der Kfz-Versicherungslösungen und sieht sich als Innovationsführer. Als digitaler Vorreiter liegt der Fokus auf effizienten Prozessen mittels der eigenen skalier- und adaptierbare Plattform ZEUSS®, die zu niedrigeren Prämien führen."
      }
    },
    blindSpotsSection: {
      en: {
        title: "Where were the blind spots?",
        content: "High rates of reopened claims without clear reasons being apparent. Delays in claims processing due to unforeseen bottlenecks. The impact of subsequent adjustments to reserve provisions in claims settlement on the process was unclear."
      },
      de: {
        title: "Wo waren die Blind-Spots?",
        content: "Hohe Raten an wiedereröffneten Schadenfällen, ohne dass die Gründe dafür klar ersichtlich waren. Verzögerungen in der Schadensabwicklung aufgrund unvorhergesehener Engpässe. Die Auswirkungen nachträglicher Anpassungen der Reserverückstellungen in der Schadensregulierung auf den Prozess waren unklar."
      }
    },
    findingsSection: {
      en: {
        title: "What did we find?",
        findings: [
          {
            title: "High Number of Claim Reopenings",
            content: "We identified recurring communication patterns between cooperating insurance companies and Hector (as underwriter) as well as document flows between these entities that cause problems. We found that a large portion of documents only arrived after the claim was closed and which document types are typically responsible for reopening."
          },
          {
            title: "Bottleneck Due to Delayed Invoices",
            content: "We found that the main factor for massive delays (up to several months) is related to repair invoices, because appointment scheduling in maintenance workshops takes too long. As long as these invoices have not been received and reviewed, claims cannot be processed, leading to a backlog that causes delays."
          },
          {
            title: "Subsequent Correction of Reserve Values",
            content: "We found that frequent adjustments to reserve values led to backward jumps in the process and required an additional manual step to enter the updates into the system. This extended the time required to close claims. This is an important part of risk management and financial planning that needs to be carefully reviewed."
          },
          {
            title: "Damage Event After Claim Reporting",
            content: "Some applications were submitted with reporting dates that preceded the actual damage occurrence, leading to complications in processing the applications. These discrepancies required additional investigations, further delaying resolution and making the processing of such claims even more complicated. This can also indicate fraud."
          }
        ]
      },
      de: {
        title: "Was haben wir gefunden?",
        findings: [
          {
            title: "Hohe Anzahl an Schaden-Re-Openings",
            content: "Wir identifizierten wiederkehrende Kommunikationsmuster zwischen kooperierenden Versicherungsgesellschaften und Hector (als Underwriter) sowie die Dokumentenflüsse zwischen diesen Einheiten, die Probleme verursachen. Wir stellten fest, dass ein großer Teil der Dokumente erst nach dem Abschluss des Schadenfalls einging und welche Dokumententypen in der Regel für die Wiedereröffnung verantwortlich sind."
          },
          {
            title: "Engpass aufgrund verzögerter Rechnungen",
            content: "Wir haben festgestellt, dass der Hauptfaktor für die massiven Verzögerungen (bis zu mehreren Monaten) mit den Reparaturrechnungen zusammenhängt, weil die Terminvergabe in den Wartungswerkstätten zu lange dauert. Solange diese Rechnungen nicht eingegangen und geprüft sind, können die Forderungen nicht bearbeitet werden, was zu einem Rückstau führt, der zu Verzögerungen führt."
          },
          {
            title: "Nachträgliche Korrektur der Rückstellungswerte",
            content: "Wir stellten fest, dass häufige Anpassungen der Reservewerte zu Rücksprüngen im Prozess führten und einen zusätzlichen manuellen Schritt zur Eingabe der Aktualisierungen in das System erforderten. Dadurch verlängerte sich die Zeit, die für den Abschluss von Ansprüchen benötigt wurde. Dies ist ein wichtiger Teil des Risikomanagements und der Finanzplanung, der sorgfältig überprüft werden muss."
          },
          {
            title: "Schadenereignis nach Schadenmeldung",
            content: "Einige Anträge wurden mit Meldedaten eingereicht, die dem tatsächlichen Schadenseintritt vorausgingen, was zu Komplikationen bei der Bearbeitung der Anträge führte. Diese Diskrepanzen erforderten zusätzliche Untersuchungen, was die Lösung weiter verzögerte und die Bearbeitung solcher Ansprüche noch komplizierter machte. Dies kann auch auf Betrug hindeuten."
          }
        ]
      }
    },
    detailSection: {
      en: {
        title: "In Detail",
        items: [
          {
            number: "7329",
            content: "Claims are reopened after their actual completion. This requires additional manual processing steps, which lead to high costs."
          },
          {
            number: "3354",
            content: "Claims are closed after being reported by the injured party, without a documented intermediate step. This can lead to steps being forgotten or not sufficiently documented."
          },
          {
            number: "2188",
            content: "Claims are created or imported into IT systems before the reporting date is registered. This means that the data is likely delivered late. This increases the risk that it will have to be manually reprocessed later."
          },
          {
            number: "2000",
            content: "Claims are marked as closed even before they are created. This means that in some cases, data is subsequently entered into the systems, leading to poorer data quality."
          },
          {
            number: "572",
            content: "Claims have a reporting date that precedes the damage event. This constitutes a causal violation and can indicate either a manual input error or fraudulent behavior."
          }
        ]
      },
      de: {
        title: "Im Detail",
        items: [
          {
            number: "7329",
            content: "Schadenfälle werden nach dem eigentlichen Abschluss erneut geöffnet. Dies erfordert zusätzliche manuelle Bearbeitungsschritte, die zu hohen Kosten führen."
          },
          {
            number: "3354",
            content: "Schadenfälle werden nach der Meldung durch den Geschädigten abgeschlossen, ohne dass ein dokumentierter Zwischenschritt erfolgt. Dies kann dazu führen, dass Schritte vergessen oder nicht ausreichend dokumentiert werden."
          },
          {
            number: "2188",
            content: "Schadenfälle werden erstellt oder in die IT-Systeme importiert, bevor das Meldedatum registriert ist. Das bedeutet, dass die Daten wahrscheinlich verspätet geliefert werden. Dies erhöht das Risiko, dass sie später manuell nachbearbeitet werden müssen."
          },
          {
            number: "2000",
            content: "Schadenfälle werden als abgeschlossen markiert, noch bevor sie erstellt werden. Das bedeutet, dass in einigen Fällen Daten nachträglich in die Systeme eingegeben werden, was zu schlechterer Datenqualität führt."
          },
          {
            number: "572",
            content: "Schadenfälle haben ein Meldedatum, das vor dem Schadensereignis liegt. Dies stellt einen kausalen Verstoß dar und kann entweder auf einen manuellen Eingabefehler oder auf betrügerisches Verhalten hinweisen."
          }
        ]
      }
    },
    nextStepsSection: {
      en: {
        title: "Next Steps",
        content: "Hector continues to leverage Process Mining insights to further optimize their operations."
      },
      de: {
        title: "Nächste Schritte",
        content: "Hector nutzt weiterhin Process Mining-Erkenntnisse, um seine Operationen weiter zu optimieren."
      }
    },
    downloadAssetId: "success-story-hector",
    keyStat: {
      en: {
        value: "75%",
        metric: "Processing Time Reduction"
      },
      de: {
        value: "75%",
        metric: "Reduzierung der Verarbeitungszeit"
      }
    },
    externalUrl: "https://example.com/case-studies/techcorp",
    industry: {
      en: "Insurance",
      de: "Versicherung"
    },
    company_size: {
      en: "1000+ employees",
      de: "1000+ Mitarbeiter"
    }
  },
  {
    id: "megatron",
    companyName: "Megatron",
    logoUrl: getImagePath(customerLogoImages, "megatron_logo_white_xlarge.png"),
    summary: {
      en: "Megatron leveraged Process Mining to uncover blind spots and identify optimization potential in production, resulting in significant improvements in process transparency and efficiency.",
      de: "Megatron nutzte Process Mining, um blinde Flecken aufzudecken und Optimierungspotenziale in der Produktion zu identifizieren, was zu erheblichen Verbesserungen der Prozesstransparenz und Effizienz führte."
    },
    subtitle: {
      en: "How Process Mining uncovers blind spots and identifies optimization potential in production",
      de: "Wie Process Mining blinde Flecken aufdeckt und Optimierungspotenziale in der Produktion identifiziert"
    },
    whoIsSection: {
      en: {
        title: "Who is Megatron?",
        content: "MEGATRON Elektronik GmbH & Co. KG, based in Putzbrunn near Munich, specializes in sensor technology and precision measurement technology. The company develops and produces high-quality components primarily for industrial applications and stands for precision, reliability, and customer-specific solutions in the electronics industry."
      },
      de: {
        title: "Wer ist Megatron?",
        content: "MEGATRON Elektronik GmbH & Co. KG mit Sitz in Putzbrunn bei München ist spezialisiert auf Sensortechnologie und Präzisionsmesstechnik. Das Unternehmen entwickelt und produziert hochwertige Komponenten vor allem für industrielle Anwendungen und steht für Präzision, Zuverlässigkeit und kundenspezifische Lösungen in der Elektronikbranche."
      }
    },
    blindSpotsSection: {
      en: {
        title: "Where were the blind spots?",
        content: "Optimization potential in the use of the ERP system through more targeted collection of relevant information along process chains. Low transparency regarding the status of orders and customer orders."
      },
      de: {
        title: "Wo waren die Blind-Spots?",
        content: "Optimierungspotenzial in der Nutzung des ERP-Systems durch die gezieltere Erfassung relevanter Informationen entlang der Prozessketten. Niedrige Transparenz bezüglich des Status von Bestellungen und Kundenaufträgen."
      }
    },
    findingsSection: {
      en: {
        title: "What did we find?",
        findings: [
          {
            title: "Optimizable Order Assignment",
            content: "The current system does not allow direct assignment of production orders to customer orders. Such a link would improve traceability in production, make process control more efficient, and significantly simplify customer communication."
          },
          {
            title: "More Differentiated Discount Conditions",
            content: "Previous discount conditions offered optimization potential due to their relatively homogeneous handling and sometimes led to avoidable financial disadvantages. A granular differentiation between customers with different payment behaviors could unlock cash flow potential."
          },
          {
            title: "Work Step Recording in Production",
            content: "Individual work steps in production are currently not recorded in detail, which complicates targeted optimization of processes and leads to unnecessary inefficiencies. Structured recording and analysis of individual work steps could significantly increase productivity and reduce long-term costs."
          },
          {
            title: "Potential for More Stable Production",
            content: "Recurring delays in the creation of picking slips lead to unclear duration of the picking process and negatively impact production planning. Targeted optimization of picking could shorten process times and significantly improve planning reliability."
          }
        ]
      },
      de: {
        title: "Was haben wir gefunden?",
        findings: [
          {
            title: "Optimierbare Auftragszuordnung",
            content: "Das aktuelle System ermöglicht keine direkte Zuordnung von Produktionsaufträgen zu Kundenaufträgen. Eine solche Verknüpfung würde die Nachverfolgbarkeit in der Produktion verbessern, die Prozesssteuerung effizienter gestalten und die Kundenkommunikation erheblich vereinfachen."
          },
          {
            title: "Differenziertere Skontobedingungen",
            content: "Die bisherigen Skontobedingungen boten aufgrund ihrer relativ homogenen Handhabung Optimierungspotenzial und führten teilweise zu vermeidbaren finanziellen Nachteilen. Eine granulare Differenzierung zwischen Kunden mit unterschiedlichem Zahlungsverhalten könnte Cashflow-Potenziale freisetzen."
          },
          {
            title: "Arbeitsschritt-erfassung in Produktion",
            content: "Einzelne Arbeitsschritte in der Produktion werden derzeit nicht detailliert erfasst, was eine gezielte Optimierung von Prozessen erschwert und zu unnötigen Ineffizienzen führt. Eine strukturierte Erfassung und Analyse einzelner Arbeitsschritte könnte die Produktivität erheblich steigern und langfristig Kosten reduzieren."
          },
          {
            title: "Potenzial für stabilere Produktion",
            content: "Wiederkehrende Verzögerungen bei der Erstellung von Kommissionierscheinen führen zu unklarer Dauer des Kommissioniervorgangs und beeinträchtigen die Produktionsplanung negativ. Eine gezielte Optimierung der Kommissionierung könnte Prozesszeiten verkürzen und die Planungssicherheit erheblich verbessern."
          }
        ]
      }
    },
    detailSection: {
      en: {
        title: "In Detail",
        items: [
          {
            content: "Uncover and understand structural problems: The analysis shows complex process flows with various paths and relationships within the system."
          },
          {
            content: "Fluctuating run times: The posting out of materials was partly slower than planned in recent years. Production delays or standstills could be significantly reduced in the future through automation in material withdrawal."
          }
        ]
      },
      de: {
        title: "Im Detail",
        items: [
          {
            content: "Strukturprobleme aufdecken und verstehen: Die Analyse zeigt komplexe Prozessabläufe mit verschiedenen Pfaden und Beziehungen innerhalb des Systems."
          },
          {
            content: "Schwankende Laufzeiten: Die Ausbuchung der Materialien verlief in den letzten Jahren teils langsamer als geplant. Produktionsverzögerungen oder -stillstände ließen sich durch Automatisierungen bei der Materialentnahme künftig deutlich verringern."
          }
        ]
      }
    },
    nextStepsSection: {
      en: {
        title: "Next Steps",
        content: "During the workshop, initial use cases were developed together. Of the total of 11 identified application cases, Megatron will initially focus on those that achieve a particularly high impact with low effort. Use Cases 8 and 9 have already been initiated and are outside the scope."
      },
      de: {
        title: "Nächste Schritte",
        content: "Im Rahmen des Workshops wurden gemeinsam erste Use Cases erarbeitet. Von denen insgesamt 11 identifizierten Anwendungsfällen wird sich Megatron zunächst auf diejenigen konzentrieren, die mit geringem Aufwand einen besonders hohen Impact erzielen. Die Use Cases 8 und 9 wurden bereits initiiert und liegen außerhalb des Scopes."
      }
    },
    downloadAssetId: "success-story-megatron",
    keyStat: {
      en: {
        value: "$2.3M",
        metric: "Annual Cost Savings"
      },
      de: {
        value: "2,3 Mio. €",
        metric: "Jährliche Kosteneinsparungen"
      }
    },
    externalUrl: "https://example.com/case-studies/global-retail",
    industry: {
      en: "Manufacturing",
      de: "Fertigung"
    },
    company_size: {
      en: "500-1000 employees",
      de: "500-1000 Mitarbeiter"
    }
  },
  {
    id: "idm",
    companyName: "IDM Wärmepumpen",
    logoUrl: getImagePath(customerLogoImages, "idm_logo_white.png"),
    summary: {
      en: "IDM Wärmepumpen optimized their manufacturing processes through Process Mining, achieving 99.9% accuracy in process detection while significantly reducing manual workload.",
      de: "IDM Wärmepumpen optimierte seine Fertigungsprozesse durch Process Mining und erreichte 99,9% Genauigkeit bei der Prozesserfassung bei gleichzeitiger erheblicher Reduzierung des manuellen Arbeitsaufwands."
    },
    subtitle: {
      en: "Optimizing manufacturing processes through Process Mining",
      de: "Optimierung von Fertigungsprozessen durch Process Mining"
    },
    whoIsSection: {
      en: {
        title: "Who is IDM Wärmepumpen?",
        content: "IDM Wärmepumpen is a leading manufacturer of heat pumps, specializing in energy-efficient heating solutions."
      },
      de: {
        title: "Wer ist IDM Wärmepumpen?",
        content: "IDM Wärmepumpen ist ein führender Hersteller von Wärmepumpen, spezialisiert auf energieeffiziente Heizlösungen."
      }
    },
    blindSpotsSection: {
      en: {
        title: "Where were the blind spots?",
        content: "Manufacturing processes lacked visibility, making it difficult to identify inefficiencies and optimization opportunities."
      },
      de: {
        title: "Wo waren die Blind-Spots?",
        content: "Fertigungsprozesse fehlten an Transparenz, was es schwierig machte, Ineffizienzen und Optimierungspotenziale zu identifizieren."
      }
    },
    findingsSection: {
      en: {
        title: "What did we find?",
        findings: [
          {
            title: "Process Visibility",
            content: "IDM Wärmepumpen leveraged Process Mining to gain insights into their manufacturing workflows and identify areas for improvement."
          },
          {
            title: "Accuracy Improvement",
            content: "The implementation enabled IDM to achieve 99.9% accuracy in process detection while significantly reducing manual workload."
          },
          {
            title: "Efficiency Gains",
            content: "Operational efficiency improved significantly through better process understanding and optimization."
          },
          {
            title: "Cost Reduction",
            content: "Reduced manual workload and improved processes led to substantial cost savings."
          }
        ]
      },
      de: {
        title: "Was haben wir gefunden?",
        findings: [
          {
            title: "Prozesstransparenz",
            content: "IDM Wärmepumpen nutzte Process Mining, um Einblicke in seine Fertigungs-Workflows zu gewinnen und Verbesserungsbereiche zu identifizieren."
          },
          {
            title: "Genauigkeitsverbesserung",
            content: "Die Implementierung ermöglichte es IDM, 99,9% Genauigkeit bei der Prozesserfassung zu erreichen und gleichzeitig den manuellen Arbeitsaufwand erheblich zu reduzieren."
          },
          {
            title: "Effizienzsteigerungen",
            content: "Die operative Effizienz verbesserte sich erheblich durch ein besseres Prozessverständnis und Optimierung."
          },
          {
            title: "Kostenreduzierung",
            content: "Reduzierter manueller Arbeitsaufwand und verbesserte Prozesse führten zu erheblichen Kosteneinsparungen."
          }
        ]
      }
    },
    detailSection: {
      en: {
        title: "In Detail",
        items: [
          {
            content: "Detailed analysis of manufacturing workflows revealed optimization opportunities across multiple production stages."
          }
        ]
      },
      de: {
        title: "Im Detail",
        items: [
          {
            content: "Die detaillierte Analyse der Fertigungs-Workflows offenbarte Optimierungsmöglichkeiten über mehrere Produktionsstufen hinweg."
          }
        ]
      }
    },
    nextStepsSection: {
      en: {
        title: "Next Steps",
        content: "IDM continues to use Process Mining insights to further optimize their manufacturing processes."
      },
      de: {
        title: "Nächste Schritte",
        content: "IDM nutzt weiterhin Process Mining-Erkenntnisse, um seine Fertigungsprozesse weiter zu optimieren."
      }
    },
    downloadAssetId: "success-story-idm",
    keyStat: {
      en: {
        value: "99.9%",
        metric: "Detection Accuracy"
      },
      de: {
        value: "99,9%",
        metric: "Erfassungsgenauigkeit"
      }
    },
    externalUrl: "https://example.com/case-studies/financeplus",
    industry: {
      en: "Manufacturing",
      de: "Fertigung"
    },
    company_size: {
      en: "5000+ employees",
      de: "5000+ Mitarbeiter"
    }
  },
  {
    id: "CIB",
    companyName: "CIB",
    logoUrl: getImagePath(customerLogoImages, "cib_logo_white.png"),
    summary: {
      en: "CIB transformed their software development processes through Process Mining, achieving 40% faster diagnosis of process issues and significantly improved development cycle efficiency.",
      de: "CIB transformierte seine Softwareentwicklungsprozesse durch Process Mining und erreichte 40% schnellere Diagnose von Prozessproblemen bei gleichzeitig erheblich verbesserter Effizienz des Entwicklungszyklus."
    },
    subtitle: {
      en: "Transforming software development processes",
      de: "Transformation von Softwareentwicklungsprozessen"
    },
    whoIsSection: {
      en: {
        title: "Who is CIB?",
        content: "CIB is a software development company focused on creating innovative solutions for various industries."
      },
      de: {
        title: "Wer ist CIB?",
        content: "CIB ist ein Softwareentwicklungsunternehmen, das sich auf innovative Lösungen für verschiedene Branchen konzentriert."
      }
    },
    blindSpotsSection: {
      en: {
        title: "Where were the blind spots?",
        content: "Software development processes lacked transparency, making it difficult to identify bottlenecks and optimize workflows."
      },
      de: {
        title: "Wo waren die Blind-Spots?",
        content: "Softwareentwicklungsprozesse fehlten an Transparenz, was es schwierig machte, Engpässe zu identifizieren und Workflows zu optimieren."
      }
    },
    findingsSection: {
      en: {
        title: "What did we find?",
        findings: [
          {
            title: "Process Optimization",
            content: "CIB implemented Process Mining to optimize their software development workflows and improve project delivery times."
          },
          {
            title: "Faster Diagnosis",
            content: "The solution enabled CIB to achieve 40% faster diagnosis of process issues and significantly improved their development cycle efficiency."
          },
          {
            title: "Better Visibility",
            content: "Complete visibility into development workflows helped identify and resolve bottlenecks more effectively."
          },
          {
            title: "Improved Delivery",
            content: "Project delivery times improved significantly through better process understanding and optimization."
          }
        ]
      },
      de: {
        title: "Was haben wir gefunden?",
        findings: [
          {
            title: "Prozessoptimierung",
            content: "CIB implementierte Process Mining, um seine Softwareentwicklungs-Workflows zu optimieren und Projektlieferzeiten zu verbessern."
          },
          {
            title: "Schnellere Diagnose",
            content: "Die Lösung ermöglichte es CIB, 40% schnellere Diagnose von Prozessproblemen zu erreichen und die Effizienz des Entwicklungszyklus erheblich zu verbessern."
          },
          {
            title: "Bessere Transparenz",
            content: "Vollständige Transparenz in Entwicklungs-Workflows half dabei, Engpässe effektiver zu identifizieren und zu beheben."
          },
          {
            title: "Verbesserte Lieferung",
            content: "Projektlieferzeiten verbesserten sich erheblich durch besseres Prozessverständnis und Optimierung."
          }
        ]
      }
    },
    detailSection: {
      en: {
        title: "In Detail",
        items: [
          {
            content: "Detailed analysis of software development workflows revealed multiple opportunities for process improvement."
          }
        ]
      },
      de: {
        title: "Im Detail",
        items: [
          {
            content: "Die detaillierte Analyse der Softwareentwicklungs-Workflows offenbarte mehrere Möglichkeiten zur Prozessverbesserung."
          }
        ]
      }
    },
    nextStepsSection: {
      en: {
        title: "Next Steps",
        content: "CIB continues to leverage Process Mining insights to further optimize their software development processes."
      },
      de: {
        title: "Nächste Schritte",
        content: "CIB nutzt weiterhin Process Mining-Erkenntnisse, um seine Softwareentwicklungsprozesse weiter zu optimieren."
      }
    },
    downloadAssetId: "success-story-cib",
    keyStat: {
      en: {
        value: "40%",
        metric: "Faster Diagnosis"
      },
      de: {
        value: "40%",
        metric: "Schnellere Diagnose"
      }
    },
    externalUrl: "https://example.com/case-studies/healthcare-dynamics",
    industry: {
      en: "Software Development",
      de: "Softwareentwicklung"
    },
    company_size: {
      en: "100-500 employees",
      de: "100-500 Mitarbeiter"
    }
  }
];