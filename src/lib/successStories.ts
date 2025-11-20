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

export interface SuccessStory {
  id: string;
  companyName: string;
  logoUrl: string;
  summary: string;
  keyStat?: {
    value: string;
    metric: string;
  };
  externalUrl: string;
  industry: string;
  company_size: string;
}

export const successStories: SuccessStory[] = [
  {
    id: "hector",
    companyName: "Hector",
    logoUrl: getImagePath(customerLogoImages, "hector_logo_white.png"),
    summary: "TechCorp transformed their data pipeline and reduced processing time by 75% while increasing accuracy across all departments.",
    keyStat: {
      value: "75%",
      metric: "Processing Time Reduction"
    },
    externalUrl: "https://example.com/case-studies/techcorp",
    industry: "Insurance",
    company_size: "1000+ employees"
  },
  {
    id: "megatron",
    companyName: "Megatron",
    logoUrl: getImagePath(customerLogoImages, "megatron_logo_white_xlarge.png"),
    summary: "Global Retail leveraged our AI insights to optimize inventory management, resulting in significant cost savings and improved customer satisfaction.",
    keyStat: {
      value: "$2.3M",
      metric: "Annual Cost Savings"
    },
    externalUrl: "https://example.com/case-studies/global-retail",
    industry: "Manufacturing",
    company_size: "500-1000 employees"
  },
  {
    id: "idm",
    companyName: "IDM Wärmepumpen",
    logoUrl: getImagePath(customerLogoImages, "idm_logo_white.png"),
    summary: "FinancePlus automated their compliance reporting and fraud detection, achieving 99.9% accuracy while reducing manual workload.",
    keyStat: {
      value: "99.9%",
      metric: "Detection Accuracy"
    },
    externalUrl: "https://example.com/case-studies/financeplus",
    industry: "Manufacturing",
    company_size: "5000+ employees"
  },
  {
    id: "CIB",
    companyName: "Healthcare Dynamics",
    logoUrl: getImagePath(customerLogoImages, "cib_logo_white.png"),
    summary: "Healthcare Dynamics streamlined patient data analysis and improved treatment outcomes through predictive analytics and real-time monitoring.",
    keyStat: {
      value: "40%",
      metric: "Faster Diagnosis"
    },
    externalUrl: "https://example.com/case-studies/healthcare-dynamics",
    industry: "Software Development",
    company_size: "100-500 employees"
  }
];