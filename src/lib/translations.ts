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
      dataVolume: string;
      dataAmount?: string;
      perspectives?: string;
      dataAmountTooltip?: string;
      perspectivesTooltip?: string;
      usersTooltip?: string;
      users: string;
      user: string;
      extraPowerUserPrice: string;
      additionalPowerUsersLabel: string;
      mostPopular: string;
      month: string;
      perMonthAndUser: string;
      annualCostTooltip: string;
      year: string;
      onRequest: string;
      viewAllFeatures: string;
      contactUs: string;
      footerNote: string;
      statisticsNote: string;
      statisticsBox: {
        lines: string[];
      };
        categories: {
          feature: string;
          users: string;
          service: string;
          llmAi: string;
          supportRate: string;
        };
      privateLLMHosting: string;
      faq: {
        title: string;
        subtitle: string;
        items: Array<{
          question: string;
          answer: string;
        }>;
      };
      plans: {
        core: {
          name: string;
          description: string;
          statistics?: {
            costDriverPercent: string;
            ftePercent: string;
          };
          features: string[];
          users?: string;
          services: string[];
          llmAi: string[];
          cta: string;
        };
        pro: {
          name: string;
          description: string;
          statistics?: {
            costDriverPercent: string;
            ftePercent: string;
          };
          features: string[];
          users?: string;
          services: string[];
          llmAi: string[];
          cta: string;
        };
        excellence: {
          name: string;
          description: string;
          statistics?: {
            costDriverPercent: string;
            ftePercent: string;
          };
          features: string[];
          users?: string;
          services: string[];
          llmAi: string[];
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
      caseStudies: {
        title: string;
        description: string;
      };
    };
    subscribeRss: string;
    subscribeNewsletter: string;
    whatYouFind: string;
    latestPostsPreview: string;
    getGlimpse: string;
    categories: {
      innovation: string;
      technical: string;
      analysis: string;
      caseStudies: string;
    };
    viewAllPosts: string;
    latestFrom: string;
    newsletterCta: {
      title: string;
      description: string;
      subscribeLinkedIn: string;
    };
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
    sections: {
      resources: string;
      legal: string;
      contact: string;
    };
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
    contact: {
      contactForm: string;
      bookAppointment: string;
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
      functionalities: "Platform",
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
        title: "Transparent Pricing, Clear Solutions",
        subtitle: "Choose the package that suits your needs. We'll help you choose – quickly and transparently.",
        teamSize: "Team Size:",
        dataVolume: "Data Volume:",
        dataAmount: "Data amount",
        perspectives: "Perspectives",
        dataAmountTooltip: "Select the approximate volume of data records you'll be processing. This helps us calculate the optimal pricing for your use case.",
        perspectivesTooltip: "Choose the number of different analytical perspectives or dimensions you need. Each perspective represents a unique way of analyzing your process data.",
        usersTooltip: "Power Users are fully licensed editors. Reading users can be added as noted below.",
        users: "users",
        user: "user",
        extraPowerUserPrice: "Price for extra power user: {value}€ per month",
        additionalPowerUsersLabel: "Additional power users",
        mostPopular: "Most Popular",
        month: "/ month",
        perMonthAndUser: "per month and user",
        annualCostTooltip: "Calculated total costs per year",
        year: " /year",
        onRequest: "let's talk",
        viewAllFeatures: "View all features",
        contactUs: "Contact us",
        footerNote: "All plans include 14-day free trial • No setup fees • Cancel anytime",
        statisticsNote: "*Average values based on completed client projects. Actual results may vary depending on process maturity, company size, and industry.",
        statisticsBox: {
          lines: [
            "Discover approx. {costDriverPercent} of hidden cost drivers in your processes. Save approx. {ftePercent} of FTE for process analysis.*"
          ]
        },
        categories: {
          feature: "Feature",
          users: "Users",
          service: "Service",
          llmAi: "LLM + AI",
          supportRate: "Additional"
        },
        privateLLMHosting: "Private LLM Hosting by Noreja",
        faq: {
          title: "Frequently Asked Questions",
          subtitle: "Find answers to common questions about our pricing and plans",
          items: [
            {
              question: "What's included in the free trial?",
              answer: "The 14-day free trial includes full access to all features of your chosen plan. No credit card required to start."
            },
            {
              question: "Can I change my plan later?",
              answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated."
            },
            {
              question: "What is private LLM hosting?",
              answer: "Private LLM hosting means we host and manage your own dedicated language model instance, ensuring complete data privacy and customization for your specific needs."
            },
            {
              question: "Do you offer custom enterprise solutions?",
              answer: "Yes, our Excellence plan includes custom integrations and we can create tailored solutions for large organizations with specific requirements."
            },
            {
              question: "What support do you provide?",
              answer: "Support varies by plan: Core includes email support, Pro includes priority support, and Excellence includes dedicated support with weekly sessions."
            },
            {
              question: "Is there a setup fee?",
              answer: "No, there are no setup fees for any of our plans. You only pay the monthly subscription fee."
            },
            {
              question: "Where is my data hosted?",
              answer: "The data is hosted at Amazon AWS in Frankfurt. Due to complete tenant separation, hosting can also be done in other cloud regions or on-premises upon request. However, on-premises hosting incurs additional costs."
            },
            {
              question: "How does Noreja handle data protection and IT security?",
              answer: "Noreja is ISO27001 certified and places great emphasis on data security. Our Trust Center can be found in the footer of this website, where all information can be viewed."
            },
            {
              question: "What does private LLM hosting look like?",
              answer: "Private LLM hosting is implemented by operating your own fully isolated environment at any cloud provider (e.g., Amazon AWS). Noreja sets up any LLM (e.g., Mistral, Deepseek, Gemma, Quen3, etc.) that only the customer can access."
            },
            {
              question: "Are there partner companies that can support me in using Noreja?",
              answer: "Yes, Noreja has numerous partners among consultancies, system integrators, or universities who can provide services with and for Noreja Process Intelligence as needed. You can find more information in the main menu under Partners."
            },
            {
              question: "Is there documentation and training available alongside the license for knowledge transfer?",
              answer: "Yes, the Noreja platform has its own AI-powered documentation that can be accessed. In addition, we offer regular 1:1 tool training sessions throughout the license period, so that over time, every detail of the solution can be understood."
            },
            {
              question: "How do I know which package (e.g., regarding data volume) I should choose?",
              answer: "We are happy to determine the exact requirements together in a conversation. Our Proof-Of-Value provides an optimal basis for decision-making, the results of which enable a good assessment of the required data volume and service needs."
            },
            {
              question: "Is there an initial setup fee?",
              answer: "Generally, there is no general setup fee. Data connectivity can also be done independently or as part of the included Data-Onboarding Workshops. However, it often makes sense to get support during initial setup to efficiently and error-free connect source systems. This can be done by Noreja itself or one of our partners."
            },
            {
              question: "Can additional costs arise for used LLM tokens?",
              answer: "Generally, LLM tokens are included for all Power-Users. If there is a need for an increased number of \"reading\" or \"consuming\" users, we must pass on the costs. In this case, we will explicitly contact you."
            },
            {
              question: "What are Power-Users and how do they differ from regular users?",
              answer: "We define Power-Users as users who have rights to Builder, Manager, Analyzer, and other admin functions on the Noreja platform. Excluded here are read-only users of the Dashboard or Minerva-AI."
            }
          ]
        },
        plans: {
          core: {
            name: "Core",
            description: "With the core features of Causal Process Mining and initial support for data connectivity",
            statistics: {
              costDriverPercent: "25%",
              ftePercent: "19%"
            },
            features: [
              "Dashboard",
              "Analyzer", 
              "Builder",
              "Knowledge Base"
            ],
            users: "3 Power Users",
            services: [
              "Data Onboarding Workshop (2x p.a.)",
              "Biweekly Value-Support Session (45 mins)",
              "Rate for on-top support: 1.250€ per day"
            ],
            llmAi: [],
            cta: "Start free trial"
          },
          pro: {
            name: "Pro",
            description: "With advanced AI features through Minerva-AI and continuous support in discovery",
            statistics: {
              costDriverPercent: "39%",
              ftePercent: "26%"
            },
            features: [
              "all from CORE",
              "Contextualizer",
              "Issue Manager",
              "Macro Builder"
            ],
            users: "6 Power Users",
            services: [
              "Data Onboarding Workshop (3x p.a.)",
              "Process Optimization Workshop (1x p.a.)",
              "Context Collection Workshop (1x p.a.)",
              "Biweekly Value-Support Session (90 mins)",
              "Rate for on-top support: 950€ per day"
            ],
            llmAi: [
              "Minerva-AI",
              "(Single) LLM"
            ],
            cta: "Start free trial"
          },
          excellence: {
            name: "Excellence",
            description: "For highly complex reasoning incl. Multi-LLM option and intensive support for value realization",
            statistics: {
              costDriverPercent: "44%",
              ftePercent: "32%"
            },
            features: [
              "all from PRO",
              "Workbench",
              "Context Manager"
            ],
            users: "10 Power Users",
            services: [
              "Data Onboarding Workshop (4x p.a.)",
              "Process Optimization Workshop (2x p.a.)",
              "Context Collection Workshop (1x p.a.)",
              "Process Strategy Workshop with Partner Company (1x p.a.)",
              "Weekly Value-Support Session (60 mins)",
              "Customer specific KPIs/Agent development (2x p.a.)",
              "Rate for on top support: 850€ per day"
            ],
            llmAi: [
              "all from PRO",
              "Multi-LLM"
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
      newsletterCta: {
        title: "Stay Updated",
        description: "Get the latest insights, technical articles, and industry analysis delivered to your inbox.",
        subscribeLinkedIn: "Subscribe on LinkedIn"
      },
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
      description: "Noreja Generative Process Intelligence - Elevating Process Knowledge with the Power of GenAI.",
      copyright: "All rights reserved.",
      builtWith: "Built with AI 🤖 and Coffee ☕️",
      sections: {
        resources: "Resources",
        legal: "Legal",
        contact: "Contact"
      },
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
      },
      contact: {
        contactForm: "Contact Form",
        bookAppointment: "Book Appointment"
      }
    },
    buttons: {
      contactUs: "Contact Us"
    }
  },
  de: {
    navigation: {
      home: "Startseite",
      functionalities: "Plattform",
      successStories: "Success Stories",
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
        learnMoreSubtitle: "Entdecke Einblicke und Best Practices von unseren Experten",
        capabilities: {
          dataCollection: {
            title: "Datenerfassung",
            description: "Intelligente Datensammlung aus mehreren Quellen mit automatisierter Verarbeitung und Echtzeit-Synchronisation. Unsere fortschrittlichen Algorithmen gewährleisten umfassende Abdeckung bei gleichzeitiger Wahrung der Datenintegrität und Compliance-Standards.",
            schematicTitle: "Datenfluss-Architektur",
            schematicDesc: "Multi-Source Datenaufnahme-Pipeline"
          },
          aiProcessing: {
            title: "KI-Verarbeitung",
            description: "Modernste Machine-Learning-Modelle, die deine Daten analysieren, klassifizieren und Erkenntnisse extrahieren. Unsere KI-Engine lernt kontinuierlich und passt sich an, um zunehmend präzise und relevante Ergebnisse zu liefern.",
            schematicTitle: "Neuronale Netzwerk-Pipeline",
            schematicDesc: "Erweiterte ML-Verarbeitungs-Workflow"
          },
          analyticsInsights: {
            title: "Analytics & Insights",
            description: "Verwandle Rohdaten in umsetzbare Erkenntnisse mit unserer umfassenden Analytics-Suite. Erstelle detaillierte Berichte, identifiziere Trends und treffe datengestützte Entscheidungen mit Vertrauen.",
            schematicTitle: "Analytics Dashboard",
            schematicDesc: "Echtzeit-Erkenntnisse Visualisierung"
          },
          automation: {
            title: "Automatisierung",
            description: "Optimiere deine Workflows mit intelligenter Automatisierung, die manuellen Aufwand reduziert und wiederkehrende Aufgaben eliminiert. Richte benutzerdefinierte Trigger und Aktionen ein, um deine Geschäftsprozesse zu optimieren.",
            schematicTitle: "Workflow-Engine",
            schematicDesc: "Automatisierte Prozess-Orchestrierung"
          },
          integration: {
            title: "Integration",
            description: "Verbinde dich nahtlos mit deinen bestehenden Tools und Systemen über unsere robuste API und vorgefertigte Integrationen. Gewährleiste einen reibungslosen Datenfluss durch deinen gesamten Technologie-Stack.",
            schematicTitle: "Integration Hub",
            schematicDesc: "System-Konnektivitäts-Matrix"
          },
          security: {
            title: "Sicherheit",
            description: "Sicherheitsfunktionen auf Unternehmensebene schützen deine Daten auf jeder Ebene. Mit Ende-zu-Ende-Verschlüsselung, Zugriffskontrollen und Compliance-Zertifizierungen bleiben deine Informationen sicher.",
            schematicTitle: "Sicherheits-Framework",
            schematicDesc: "Mehrschichtiges Schutzsystem"
          }
        }
      },
      successStories: {
        title: "Kunden",
        titleHighlight: "Success Stories",
        subtitle: "Entdecke, wie führende Organisationen verschiedener Branchen ihre Abläufe transformiert und bemerkenswerte Ergebnisse mit unserer Plattform erzielt haben.",
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
        partnerSubtitle: "Tritt unserem Ökosystem innovativer Partner bei und erschließe neue Möglichkeiten für Wachstum, Zusammenarbeit und gemeinsamen Erfolg."
      },
      pricing: {
        title: "Transparente Preise, klare Lösungen",
        subtitle: "Wähle das Paket, das zu deinen Bedürfnissen passt. Wir helfen dir bei der Auswahl – schnell und transparent.",
        teamSize: "Teamgröße:",
        dataVolume: "Datenvolumen:",
        dataAmount: "Datenmenge",
        perspectives: "Perspektiven",
        dataAmountTooltip: "Wähle das ungefähre Volumen der Daten, die du verarbeiten wirst. Dies hilft uns, den optimalen Preis für deinen Anwendungsfall zu berechnen.",
        perspectivesTooltip: "Wähle die Anzahl der verschiedenen analytischen Perspektiven oder Dimensionen, die du benötigst. Jede Perspektive stellt eine einzigartige Art dar, deine Prozessdaten zu analysieren.",
        usersTooltip: "Power-User sind vollständig lizenzierte Editoren. Lesende Nutzer können zusätzlich ergänzt werden.",
        users: "Benutzer",
        user: "Nutzer",
        extraPowerUserPrice: "Extra User auf Anfrage zubuchbar",
        additionalPowerUsersLabel: "Zusätzliche Power-User",
        mostPopular: "Am beliebtesten",
        month: "/ Monat",
        perMonthAndUser: "pro Monat und Nutzer",
        annualCostTooltip: "Berechnete Gesamtkosten pro Jahr",
        year: " /Jahr",
        onRequest: "Auf Anfrage",
        viewAllFeatures: "Alle Features anzeigen",
        contactUs: "Kontakt aufnehmen",
        footerNote: "Alle Pläne beinhalten 14-tägige kostenlose Testversion • Keine Einrichtungsgebühren • Jederzeit kündbar",
        statisticsNote: "*Durchschnittswerte aus realisierten Kundenprojekten. Abweichungen sind abhängig von Prozessreife, Unternehmensgröße und Branche möglich.",
        statisticsBox: {
          lines: [
            "Entdecke ca. {costDriverPercent} der versteckten Kostentreiber in deinen Prozessen. Spare ca. {ftePercent} der FTE für die Prozessanalyse.*"
          ]
        },
        categories: {
          feature: "Feature",
          users: "Nutzer",
          service: "Service",
          llmAi: "LLM + AI",
          supportRate: "Zusatz"
        },
        privateLLMHosting: "Privates LLM Hosting by Noreja",
        faq: {
          title: "Häufig gestellte Fragen",
          subtitle: "Finde Antworten auf häufige Fragen zu unseren Preisen und Plänen",
          items: [
            {
              question: "Bietet Noreja einen Proof-Of-Value an, um die Technologie kennenzulernen?",
              answer: "Ja, 85% der Kunden starten mit einem initialen Proof-Of-Value, welchen Noreja zu einem sehr günstigen Fixpreis anbietet. Dabei wird sich i.d.R. auf einen Teilprozess fokussiert, den Noreja innerhalb von 3 bis 4 Wochen anbindet, importiert, analysiert und erste Optimierungspotenziale aufdeckt. Nach dem Proof-Of-Value sind 60% der Datenanbindung bereits erledigt, sodass anschließend in wenigen Tagen eine Operationalisierung stattfinden kann."
            },
            {
              question: "Brauche ich dedizierte Process Mining Experten, um Noreja nutzen zu können?",
              answer: "Nein. Es werden keine expliziten Process Mining Experten benötigt, um Noreja nutzen zu können. Eine Besonderheit hierbei ist, dass Noreja keine Event-Logs verwendet, sodass keine aufwendigen Datentransformationen nötig sind, die bei herkömmlichen Lösungen häufig 80% der Zeit in Anspruch nehmen."
            },
            {
              question: "Wie funktioniert der Herauf- oder Herabstufung in andere Lizenzpakete?",
              answer: "Prinzipiell werden Jahreslizenzen in bestimmten Preispaketkombinationen abgeschlossen. Eine Herabstufung in kleinere Preiskategorien ist im Anschluss an das Lizenzjahr möglich. Besteht der Bedarf in höhere Preiskategorien aufzusteigen – z.B., weil mehr Daten importiert werden sollen, so kann dies jederzeit geschehen. Allerdings werden niemals automatisch und ohne Rücksprache Preise erhöht. Dies geschieht immer im Dialog mit dem Kunden."
            },
            {
              question: "Was passiert, wenn ich das Limit in einem Paket überschreite?",
              answer: "Sollte die Kapazität der Datenmenge oder der benötigten Dimensionen nicht ausreichen kann entweder proaktiv mit der Noreja Kontakt aufgenommen werden, oder aber die Noreja meldet sich nach überschreiten der Grenzwerte und sucht das Gespräch."
            },
            {
              question: "Wie funktioniert die Lizenzverlängerung?",
              answer: "Der Lizenzvertrag wird auf Jahresbasis abgeschlossen. Laut abgeschlossenem Vertrag verlängert sich die Lizenz dabei automatisch, wenn nicht rechtzeitig gekündigt wird; Allerdings wird auch hier niemals eine stillschweigende Verlängerung durchgeführt, ohne vorab mit dem Kunden über die Verlängerung zu sprechen."
            },
            {
              question: "Wie kann ich den Lizenzvertrag kündigen?",
              answer: "Der Lizenzvertrag kann mit einer Frist von einem Monat zum Vertragsende jederzeit gekündigt werden."
            },
            {
              question: "Was genau ist im Basispaket enthalten und wie laufen die inkludierten Workshops ab?",
              answer: "Das Basispaket beinhaltet Features, Service-Leistungen und KI-Komponenten. Unter Features versteht man konkrete Software-Bestandteile, die ein Anwender auf der Plattform nutzen kann. Die Service-Leistungen inkludieren mehrere Workshops (Tagesworkshop à 8h), die Vor-Ort beim Kunden mit ein bis zwei Noreja-Experten durchgeführt werden (Reisekosten inkludiert). Zudem werden (Bi-)Weekly Online-Sessions eingeplant, in welchen die Kunden Unterstützung bei der Nutzung der Plattform aber auch der Identifizierung neuer Use Cases erhalten."
            },
            {
              question: "Kann ich die Noreja auch für zusätzliche bzw. begleitende Beratung buchen?",
              answer: "Ja, jedes Paket enthält eine Tagesrate, die genutzt werden kann, um zusätzliche Beratung, die über die inkludierten Workshops und regelmäßigen Sessions hinausgehen, zu buchen. Die Rate unterscheidet sich zwischen den Basispaketen."
            },
            {
              question: "Wo werden meine Daten gehostet?",
              answer: "Die Daten werden bei der Amazon AWS in Frankfurt gehostet. Aufgrund vollständiger Mandanten-Trennung kann auf Wunsch aber auch in anderen Cloud-Regionen oder On-Prem gehostet werden. Bei On-Prem entstehen allerdings Zusatzaufwände."
            },
            {
              question: "Wie geht Noreja mit Datenschutz und IT-Security um?",
              answer: "Die Noreja ist ISO27001 zertifiziert und legt großen Wert auf Datensicherheit. Im Footer dieser Webseite befindet sich unser Trust Center, wo alle Informationen eingesehen werden können."
            },
            {
              question: "Wie kann ich mir das private LLM-Hosting vorstellen?",
              answer: "Das private LLM-Hosting erfolgt durch den Betrieb einer eigenen und vollständig isolierten Umgebung bei einem beliebigen Cloud-Anbieter (z.B. Amazon AWS). Die Noreja setzt dabei ein beliebiges LLM (z.B. Mistral, Deepseek, Gemma, Quen3, etc.) auf, auf welches ausschließlich der Kunde Zugriff erhält."
            },
            {
              question: "Gibt es auch Partnerunternehmen, die mich bei der Nutzung von Noreja begleiten können?",
              answer: "Ja, Noreja hat zahlreiche Partner bei Beratungen, Systemintegratoren oder Universitäten, die bei Bedarf Services am und mit Noreja Process Intelligence begleiten können. Mehr dazu gibt es im Hauptmenü unter Partner."
            },
            {
              question: "Gibt es Dokumentation und Schulungsangebote parallel zur Lizenz für den Wissenstransfer?",
              answer: "Ja, die Noreja-Plattform hat eine eigene KI-gestützte Dokumentation, auf die zugegriffen werden kann. Zudem bieten wir im Zuge der Lizenzperiode auch regelmäßige 1:1 Tool-Schulungen an, sodass mit der Zeit jeder Detail der Lösung durchdrungen werden kann."
            },
            {
              question: "Woher weiß ich, welches Paket (z.B. in Bezug auf die Datenmenge) ich wählen muss?",
              answer: "Den genauen Bedarf ermitteln wir gerne gemeinsam in einem Gespräch. Eine optimale Entscheidungsgrundlage bietet hierfür unser Proof-Of-Value, dessen Ergebnis eine gute Einschätzung zur benötigter Datenmenge und zum Servicebedarf ermöglicht."
            },
            {
              question: "Gibt es eine initiale Setup-Fee?",
              answer: "Grundsätzlich gibt es keine generelle Setup-Fee. Die Datenanbindung kann auch eigenständig bzw. im Zuge der inkludierten Data-Onboarding Workshops stattfinden. Häufig macht es aber Sinn, sich beim initialen Setup Unterstützung zu holen, um Quellsysteme effizient und fehlerfrei anzubinden. Dies kann durch die Noreja selbst oder einen unserer Partner erfolgen."
            },
            {
              question: "Können für genutzte LLM-Token zusätzliche Kosten entstehen?",
              answer: "Grundsätzlich sind die LLM-Token für alle Power-User inkludiert. Sollte es den Bedarf nach einer erhöhten Anzahl an „lesenden“ bzw. „konsumierenden“ Nutzern geben, müssen wir die Kosten weiterreichen. In diesem Fall sprechen wir dich explizit an."
            },
            {
              question: "Was sind Power-User und wie unterscheiden sie sich von herkömmlichen Nutzern?",
              answer: "Als Power-User bezeichnen wir einen Anwender, der auf der Noreja-Plattform Rechte zum Builder, Manager, Analyzer sowie den weiteren Admin-Funktionen hat. Ausgenommen sind hier lesende Nutzer des Dashboards oder Minerva-AI."
            }
          ]
        },
        plans: {
          core: {
            name: "Core",
            description: "Mit den Kernfeatures des Causal Process Minings und initialen Support bei der Datenanbindung.",
            statistics: {
              costDriverPercent: "25%",
              ftePercent: "19%"
            },
            features: [
              "Dashboard",
              "Analyzer",
              "Builder", 
              "Knowledge Base"
            ],
            users: "3 Power-User",
            services: [
              "Data-Onboarding Workshop (2x p.a.)",
              "14-tägige Value-Support Session (45 Min.)",
              "Tagessatz für zusätzlichen Support: 1.250€ pro Tag"
            ],
            llmAi: [],
            cta: "Kostenlose Testversion starten"
          },
          pro: {
            name: "Pro",
            description: "Mit fortgeschrittenen KI-Features durch Minerva-AI und durchgehendem Support in der Discovery",
            statistics: {
              costDriverPercent: "39%",
              ftePercent: "26%"
            },
            features: [
              "alles aus CORE",
              "Contextualizer",
              "Issue Manager",
              "Macro Builder"
            ],
            users: "6 Power-User",
            services: [
              "Data-Onboarding Workshop (3x p.a.)",
              "Prozessoptimierungs-Workshop (1x p.a.)",
              "Kontext-Erfassungs-Workshop (1x p.a.)",
              "14-tägige Value-Support Session (90 Min.)",
              "Tagessatz für zusätzlichen Support: 950€ pro Tag"
            ],
            llmAi: [
              "Minerva-AI",
              "(Einzel-) LLM"
            ],
            cta: "Kostenlose Testversion starten"
          },
          excellence: {
            name: "Excellence",
            description: "Für hochkomplexes Reasoning inkl. Multi-LLM-Option und intensiver Begleitung bei der Value-Realization",
            statistics: {
              costDriverPercent: "44%",
              ftePercent: "32%"
            },
            features: [
              "alles aus PRO",
              "Workbench",
              "Context Manager"
            ],
            users: "10 Power-User",
            services: [
              "Data-Onboarding Workshop (4x p.a.)",
              "Prozessoptimierungs-Workshop (2x p.a.)",
              "Kontext-Erfassungs-Workshop (1x p.a.)",
              "Prozess-Strategie-Workshop mit Partnerunternehmen (1x p.a.)",
              "Wöchentliche Value-Support Session (60 Min.)",
              "Kunden-spezifische KPIs/Agent-Entwicklung (2x p.a.)",
              "Tagessatz für zusätzlichen Support: 850€ pro Tag"
            ],
            llmAi: [
              "alles aus PRO",
              "Multi-LLM"
            ],
            cta: "Kontakt aufnehmen"
          }
        }
      },
      contact: {
        title: "Kontakt aufnehmen",
        subtitle: "Wir freuen uns auf deine Nachricht. Kontaktiere unser Team für Fragen, Kooperationen oder Produktdemos.",
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
      title: "Eine Plattform -",
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
          description: "Sammle und organisiere Daten aus mehreren Quellen mit automatisierten Sammelprozessen.",
        },
        process: {
          title: "Verarbeiten",
          description: "Wende fortschrittliche Algorithmen und KI an, um Rohdaten in umsetzbare Erkenntnisse zu verwandeln.",
        },
        analyze: {
          title: "Analysieren",
          description: "Erstelle umfassende Berichte und Visualisierungen für fundierte Entscheidungsfindung.",
        },
        optimize: {
          title: "Optimieren",
          description: "Verbessere kontinuierlich Prozesse basierend auf Leistungsmetriken und Feedback.",
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
          description: "Nahtlose Integration in deine Systeme"
        },
        users: {
          title: "Benutzererfahrung",
          description: "Intuitive Benutzeroberfläche für maximale Produktivität"
        }
      },
    },
      partners: {
        title: "Unsere",
        titleHighlight: "Partner",
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
      whatYouFind: "Entdecke unsere Inhalte nach Kategorien organisiert",
      latestPostsPreview: "Vorschau der neuesten Beiträge",
      getGlimpse: "Erhalte einen Einblick in unsere neuesten Inhalte",
      newsletterCta: {
        title: "Bleibe informiert",
        description: "Erhalte die neuesten Einblicke, technischen Artikel und Branchenanalysen direkt in deinem Posteingang.",
        subscribeLinkedIn: "Auf LinkedIn abonnieren"
      },
    },
    downloads: {
      title: "Ressourcen-Downloads",
      subtitle: "Zugang zu umfassenden Leitfäden, Dokumentationen, Tools und Ressourcen, um deine Implementierung zu beschleunigen und das Potenzial deiner Plattform zu maximieren.",
      filterByCategory: "Nach Kategorie filtern:",
      availableDownloads: "Verfügbare Downloads",
      resource: "Ressource",
      resources: "Ressourcen",
      clickToDownload: "Klicke auf eine Ressource unten, um sie nach dem Ausfüllen eines kurzen Formulars herunterzuladen.",
      noResourcesFound: "Keine Ressourcen gefunden",
      noResourcesDescription: "Keine Downloads für die ausgewählte Kategorie verfügbar.",
      needAdditionalResources: "Benötigst du zusätzliche Ressourcen?",
      needAdditionalDescription: "Kannst du nicht finden, wonach du suchst? Unser Team ist hier, um dir zu helfen, die richtigen Ressourcen für deinen spezifischen Anwendungsfall zu finden.",
      contactSupport: "Support kontaktieren",
      requestCustomResource: "Individuelle Ressource anfordern",
    },
    events: {
      title: "Veranstaltungen &",
      titleHighlight: "Ankündigungen",
      subtitle: "Bleibe auf dem Laufenden über unsere neuesten Veranstaltungen, Webinare und wichtige Ankündigungen. Begleite uns für Insights und Networking-Möglichkeiten.",
      upcomingEvents: "Kommende Veranstaltungen",
      pastEvents: "Vergangene Veranstaltungen",
      noUpcomingEvents: "Momentan keine kommenden Veranstaltungen",
      noUpcomingDescription: "Bleibe gespannt auf zukünftige Ankündigungen und aufregende Veranstaltungen. Wir halten dich über kommende Gelegenheiten auf dem Laufenden.",
      stayTuned: "Bleibe gespannt auf zukünftige Ankündigungen",
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
      fillForm: "Bitte fülle das untenstehende Formular aus, um auf deinen Download zuzugreifen.",
      success: "Erfolg!",
      downloadStarted: "Dein Download hat begonnen.",
      error: "Fehler",
      formLoadError: "Fehler beim Laden des Download-Formulars. Bitte versuche es erneut.",
    },
    finalCta: {
      badge: "Bereit zum Start",
      title: "Mach den nächsten Schritt – ",
      titleHighlight: "mit Noreja",
      subtitle: "Schließe dich Unternehmen an, die mit intelligenter Prozessanalyse Wachstum und Effizienz neu definieren.",
      ctaPrimary: "Heute loslegen",
      ctaSecondary: "Demo vereinbaren",
      startJourney: "Starte deine Reise",
      scheduleDemo: "Demo vereinbaren"
    },
    footer: {
      description: "Noreja Generative Process Intelligence - Elevating Process Knowledge with the Power of GenAI.",
      copyright: "Alle Rechte vorbehalten.",
      builtWith: "Erstellt mit KI 🤖 und Kaffee ☕️",
      sections: {
        resources: "Ressourcen",
        legal: "Rechtliches",
        contact: "Kontakt"
      },
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
      },
      contact: {
        contactForm: "Kontaktformular",
        bookAppointment: "Termin vereinbaren"
      }
    },
    buttons: {
      contactUs: "Kontakt"
    }
  }
};