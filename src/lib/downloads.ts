export interface DownloadAsset {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  fileSize: string;
  fileType: string;
  category: string;
  thumbnail?: string;
  formGuid?: string; // Override default form for specific assets
}

export const downloadAssets: DownloadAsset[] = [
  {
    id: "enterprise-guide",
    title: "Enterprise Integration Guide",
    description: "Comprehensive guide to implementing our platform in enterprise environments with best practices, security considerations, and deployment strategies.",
    fileUrl: "/downloads/enterprise-integration-guide.pdf",
    fileSize: "2.4 MB",
    fileType: "PDF",
    category: "Implementation",
    thumbnail: "/placeholder.svg"
  },
  {
    id: "api-documentation",
    title: "Complete API Documentation",
    description: "Detailed API reference with code examples, authentication methods, and integration patterns for developers.",
    fileUrl: "/downloads/api-documentation.pdf",
    fileSize: "3.1 MB",
    fileType: "PDF",
    category: "Technical",
    thumbnail: "/placeholder.svg"
  },
  {
    id: "security-whitepaper",
    title: "Security Architecture Whitepaper",
    description: "In-depth analysis of our security framework, compliance certifications, and data protection measures.",
    fileUrl: "/downloads/security-whitepaper.pdf",
    fileSize: "1.8 MB",
    fileType: "PDF",
    category: "Security",
    thumbnail: "/placeholder.svg"
  },
  {
    id: "roi-calculator",
    title: "ROI Calculator Spreadsheet",
    description: "Interactive Excel template to calculate potential return on investment and cost savings from platform implementation.",
    fileUrl: "/downloads/roi-calculator.xlsx",
    fileSize: "856 KB",
    fileType: "Excel",
    category: "Business",
    thumbnail: "/placeholder.svg"
  },
  {
    id: "migration-checklist",
    title: "Migration Checklist & Timeline",
    description: "Step-by-step checklist and timeline template for smooth migration from legacy systems to our platform.",
    fileUrl: "/downloads/migration-checklist.pdf",
    fileSize: "1.2 MB",
    fileType: "PDF",
    category: "Implementation",
    thumbnail: "/placeholder.svg"
  },
  {
    id: "case-study-collection",
    title: "Customer Success Stories Collection",
    description: "Detailed case studies showcasing real-world implementations, challenges overcome, and results achieved.",
    fileUrl: "/downloads/case-studies-collection.pdf",
    fileSize: "4.7 MB",
    fileType: "PDF",
    category: "Case Studies",
    thumbnail: "/placeholder.svg"
  },
  {
    id: "training-materials",
    title: "Administrator Training Materials",
    description: "Complete training package including presentation slides, exercises, and certification guidelines for platform administrators.",
    fileUrl: "/downloads/admin-training-materials.zip",
    fileSize: "12.3 MB",
    fileType: "ZIP",
    category: "Training",
    thumbnail: "/placeholder.svg"
  },
  {
    id: "compliance-report",
    title: "Compliance & Audit Report",
    description: "Latest compliance audit results, certifications, and regulatory compliance documentation for enterprise procurement.",
    fileUrl: "/downloads/compliance-audit-report.pdf",
    fileSize: "2.9 MB",
    fileType: "PDF",
    category: "Compliance",
    thumbnail: "/placeholder.svg"
  }
];