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
    events: string;
    quickNavigation: string;
  };
  pages: {
    functionalities: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      learnMore: string;
      learnMoreSubtitle: string;
      capabilities: {
        dataCollection: {
          title: string;
          description: string;
          schematicTitle: string;
          schematicDesc: string;
        };
        aiProcessing: {
          title: string;
          description: string;
          schematicTitle: string;
          schematicDesc: string;
        };
        analyticsInsights: {
          title: string;
          description: string;
          schematicTitle: string;
          schematicDesc: string;
        };
        automation: {
          title: string;
          description: string;
          schematicTitle: string;
          schematicDesc: string;
        };
        integration: {
          title: string;
          description: string;
          schematicTitle: string;
          schematicDesc: string;
        };
        security: {
          title: string;
          description: string;
          schematicTitle: string;
          schematicDesc: string;
        };
      };
    };
    successStories: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      readCaseStudy: string;
    };
    partners: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      strategicPartnerships: string;
      trustedBy: string;
      visitWebsite: string;
      becomePartner: string;
      partnerWithUs: string;
      learnMore: string;
      partnerSubtitle: string;
    };
    pricing: {
      title: string;
      subtitle: string;
      teamSize: string;
      users: string;
      user: string;
      mostPopular: string;
      month: string;
      viewAllFeatures: string;
      footerNote: string;
      plans: {
        starter: {
          name: string;
          description: string;
          features: string[];
          cta: string;
        };
        pro: {
          name: string;
          description: string;
          features: string[];
          cta: string;
        };
        enterprise: {
          name: string;
          description: string;
          features: string[];
          cta: string;
        };
        };
      };
      contact: {
        title: string;
        subtitle: string;
        bookCallText: string;
        bookCallButton: string;
        responseNote: string;
      };
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
      workbench: {
        title: string;
        description: string;
      };
    };
  };
  usps: {
    title: string;
    highlight: string;
    subtitle: string;
    tapToLearnMore: string;
    features: {
      connectionSpeed: {
        title: string;
        description: string;
      };
      realisticResults: {
        title: string;
        description: string;
      };
      multidimensionalPerspectives: {
        title: string;
        description: string;
      };
      contextDomainKnowledge: {
        title: string;
        description: string;
      };
    };
  };
  integrations: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    discoverIntegrations: string;
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
    events: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      upcomingEvents: string;
      pastEvents: string;
      noUpcomingEvents: string;
      noUpcomingDescription: string;
      stayTuned: string;
      subscribeNewsletter: string;
      register: string;
      learnMore: string;
      viewDetails: string;
      showPastEvents: string;
      hidePastEvents: string;
      eventDate: string;
      eventTime: string;
      location: string;
      online: string;
      onsite: string;
      hybrid: string;
      free: string;
      paid: string;
      capacity: string;
      spotsLeft: string;
      soldOut: string;
      loadingEvents: string;
    };
  team: {
    title: string;
    subtitle: string;
    connectLinkedIn: string;
    founders: string;
    team: string;
    learnMore: string;
    advisoryBoard: string;
    advisorySubtitle: string;
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
      trustCenter: string;
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
      events: "Events",
      quickNavigation: "Quick Navigation",
    },
    pages: {
      functionalities: {
        title: "Product",
        titleHighlight: "Functionalities",
        subtitle: "Discover the comprehensive capabilities that power your data-driven success. From intelligent collection to actionable insights, explore how our platform transforms your workflow.",
        learnMore: "Learn More",
        learnMoreSubtitle: "Discover insights and best practices from our experts",
        capabilities: {
          dataCollection: {
            title: "Data Collection",
            description: "Intelligent data gathering from multiple sources with automated processing and real-time synchronization. Our advanced algorithms ensure comprehensive coverage while maintaining data integrity and compliance standards.",
            schematicTitle: "Data Flow Architecture",
            schematicDesc: "Multi-source data ingestion pipeline"
          },
          aiProcessing: {
            title: "AI Processing",
            description: "State-of-the-art machine learning models that analyze, classify, and extract insights from your data. Our AI engine continuously learns and adapts to provide increasingly accurate and relevant results.",
            schematicTitle: "Neural Network Pipeline",
            schematicDesc: "Advanced ML processing workflow"
          },
          analyticsInsights: {
            title: "Analytics & Insights",
            description: "Transform raw data into actionable insights with our comprehensive analytics suite. Generate detailed reports, identify trends, and make data-driven decisions with confidence.",
            schematicTitle: "Analytics Dashboard",
            schematicDesc: "Real-time insights visualization"
          },
          automation: {
            title: "Automation",
            description: "Streamline your workflows with intelligent automation that reduces manual effort and eliminates repetitive tasks. Set up custom triggers and actions to optimize your business processes.",
            schematicTitle: "Workflow Engine",
            schematicDesc: "Automated process orchestration"
          },
          integration: {
            title: "Integration",
            description: "Seamlessly connect with your existing tools and systems through our robust API and pre-built integrations. Ensure smooth data flow across your entire technology stack.",
            schematicTitle: "Integration Hub",
            schematicDesc: "System connectivity matrix"
          },
          security: {
            title: "Security",
            description: "Enterprise-grade security features protect your data at every level. With end-to-end encryption, access controls, and compliance certifications, your information stays secure.",
            schematicTitle: "Security Framework",
            schematicDesc: "Multi-layer protection system"
          }
        }
      },
      successStories: {
        title: "Customer",
        titleHighlight: "Success Stories",
        subtitle: "Discover how leading organizations across industries have transformed their operations and achieved remarkable results with our platform.",
        readCaseStudy: "Read Case Study"
      },
      partners: {
        title: "Our",
        titleHighlight: "Partners",
        subtitle: "Collaborating with industry leaders to deliver innovative solutions and drive digital transformation across every sector.",
        strategicPartnerships: "Strategic Partnerships",
        trustedBy: "Trusted by leading organizations worldwide",
        visitWebsite: "Visit Website",
        becomePartner: "Become a Partner",
        partnerWithUs: "Partner With Us",
        learnMore: "Learn More",
        partnerSubtitle: "Join our ecosystem of innovative partners and unlock new opportunities for growth, collaboration, and shared success."
      },
      pricing: {
        title: "Simple, Transparent Pricing",
        subtitle: "Choose the plan that fits your team size and needs. All plans include a 14-day free trial.",
        teamSize: "Team Size:",
        users: "users",
        user: "user",
        mostPopular: "Most Popular",
        month: "/month",
        viewAllFeatures: "View all features",
        footerNote: "All plans include 14-day free trial • No setup fees • Cancel anytime",
        plans: {
          starter: {
            name: "Starter",
            description: "Perfect for small teams getting started",
            features: [
              "Up to 5 projects",
              "Basic analytics",
              "Email support",
              "Core integrations",
              "Standard security"
            ],
            cta: "Start free trial"
          },
          pro: {
            name: "Pro",
            description: "Best for growing teams and businesses",
            features: [
              "Unlimited projects",
              "Advanced analytics",
              "Priority support",
              "All integrations",
              "Enhanced security",
              "Custom workflows",
              "Team collaboration tools"
            ],
            cta: "Start free trial"
          },
          enterprise: {
            name: "Enterprise",
            description: "For large organizations with specific needs",
            features: [
              "Everything in Pro",
              "Dedicated support",
              "Custom integrations",
              "Advanced security",
              "SLA guarantee",
              "On-premise deployment",
              "Custom training"
            ],
            cta: "Contact us"
          }
        }
      },
      contact: {
        title: "Get in Touch",
        subtitle: "We'd love to hear from you. Reach out to our team for questions, collaborations, or product demos.",
        bookCallText: "Prefer to book a call directly?",
        bookCallButton: "Book a Call",
        responseNote: "We typically respond within 24 hours."
      }
    },
    hero: {
      badge: "Generative Process Intelligence",
      title: "The Future of",
      titleHighlight: "Innovation",
      subtitle: "Elevating Process Knowledge with the Power of GenAI – faster data connection without event-log, more realistic outcomes, open architecture for easy integration.\nEnterprise technology, built for efficiency in medium-sized businesses",
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
          title: "Minerva",
          description: "Your AI-powered process analyst. Minerva combines process data with contextual knowledge to identify causes, explain relationships, and provide well-founded recommendations for action."
        },
        dataIntegration: {
          title: "Analyzer",
          description: "Dive deep into your processes, understand relationships, and quickly discover where and why problems arise, data-driven and traceable."
        },
        security: {
          title: "Dashboard",
          description: "Present your process insights clearly and concisely or use the dashboard to continuously monitor changes and improvements."
        },
        realTime: {
          title: "Builder",
          description: "Import data directly, without event logs, supplement knowledge, hypotheses, or contextual data with just a few clicks. This way you maintain full control over your analysis."
        },
        workbench: {
          title: "Workbench",
          description: "Extend your analyses with custom scripts in the integrated Jupyter Notebook, without leaving the application. Your data always stays with you."
        }
      }
    },
    usps: {
      title: "The New Standard for ",
      highlight: "Process Intelligence",
      subtitle: "From automatic analysis to AI-supported root cause research, everything you need to make processes self-improving.",
      tapToLearnMore: "Tap to learn more",
      features: {
        connectionSpeed: {
          title: "Fast Connection",
          description: "Data integration works without intermediate steps such as an event log. The Builder connects directly to the tables of the (relational) databases. This significantly accelerates data connection compared to conventional solutions."
        },
        realisticResults: {
          title: "Realistic Results",
          description: "The process analysis takes into account the complex relationships within the data schema of the underlying source systems. This makes the analyses more realistic and avoids the weaknesses of traditional solutions."
        },
        multidimensionalPerspectives: {
          title: "Multidimensional Perspectives",
          description: "Process analysis can be performed in a multidimensional way. Users can add additional views based on various business objects, such as an order number, user ID, or invoice number."
        },
        contextDomainKnowledge: {
          title: "Context and Domain Knowledge",
          description: "By integrating context and domain knowledge (unstructured text), a direct comparison between the target (TO-BE) and actual (AS-IS) state of a process can be made. In addition, AI can better interpret process analyses with context and derive the right implications."
        }
      }
    },
    integrations: {
      badge: "Integrations",
      title: "Simply connect.",
      titleHighlight: "Start immediately.",
      subtitle: "Noreja integrates seamlessly into your existing system landscape. Flexible, secure and without additional integration efforts.",
      discoverIntegrations: "Discover integrations"
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
      subtitle: "Dive into practical analyses, industry knowledge and innovations around Process Intelligence, directly from our expert team.",
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
        caseStudies: {
          title: "Case Studies",
          description: "Real-world implementations and success stories from our clients.",
        },
      },
      categories: {
        innovation: "Innovation",
        technical: "Technical",
        analysis: "Analysis", 
        caseStudies: "Case Studies",
      },
      viewAllPosts: "View All Posts",
      latestFrom: "Latest from",
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
    events: {
      title: "Events &",
      titleHighlight: "Announcements",
      subtitle: "Stay updated with our latest events, webinars, and important announcements. Join us for insights and networking opportunities.",
      upcomingEvents: "Upcoming Events",
      pastEvents: "Past Events",
      noUpcomingEvents: "No upcoming events at the moment",
      noUpcomingDescription: "Stay tuned for future announcements and exciting events. We'll keep you informed about upcoming opportunities.",
      stayTuned: "Stay tuned for future announcements",
      subscribeNewsletter: "Subscribe to Newsletter",
      register: "Register",
      learnMore: "Learn More",
      viewDetails: "View Details",
      showPastEvents: "Show Past Events",
      hidePastEvents: "Hide Past Events",
      eventDate: "Event Date",
      eventTime: "Time",
      location: "Location",
      online: "Online",
      onsite: "On-site",
      hybrid: "Hybrid",
      free: "Free",
      paid: "Paid",
      capacity: "Capacity",
      spotsLeft: "spots left",
      soldOut: "Sold Out",
      loadingEvents: "Loading events..."
    },
    team: {
      title: "Meet Our Team",
      subtitle: "Get to know the faces behind the vision and development of our solution.",
      connectLinkedIn: "Connect on LinkedIn",
      founders: "Founder-Team",
      team: "Team",
      learnMore: "Learn More",
      advisoryBoard: "Advisory-Board",
      advisorySubtitle: "Industry experts and thought leaders who guide our strategic direction and innovation.",
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
      badge: "Ready to Start",
      title: "Take the Next Step – ",
      titleHighlight: "with Noreja",
      subtitle: "Join companies that are redefining growth and efficiency with intelligent process analysis.",
      ctaPrimary: "Get Started Today",
      ctaSecondary: "Schedule a Demo",
      startJourney: "Start Your Journey →",
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
        terms: "Terms of Service",
        trustCenter: "Trust Center"
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
      events: "Veranstaltungen",
      quickNavigation: "Schnellnavigation",
    },
    pages: {
      functionalities: {
        title: "Produkt",
        titleHighlight: "Funktionen",
        subtitle: "Von automatischer Analyse bis KI-gestützter Ursachenforschung – alles, was du brauchst, um Prozesse selbstverbessernd zu machen.",
        learnMore: "Mehr erfahren",
        learnMoreSubtitle: "Entdecken Sie Einblicke und Best Practices von unseren Experten",
        capabilities: {
          dataCollection: {
            title: "Datenerfassung",
            description: "Intelligente Datensammlung aus mehreren Quellen mit automatisierter Verarbeitung und Echtzeit-Synchronisation. Unsere fortschrittlichen Algorithmen gewährleisten umfassende Abdeckung bei gleichzeitiger Wahrung der Datenintegrität und Compliance-Standards.",
            schematicTitle: "Datenfluss-Architektur",
            schematicDesc: "Multi-Source Datenaufnahme-Pipeline"
          },
          aiProcessing: {
            title: "KI-Verarbeitung",
            description: "Modernste Machine-Learning-Modelle, die Ihre Daten analysieren, klassifizieren und Erkenntnisse extrahieren. Unsere KI-Engine lernt kontinuierlich und passt sich an, um zunehmend präzise und relevante Ergebnisse zu liefern.",
            schematicTitle: "Neuronale Netzwerk-Pipeline",
            schematicDesc: "Erweiterte ML-Verarbeitungs-Workflow"
          },
          analyticsInsights: {
            title: "Analytics & Insights",
            description: "Verwandeln Sie Rohdaten in umsetzbare Erkenntnisse mit unserer umfassenden Analytics-Suite. Erstellen Sie detaillierte Berichte, identifizieren Sie Trends und treffen Sie datengestützte Entscheidungen mit Vertrauen.",
            schematicTitle: "Analytics Dashboard",
            schematicDesc: "Echtzeit-Erkenntnisse Visualisierung"
          },
          automation: {
            title: "Automatisierung",
            description: "Optimieren Sie Ihre Workflows mit intelligenter Automatisierung, die manuellen Aufwand reduziert und wiederkehrende Aufgaben eliminiert. Richten Sie benutzerdefinierte Trigger und Aktionen ein, um Ihre Geschäftsprozesse zu optimieren.",
            schematicTitle: "Workflow-Engine",
            schematicDesc: "Automatisierte Prozess-Orchestrierung"
          },
          integration: {
            title: "Integration",
            description: "Verbinden Sie sich nahtlos mit Ihren bestehenden Tools und Systemen über unsere robuste API und vorgefertigte Integrationen. Gewährleisten Sie einen reibungslosen Datenfluss durch Ihren gesamten Technologie-Stack.",
            schematicTitle: "Integration Hub",
            schematicDesc: "System-Konnektivitäts-Matrix"
          },
          security: {
            title: "Sicherheit",
            description: "Sicherheitsfunktionen auf Unternehmensebene schützen Ihre Daten auf jeder Ebene. Mit Ende-zu-Ende-Verschlüsselung, Zugriffskontrollen und Compliance-Zertifizierungen bleiben Ihre Informationen sicher.",
            schematicTitle: "Sicherheits-Framework",
            schematicDesc: "Mehrschichtiges Schutzsystem"
          }
        }
      },
      successStories: {
        title: "Kunden",
        titleHighlight: "Erfolgsgeschichten",
        subtitle: "Entdecken Sie, wie führende Organisationen verschiedener Branchen ihre Abläufe transformiert und bemerkenswerte Ergebnisse mit unserer Plattform erzielt haben.",
        readCaseStudy: "Fallstudie lesen"
      },
      partners: {
        title: "Unsere",
        titleHighlight: "Partner",
        subtitle: "Zusammenarbeit mit Branchenführern zur Bereitstellung innovativer Lösungen und zur Förderung der digitalen Transformation in jedem Sektor.",
        strategicPartnerships: "Strategische Partnerschaften",
        trustedBy: "Vertraut von führenden Organisationen weltweit",
        visitWebsite: "Website besuchen",
        becomePartner: "Partner werden",
        partnerWithUs: "Partner werden",
        learnMore: "Mehr erfahren",
        partnerSubtitle: "Treten Sie unserem Ökosystem innovativer Partner bei und erschließen Sie neue Möglichkeiten für Wachstum, Zusammenarbeit und gemeinsamen Erfolg."
      },
      pricing: {
        title: "Einfache, transparente Preise",
        subtitle: "Wählen Sie den Plan, der zu Ihrer Teamgröße und Ihren Bedürfnissen passt. Alle Pläne beinhalten eine 14-tägige kostenlose Testversion.",
        teamSize: "Teamgröße:",
        users: "Benutzer",
        user: "Benutzer",
        mostPopular: "Am beliebtesten",
        month: "/Monat",
        viewAllFeatures: "Alle Features anzeigen",
        footerNote: "Alle Pläne beinhalten 14-tägige kostenlose Testversion • Keine Einrichtungsgebühren • Jederzeit kündbar",
        plans: {
          starter: {
            name: "Starter",
            description: "Perfekt für kleine Teams, die anfangen",
            features: [
              "Bis zu 5 Projekte",
              "Basis-Analytics",
              "E-Mail-Support",
              "Kern-Integrationen",
              "Standard-Sicherheit"
            ],
            cta: "Kostenlose Testversion starten"
          },
          pro: {
            name: "Pro",
            description: "Am besten für wachsende Teams und Unternehmen",
            features: [
              "Unbegrenzte Projekte",
              "Erweiterte Analytics",
              "Prioritäts-Support",
              "Alle Integrationen",
              "Erweiterte Sicherheit",
              "Benutzerdefinierte Workflows",
              "Team-Collaboration-Tools"
            ],
            cta: "Kostenlose Testversion starten"
          },
          enterprise: {
            name: "Enterprise",
            description: "Für große Organisationen mit spezifischen Anforderungen",
            features: [
              "Alles aus Pro",
              "Dedizierter Support",
              "Benutzerdefinierte Integrationen",
              "Erweiterte Sicherheit",
              "SLA-Garantie",
              "On-Premise-Bereitstellung",
              "Benutzerdefinierte Schulungen"
            ],
            cta: "Kontakt aufnehmen"
          }
        }
      },
      contact: {
        title: "Kontakt aufnehmen",
        subtitle: "Wir freuen uns auf Ihre Nachricht. Kontaktieren Sie unser Team für Fragen, Kooperationen oder Produktdemos.",
        bookCallText: "Lieber direkt einen Termin buchen?",
        bookCallButton: "Termin buchen",
        responseNote: "Wir antworten in der Regel innerhalb von 24 Stunden."
      }
    },
    hero: {
      badge: "Generative Process Intelligence",
      title: "Die Zukunft der",
      titleHighlight: "Innovation",
      subtitle: "Elevating Process Knowledge with the Power of GenAI – faster data connection without event-log, more realistic outcomes, open architecture for easy integration.\nEnterprise technology, built for efficiency in medium-sized businesses",
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
      title: "Eine Plattfform -",
      titleHighlight: "fünf Wege zur Process Intelligence",
      subtitle: "Von automatischer Analyse bis KI-gestützter Ursachenforschung – alles, was du brauchst, um Prozesse selbstverbessernd zu machen.",
      exploreFeatures: "Alle Features erkunden",
      dataCollection: {
        title: "Datenerfassung",
        description: "Erweiterte Datensammlung und -verarbeitung mit Echtzeit-Synchronisation.",
      },
      aiProcessing: {
        title: "KI-Verarbeitung",
        description: "Intelligente Automatisierung und Machine-Learning-Algorithmen für verbesserte Entscheidungsfindung.",
      },
      analyticsInsights: {
        title: "Analytics & Insights",
        description: "Umfassendes Analytics-Dashboard mit umsetzbaren Erkenntnissen und prädiktiver Analytik.",
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
        description: "Sicherheitsmaßnahmen auf Unternehmensebene zur Gewährleistung von Datenschutz und Compliance.",
      },
      features: {
        aiAnalytics: {
          title: "Minerva",
          description: "Dein KI-gestützter Prozess-Analyst. Minerva kombiniert Prozessdaten mit Kontextwissen, um Ursachen zu erkennen, Zusammenhänge zu erklären und fundierte Handlungsempfehlungen zu geben."
        },
        dataIntegration: {
          title: "Analyzer",
          description: "Tauche tief in deine Prozesse ein, verstehe Zusammenhänge und finde schnell heraus, wo und warum Probleme entstehen – datenbasiert und nachvollziehbar.",
        },
        security: {
          title: "Dashboard",
          description: "Präsentiere deine Prozess-Insights klar und kompakt oder nutze das Dashboard, um Veränderungen und Verbesserungen kontinuierlich zu überwachen."
        },
        realTime: {
          title: "Builder",
          description: "Importiere Daten direkt, ohne Event-Logs – ergänze Wissen, Hypothesen oder Kontextdaten mit wenigen Klicks. So behältst du volle Kontrolle über deine Analyse."
        },
        workbench: {
          title: "Workbench",
          description: "Erweitere deine Analysen mit individuellen Skripten im integrierten Jupyter Notebook – ohne die Anwendung zu verlassen. Deine Daten bleiben immer bei dir."
        }
      }
    },
    usps: {
      title: "Der neue Standard für ",
      highlight: "Process Intelligence",
      subtitle: "Von automatischer Analyse bis KI-gestützter Ursachenforschung – alles, was du brauchst, um Prozesse selbstverbessernd zu machen.",
      tapToLearnMore: "Tippen, um mehr zu erfahren",
      features: {
        connectionSpeed: {
          title: "Schnelle Anbindung",
          description: "Die Datenanbindung funktioniert ohne Zwischenschritte wie einem Event-Log. Der Builder verbindet sich direkt zu den Tabellen der (relationalen) Datenbanken. Dies beschleunigt die Datenanbindung im Vergleich zu herkömmlichen Lösungen enorm."
        },
        realisticResults: {
          title: "Realitätsgetreue Ergebnisse",
          description: "Die Prozessanalyse berücksichtigt komplexe Zusammenhänge des Datenschemas der zugrunde liegenden Quellsysteme. Dies macht die Analysen realistischer und umgeht die Schwächen herkömmlicher Lösungen."
        },
        multidimensionalPerspectives: {
          title: "Multidimensionale Perspektiven",
          description: "Die Prozessanalyse kann multidimensional durchgeführt werden. Benutzer können zusätzliche Ansichten auf der Grundlage verschiedener Geschäftsobjekte hinzufügen, z.B. einer Bestellnummer, einer Benutzer-ID oder einer Rechnungsnummer."
        },
        contextDomainKnowledge: {
          title: "Kontext- und Domänenwissen",
          description: "Durch die Integration von Kontext- und Domänenwissen (unstrukturierte Texte) kann ein direkter Abgleich zwischen dem SOLL- und dem IST-Zustand eines Prozesses vorgenommen werden. Zudem kann die KI-Prozessanalysen mit Kontext besser einschätzen und die richtigen Implikationen ableiten."
        }
      }
    },
    integrations: {
      badge: "Integrationen",
      title: "Einfach verbinden.",
      titleHighlight: "Sofort starten.",
      subtitle: "Noreja fügt sich nahtlos in deine bestehende Systemlandschaft ein. Flexibel, sicher und ohne zusätzliche Integrationsaufwände.",
      discoverIntegrations: "Integrationen entdecken"
    },
    process: {
      title: "Wie es funktioniert",
      subtitle: "Unser optimierter Ansatz gewährleistet maximale Effizienz und optimale Ergebnisse.",
      steps: {
        collect: {
          title: "Sammeln",
          description: "Sammeln und organisieren Sie Daten aus mehreren Quellen mit automatisierten Sammelprozessen.",
        },
        process: {
          title: "Verarbeiten",
          description: "Wenden Sie fortschrittliche Algorithmen und KI an, um Rohdaten in umsetzbare Erkenntnisse zu verwandeln.",
        },
        analyze: {
          title: "Analysieren",
          description: "Erstellen Sie umfassende Berichte und Visualisierungen für fundierte Entscheidungsfindung.",
        },
        optimize: {
          title: "Optimieren",
          description: "Verbessern Sie kontinuierlich Prozesse basierend auf Leistungsmetriken und Feedback.",
        },
        processing: {
          title: "KI-Verarbeitung",
          description: "Fortschrittliche Machine-Learning-Algorithmen analysieren Muster"
        },
        security: {
          title: "Sicherheitsebene",
          description: "Sicherheit und Compliance auf Unternehmensebene"
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
          description: "Schutz auf militärischem Niveau für sensible Informationen"
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
      title: "Gemeinsam",
      titleHighlight: "Prozesse neu denken",
      subtitle: "Unsere Partner teilen unsere Vision von intelligenter Prozessanalyse.\n\nDatengetrieben, offen und auf Wirkung ausgerichtet.",
      viewAll: "Alle Partner anzeigen",
      viewAllPartners: "Alle Partner anzeigen",
      stats: {
        clients: "Unternehmenskunden",
        countries: "Länder",
        users: "Benutzer weltweit"
      }
    },
    blog: {
      title: "Unser Blog",
      subtitle: "Tauche ein in praxisnahe Analysen, Branchenwissen und Innovationen rund um Process Intelligence, direkt von unserem Expertenteam.",
      latestPosts: "Neueste Beiträge",
      readMore: "Mehr lesen",
      openBlog: "Blog öffnen",
      poweredBy: "unterstützt von HubSpot",
      placeholder: "Blog-Beiträge werden hier erscheinen",
      configNote: "HubSpot-Einbettung oder RSS-Feed in useEffect konfigurieren",
      features: {
        innovation: {
          title: "Innovationseinblicke",
          description: "Neueste Trends und bahnbrechende Technologien, die die Zukunft der Geschäftswelt prägen.",
        },
        technical: {
          title: "Technische Tiefenanalysen",
          description: "Detaillierte technische Artikel und Tutorials von unserem Engineering-Team.",
        },
        analysis: {
          title: "Branchenanalyse",
          description: "Datengetriebene Analysen und Expertenkommentare zu Marktentwicklungen.",
        },
        caseStudies: {
          title: "Fallstudien",
          description: "Reale Implementierungen und Erfolgsgeschichten unserer Kunden.",
        },
      },
      categories: {
        innovation: "Innovation",
        technical: "Technisch",
        analysis: "Analyse", 
        caseStudies: "Fallstudien",
      },
      viewAllPosts: "Alle Beiträge anzeigen",
      latestFrom: "Neueste aus",
      subscribeRss: "RSS abonnieren",
      subscribeNewsletter: "Newsletter abonnieren",
      whatYouFind: "Was Sie finden werden",
      latestPostsPreview: "Vorschau der neuesten Beiträge",
      getGlimpse: "Erhalten Sie einen Einblick in unsere neuesten Inhalte",
    },
    downloads: {
      title: "Ressourcen-Downloads",
      subtitle: "Zugang zu umfassenden Leitfäden, Dokumentationen, Tools und Ressourcen, um Ihre Implementierung zu beschleunigen und das Potenzial Ihrer Plattform zu maximieren.",
      filterByCategory: "Nach Kategorie filtern:",
      availableDownloads: "Verfügbare Downloads",
      resource: "Ressource",
      resources: "Ressourcen",
      clickToDownload: "Klicken Sie auf eine Ressource unten, um sie nach dem Ausfüllen eines kurzen Formulars herunterzuladen.",
      noResourcesFound: "Keine Ressourcen gefunden",
      noResourcesDescription: "Keine Downloads für die ausgewählte Kategorie verfügbar.",
      needAdditionalResources: "Benötigen Sie zusätzliche Ressourcen?",
      needAdditionalDescription: "Können Sie nicht finden, wonach Sie suchen? Unser Team ist hier, um Ihnen zu helfen, die richtigen Ressourcen für Ihren spezifischen Anwendungsfall zu finden.",
      contactSupport: "Support kontaktieren",
      requestCustomResource: "Individuelle Ressource anfordern",
    },
    events: {
      title: "Veranstaltungen &",
      titleHighlight: "Ankündigungen",
      subtitle: "Bleiben Sie auf dem Laufenden über unsere neuesten Veranstaltungen, Webinare und wichtige Ankündigungen. Begleiten Sie uns für Insights und Networking-Möglichkeiten.",
      upcomingEvents: "Kommende Veranstaltungen",
      pastEvents: "Vergangene Veranstaltungen",
      noUpcomingEvents: "Momentan keine kommenden Veranstaltungen",
      noUpcomingDescription: "Bleiben Sie gespannt auf zukünftige Ankündigungen und aufregende Veranstaltungen. Wir halten Sie über kommende Gelegenheiten auf dem Laufenden.",
      stayTuned: "Bleiben Sie gespannt auf zukünftige Ankündigungen",
      subscribeNewsletter: "Newsletter abonnieren",
      register: "Anmelden",
      learnMore: "Mehr erfahren",
      viewDetails: "Details anzeigen",
      showPastEvents: "Vergangene Veranstaltungen anzeigen",
      hidePastEvents: "Vergangene Veranstaltungen ausblenden",
      eventDate: "Veranstaltungsdatum",
      eventTime: "Uhrzeit",
      location: "Ort",
      online: "Online",
      onsite: "Vor Ort",
      hybrid: "Hybrid",
      free: "Kostenlos",
      paid: "Kostenpflichtig",
      capacity: "Kapazität",
      spotsLeft: "Plätze verfügbar",
      soldOut: "Ausverkauft",
      loadingEvents: "Lade Veranstaltungen..."
    },
    team: {
      title: "Unser Team",
      subtitle: "Lerne das Expertenteam kennen, das sich hinter der Vision und Entwicklung unserer Lösung befindet.",
      connectLinkedIn: "Auf LinkedIn verbinden",
      founders: "Gründer-Team",
      team: "Team",
      learnMore: "Mehr erfahren",
      advisoryBoard: "Advisory-Board",
      advisorySubtitle: "Branchenexperten und Vordenker, die unsere strategische Ausrichtung und Innovation leiten.",
    },
    downloadGate: {
      download: "Herunterladen",
      downloaded: "Heruntergeladen",
      fillForm: "Bitte füllen Sie das untenstehende Formular aus, um auf Ihren Download zuzugreifen.",
      success: "Erfolg!",
      downloadStarted: "Ihr Download hat begonnen.",
      error: "Fehler",
      formLoadError: "Fehler beim Laden des Download-Formulars. Bitte versuchen Sie es erneut.",
    },
    finalCta: {
      badge: "Bereit zum Start",
      title: "Mach den nächsten Schritt – ",
      titleHighlight: "mit Noreja",
      subtitle: "Schließe dich Unternehmen an, die mit intelligenter Prozessanalyse Wachstum und Effizienz neu definieren.",
      ctaPrimary: "Heute loslegen",
      ctaSecondary: "Demo vereinbaren",
      startJourney: "Starten Sie Ihre Reise",
      scheduleDemo: "Demo vereinbaren"
    },
    footer: {
      description: "Wir stärken Unternehmen mit innovativen Technologielösungen für nachhaltiges Wachstum und digitale Transformation.",
      copyright: "Alle Rechte vorbehalten.",
      builtWith: "Erstellt mit moderner Technologie",
      links: {
        imprint: "Impressum",
        privacy: "Datenschutz",
        terms: "Nutzungsbedingungen",
      },
      legal: {
        imprint: "Impressum",
        privacy: "Datenschutz",
        terms: "Nutzungsbedingungen",
        trustCenter: "Trust Center"
      }
    },
    buttons: {
      contactUs: "Kontakt"
    }
  }
};