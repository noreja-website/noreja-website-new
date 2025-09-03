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
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
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
    steps: {
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
    placeholder: string;
    configNote: string;
  };
  finalCta: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    startJourney: string;
    scheduleDemo: string;
  };
  footer: {
    description: string;
    copyright: string;
    builtWith: string;
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
      downloads: "Downloads"
    },
    hero: {
      badge: "Revolutionary Technology",
      title: "The Future of",
      titleHighlight: "Innovation",
      subtitle: "Experience revolutionary solutions that transform businesses and accelerate growth with cutting-edge technology.",
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
      steps: {
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
      }
    },
    partners: {
      title: "Trusted by",
      titleHighlight: "Industry Leaders",
      subtitle: "Join a growing ecosystem of innovative companies and organizations that trust our solutions.",
      viewAllPartners: "View All Partners",
      stats: {
        clients: "Enterprise Clients",
        countries: "Countries",
        users: "Users Worldwide"
      }
    },
    blog: {
      title: "Latest Insights",
      subtitle: "Stay updated with our latest thoughts and innovations",
      placeholder: "Blog posts will appear here",
      configNote: "Configure HubSpot embed or RSS feed in useEffect"
    },
    finalCta: {
      badge: "Ready to Launch",
      title: "Transform Your Business",
      titleHighlight: "Today",
      subtitle: "Join thousands of companies already using our revolutionary platform to accelerate growth and innovation.",
      startJourney: "Start Your Journey",
      scheduleDemo: "Schedule Demo"
    },
    footer: {
      description: "Revolutionary technology solutions for the future",
      copyright: "All rights reserved.",
      builtWith: "Built with modern technology",
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
      downloads: "Downloads"
    },
    hero: {
      badge: "Revolutionäre Technologie",
      title: "Die Zukunft der",
      titleHighlight: "Innovation",
      subtitle: "Erleben Sie revolutionäre Lösungen, die Unternehmen transformieren und das Wachstum mit modernster Technologie beschleunigen.",
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
      steps: {
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
      }
    },
    partners: {
      title: "Vertraut von",
      titleHighlight: "Branchenführern",
      subtitle: "Schließen Sie sich einem wachsenden Ökosystem innovativer Unternehmen und Organisationen an, die unseren Lösungen vertrauen.",
      viewAllPartners: "Alle Partner anzeigen",
      stats: {
        clients: "Unternehmenskunden",
        countries: "Länder",
        users: "Nutzer weltweit"
      }
    },
    blog: {
      title: "Neueste Erkenntnisse",
      subtitle: "Bleiben Sie auf dem Laufenden mit unseren neuesten Gedanken und Innovationen",
      placeholder: "Blog-Beiträge werden hier angezeigt",
      configNote: "HubSpot-Einbettung oder RSS-Feed in useEffect konfigurieren"
    },
    finalCta: {
      badge: "Startbereit",
      title: "Transformieren Sie Ihr Unternehmen",
      titleHighlight: "Heute",
      subtitle: "Schließen Sie sich Tausenden von Unternehmen an, die bereits unsere revolutionäre Plattform nutzen, um Wachstum und Innovation zu beschleunigen.",
      startJourney: "Starten Sie Ihre Reise",
      scheduleDemo: "Demo vereinbaren"
    },
    footer: {
      description: "Revolutionäre Technologielösungen für die Zukunft",
      copyright: "Alle Rechte vorbehalten.",
      builtWith: "Erstellt mit moderner Technologie",
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