import { Language } from "./translations";

export interface DownloadAsset {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  fileSize: string;
  fileType: string;
  category: string;
  access: "free" | "locked";
  languages: Language[]; // Languages this file is available in
  thumbnail?: string;
  formGuid?: string; // Override default form for specific assets
}

export const downloadAssets: DownloadAsset[] = [
  {
    id: "referral-program-de",
    title: "Noreja Referral Program (DE)",
    description: "Discover how to participate in the Noreja referral program, including the referral flow, qualification criteria, and payout milestones.",
    fileUrl: "https://144242473.fs1.hubspotusercontent-eu1.net/hubfs/144242473/Noreja%20Referral%20Program%20DE.pdf",
    fileSize: "1.1 MB",
    fileType: "PDF",
    category: "Referral Program",
    access: "free",
    languages: ["de", "en"],
    thumbnail: "/placeholder.svg"
  },
  // Whitepapers - DE
  {
    id: "whitepaper-banking-de",
    title: "Whitepaper: Banking",
    description: "Wie Process Mining Risiken reduziert und Compliance verbessert. Erfahren Sie, wie Banken ihre Geschäftsprozesse optimieren können.",
    fileUrl: "https://144242473.fs1.hubspotusercontent-eu1.net/hubfs/144242473/website_files/whitepaper_DE/Whitepaper_Banking_DE.pdf",
    fileSize: "2.5 MB",
    fileType: "PDF",
    category: "Whitepaper",
    access: "locked",
    languages: ["de"]
  },
  {
    id: "whitepaper-insurance-de",
    title: "Whitepaper: Insurance",
    description: "Process Mining für Versicherungen: Optimierung von Geschäftsprozessen und Verbesserung der Effizienz.",
    fileUrl: "https://144242473.fs1.hubspotusercontent-eu1.net/hubfs/144242473/website_files/whitepaper_DE/Whitepaper_Insurance_DE.pdf",
    fileSize: "2.5 MB",
    fileType: "PDF",
    category: "Whitepaper",
    access: "locked",
    languages: ["de"]
  },
  {
    id: "whitepaper-manufacturing-de",
    title: "Whitepaper: Manufacturing",
    description: "Process Mining in der Fertigung: Steigerung der Produktionseffizienz und Optimierung von Fertigungsprozessen.",
    fileUrl: "https://144242473.fs1.hubspotusercontent-eu1.net/hubfs/144242473/website_files/whitepaper_DE/Whitepaper_Manufacturing_DE.pdf",
    fileSize: "2.5 MB",
    fileType: "PDF",
    category: "Whitepaper",
    access: "locked",
    languages: ["de"]
  },
  {
    id: "whitepaper-supplychain-de",
    title: "Whitepaper: Supply Chain",
    description: "Process Mining für Supply Chain Management: Transparenz und Optimierung in der Lieferkette.",
    fileUrl: "https://144242473.fs1.hubspotusercontent-eu1.net/hubfs/144242473/website_files/whitepaper_DE/Whitepaper_SupplyChain_DE.pdf",
    fileSize: "2.5 MB",
    fileType: "PDF",
    category: "Whitepaper",
    access: "locked",
    languages: ["de"]
  },
  // Whitepapers - EN
  {
    id: "whitepaper-banking-en",
    title: "Whitepaper: Banking",
    description: "How Process Mining reduces risks and improves compliance. Learn how banks can optimize their business processes.",
    fileUrl: "https://144242473.fs1.hubspotusercontent-eu1.net/hubfs/144242473/website_files/whitepaper_EN/Whitepaper_Banking_EN.pdf",
    fileSize: "2.5 MB",
    fileType: "PDF",
    category: "Whitepaper",
    access: "locked",
    languages: ["en"]
  },
  {
    id: "whitepaper-insurance-en",
    title: "Whitepaper: Insurance",
    description: "Process Mining for Insurance: Optimizing business processes and improving efficiency.",
    fileUrl: "https://144242473.fs1.hubspotusercontent-eu1.net/hubfs/144242473/website_files/whitepaper_EN/Whitepaper_Insurance_EN.pdf",
    fileSize: "2.5 MB",
    fileType: "PDF",
    category: "Whitepaper",
    access: "locked",
    languages: ["en"]
  },
  {
    id: "whitepaper-manufacturing-en",
    title: "Whitepaper: Manufacturing",
    description: "Process Mining in Manufacturing: Increasing production efficiency and optimizing manufacturing processes.",
    fileUrl: "https://144242473.fs1.hubspotusercontent-eu1.net/hubfs/144242473/website_files/whitepaper_EN/Whitepaper_Manufacturing_EN.pdf",
    fileSize: "2.5 MB",
    fileType: "PDF",
    category: "Whitepaper",
    access: "locked",
    languages: ["en"]
  },
  {
    id: "whitepaper-supplychain-en",
    title: "Whitepaper: Supply Chain",
    description: "Process Mining for Supply Chain Management: Transparency and optimization in the supply chain.",
    fileUrl: "https://144242473.fs1.hubspotusercontent-eu1.net/hubfs/144242473/website_files/whitepaper_EN/Whitepaper_SupplyChain_EN-.pdf",
    fileSize: "2.5 MB",
    fileType: "PDF",
    category: "Whitepaper",
    access: "locked",
    languages: ["en"]
  },
  // Success Stories - DE
  {
    id: "success-story-cib-de",
    title: "Success Story: CIB",
    description: "Erfahren Sie, wie CIB Process Mining erfolgreich einsetzt, um Geschäftsprozesse zu optimieren.",
    fileUrl: "https://144242473.fs1.hubspotusercontent-eu1.net/hubfs/144242473/website_files/successstories_DE/CIB_Success_Story_DE.pdf",
    fileSize: "1.5 MB",
    fileType: "PDF",
    category: "Success Stories",
    access: "locked",
    languages: ["de"]
  },
  {
    id: "success-story-hector-de",
    title: "Success Story: Hector",
    description: "Entdecken Sie, wie Hector mit Process Mining seine Geschäftsprozesse verbessert hat.",
    fileUrl: "https://144242473.fs1.hubspotusercontent-eu1.net/hubfs/144242473/website_files/successstories_DE/Hector_Success_Story_DE.pdf",
    fileSize: "1.5 MB",
    fileType: "PDF",
    category: "Success Stories",
    access: "locked",
    languages: ["de"]
  },
  {
    id: "success-story-idm-de",
    title: "Success Story: IDM",
    description: "Lesen Sie, wie IDM Process Mining nutzt, um Prozesseffizienz zu steigern.",
    fileUrl: "https://144242473.fs1.hubspotusercontent-eu1.net/hubfs/144242473/website_files/successstories_DE/IDM_Success-Story_DE.pdf",
    fileSize: "1.5 MB",
    fileType: "PDF",
    category: "Success Stories",
    access: "locked",
    languages: ["de"]
  },
  {
    id: "success-story-megatron-de",
    title: "Success Story: Megatron",
    description: "Erfahren Sie mehr über Megatrons erfolgreiche Implementierung von Process Mining.",
    fileUrl: "https://144242473.fs1.hubspotusercontent-eu1.net/hubfs/144242473/website_files/successstories_DE/Megatron_Success_Story_DE.pdf",
    fileSize: "1.5 MB",
    fileType: "PDF",
    category: "Success Stories",
    access: "locked",
    languages: ["de"]
  },
  // Success Stories - EN
  {
    id: "success-story-cib-en",
    title: "Success Story: CIB",
    description: "Learn how CIB successfully uses Process Mining to optimize business processes.",
    fileUrl: "https://144242473.fs1.hubspotusercontent-eu1.net/hubfs/144242473/website_files/successstories_EN/EN_CIB_Success_Story_EN.pdf",
    fileSize: "1.5 MB",
    fileType: "PDF",
    category: "Success Stories",
    access: "locked",
    languages: ["en"]
  },
  {
    id: "success-story-hector-en",
    title: "Success Story: Hector",
    description: "Discover how Hector improved its business processes with Process Mining.",
    fileUrl: "https://144242473.fs1.hubspotusercontent-eu1.net/hubfs/144242473/website_files/successstories_EN/EN_Hector_Success_Story_EN",
    fileSize: "1.5 MB",
    fileType: "PDF",
    category: "Success Stories",
    access: "locked",
    languages: ["en"]
  },
  {
    id: "success-story-idm-en",
    title: "Success Story: IDM",
    description: "Read how IDM uses Process Mining to increase process efficiency.",
    fileUrl: "https://144242473.fs1.hubspotusercontent-eu1.net/hubfs/144242473/website_files/successstories_EN/EN_IDM_Success_Story_EN",
    fileSize: "1.5 MB",
    fileType: "PDF",
    category: "Success Stories",
    access: "locked",
    languages: ["en"]
  },
  {
    id: "success-story-megatron-en",
    title: "Success Story: Megatron",
    description: "Learn more about Megatron's successful implementation of Process Mining.",
    fileUrl: "https://144242473.fs1.hubspotusercontent-eu1.net/hubfs/144242473/website_files/successstories_EN/EN_Megatron_Success_Story_EN.pdf",
    fileSize: "1.5 MB",
    fileType: "PDF",
    category: "Success Stories",
    access: "locked",
    languages: ["en"]
  }
];

/**
 * Maps use case IDs to their corresponding whitepaper download IDs
 */
const useCaseToWhitepaperMap: Record<string, Record<Language, string>> = {
  "banking": {
    de: "whitepaper-banking-de",
    en: "whitepaper-banking-en"
  },
  "insurance": {
    de: "whitepaper-insurance-de",
    en: "whitepaper-insurance-en"
  },
  "manufacturing": {
    de: "whitepaper-manufacturing-de",
    en: "whitepaper-manufacturing-en"
  },
  "supply-chain": {
    de: "whitepaper-supplychain-de",
    en: "whitepaper-supplychain-en"
  }
};

/**
 * Gets the whitepaper download asset for a given use case ID and language
 * @param useCaseId - The use case ID (e.g., "banking", "insurance", "manufacturing", "supply-chain")
 * @param language - The language code ("de" or "en")
 * @returns The download asset if found, undefined otherwise
 */
export const getWhitepaperForUseCase = (
  useCaseId: string,
  language: Language
): DownloadAsset | undefined => {
  const whitepaperId = useCaseToWhitepaperMap[useCaseId]?.[language];
  if (!whitepaperId) {
    return undefined;
  }
  
  return downloadAssets.find(asset => asset.id === whitepaperId);
};