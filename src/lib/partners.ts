export interface Partner {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  website: string;
  category: string;
}

export const partners: Partner[] = [
  {
    id: "1",
    name: "Microsoft",
    description: "Strategic cloud infrastructure partnership powering enterprise-scale solutions.",
    logoUrl: "/placeholder.svg",
    website: "https://microsoft.com",
    category: "Technology"
  },
  {
    id: "2",
    name: "Salesforce",
    description: "CRM integration specialist delivering seamless customer relationship management.",
    logoUrl: "/placeholder.svg",
    website: "https://salesforce.com",
    category: "Software"
  },
  {
    id: "3",
    name: "Amazon Web Services",
    description: "Leading cloud provider enabling scalable and reliable infrastructure solutions.",
    logoUrl: "/placeholder.svg",
    website: "https://aws.amazon.com",
    category: "Cloud"
  },
  {
    id: "4",
    name: "Google Cloud",
    description: "AI and machine learning innovation partner for next-generation applications.",
    logoUrl: "/placeholder.svg",
    website: "https://cloud.google.com",
    category: "Cloud"
  },
  {
    id: "5",
    name: "SAP",
    description: "Enterprise resource planning integration for comprehensive business management.",
    logoUrl: "/placeholder.svg",
    website: "https://sap.com",
    category: "Enterprise"
  },
  {
    id: "6",
    name: "Oracle",
    description: "Database excellence and enterprise software solutions for mission-critical systems.",
    logoUrl: "/placeholder.svg",
    website: "https://oracle.com",
    category: "Database"
  },
  {
    id: "7",
    name: "IBM",
    description: "Advanced analytics and AI consulting for digital transformation initiatives.",
    logoUrl: "/placeholder.svg",
    website: "https://ibm.com",
    category: "Consulting"
  },
  {
    id: "8",
    name: "ServiceNow",
    description: "Workflow automation platform integration for streamlined business processes.",
    logoUrl: "/placeholder.svg",
    website: "https://servicenow.com",
    category: "Automation"
  },
  {
    id: "9",
    name: "Slack",
    description: "Communication platform integration enhancing team collaboration and productivity.",
    logoUrl: "/placeholder.svg",
    website: "https://slack.com",
    category: "Communication"
  },
  {
    id: "10",
    name: "Adobe",
    description: "Creative suite integration for enhanced digital experience and content management.",
    logoUrl: "/placeholder.svg",
    website: "https://adobe.com",
    category: "Creative"
  }
];