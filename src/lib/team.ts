export interface TeamMember {
  id: string;
  name: string;
  role: string;
  oneLiner: string;
  linkedInUrl: string;
  imageUrl: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Chief Executive Officer",
    oneLiner: "Visionary leader driving digital transformation across industries.",
    linkedInUrl: "https://linkedin.com/in/sarahchen",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    role: "Chief Technology Officer",
    oneLiner: "Engineering excellence through innovative cloud-native solutions.",
    linkedInUrl: "https://linkedin.com/in/marcusrodriguez",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "3",
    name: "Emily Watson",
    role: "Head of Product",
    oneLiner: "Crafting user experiences that solve real business challenges.",
    linkedInUrl: "https://linkedin.com/in/emilywatson",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "4",
    name: "David Kim",
    role: "VP of Engineering",
    oneLiner: "Building scalable platforms that power enterprise growth.",
    linkedInUrl: "https://linkedin.com/in/davidkim",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "5",
    name: "Lisa Thompson",
    role: "Head of Customer Success",
    oneLiner: "Ensuring our clients achieve transformational outcomes.",
    linkedInUrl: "https://linkedin.com/in/lisathompson",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "6",
    name: "James Anderson",
    role: "Head of Sales",
    oneLiner: "Connecting innovative solutions with forward-thinking organizations.",
    linkedInUrl: "https://linkedin.com/in/jamesanderson",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "7",
    name: "Rachel Martinez",
    role: "Head of Marketing",
    oneLiner: "Telling stories that inspire digital transformation journeys.",
    linkedInUrl: "https://linkedin.com/in/rachelmartinez",
    imageUrl: "/placeholder.svg"
  },
  {
    id: "8",
    name: "Alex Johnson",
    role: "Head of Operations",
    oneLiner: "Optimizing processes that scale with our growing global impact.",
    linkedInUrl: "https://linkedin.com/in/alexjohnson",
    imageUrl: "/placeholder.svg"
  }
];