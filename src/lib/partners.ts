export interface Partner {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  personPhotoUrl?: string;
  website: string;
  category: string;
  quote?: string;
  quoteAuthor?: string;
  linkedin?: string;
}

export const partners: Partner[] = [
  {
    id: "1",
    name: "Aptean",
    description: "Strategic cloud infrastructure partnership powering enterprise-scale solutions.",
    logoUrl: "/src/assets/partners/aptean_logo.svg",
    personPhotoUrl: "/src/assets/partnerFaces/markus_neumayr_locker_aptean.jpg",
    website: "https://www.aptean.com/en-US",
    category: "Technology",
    quote: "Mit der Lösung von Noreja können die Geschäftsprozesse unserer ERP-Suite rs2 in wenigen Tagen auf Schwachstellen durchleuchtet werden.\n\nDabei werden selbst komplexe Zusammenhänge in den Daten korrekt abgebildet - ohne dass wir einen Event-Log benötigen.\n\nZudem haben mich die KI-Features beeindruckt, die sehr gut auf Fehlerursachen und Interpretationsunterstützung ausgerichtet sind.",
    quoteAuthor: "Markus Neumayr, General Manager Aptean Austria",
    linkedin: "https://www.linkedin.com/in/markus-neumayr-110a71104/"
  },
  {
    id: "2",
    name: "Miragon",
    description: "CRM integration specialist delivering seamless customer relationship management.",
    logoUrl: "/src/assets/partners/miragon_logo.svg",
    personPhotoUrl: "/src/assets/partnerFaces/thomas_heinrichs_miragon.png",
    website: "https://salesforce.com",
    category: "Software",
    quote: "Die Partnerschaft zwischen Miragon und Noreja ist für mich etwas Besonderes.\n\nDie Zusammenarbeit ist auf Augenhöhe, Kommunikation und Verständnis sind außergewöhnlich.\n\nDas Produkt ist technisch ausgereift, bietet einen frischen Ansatz im Process Mining und ist dabei auch erschwinglich. Dadurch können wir unser Automatisierungswissen ideal mit dem Knowhow von Noreja verbinden und so Kunden über den gesamten BPM Lifecycle hinweg ganzheitlich beraten und echten Mehrwert schaffen.",
    quoteAuthor: "Thomas Heinrichs, Growth & Smart Automation Lead",
    linkedin: "https://www.linkedin.com/in/thomas-heinrichs-907b0015a/"
  },
  {
    id: "3",
    name: "Changeenablers Ltd.",
    description: "Leading cloud provider enabling scalable and reliable infrastructure solutions.",
    logoUrl: "/src/assets/partners/changeenablers_logo.png",
    personPhotoUrl: "/src/assets/partnerFaces/niyi_changeenablers.jpg",
    website: "https://changeenablers.net/ce_home.html",
    category: "Consulting",
    quote: "Noreja has completely redefined how we think about process intelligence. Unlike traditional tools that depend on complex log data, Noreja's approach requires no logs at all—dramatically reducing setup effort and accelerating our time to market. Within weeks, we were uncovering insights that would have taken months with other solutions.\n\nWhat truly sets Noreja apart is the depth of causal insights it delivers. Powered by cutting-edge AI, the platform doesn't just surface correlations—it helps us understand why things happen, enabling smarter decisions with confidence.\n\nOn top of that, the value for money is outstanding, enabling organizations to accessing enterprise-grade intelligence at a fraction of the usual cost. Noreja has become an indispensable partner in driving efficiency, growth, and innovation.",
    quoteAuthor: "Niyi Ogunbiyi, Co-Founder",
    linkedin: "https://www.linkedin.com/in/niyi-ogunbiyi/"
  },
  {
    id: "4",
    name: "Waits",
    description: "AI and machine learning innovation partner for next-generation applications.",
    logoUrl: "/src/assets/partners/waits_logo.svg",
    personPhotoUrl: "/src/assets/partnerFaces/christian_waits.png",
    website: "https://www.waits-gmbh.de/",
    category: "Consulting",
    quote: "Die Partnerschaft mit noreja bedeutet uns sehr viel.\nAls CEO der WAITS Software- und Prozessberatungsgesellschaft mbH ist es mir wichtig einen starken Partner an unserer Seite zu wissen, welcher genau wie wir, das Wohlergehen und die Resilienz des Kunden im Fokus hat.\nAuf dieser Basis lässt sich eine langfristige Beziehung untereinander und zu den Kunden aufbauen.",
    quoteAuthor: "Christian M. Mzyk, CEO",
    linkedin: "https://www.linkedin.com/in/christian-m-mzyk-%F0%9F%92%BB-039b7a51/"
  },
  {
    id: "5",
    name: "Nexigo",
    description: "Enterprise resource planning integration for comprehensive business management.",
    logoUrl: "/src/assets/partners/nexigo_logo.png",
    personPhotoUrl: "/src/assets/partnerFaces/marcel_schober_nexigo.jpeg",
    website: "https://nexigo.io/",
    category: "Consulting",
    quote: "Durch diese Partnerschaft schaffen wir eine sehr gute Lösung, die Unternehmen dabei hilft, ihr ERP-System zu optimieren und ihre Prozesse nachhaltig zu verbessern.",
    quoteAuthor: "Marcel Schober, Geschäftsführer",
    linkedin: "https://www.linkedin.com/in/marcel-schober-62b041163/"
  },
  {
    id: "6",
    name: "BOC",
    description: "Database excellence and enterprise software solutions for mission-critical systems.",
    logoUrl: "TODO",
    website: "https://www.boc-group.com/de/adonis/solution/process-mining/",
    category: "Database",
    quote: "TODO.",
    quoteAuthor: "Tobias Rausch, TODO",
    linkedin: "https://www.linkedin.com/in/tobias-rausch-a8091757/"
  },
  {
    id: "7",
    name: "Vienesse Consulting",
    description: "Advanced analytics and AI consulting for digital transformation initiatives.",
    logoUrl: "/src/assets/partners/vienesse_logo.png",
    personPhotoUrl: "/src/assets/partnerFaces/robin_lange_vienesse.jpeg",
    website: "https://vienesse-consulting.com/",
    category: "Consulting",
    quote: "Bei Vienesse verbinden wir Beratung und Implementierung, damit aus Zielen messbare Ergebnisse werden. Process Mining verschafft unseren Kunden den nüchternen Blick dank echter Datenflüsse auf reale Prozesse, so reduzieren wir Kosten, erhöhen Qualität und schaffen die Basis für skalierbare Automatisierung. Mit Noreja als zuverlässigen Partner an unserer Seite setzen wir individuelle Anforderungen schnell und pragmatisch um.",
    quoteAuthor: "Robin Lange, Head of Process Science",
    linkedin: "https://www.linkedin.com/in/robin-lge/"
  },
  {
    id: "8",
    name: "Schleswiger Versicherungen",
    description: "Workflow automation platform integration for streamlined business processes.",
    logoUrl: "/src/assets/partners/schleswiger_logo.svg",
    personPhotoUrl: "/src/assets/partnerFaces/stefan_best_schleswiger.jpeg",
    website: "https://schleswiger.de/",
    category: "Insurance",
    quote: "Noreja hat uns dabei geholfen Kern-, Management- und Supportprozesse unseres Versicherungsdienstes aufzunehmen, zu verstehen und abzubilden. \n\n Mit Hilfe von Minerva-AI konnten wir in Rekordgeschwindigkeit aus textbasierter Dokumentation Prozessmodelle generieren.",
    quoteAuthor: "Stephan Best, Gesamtvertriebsleiter & Geschäftsführer",
    linkedin: "https://www.linkedin.com/in/stephan-best/"
  },
  {
    id: "9",
    name: "Novofactum GmbH",
    description: "Workflow automation platform integration for streamlined business processes.",
    logoUrl: "/src/assets/partners/novofactum_logo.png",
    personPhotoUrl: "/src/assets/partnerFaces/christian_riffner_novofactum.jpeg",
    website: "https://www.novofactum.de/",
    category: "Consulting",
    quote: "Mit Noreja können wir Salesforce-basierte Vertriebsprozesse extrem detailliert für unsere Kunden auswerten. Die Lösung arbeitet system-agnostisch und funktioniert auf allen relationalen Datenbanken sowie APIs.\n\nEine Expertenlösung mit enormem Potenzial. Für mich eine notwendige Ergänzung zu klassischen Business Intelligence Tools für jeden Entscheider.",
    quoteAuthor: "Christian Riffner, Geschäftsführer",
    linkedin: "https://www.linkedin.com/in/christian-riffner-0119b233/"
  }
];