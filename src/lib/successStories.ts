import type { Language } from "./translations";

// Dynamically import all customer logos
const customerLogoImages = import.meta.glob<{ default: string }>(
  '../assets/customers/*.{png,jpg,jpeg,svg,webp}',
  { eager: true }
);

// Dynamically import all success story images
const successStoryImages = import.meta.glob<{ default: string }>(
  '../assets/success_stories/**/*.{png,jpg,jpeg,svg,webp}',
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

// Helper function to get success story image path
const getSuccessStoryImagePath = (filename: string): string => {
  return getImagePath(successStoryImages, filename);
};

export interface SuccessStoryFinding {
  title: string;
  content: string;
}

export interface SuccessStoryDetailItem {
  imagePath?: string; // Optional image path - items can alternate between text-only and image+text
  imageSize?: "s" | "m" | "l"; // Optional image size: s (small), m (medium), l (large). Defaults to "m" if not specified
  content: string;
  number?: string; // Optional number for numbered findings (e.g., "7329")
  title?: string; // Optional headline/title above the content
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
    highlight?: string; // Optional highlight text to display after the title
  }>;
  blindSpotsSection: Record<Language, {
    title: string;
    content: string;
    highlight?: string; // Optional highlight text to display after the title
  }>;
  findingsSection: Record<Language, {
    title: string;
    findings: SuccessStoryFinding[];
    highlight?: string; // Optional highlight text to display after the title
  }>;
  detailSection: Record<Language, {
    title: string;
    items: SuccessStoryDetailItem[]; // Variable number of items, alternating between text and image+text
    highlight?: string; // Optional highlight text to display after the title
  }>;
  nextStepsSection: Record<Language, {
    title: string;
    content?: string; // Optional for backward compatibility - use items instead
    imagePath?: string; // Optional for backward compatibility - use items instead
    imageSize?: "s" | "m" | "l"; // Optional image size for backward compatibility imagePath
    items?: SuccessStoryDetailItem[]; // Optional items array for multiple content elements and images
    highlight?: string; // Optional highlight text to display after the title
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
        title: "Who is ",
        highlight: "Hector?",
        content: "Hector is an innovative insurer in the field of motor vehicle insurance solutions and sees itself as an innovation leader. As a digital pioneer, the focus is on efficient processes through their own scalable and adaptable platform ZEUSS®, which leads to lower premiums."
      },
      de: {
        title: "Wer ist ",
        highlight: "Hector?",
        content: "Hector ist ein innovativer Assekuradeur im Bereich der Kfz-Versicherungslösungen und sieht sich als Innovationsführer. Als digitaler Vorreiter liegt der Fokus auf effizienten Prozessen mittels der eigenen skalier- und adaptierbare Plattform ZEUSS®, die zu niedrigeren Prämien führen."
      }
    },
    blindSpotsSection: {
      en: {
        title: "Where were the ",
        highlight: "blind spots?",
        content: "High rates of reopened claims without clear reasons being apparent. Delays in claims processing due to unforeseen bottlenecks. The impact of subsequent adjustments to reserve provisions in claims settlement on the process was unclear."
      },
      de: {
        title: "Wo waren die ",
        highlight: "Blind-Spots?",
        content: "Hohe Raten an wiedereröffneten Schadenfällen, ohne dass die Gründe dafür klar ersichtlich waren. Verzögerungen in der Schadensabwicklung aufgrund unvorhergesehener Engpässe. Die Auswirkungen nachträglicher Anpassungen der Reserverückstellungen in der Schadensregulierung auf den Prozess waren unklar."
      }
    },
    findingsSection: {
      en: {
        title: "What did we ",
        highlight: "find?",
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
        title: "Was haben wir ",
        highlight: "gefunden?",
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
        title: "In ",
        highlight: "Detail",
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
        title: "Im ",
        highlight: "Detail",
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
        title: "Next ",
        highlight: "Steps",
        content: "Hector continues to leverage Process Mining insights to further optimize their operations."
      },
      de: {
        title: "Nächste ",
        highlight: "Schritte",
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
        title: "Who is ",
        highlight: "Megatron?",
        content: "MEGATRON Elektronik GmbH & Co. KG, based in Putzbrunn near Munich, specializes in sensor technology and precision measurement technology. The company develops and produces high-quality components primarily for industrial applications and stands for precision, reliability, and customer-specific solutions in the electronics industry."
      },
      de: {
        title: "Wer ist ",
        highlight: "Megatron?",
        content: "MEGATRON Elektronik GmbH & Co. KG mit Sitz in Putzbrunn bei München ist spezialisiert auf Sensortechnologie und Präzisionsmesstechnik. Das Unternehmen entwickelt und produziert hochwertige Komponenten vor allem für industrielle Anwendungen und steht für Präzision, Zuverlässigkeit und kundenspezifische Lösungen in der Elektronikbranche."
      }
    },
    blindSpotsSection: {
      en: {
        title: "Where were the ",
        highlight: "blind spots?",
        content: "Optimization potential in the use of the ERP system through more targeted collection of relevant information along process chains. Low transparency regarding the status of orders and customer orders."
      },
      de: {
        title: "Wo waren die ",
        highlight: "Blind-Spots?",
        content: "Optimierungspotenzial in der Nutzung des ERP-Systems durch die gezieltere Erfassung relevanter Informationen entlang der Prozessketten. Niedrige Transparenz bezüglich des Status von Bestellungen und Kundenaufträgen."
      }
    },
    findingsSection: {
      en: {
        title: "What did we ",
        highlight: "find?",
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
        title: "Was haben wir ",
        highlight: "gefunden?",
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
        title: "In ",
        highlight: "Detail",
        items: [
          {
            title: "Uncover and understand structural problems",
            imagePath: getSuccessStoryImagePath("megatron_structural_de.webp"),
            imageSize: "l",
            content: "*Runtime, object count and other process metrics have been hidden for anonymization purposes."
          },
          {
            title: "Fluctuating run times",
            imagePath: getSuccessStoryImagePath("megatron_runtime_de.webp"),
            imageSize: "s",
            content: "The posting out of materials was partly slower than planned in recent years. Production delays or standstills could be significantly reduced in the future through automation in material withdrawal."
          }
        ]
      },
      de: {
        title: "Im ",
        highlight: "Detail",
        items: [
          {
            title: "Strukturprobleme aufdecken und verstehen",
            imagePath: getSuccessStoryImagePath("megatron_structural_de.webp"),
            content: "*Laufzeiten, Objektanzahl und weitere Prozesskennzahlen wurden aus Gründen der Anonymisierung ausgeblendet."
          },
          {
            title: "Schwankende Laufzeiten",
            imagePath: getSuccessStoryImagePath("megatron_runtime_de.webp"),
            content: "Die Ausbuchung der Materialien verlief in den letzten Jahren teils langsamer als geplant. Produktionsverzögerungen oder -stillstände ließen sich durch Automatisierungen bei der Materialentnahme künftig deutlich verringern."
          }
        ]
      }
    },
    nextStepsSection: {
      en: {
        title: "Next ",
        highlight: "Steps",
        items: [
          {
            title: "After the Workshop",
            imagePath: getSuccessStoryImagePath("megatron_matrix_de.webp"),
            content: "During the workshop, initial use cases were developed together. Of the total of 11 identified application cases, Megatron will initially focus on those that achieve a particularly high impact with low effort. Use Cases 8 and 9 have already been initiated and are outside the scope."
          }
        ]
      },
      de: {
        title: "Nächste ",
        highlight: "Schritte",
        items: [
          {
            title: "Nach dem Workshop",
            imagePath: getSuccessStoryImagePath("megatron_matrix_de.webp"),
            content: "Im Rahmen des Workshops wurden gemeinsam erste Use Cases erarbeitet. Von denen insgesamt 11 identifizierten Anwendungsfällen wird sich Megatron zunächst auf diejenigen konzentrieren, die mit geringem Aufwand einen besonders hohen Impact erzielen. Die Use Cases 8 und 9 wurden bereits initiiert und liegen außerhalb des Scopes."
          }
        ]
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
      de: "Erfahre, wie Noreja IDM dabei geholfen hat, den Order-to-Cash-Prozess innerhalb von drei Wochen sichtbar zu machen."
    },
    subtitle: {
      en: "Optimizing manufacturing processes through Process Mining",
      de: "Erfahre, wie Noreja IDM dabei geholfen hat, den Order-to-Cash-Prozess innerhalb von drei Wochen sichtbar zu machen."
    },
    whoIsSection: {
      en: {
        title: "Who is ",
        highlight: "IDM Wärmepumpen?",
        content: "IDM Wärmepumpen is a leading manufacturer of heat pumps, specializing in energy-efficient heating solutions."
      },
      de: {
        title: "Wer ist ",
        highlight: "IDM Wärmepumpen?",
        content: "IDM Energiesysteme GmbH ist ein führender Anbieter von fortschrittlichen Heizungslösungen, der sich auf nachhaltige und energieeffiziente Systeme spezialisiert hat. Mit einer starken Präsenz auf dem europäischen Markt konzentrieren sich ihre innovativen Produkte auf erneuerbare Energiequellen und gewährleisten umweltfreundliche und kostengünstige Heizlösungen."
      }
    },
    blindSpotsSection: {
      en: {
        title: "Where were the ",
        highlight: "blind spots?",
        content: "Manufacturing processes lacked visibility, making it difficult to identify inefficiencies and optimization opportunities."
      },
      de: {
        title: "Wo waren die ",
        highlight: "Blind-Spots?",
        content: "Zu Beginn herrschte wenig Transparenz darüber, wie sich Laufzeiten konkreter Schritte ausgestalteten und wie deren Abhängigkeiten untereinander zu Engpässen führten. Das Ziel war es, ein erstes Gesamtbild der Situation zu erzeugen, welches dann als Grundlage für weitere Entscheidungen bezüglich Optimierungsmaßnahmen diente."
      }
    },
    findingsSection: {
      en: {
        title: "What did we ",
        highlight: "find?",
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
        title: "Was haben wir ",
        highlight: "gefunden?",
        findings: [
          {
            title: "Manuelle Dateneingabe verzögert den Prozess",
            content: "Die manuelle Datenübertragung zwischen IT-Systemen verursacht Verzögerungen und höhere Kosten. Sie ist fehleranfällig, was ungenaue Daten und ineffiziente Arbeitsabläufe zur Folge haben kann. Diese Verzögerungen beeinträchtigen die Entscheidungsfindung und gefährden wichtige Fristen. Zudem reduzieren die zusätzlichen Kosten die Rentabilität und behindern Investitionen in strategische Bereiche."
          },
          {
            title: "Wunschliefertermin wird überschritten",
            content: "Der von den Kunden angegebene Wunschliefertermin lag oft weit vor dem tatsächlichen Liefertermin, was zu einer erheblichen Diskrepanz zwischen Erwartungen und Realität führte. Diese Diskrepanz wirkt sich unmittelbar auf die Kundenzufriedenheit aus, da die Kunden den Dienst als unzuverlässig empfinden können. Die häufigen Diskrepanzen können langfristige Kundenbeziehungen schädigen und aufgrund des mangelnden Vertrauens zu verpassten Geschäftsmöglichkeiten führen. Letztlich untergräbt dies den Ruf des Unternehmens und kann die Kunden dazu bringen, sich nach anderen Anbietern umzusehen."
          },
          {
            title: "Verspäteter Versand der Rechnungen",
            content: "Bei bestimmten Produktgruppen wurde die Rechnung trotz Vorauszahlung relativ spät gestellt, was sich auf das Betriebskapital auswirkt. Die verspätete Rechnungsstellung beeinträchtigt den Cashflow und kann zu Liquiditätsproblemen führen, insbesondere in Zeiten mit hohem Vorauszahlungsvolumen. Diese Situation kann die finanziellen Ressourcen belasten und die Fähigkeit des Unternehmens einschränken, in den Bestand, den Betrieb oder Wachstumsinitiativen zu investieren. Darüber hinaus kann eine verspätete Rechnungsstellung zu Frustration bei den Kunden führen, die eine rechtzeitige Bearbeitung ihrer Transaktionen erwarten, was die Geschäftsbeziehungen beeinträchtigen kann."
          },
          {
            title: "Überspringen der Bestellbestätigung",
            content: "In einigen Zeiträumen wurde zunehmend auf eine spezielle Auftragsbestätigung verzichtet, was zu potenziellen Problemen bei der Auftragsgenauigkeit und -abwicklung führte. Eine strengere Überprüfung der Auftragsdaten könnte die Fehlerquote möglicherweise verringern, aber ohne Bestätigung könnten Fehler im Auftrag bis zur Lieferung unbemerkt bleiben, was zu Rücksendungen, Rückerstattungen oder unzufriedenen Kunden führen kann. Das Fehlen einer Auftragsbestätigung erhöht auch das Risiko von Kommunikationsfehlern zwischen dem Unternehmen und seinen Kunden, die sich zu größeren betrieblichen Problemen auswachsen können. Die Behebung dieser Lücke ist entscheidend für die Aufrechterhaltung des Vertrauens und die Gewährleistung, dass die Kunden genau das erhalten, was sie bestellt haben, wenn sie es erwarten."
          }
        ]
      }
    },
    detailSection: {
      en: {
        title: "In ",
        highlight: "Detail",
        items: [
          {
            content: "Detailed analysis of manufacturing workflows revealed optimization opportunities across multiple production stages."
          }
        ]
      },
      de: {
        title: "Im ",
        highlight: "Detail",
        items: [
          {
            title: "Wie ist es gelaufen?",
            content: `**Schritt 1:** Eine Datenschutzvereinbarung wurde erstellt (ca. 1 Tag)
**Schritt 2:** Die relevanten Daten wurden aus dem ERP-System von iDM extrahiert (ca. 1 Woche)
**Schritt 3:** Import der Daten und Mapping auf den Noreja-Builder (ca. 2 Wochen)
**Schritt 4:** Analyse der Prozessmodelle und Dokumentation der Ergebnisse (ca. 2 Wochen)
**Schritt 5:** Abschluss-Workshop vor Ort in Matrei (1 Tag)`
          },
          {
            title: "Langfristig",
            content: "Als nächsten Schritten wird die Analyse auf angrenzende Systeme wie das Buchhaltungssystem und das CRM-System ausgeweitet, um die Tiefe der Prozessanalyse zu verfeinern. Auf Basis der Erkenntnisse sollen dann möglichst bald konkrete Optimierungsmaßnahmen abgeleitet werden, um messbare Erfolge zu erzielen."
          }
        ]
      }
    },
    nextStepsSection: {
      en: {
        title: "Next ",
        highlight: "Steps",
        content: "IDM continues to use Process Mining insights to further optimize their manufacturing processes."
      },
      de: {
        title: "Nächste ",
        highlight: "Schritte",
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
      de: "Erfahre, wie Noreja der CIB Group half, ihren Hiring-Prozess in nur einem Monat vollständig abzubilden."
    },
    subtitle: {
      en: "Transforming software development processes",
      de: "Erfahre, wie Noreja der CIB Group half, ihren Hiring-Prozess in nur einem Monat vollständig abzubilden."
    },
    whoIsSection: {
      en: {
        title: "Who is ",
        highlight: "CIB?",
        content: "CIB is a software development company focused on creating innovative solutions for various industries."
      },
      de: {
        title: "Wer ist ",
        highlight: "CIB?",
        content: "CIB ist ein Technologie- und Softwareentwicklungsunternehmen, das sich auf Digitalisierung, Prozessautomatisierung und künstliche Intelligenz spezialisiert hat. CIB ist führend in der Entwicklung von KI-gestützten Digitalisierungslösungen, die es Unternehmen ermöglichen, die betriebliche Effizienz zu steigern und den manuellen Arbeitsaufwand zu reduzieren."
      }
    },
    blindSpotsSection: {
      en: {
        title: "Where were the ",
        highlight: "blind spots?",
        content: "Software development processes lacked transparency, making it difficult to identify bottlenecks and optimize workflows."
      },
      de: {
        title: "Wo waren die ",
        highlight: "Blind-Spots?",
        content: `Keine prozessorientierte **Leistungsverfolgung** im Bewerbungs- und Einstellungsprozess.

Keine **Nachverfolgung der Prozess-Conformance** für die Bewerber-Experience.

**Uneinheitliche Kommunikation** mit Mix aus E-Mail, Telefon und IT-Systemen.`
      }
    },
    findingsSection: {
      en: {
        title: "What did we ",
        highlight: "find?",
        findings: [
          {
            title: "Initialer Antwort zuvorkommen",
            content: "Eines der wichtigsten Probleme war die Verzögerung bei der ersten Kontaktaufnahme mit den Bewerbern. Wir haben festgestellt, dass eine Verkürzung der Zeit bis zum ersten Kontakt mit den Bewerbern deren Experience und Engagement im Einstellungsverfahren erheblich verbessern könnte."
          },
          {
            title: "Prozess-Redesign durchführen",
            content: "Wir haben festgestellt, dass der häufigere Einsatz eines telefonischen Vorabgesprächs die anschließenden manuellen Bearbeitungsaktivitäten reduzieren und den zentralen Engpass im Prozess entlasten könnte. Dies könnte zu einer besseren Rationalisierung des Prozesses beitragen und den zuständigen Führungskräften mehr Zeit für strategische Aufgaben lassen."
          },
          {
            title: "Flaschenhälse abbauen",
            content: "Durch die Neugestaltung einiger Prozessschritte und die Verbesserung der Kommunikation mit den Bewerbern könnte CIB nach unserer Einschätzung die Zeit bis zur Einstellung um bis zu einer Woche verkürzen. Diese Verkürzung würde nicht nur den Einstellungsprozess beschleunigen, sondern auch die Einstellungskosten senken."
          },
          {
            title: "Bewerber-Experience optimieren",
            content: "Durch die Standardisierung des Prozesses und die Verbesserung der Kandidatenerfahrung prognostizierten wir, dass CIB eine Verbesserung ihres Net Promoter Scores (NPS) erreichen könnte. Dies würde eine deutliche Steigerung der Kandidatenzufriedenheit und der allgemeinen Wahrnehmung des Rekrutierungsprozesses des Unternehmens widerspiegeln."
          }
        ]
      },
      de: {
        title: "Was haben wir ",
        highlight: "gefunden?",
        findings: [
          {
            title: "Initialer Antwort zuvorkommen",
            content: "Eines der wichtigsten Probleme war die Verzögerung bei der ersten Kontaktaufnahme mit den Bewerbern. Wir haben festgestellt, dass eine Verkürzung der Zeit bis zum ersten Kontakt mit den Bewerbern deren Experience und Engagement im Einstellungsverfahren erheblich verbessern könnte."
          },
          {
            title: "Prozess-Redesign durchführen",
            content: "Wir haben festgestellt, dass der häufigere Einsatz eines telefonischen Vorabgesprächs die anschließenden manuellen Bearbeitungsaktivitäten reduzieren und den zentralen Engpass im Prozess entlasten könnte. Dies könnte zu einer besseren Rationalisierung des Prozesses beitragen und den zuständigen Führungskräften mehr Zeit für strategische Aufgaben lassen."
          },
          {
            title: "Flaschenhälse abbauen",
            content: "Durch die Neugestaltung einiger Prozessschritte und die Verbesserung der Kommunikation mit den Bewerbern könnte CIB nach unserer Einschätzung die Zeit bis zur Einstellung um bis zu einer Woche verkürzen. Diese Verkürzung würde nicht nur den Einstellungsprozess beschleunigen, sondern auch die Einstellungskosten senken."
          },
          {
            title: "Bewerber-Experience optimieren",
            content: "Durch die Standardisierung des Prozesses und die Verbesserung der Kandidatenerfahrung prognostizierten wir, dass CIB eine Verbesserung ihres Net Promoter Scores (NPS) erreichen könnte. Dies würde eine deutliche Steigerung der Kandidatenzufriedenheit und der allgemeinen Wahrnehmung des Rekrutierungsprozesses des Unternehmens widerspiegeln."
          }
        ]
      }
    },
    detailSection: {
      en: {
        title: "In ",
        highlight: "Detail",
        items: [
          {
            title: "High Degree of Flexibility",
            imagePath: getSuccessStoryImagePath("cib_flexiblity_de.jpg"),
            content: "The application process is designed with many structural freedoms, making it flexible but also more expensive and more complex to manage due to low standardization. It might be worthwhile to streamline the process more to act faster and more cost-effectively."
          },
          {
            title: "Long Decision Times",
            imagePath: getSuccessStoryImagePath("cib_decisions_de.jpg"),
            content: "The decision time of responsible managers took longer than expected, while self-rejections occur relatively quickly (after 1W 3D). More feedback to candidates during the hiring process could keep them informed and prevent their self-rejection. Additionally, setting up an AI-supported pre-qualification assistant that prioritizes promising applicants and automatically invites them to preliminary interviews if needed could ensure that highly qualified candidates are contacted on the day of their application."
          },
          {
            title: "Personal Contact",
            imagePath: getSuccessStoryImagePath("cib_contact_de.jpg"),
            content: "The process step \"Invite applicant to telephone preliminary interview\" was used very rarely (namely 11 times). This step could be used as pre-qualification within a week after the potential candidate's application to prevent early self-rejections from high-potentials."
          }
        ]
      },
      de: {
        title: "Im ",
        highlight: "Detail",
        items: [
            {
              title: "Hoher Grad an Flexibilität",
              imagePath: getSuccessStoryImagePath("cib_flexiblity_de.jpg"),
              content: "Der Bewerbungsprozess ist mit vielen strukturellen Freiheiten konzipiert, was ihn flexibel macht, aber aufgrund einer geringen Standardisierung auch teurer und aufwendiger zu managen. Möglicherweise könnte es sich lohnen den Prozess stärker zu streamlinen, um schneller und kostengünstiger zu agieren."
            },
            {
              title: "Lange Entscheidungszeiten",
              imagePath: getSuccessStoryImagePath("cib_decisions_de.jpg"),
              content: "Die Entscheidungszeit der verantwortlichen Manager dauerte länger als erwartet, während Selbstabsagen relativ schnell erfolgen (nach 1W 3D). Mehr Feedback an die Kandidaten während des Einstellungsprozesses könnte sie auf dem Laufenden halten und ihre Selbstabsage verhindern. Zusätzlich könnte die Einrichtung eines KI-unterstützten Vorqualifizierungsassistenten, der vielversprechende Bewerber priorisiert und sie bei Bedarf automatisch zu Vorabinterviews einlädt, dafür sorgen, dass hochqualifizierte Kandidaten bereits am Tag ihrer Bewerbung kontaktiert werden."
            },
            {
              title: "Persönlicher Kontakt",
              imagePath: getSuccessStoryImagePath("cib_contact_de.jpg"),
              content: "Der Prozessschritt „Bewerber zum telefonischen Vorgespräch einladen“ wurde nur sehr selten genutzt (nämlich 11 mal). Dieser Durchführung dieses Schrittes könnte als Vorqualifikation innerhalb einer Woche nach der Bewerbung des potenziellen Kandidaten eingesetzt werden, um frühzeitige Selbstabsagen von High-Potentials zu verhindern."
            }
        ]
      }
    },
    nextStepsSection: {
      en: {
        title: "Next ",
        highlight: "Steps",
        items: [
          {
            title: "After the Workshop",
            content: "CIB will evaluate the changes identified by our process analysis to improve the hiring process. Initial quick wins have already been identified. We look forward to seeing how these changes can positively impact the process and the company."
          },
          {
            title: "Mid-term",
            content: "We are currently exploring which other systems within CIB are suitable for a Process Mining analysis to uncover optimization opportunities in other business areas."
          },
          {
            title: "Long-term",
            content: "We are in initial discussions about whether and how Process Mining can be implemented as part of their workflow solution CIB flow. This technical partnership would enable us to offer out-of-the-box analyses to the entire CIB customer base. On the other hand, Noreja customers can also benefit by directly addressing identified weaknesses with automation."
          }
        ]
      },
      de: {
        title: "Nächste ",
        highlight: "Schritte",
        items: [
          {
            title: "Nach dem Workshop",
            content: "CIB wird die durch unsere Prozessanalyse ermittelten Änderungen evaluieren, um den Einstellungsprozess zu verbessern. Erste Quick-Wins sind bereits identifiziert. Wir freuen uns darauf, zu sehen, wie sich diese Änderungen positiv auf den Prozess und das Unternehmen auswirken können."
          },
          {
            title: "Mittelfristig",
            content: "Wir sondieren aktuell, welche anderen Systeme innerhalb von CIB für eine Process Mining Analyse geeignet sind, um Optimierungsmöglichkeiten in anderen Geschäftsbereichen aufzudecken."
          },
          {
            title: "Langfristig",
            content: "Wir befinden uns in ersten Gesprächen darüber, ob und wie man Process Mining als Teil ihrer Workflow-Lösung CIB flow implementieren können. Diese technische Partnerschaft würde es uns ermöglichen, dem gesamten CIBKundenkreis Out-of-the-Box-Analysen anzubieten. Auf der anderen Seite können auch Noreja-Kunden profitieren, indem sie identifizierte Schwachstellen direkt mit Automatisierung angehen können."
          }
        ]
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