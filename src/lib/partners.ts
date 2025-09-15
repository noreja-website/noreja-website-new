export interface Partner {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  website: string;
  category: string;
  quote?: string;
  quoteAuthor?: string;
}

export const partners: Partner[] = [
  {
    id: "1",
    name: "Microsoft",
    description: "Strategic cloud infrastructure partnership powering enterprise-scale solutions.",
    logoUrl: "/placeholder.svg",
    website: "https://microsoft.com",
    category: "Technology",
    quote: "Noreja's platform has revolutionized how we approach enterprise solutions, delivering unprecedented scalability and reliability.",
    quoteAuthor: "Sarah Johnson, CTO"
  },
  {
    id: "2",
    name: "Salesforce",
    description: "CRM integration specialist delivering seamless customer relationship management.",
    logoUrl: "/placeholder.svg",
    website: "https://salesforce.com",
    category: "Software",
    quote: "The integration capabilities of Noreja have transformed our customer data management, creating seamless workflows across all touchpoints.",
    quoteAuthor: "Michael Chen, VP Engineering"
  },
  {
    id: "3",
    name: "Amazon Web Services",
    description: "Leading cloud provider enabling scalable and reliable infrastructure solutions.",
    logoUrl: "/placeholder.svg",
    website: "https://aws.amazon.com",
    category: "Cloud",
    quote: "Noreja's cloud-native approach perfectly complements our infrastructure, enabling our customers to scale effortlessly.",
    quoteAuthor: "Lisa Rodriguez, Solutions Architect"
  },
  {
    id: "4",
    name: "Google Cloud",
    description: "AI and machine learning innovation partner for next-generation applications.",
    logoUrl: "/placeholder.svg",
    website: "https://cloud.google.com",
    category: "Cloud",
    quote: "Working with Noreja has accelerated our AI initiatives, bringing machine learning capabilities to enterprises faster than ever.",
    quoteAuthor: "David Kim, Head of AI Partnerships"
  },
  {
    id: "5",
    name: "SAP",
    description: "Enterprise resource planning integration for comprehensive business management.",
    logoUrl: "/placeholder.svg",
    website: "https://sap.com",
    category: "Enterprise",
    quote: "Noreja's enterprise integration solutions have streamlined our ERP implementations, reducing complexity and time-to-value.",
    quoteAuthor: "Anna Müller, Integration Director"
  },
  {
    id: "6",
    name: "Oracle",
    description: "Database excellence and enterprise software solutions for mission-critical systems.",
    logoUrl: "/placeholder.svg",
    website: "https://oracle.com",
    category: "Database",
    quote: "The reliability and performance of Noreja's database solutions have exceeded our expectations for mission-critical applications.",
    quoteAuthor: "Robert Taylor, Database Administrator"
  },
  {
    id: "7",
    name: "IBM",
    description: "Advanced analytics and AI consulting for digital transformation initiatives.",
    logoUrl: "/placeholder.svg",
    website: "https://ibm.com",
    category: "Consulting",
    quote: "Noreja's analytics platform has been instrumental in our digital transformation projects, delivering insights that drive real business value.",
    quoteAuthor: "Jennifer Wang, Senior Consultant"
  },
  {
    id: "8",
    name: "ServiceNow",
    description: "Workflow automation platform integration for streamlined business processes.",
    logoUrl: "/placeholder.svg",
    website: "https://servicenow.com",
    category: "Automation",
    quote: "The workflow automation capabilities of Noreja have revolutionized our business processes, increasing efficiency by 40%.",
    quoteAuthor: "Carlos Silva, Process Manager"
  }
];