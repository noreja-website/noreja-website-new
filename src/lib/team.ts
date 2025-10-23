export interface TeamMember {
  id: string;
  name: string;
  role: string;
  oneLiner: string;
  linkedInUrl: string;
  imageUrl: string;
  isFounder: boolean;
  personalIntro: {
    en: string;
    de: string;
  };
}

export interface AdvisoryMember {
  id: string;
  name: string;
  linkedInUrl: string;
  imageUrl: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Lukas Pfahlsberger",
    role: "Chief Executive Officer",
    oneLiner: "Visionary leader driving digital transformation across industries.",
    linkedInUrl: "https://www.linkedin.com/in/lukas-pfahlsberger/",
    imageUrl: "/src/assets/team/Pfahlsberger.jpg",
    isFounder: true,
    personalIntro: {
      en: "As CEO at Noreja, Lukas is responsible for operations, sales, and strategy. At the same time, Lukas is a guest lecturer at Humboldt University in Berlin, WU Vienna and Salzburg University of Applied Sciences. He completed his doctorate with a research focus on the organizational context of process mining in relation to dynamic and improvisational capabilities. Before that, Lukas worked several years as a senior consultant at EY in the area of analytics & AI, data architecture, and -integration with an industry focus on automotive and manufacturing. He started his professional career as an IT-system-designer and BPM engineer at Deutsche Post DHL Group.",
      de: "Lukas verantwortet als Co-Geschäftsführer bei Noreja das operative Geschäft sowie die Themen Sales und Strategie. Parallel ist Lukas u.a. als Gastdozent an der Humboldt Universität zu Berlin, der WU Wien, oder der FH Salzburg tätig. Er promovierte mit einem Forschungsschwerpunkt auf dem organisatorischen Kontext von Process Mining in Bezug zu Dynamic und Improvisational Capabilities. Vor seiner Zeit bei Noreja arbeitete Lukas mehrere Jahre als Senior Consultant bei EY im Bereich Analytics & AI, Datenarchitektur und -integration mit dem Branchenfokus Automotive und Manufacturing. Seine berufliche Laufbahn begann er als IT-Systemdesigner und BPM-Ingenieur bei Deutsche Post DHL Group."
    }
  },
  {
    id: "2",
    name: "Dr. techn. Philipp Waibel",
    role: "Chief Technology Officer",
    oneLiner: "Engineering excellence through innovative cloud-native solutions.",
    linkedInUrl: "https://www.linkedin.com/in/philipp-w-a09018100/",
    imageUrl: "/src/assets/team/Waibel.png",
    isFounder: true,
    personalIntro: {
      en: "As CTO, Philipp is mainly responsible for software development and its architecture. Philipp has a long track record in academic project execution for the Vienna University of Economics and Business as well as the Vienna University of Technology. He studied Software Engineering at the Vienna University of Technology and is an expert at cloud-based business processes execution. He developed our process mining algorithm based on conflict-free prime event structures.",
      de: "Philipp verantwortet als Co-Geschäftsführer den Bereich der Software-Entwicklung und technischen Ausrichtung. Er kann auf eine langjährige Erfahrung in der akademischen Projektabwicklung für die Wirtschaftsuniversität Wien sowie die Technische Universität Wien zurückblicken. Er hat Software Engineering an der Technischen Universität Wien studiert und ist Experte für die Ausführung von cloudbasierten Geschäftsprozessen. Er hat unseren Process-Mining-Algorithmus entwickelt, der auf konfliktfreien Prime-Event-Strukturen basiert."
    }
  },
  {
    id: "3",
    name: "Prof. Dr. Jan Mendling",
    role: "Head of Partnerships & Knowledge",
    oneLiner: "Engineering excellence through innovative cloud-native solutions.",
    linkedInUrl: "https://www.linkedin.com/in/janmendling/",
    imageUrl: "/src/assets/team/Mendling.png",
    isFounder: true,
    personalIntro: {
      en: "Jan is a Einstein professor at the Humboldt University Berlin. Previously, he worked as a full professor and department head at Vienna University of Economics and Business. Also, he is a co-author of seminal textbooks on the Fundamentals of Business Process Management and on Business Information Systems are used in more than 250 universities in 70 countries. He is one of the founders of the Berliner BPM-Offensive, a board member of the Austrian Society for Process Management, a member of the IEEE Task Force on Process Mining, and one of the initiators of the international Business Process Management Association.",
      de: "Jan ist Einstein Professor an der Humboldt-Universität zu Berlin. Zuvor arbeitete er als Full-Professor und Lehrstuhlinhaber an der Wirtschaftsuniversität Wien. Er ist Mitautor von bekannten Lehrbüchern über die Grundlagen des Geschäftsprozessmanagements und über Wirtschaftsinformatik, die an mehr als 250 Universitäten in 70 Ländern verwendet werden. Er ist einer der Gründer der Berliner BPM-Offensive, Vorstandsmitglied der Österreichischen Gesellschaft für Prozessmanagement, Mitglied der IEEE Task Force von Prozess-Mining und einer der Initiatoren der internationalen Business Process Management Association."
    }
  },
  {
    id: "4",
    name: "Schulaxshan Arulampalam",
    role: "Head of Sales",
    oneLiner: "Crafting user experiences that solve real business challenges.",
    linkedInUrl: "https://www.linkedin.com/in/schulaxshan-arulampalam-b29b08195/",
    imageUrl: "/src/assets/team/Schulax.png",
    isFounder: false,
    personalIntro: {
      en: "As Head of Sales at Noreja, Schulaxshan is responsible for the company’s sales strategy as well as the development and expansion of long-term customer relationships – from the initial contact to successful partnerships. With over three years of experience in the B2B SaaS tech sector – from pre-seed to Series B – he brings deep expertise in dynamic growth phases, complex sales cycles, and team leadership. \n\n Before joining Noreja, Schulaxshan held various sales roles at fast-growing tech companies. He knows what it takes not only to sell technology but also to ensure it is understood and successfully implemented – especially within the industrial midmarket segment. \n\n In his personal life, he is a passionate traveler and tech enthusiast. He is particularly fascinated by solutions like Noreja that generate real impact for companies – not as a buzzword, but as tangible change. ",
      de: "Schulaxshan verantwortet als Head of Sales bei Noreja die Vertriebsstrategie sowie den Auf- und Ausbau langfristiger Kundenbeziehungen – von der ersten Kontaktaufnahme bis zur erfolgreichen Partnerschaft. Mit mehr als drei Jahren Erfahrung im B2B-SaaS-Tech-Umfeld – von Pre-Seed bis Series B – bringt er tiefes Verständnis für dynamische Wachstumsphasen, komplexe Vertriebszyklen und Teamführung mit. \n\n Vor seinem Einstieg bei Noreja war Schulaxshan in verschiedenen Vertriebsrollen bei schnell wachsenden Tech-Unternehmen tätig. Er weiß, worauf es ankommt, wenn Technologie nicht nur verkauft, sondern auch verstanden und umgesetzt werden soll – besonders im industriellen Mittelstand. \n\n Privat ist er begeisterter Reisender und technikaffin. Besonders faszinieren ihn Lösungen wie Noreja, die echten Impact bei Unternehmen erzeugen – nicht als Buzzword, sondern als greifbare Veränderung."
    }
  },
  {
    id: "5",
    name: "Julian Weiß",
    role: "Senior Product Manager",
    oneLiner: "Building scalable platforms that power enterprise growth.",
    linkedInUrl: "https://www.linkedin.com/in/julian-weiss/",
    imageUrl: "/src/assets/team/Julian-Weiss.jpg",
    isFounder: false,
    personalIntro: {
      en: "Julian is a Product Manager with a strong focus on data-driven product development and scalable digital solutions. \n\n At Noreja, he is responsible for the continuous development of key product areas, ensuring that data-driven decisions and user-centric approaches are integrated into the product strategy. Previously, he worked at several scale-ups, where he supported growth phases by developing and optimizing digital products and implementing efficient processes. Through close collaboration with cross-functional teams, he drove innovative solutions and actively shaped strategic scaling projects. \n\n His academic background is in business informatics, where he focused on process optimization and analysis during his studies and continued this work during his tenure at TU Wien.",
      de: "Julian ist Produkt Manager mit einem starken Fokus auf datengetriebene Produktentwicklung und skalierbare digitale Lösungen. \n\n Bei Noreja verantwortet er die Weiterentwicklung zentraler Produktbereiche und stellt sicher, dass datenbasierte Entscheidungen und nutzerzentrierte Ansätze in die Produktstrategie einfließen. Zuvor war er in mehreren Scale-ups tätig und begleitete dort Wachstumsphasen mit der Entwicklung und Optimierung digitaler Produkte sowie der Einführung effizienter Prozesse. Durch die enge Zusammenarbeit mit cross-funktionalen Teams trieb er innovative Lösungen voran und gestaltete strategische Skalierungsprojekte aktiv mit. \n\n Sein akademischer Hintergrund liegt in der Wirtschaftsinformatik, wobei er sich bereits während seines Studiums intensiv mit der Optimierung und Analyse von Geschäftsprozessen beschäftigte und während seiner Beschäftigung an der TU Wien fortführte. "
    }
  },
  {
    id: "6",
    name: "Florian Eichin",
    role: "Head of Frontend",
    oneLiner: "Ensuring our clients achieve transformational outcomes.",
    linkedInUrl: "https://www.linkedin.com/in/florian-eichin-92ba57106/",
    imageUrl: "/src/assets/team/Florian-Eichin.jpg",
    isFounder: false,
    personalIntro: {
      en: "Florian is an experienced software developer and IT consultant with over 8 years of practical experience. He studied business informatics at the dual university in Lörrach in cooperation with Coop. In his professional career he worked mainly for small and medium-sized companies as a web developer at the internet agency Brainson, but also as a CRM consultant at Allgeier Enterprise Service AG in the SAP environment. At Noreja, Florian takes the role ‘Frontend Lead’. In this context, he takes care of the design of the user interface, the performance optimization and the provision of interfaces to the backend.",
      de: "Florian ist ein erfahrener Software Entwickler und IT-Consultant mit über 8 Jahren Praxiserfahrung. Er studierte Wirtschaftsinformatik an der dualen Hochschule Lörrach in Kooperation mit Coop. In seiner Berufslaufbahn arbeitete er überwiegend für kleinere und mittelständische Unternehmen als Webentwickler bei der Internetagentur Brainson, aber auch als CRM-Berater bei der Allgeier Enterprise Service AG im SAP Umfeld. Bei Noreja übernimmt Florian den Lead im Frontend. In dem Kontext kümmert er sich um die Gestaltung der Benutzeroberfläche, die Performance-Optimierung und das Bereitstellen von Schnittstellen in Richtung Backend."
    }
  },
  {
    id: "7",
    name: "Daniel Bauer",
    role: "Head of Backend",
    oneLiner: "Connecting innovative solutions with forward-thinking organizations.",
    linkedInUrl: "https://www.linkedin.com/in/daniel-bauer-485954199/",
    imageUrl: "/src/assets/team/Daniel-Bauer.png",
    isFounder: false,
    personalIntro: {
      en: "Daniel is an experienced developer with over 10 years of experience specialising in backend development and leading software teams in early-stage start ups. He has a strong background in JAVA and various backend technologies, which he has applied in multiple roles, including his previous position as Head of Development. Now, as the Head of Backend at Noreja, Daniel oversees the architecture, scalability, and integration of backend systems, ensuring robust and efficient data flow across all platforms. His leadership and technical expertise are pivotal in driving the backend team’s success and aligning it with the company’s strategic objectives.",
      de: "Daniel ist ein erfahrener Entwickler mit über 10 Jahren Erfahrung, der sich auf Backend-Entwicklung und die Leitung von Software-Teams spezialisiert hat. Er verfügt über fundierte Kenntnisse in JAVA und verschiedenen Backend-Technologien, die er in verschiedenen Funktionen eingesetzt hat, unter anderem in seiner vorherigen Position als Head of Development. Als Head of Backend bei Noreja beschäftigt sich Daniel mit der Architektur, Skalierbarkeit und Integration von Backend-Systemen und sorgt für einen robusten und effizienten Datenfluss über alle Plattformen hinweg. Seine Führungsqualitäten und sein technisches Fachwissen sind ausschlaggebend für den Erfolg des Backend-Teams und dessen Ausrichtung auf die strategischen Ziele des Unternehmens."
    }
  },
  {
    id: "8",
    name: "Violeta Petkova",
    role: "Senior Software Developer",
    oneLiner: "Telling stories that inspire digital transformation journeys.",
    linkedInUrl: "https://www.linkedin.com/in/violeta-petkova-298287136/",
    imageUrl: "/src/assets/team/Violeta-Petkova.jpg",
    isFounder: false,
    personalIntro: {
      en: "Violeta is a software developer with experience in web development. At Noreja she focuses specifically on our ‘Process Science Workbench’ feature as well as the user management APIs. In parallel to her work at Noreja, Violeta is studying Computer Science at the Vienna University of Technology. In her bachelor thesis ‘Interactive Process Visualization of Correlation Based Customer Journey Processes in the Tourism Domain’ she already dealt with the application of complex process mining and data science algorithms.",
      de: "Violeta ist Software-Entwicklerin mit Erfahrung im Bereich der Web-Entwicklung & -Design. Bei Noreja fokussiert sie sich speziell auf unser Feature ‘Process Science Workbench’ sowie auf die APIs des User-Managements. Parallel zu ihrer Tätigkeit bei Noreja studiert Violeta Computer Science im Master an der TU Wien. In ihrer Bachelor-Abschlussarbeit ‘Interactive Process Visualization of Correlation Based Customer Journey Processes in the Tourism Domain‘ beschäftigte sie sich bereits mit der Anwendung komplexer Process Mining und Data Science Algorithmen."
    }
  },
  {
    id: "9",
    name: "Temuçin Damdinjamts-Kintaert",
    role: "Software Developer",
    oneLiner: "Optimizing processes that scale with our growing global impact.",
    linkedInUrl: "https://www.linkedin.com/in/temucin-damdinjamts-kintaert/",
    imageUrl: "/src/assets/team/Temu.jpg",
    isFounder: false,
    personalIntro: {
      en: "Temucin is a full-stack developer with a diverse professional background. He began his career as a musician and chef before gaining extensive experience in B2B sales and project management. His keen interest in technology eventually led him to software development. At Noreja, Temucin focuses on front-end development, where he optimizes user interfaces and improves the user experience.",
      de: "Temucin ist als Full-Stack-Entwickler tätig und bringt eine facettenreiche berufliche Laufbahn mit. Seine Karriere begann als Musiker und Koch, bevor er umfassende Erfahrungen im B2B-Vertrieb und im Projektmanagement sammelte. Sein ausgeprägtes Interesse an Technologie führte ihn letztendlich zur Softwareentwicklung. Bei Noreja konzentriert sich Temucin auf die Frontend-Entwicklung, wo er Benutzeroberflächen optimiert und die Nutzererfahrung verbessert."
    }
  }
];

export const advisoryMembers: AdvisoryMember[] = [
  {
    id: "adv-1",
    name: "Markus Neumayr",
    linkedInUrl: "https://www.linkedin.com/in/markus-neumayr-110a71104/",
    imageUrl: "/src/assets/team/Markus-Neumayr.jpeg"
  },
  {
    id: "adv-2", 
    name: "Christian Riffner",
    linkedInUrl: "https://www.linkedin.com/in/christian-riffner-0119b233/",
    imageUrl: "/src/assets/team/Christian-Riffner.jpeg"
  },
  {
    id: "adv-3",
    name: "Gordana McNamara",
    linkedInUrl: "https://www.linkedin.com/in/gordana-mcnamara/",
    imageUrl: "/src/assets/team/Gordana-McNamara.jpeg"
  },
  {
    id: "adv-4",
    name: "Steven Knoblich",
    linkedInUrl: "https://www.linkedin.com/in/steven-knoblich-72bb53173/",
    imageUrl: "/src/assets/team/Steven-Knoblich.jpeg"
  }
];