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
    id: "techcorp-analytics",
    companyName: "TechCorp Solutions",
    logoUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=entropy",
    summary: "TechCorp transformed their data pipeline and reduced processing time by 75% while increasing accuracy across all departments.",
    keyStat: {
      value: "75%",
      metric: "Processing Time Reduction"
    },
    externalUrl: "https://example.com/case-studies/techcorp",
    industry: "Technology",
    company_size: "1000+ employees"
  },
  {
    id: "global-retail",
    companyName: "Global Retail Inc",
    logoUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop&crop=entropy",
    summary: "Global Retail leveraged our AI insights to optimize inventory management, resulting in significant cost savings and improved customer satisfaction.",
    keyStat: {
      value: "$2.3M",
      metric: "Annual Cost Savings"
    },
    externalUrl: "https://example.com/case-studies/global-retail",
    industry: "Retail",
    company_size: "500-1000 employees"
  },
  {
    id: "financeplus",
    companyName: "FinancePlus Bank",
    logoUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=100&fit=crop&crop=entropy",
    summary: "FinancePlus automated their compliance reporting and fraud detection, achieving 99.9% accuracy while reducing manual workload.",
    keyStat: {
      value: "99.9%",
      metric: "Detection Accuracy"
    },
    externalUrl: "https://example.com/case-studies/financeplus",
    industry: "Financial Services",
    company_size: "5000+ employees"
  },
  {
    id: "healthcare-dynamics",
    companyName: "Healthcare Dynamics",
    logoUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=100&fit=crop&crop=entropy",
    summary: "Healthcare Dynamics streamlined patient data analysis and improved treatment outcomes through predictive analytics and real-time monitoring.",
    keyStat: {
      value: "40%",
      metric: "Faster Diagnosis"
    },
    externalUrl: "https://example.com/case-studies/healthcare-dynamics",
    industry: "Healthcare",
    company_size: "100-500 employees"
  },
  {
    id: "manufacturing-pro",
    companyName: "Manufacturing Pro",
    logoUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=100&fit=crop&crop=entropy",
    summary: "Manufacturing Pro optimized their production line efficiency and predictive maintenance, reducing downtime and increasing output.",
    keyStat: {
      value: "85%",
      metric: "Uptime Improvement"
    },
    externalUrl: "https://example.com/case-studies/manufacturing-pro",
    industry: "Manufacturing",
    company_size: "1000+ employees"
  },
  {
    id: "edutechsolutions",
    companyName: "EduTech Solutions",
    logoUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&h=100&fit=crop&crop=entropy",
    summary: "EduTech Solutions enhanced student learning outcomes through personalized analytics and automated administrative processes.",
    keyStat: {
      value: "60%",
      metric: "Student Engagement Increase"
    },
    externalUrl: "https://example.com/case-studies/edutech",
    industry: "Education",
    company_size: "50-100 employees"
  },
  {
    id: "logistics-express",
    companyName: "Logistics Express",
    logoUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&h=100&fit=crop&crop=entropy",
    summary: "Logistics Express revolutionized their supply chain visibility and route optimization, delivering packages 30% faster than before.",
    keyStat: {
      value: "30%",
      metric: "Delivery Speed Increase"
    },
    externalUrl: "https://example.com/case-studies/logistics-express",
    industry: "Logistics",
    company_size: "500-1000 employees"
  },
  {
    id: "startup-innovate",
    companyName: "Startup Innovate",
    logoUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=100&fit=crop&crop=entropy",
    summary: "Startup Innovate scaled their operations efficiently with automated data insights, enabling rapid growth without proportional overhead increases.",
    externalUrl: "https://example.com/case-studies/startup-innovate",
    industry: "Technology Startup",
    company_size: "10-50 employees"
  }
];