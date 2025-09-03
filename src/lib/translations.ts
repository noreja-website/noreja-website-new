export type Language = 'en' | 'de';

export interface Translations {
  navigation: {
    home: string;
    functionalities: string;
    successStories: string;
    partners: string;
    pricing: string;
    blog: string;
    team: string;
    downloads: string;
    quickNavigation: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    getStarted: string;
    learnMore: string;
    features: {
      secure: string;
      fast: string;
      innovative: string;
    };
    dataCollection: {
      title: string;
      description: string;
    };
  };
  functionalities: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    exploreFeatures: string;
    dataCollection: {
      title: string;
      description: string;
    };
    aiProcessing: {
      title: string;
      description: string;
    };
    analyticsInsights: {
      title: string;
      description: string;
    };
    automation: {
      title: string;
      description: string;
    };
    integration: {
      title: string;
      description: string;
    };
    security: {
      title: string;
      description: string;
    };
    features: {
      aiAnalytics: {
        title: string;
        description: string;
      };
      dataIntegration: {
        title: string;
        description: string;
      };
      security: {
        title: string;
        description: string;
      };
      realTime: {
        title: string;
        description: string;
      };
    };
  };
  process: {
    title: string;
    subtitle: string;
    steps: {
      collect: {
        title: string;
        description: string;
      };
      process: {
        title: string;
        description: string;
      };
      analyze: {
        title: string;
        description: string;
      };
      optimize: {
        title: string;
        description: string;
      };
      processing: {
        title: string;
        description: string;
      };
      security: {
        title: string;
        description: string;
      };
      analysis: {
        title: string;
        description: string;
      };
      optimization: {
        title: string;
        description: string;
      };
      encryption: {
        title: string;
        description: string;
      };
      deployment: {
        title: string;
        description: string;
      };
      users: {
        title: string;
        description: string;
      };
    };
  };
  partners: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    viewAll: string;
    viewAllPartners: string;
    stats: {
      clients: string;
      countries: string;
      users: string;
    };
  };
  blog: {
    title: string;
    subtitle: string;
    latestPosts: string;
    readMore: string;
    openBlog: string;
    poweredBy: string;
    placeholder: string;
    configNote: string;
    features: {
      innovation: {
        title: string;
        description: string;
      };
      technical: {
        title: string;
        description: string;
      };
      analysis: {
        title: string;
        description: string;
      };
    };
    subscribeRss: string;
    subscribeNewsletter: string;
    whatYouFind: string;
    latestPostsPreview: string;
    getGlimpse: string;
  };
  downloads: {
    title: string;
    subtitle: string;
    filterByCategory: string;
    availableDownloads: string;
    resource: string;
    resources: string;
    clickToDownload: string;
    noResourcesFound: string;
    noResourcesDescription: string;
    needAdditionalResources: string;
    needAdditionalDescription: string;
    contactSupport: string;
    requestCustomResource: string;
  };
  team: {
    title: string;
    subtitle: string;
    connectLinkedIn: string;
  };
  downloadGate: {
    download: string;
    downloaded: string;
    fillForm: string;
    success: string;
    downloadStarted: string;
    error: string;
    formLoadError: string;
  };
  finalCta: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    startJourney: string;
    scheduleDemo: string;
  };
  footer: {
    description: string;
    copyright: string;
    builtWith: string;
    links: {
      imprint: string;
      privacy: string;
      terms: string;
    };
    legal: {
      imprint: string;
      privacy: string;
      terms: string;
    };
  };
  buttons: {
    contactUs: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    navigation: {
      home: "Home",
      functionalities: "Functionalities",
      successStories: "Success Stories",
      partners: "Partners",
      pricing: "Pricing",
      blog: "Blog",
      team: "Team",
      downloads: "Downloads",
      quickNavigation: "Quick Navigation",
    },
    hero: {
      badge: "Revolutionary Technology",
      title: "The Future of",
      titleHighlight: "Innovation",
      subtitle: "Experience revolutionary solutions that transform businesses and accelerate growth with cutting-edge technology.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Learn More",
      getStarted: "Get Started",
      learnMore: "Learn More",
      features: {
        secure: "Secure",
        fast: "Fast",
        innovative: "Innovative"
      },
      dataCollection: {
        title: "Data Collection",
        description: "Intelligent data gathering from multiple sources"
      }
    },
    functionalities: {
      title: "Powerful",
      titleHighlight: "Functionalities",
      subtitle: "Discover the comprehensive suite of tools and features designed to transform your business operations.",
      exploreFeatures: "Explore All Features",
      dataCollection: {
        title: "Data Collection",
        description: "Advanced data gathering and processing capabilities with real-time synchronization.",
      },
      aiProcessing: {
        title: "AI Processing",
        description: "Intelligent automation and machine learning algorithms for enhanced decision-making.",
      },
      analyticsInsights: {
        title: "Analytics & Insights",
        description: "Comprehensive analytics dashboard with actionable insights and predictive analytics.",
      },
      automation: {
        title: "Automation",
        description: "Streamlined workflow automation to increase efficiency and reduce manual tasks.",
      },
      integration: {
        title: "Integration",
        description: "Seamless integration with existing systems and third-party applications.",
      },
      security: {
        title: "Security",
        description: "Enterprise-grade security measures ensuring data protection and compliance.",
      },
      features: {
        aiAnalytics: {
          title: "AI-Powered Analytics",
          description: "Advanced machine learning algorithms that provide deep insights into your data."
        },
        dataIntegration: {
          title: "Data Integration",
          description: "Seamless integration with multiple data sources and platforms."
        },
        security: {
          title: "Enterprise Security",
          description: "Bank-grade security protocols to protect your sensitive information."
        },
        realTime: {
          title: "Real-time Processing",
          description: "Lightning-fast processing for immediate results and insights."
        }
      }
    },
    process: {
      title: "How It Works",
      subtitle: "Our streamlined approach ensures maximum efficiency and optimal results.",
      steps: {
        collect: {
          title: "Collect",
          description: "Gather and organize data from multiple sources with automated collection processes.",
        },
        process: {
          title: "Process",
          description: "Apply advanced algorithms and AI to transform raw data into actionable insights.",
        },
        analyze: {
          title: "Analyze",
          description: "Generate comprehensive reports and visualizations for informed decision-making.",
        },
        optimize: {
          title: "Optimize",
          description: "Continuously improve processes based on performance metrics and feedback.",
        },
        processing: {
          title: "AI Processing",
          description: "Advanced machine learning algorithms analyze patterns"
        },
        security: {
          title: "Security Layer",
          description: "Enterprise-grade security and compliance"
        },
        analysis: {
          title: "Pattern Analysis",
          description: "Deep learning identifies complex data relationships"
        },
        optimization: {
          title: "Optimization",
          description: "Continuous performance enhancement"
        },
        encryption: {
          title: "Data Encryption",
          description: "Military-grade protection for sensitive information"
        },
        deployment: {
          title: "Deployment",
          description: "Seamless integration with your systems"
        },
        users: {
          title: "User Experience",
          description: "Intuitive interface for maximum productivity"
        }
      },
    },
    partners: {
      title: "Trusted by",
      titleHighlight: "Industry Leaders",
      subtitle: "Join a growing ecosystem of innovative companies and organizations that trust our solutions.",
      viewAll: "View All Partners",
      viewAllPartners: "View All Partners",
      stats: {
        clients: "Enterprise Clients",
        countries: "Countries",
        users: "Users Worldwide"
      }
    },
    blog: {
      title: "Our Blog",
      subtitle: "Dive deep into industry insights, technical innovations, and thought leadership from our team of experts on our dedicated blog platform.",
      latestPosts: "Latest Posts",
      readMore: "Read More",
      openBlog: "Open Blog",
      poweredBy: "powered by HubSpot",
      placeholder: "Blog posts will appear here",
      configNote: "Configure HubSpot embed or RSS feed in useEffect",
      features: {
        innovation: {
          title: "Innovation Insights",
          description: "Latest trends and breakthrough technologies shaping the future of business.",
        },
        technical: {
          title: "Technical Deep-Dives",
          description: "In-depth technical articles and tutorials from our engineering team.",
        },
        analysis: {
          title: "Industry Analysis",
          description: "Data-driven analysis and expert commentary on market developments.",
        },
      },
      subscribeRss: "Subscribe to RSS",
      subscribeNewsletter: "Subscribe to Newsletter",
      whatYouFind: "What You'll Find",
      latestPostsPreview: "Latest Posts Preview",
      getGlimpse: "Get a glimpse of our recent content",
    },
    downloads: {
      title: "Resource Downloads",
      subtitle: "Access comprehensive guides, documentation, tools, and resources to accelerate your implementation and maximize your platform potential.",
      filterByCategory: "Filter by Category:",
      availableDownloads: "Available Downloads",
      resource: "resource",
      resources: "resources",
      clickToDownload: "Click on any resource below to download after completing a quick form.",
      noResourcesFound: "No resources found",
      noResourcesDescription: "No downloads available for the selected category.",
      needAdditionalResources: "Need Additional Resources?",
      needAdditionalDescription: "Cannot find what you are looking for? Our team is here to help you access the right resources for your specific use case.",
      contactSupport: "Contact Support",
      requestCustomResource: "Request Custom Resource",
    },
    team: {
      title: "Meet Our Team",
      subtitle: "Passionate professionals dedicated to driving innovation and delivering exceptional results for our clients worldwide.",
      connectLinkedIn: "Connect on LinkedIn",
    },
    downloadGate: {
      download: "Download",
      downloaded: "Downloaded",
      fillForm: "Please fill out the form below to access your download.",
      success: "Success!",
      downloadStarted: "Your download has started.",
      error: "Error",
      formLoadError: "Failed to load download form. Please try again.",
    },
    finalCta: {
      badge: "Ready to Launch",
      title: "Transform Your Business",
      titleHighlight: "Today",
      subtitle: "Join thousands of companies already using our revolutionary platform to accelerate growth and innovation.",
      ctaPrimary: "Get Started Today",
      ctaSecondary: "Schedule a Demo",
      startJourney: "Start Your Journey",
      scheduleDemo: "Schedule Demo"
    },
    footer: {
      description: "Empowering businesses with innovative technology solutions for sustainable growth and digital transformation.",
      copyright: "All rights reserved.",
      builtWith: "Built with modern technology",
      links: {
        imprint: "Imprint",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
      legal: {
        imprint: "Imprint",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      }
    },
    buttons: {
      contactUs: "Contact Us"
    }
  },
  de: {
    navigation: {
      home: "Startseite",
      functionalities: "Funktionen",
      successStories: "Erfolgsgeschichten",
      partners: "Partner",
      pricing: "Preise",
      blog: "Blog",
      team: "Team",
      downloads: "Downloads",
      quickNavigation: "Schnellnavigation",
    },
    hero: {
      badge: "Revolutionäre Technologie",
      title: "Die Zukunft der",
      titleHighlight: "Innovation",
      subtitle: "Erleben Sie revolutionäre Lösungen, die Unternehmen transformieren und das Wachstum mit modernster Technologie beschleunigen.",
      ctaPrimary: "Loslegen",
      ctaSecondary: "Mehr erfahren",
      getStarted: "Jetzt starten",
      learnMore: "Mehr erfahren",
      features: {
        secure: "Sicher",
        fast: "Schnell",
        innovative: "Innovativ"
      },
      dataCollection: {
        title: "Datenerfassung",
        description: "Intelligente Datensammlung aus mehreren Quellen"
      }
    },
    functionalities: {
      title: "Leistungsstarke",
      titleHighlight: "Funktionen",
      subtitle: "Entdecken Sie die umfassende Suite von Tools und Features, die darauf ausgelegt sind, Ihre Geschäftsabläufe zu transformieren.",
      exploreFeatures: "Alle Features erkunden",
      dataCollection: {
        title: "Datenerfassung",
        description: "Erweiterte Datensammlung und -verarbeitung mit Echtzeit-Synchronisation.",
      },
      aiProcessing: {
        title: "KI-Verarbeitung",
        description: "Intelligente Automatisierung und maschinelle Lernalgorithmen für verbesserte Entscheidungsfindung.",
      },
      analyticsInsights: {
        title: "Analytics & Erkenntnisse",
        description: "Umfassendes Analytics-Dashboard mit umsetzbaren Erkenntnissen und prädiktiven Analysen.",
      },
      automation: {
        title: "Automatisierung",
        description: "Optimierte Workflow-Automatisierung zur Steigerung der Effizienz und Reduzierung manueller Aufgaben.",
      },
      integration: {
        title: "Integration",
        description: "Nahtlose Integration mit bestehenden Systemen und Drittanbieter-Anwendungen.",
      },
      security: {
        title: "Sicherheit",
        description: "Sicherheitsmaßnahmen auf Unternehmensebene für Datenschutz und Compliance.",
      },
      features: {
        aiAnalytics: {
          title: "KI-gestützte Analytik",
          description: "Fortschrittliche Machine-Learning-Algorithmen, die tiefe Einblicke in Ihre Daten bieten."
        },
        dataIntegration: {
          title: "Datenintegration",
          description: "Nahtlose Integration mit mehreren Datenquellen und Plattformen."
        },
        security: {
          title: "Unternehmenssicherheit",
          description: "Bankenstandard-Sicherheitsprotokolle zum Schutz Ihrer sensiblen Informationen."
        },
        realTime: {
          title: "Echtzeit-Verarbeitung",
          description: "Blitzschnelle Verarbeitung für sofortige Ergebnisse und Erkenntnisse."
        }
      }
    },
    process: {
      title: "So funktioniert es",
      subtitle: "Unser optimierter Ansatz gewährleistet maximale Effizienz und optimale Ergebnisse.",
      steps: {
        collect: {
          title: "Sammeln",
          description: "Sammeln und organisieren Sie Daten aus mehreren Quellen mit automatisierten Erfassungsprozessen.",
        },
        process: {
          title: "Verarbeiten",
          description: "Anwenden fortschrittlicher Algorithmen und KI zur Transformation von Rohdaten in umsetzbare Erkenntnisse.",
        },
        analyze: {
          title: "Analysieren",
          description: "Erstellen umfassender Berichte und Visualisierungen für fundierte Entscheidungsfindung.",
        },
        optimize: {
          title: "Optimieren",
          description: "Kontinuierliche Verbesserung der Prozesse basierend auf Leistungskennzahlen und Feedback.",
        },
        processing: {
          title: "KI-Verarbeitung",
          description: "Fortschrittliche Machine-Learning-Algorithmen analysieren Muster"
        },
        security: {
          title: "Sicherheitsebene",
          description: "Unternehmenstaugliche Sicherheit und Compliance"
        },
        analysis: {
          title: "Musteranalyse",
          description: "Deep Learning identifiziert komplexe Datenbeziehungen"
        },
        optimization: {
          title: "Optimierung",
          description: "Kontinuierliche Leistungsverbesserung"
        },
        encryption: {
          title: "Datenverschlüsselung",
          description: "Militärstandard-Schutz für sensible Informationen"
        },
        deployment: {
          title: "Bereitstellung",
          description: "Nahtlose Integration in Ihre Systeme"
        },
        users: {
          title: "Benutzererfahrung",
          description: "Intuitive Benutzeroberfläche für maximale Produktivität"
        }
      },
    },
    partners: {
      title: "Vertraut von",
      titleHighlight: "Branchenführern",
      subtitle: "Schließen Sie sich einem wachsenden Ökosystem innovativer Unternehmen und Organisationen an, die unseren Lösungen vertrauen.",
      viewAll: "Alle Partner anzeigen",
      viewAllPartners: "Alle Partner anzeigen",
      stats: {
        clients: "Unternehmenskunden",
        countries: "Länder",
        users: "Nutzer weltweit"
      }
    },
    blog: {
      title: "Unser Blog",
      subtitle: "Tauchen Sie ein in Brancheneinblicke, technische Innovationen und Thought Leadership von unserem Expertenteam auf unserer dedizierten Blog-Plattform.",
      latestPosts: "Neueste Beiträge",
      readMore: "Weiterlesen",
      openBlog: "Blog öffnen",
      poweredBy: "unterstützt von HubSpot",
      placeholder: "Blog-Beiträge werden hier angezeigt",
      configNote: "HubSpot-Einbettung oder RSS-Feed in useEffect konfigurieren",
      features: {
        innovation: {
          title: "Innovations-Einblicke",
          description: "Neueste Trends und bahnbrechende Technologien, die die Zukunft der Wirtschaft prägen.",
        },
        technical: {
          title: "Technische Tiefblicke",
          description: "Tiefgreifende technische Artikel und Tutorials von unserem Engineering-Team.",
        },
        analysis: {
          title: "Branchenanalyse",
          description: "Datengestützte Analysen und Expertenkommentare zu Marktentwicklungen.",
        },
      },
      subscribeRss: "RSS abonnieren",
      subscribeNewsletter: "Newsletter abonnieren",
      whatYouFind: "Was Sie finden werden",
      latestPostsPreview: "Vorschau der neuesten Beiträge",
      getGlimpse: "Erhalten Sie einen Einblick in unsere neuesten Inhalte",
    },
    downloads: {
      title: "Ressourcen-Downloads",
      subtitle: "Zugang zu umfassenden Leitfäden, Dokumentationen, Tools und Ressourcen zur Beschleunigung Ihrer Implementierung und Maximierung Ihres Plattform-Potentials.",
      filterByCategory: "Nach Kategorie filtern:",
      availableDownloads: "Verfügbare Downloads",
      resource: "Ressource",
      resources: "Ressourcen",
      clickToDownload: "Klicken Sie auf eine beliebige Ressource unten, um sie nach Ausfüllen eines kurzen Formulars herunterzuladen.",
      noResourcesFound: "Keine Ressourcen gefunden",
      noResourcesDescription: "Keine Downloads für die ausgewählte Kategorie verfügbar.",
      needAdditionalResources: "Benötigen Sie zusätzliche Ressourcen?",
      needAdditionalDescription: "Können Sie nicht finden, wonach Sie suchen? Unser Team hilft Ihnen dabei, die richtigen Ressourcen für Ihren spezifischen Anwendungsfall zu finden.",
      contactSupport: "Support kontaktieren",
      requestCustomResource: "Individuelle Ressource anfordern",
    },
    team: {
      title: "Lernen Sie unser Team kennen",
      subtitle: "Leidenschaftliche Fachkräfte, die sich der Innovation und der Bereitstellung außergewöhnlicher Ergebnisse für unsere Kunden weltweit widmen.",
      connectLinkedIn: "Auf LinkedIn vernetzen",
    },
    downloadGate: {
      download: "Herunterladen",
      downloaded: "Heruntergeladen",
      fillForm: "Bitte füllen Sie das folgende Formular aus, um Zugang zu Ihrem Download zu erhalten.",
      success: "Erfolg!",
      downloadStarted: "Ihr Download hat begonnen.",
      error: "Fehler",
      formLoadError: "Das Download-Formular konnte nicht geladen werden. Bitte versuchen Sie es erneut.",
    },
    finalCta: {
      badge: "Startbereit",
      title: "Transformieren Sie Ihr Unternehmen",
      titleHighlight: "Heute",
      subtitle: "Schließen Sie sich Tausenden von Unternehmen an, die bereits unsere revolutionäre Plattform nutzen, um Wachstum und Innovation zu beschleunigen.",
      ctaPrimary: "Heute starten",
      ctaSecondary: "Demo terminieren",
      startJourney: "Starten Sie Ihre Reise",
      scheduleDemo: "Demo vereinbaren"
    },
    footer: {
      description: "Stärkung von Unternehmen mit innovativen Technologielösungen für nachhaltiges Wachstum und digitale Transformation.",
      copyright: "Alle Rechte vorbehalten.",
      builtWith: "Erstellt mit moderner Technologie",
      links: {
        imprint: "Impressum",
        privacy: "Datenschutzerklärung",
        terms: "Nutzungsbedingungen",
      },
      legal: {
        imprint: "Impressum",
        privacy: "Datenschutz",
        terms: "Nutzungsbedingungen"
      }
    },
    buttons: {
      contactUs: "Kontaktieren Sie uns"
    }
  }
};