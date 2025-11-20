import React, { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Info } from "lucide-react";
import { AnimatedGradientBox } from "@/components/AnimatedGradientBox";
import { AnimatedGridBackground } from "@/components/AnimatedGridBackground";
import { AnimatedHeading } from "@/components/AnimatedHeading";

// --- Factors: Fill these in as needed ---
const dataAmountLabels = [
  { value: 0, label: "15 Mio.", volume: 15, factor: 1.6 }, // Factor for 15
  { value: 1, label: "35 Mio.", volume: 30, factor: 2.4 }, // Factor for 35
  { value: 2, label: "85 Mio.", volume: 80, factor: 3.0 }, // Factor for 85
  { value: 3, label: "150 Mio.", volume: 250, factor: 3.5 }, // Factor for 150
  { value: 4, label: "300 Mio.", volume: ">250", factor: "let's talk" }, // Factor for 300
];

const perspectivesLabels = [
  { value: 0, label: "8x", count: 8, factor: 1.4 }, // Factor for 10
  { value: 1, label: "16x", count: 16, factor: 1.7 }, // Factor for 20
  { value: 2, label: "40x", count: 40, factor: 1.9 }, // Factor for 35
  { value: 3, label: "100x", count: 100, factor: 2.1 }, // Factor for 50
  { value: 4, label: ">100", count: ">100", factor: "let's talk" }, // Factor for 85
];

// Helper function to format numbers with dot as thousand separator
const formatPrice = (price: number | string): string => {
  if (typeof price === 'string') {
    return price;
  }
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

// New pricing logic using base price and factors
const calculatePricing = (perspectivesIndex: number, dataAmountIndex: number) => {
  const factorPerspectives = perspectivesLabels[perspectivesIndex].factor ?? 1;
  const factorDataAmount = dataAmountLabels[dataAmountIndex].factor ?? 1;
  // Base prices
  const coreBase = 8600;
  const proBase = 13200;
  const excellenceBase = 20600;

  // If either factor is not a number ("let's talk"), return onRequest
  if (typeof factorPerspectives !== 'number' || typeof factorDataAmount !== 'number') {
    return {
      starter: 'onRequest',
      pro: 'onRequest',
      enterprise: 'onRequest'
    };
  }

  return {
    starter: Math.round(coreBase * factorPerspectives * factorDataAmount),
    pro: Math.round(proBase * factorPerspectives * factorDataAmount),
    enterprise: Math.round(excellenceBase * factorPerspectives * factorDataAmount)
  };
};

const Pricing = () => {
  const { t, language } = useLanguage();
  
  // Language-specific heading texts - memoized to prevent animation restart on slider changes
  const currentHeading = useMemo(() => {
    const headingTexts = {
      en: {
        fixedText: "Choose A Plan That",
        rotatingWords: ["Fits", "Growths", "Delivers"]
      },
      de: {
        fixedText: "Wähle einen Plan, der",
        rotatingWords: ["passt", "mitwächst", "liefert"]
      }
    };
    return headingTexts[language];
  }, [language]);

  const extractPowerUserCount = (usersText?: string | string[]) => {
    if (!usersText) return 1;
    const text = Array.isArray(usersText) ? usersText.join(" ") : usersText;
    const match = text.match(/(\d+)/);
    return match ? Math.max(1, parseInt(match[1], 10)) : 1;
  };
  const [perspectivesIndex, setPerspectivesIndex] = useState(0); // Default to 10
  const [dataAmountIndex, setDataAmountIndex] = useState(0); // Default to 15
  const [privateLLMPro, setPrivateLLMPro] = useState(false);
  const [privateLLMExcellence, setPrivateLLMExcellence] = useState(false);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(1); // Default to middle package (Pro)
  const currentPerspectives = perspectivesLabels[perspectivesIndex];
  const currentDataAmount = dataAmountLabels[dataAmountIndex];
  const pricing = calculatePricing(perspectivesIndex, dataAmountIndex);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load HubSpot embed script once and let it initialize the form container
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://js-eu1.hsforms.net/forms/embed/144242473.js"]'
    ) as HTMLScriptElement | null;
    if (existing) return;

    const script = document.createElement('script');
    script.src = 'https://js-eu1.hsforms.net/forms/embed/144242473.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // keep script for SPA navigation; no cleanup to avoid reloading on route change
    };
  }, []);

  const extraPowerUserPrices = [120, 90, 70];
  const plans = [
    {
      name: t.pages.pricing.plans.core.name,
      price: pricing.starter,
      description: t.pages.pricing.plans.core.description,
      statistics: t.pages.pricing.plans.core.statistics,
      features: t.pages.pricing.plans.core.features,
      users: t.pages.pricing.plans.core.users,
      services: t.pages.pricing.plans.core.services,
      llmAi: t.pages.pricing.plans.core.llmAi,
      cta: t.pages.pricing.plans.core.cta,
      ctaVariant: "outline" as const
    },
    {
      name: t.pages.pricing.plans.pro.name,
      price: pricing.pro,
      description: t.pages.pricing.plans.pro.description,
      statistics: t.pages.pricing.plans.pro.statistics,
      features: t.pages.pricing.plans.pro.features,
      users: t.pages.pricing.plans.pro.users,
      services: t.pages.pricing.plans.pro.services,
      llmAi: t.pages.pricing.plans.pro.llmAi,
      cta: t.pages.pricing.plans.pro.cta,
      ctaVariant: "default" as const
    },
    {
      name: t.pages.pricing.plans.excellence.name,
      price: pricing.enterprise,
      description: t.pages.pricing.plans.excellence.description,
      statistics: t.pages.pricing.plans.excellence.statistics,
      features: t.pages.pricing.plans.excellence.features,
      users: t.pages.pricing.plans.excellence.users,
      services: t.pages.pricing.plans.excellence.services,
      llmAi: t.pages.pricing.plans.excellence.llmAi,
      cta: t.pages.pricing.plans.excellence.cta,
      ctaVariant: "outline" as const
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      {/* Section with animated grid background - Sliders and Pricing Cards */}
      <div className="relative">
        <AnimatedGridBackground key="animated-grid-pricing" />
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <AnimatedHeading 
              fixedText={currentHeading.fixedText}
              rotatingWords={currentHeading.rotatingWords}
              size="md"
              className="text-foreground mb-4"
            />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.pages.pricing.subtitle}
            </p>
          </div>

          {/* Pricing Sliders */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Data Amount Slider - LEFT */}
              <div className="bg-card rounded-lg p-8 border">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="flex items-center gap-0">
                    <h3 className="text-lg font-semibold text-foreground">
                      {t.pages.pricing.dataAmount ?? t.pages.pricing.dataVolume}
                    </h3>
                    {t.pages.pricing.dataAmountSuffix && (
                      <span className="text-lg text-foreground">
                        {t.pages.pricing.dataAmountSuffix}
                      </span>
                    )}
                  </div>
                  {t.pages.pricing.dataAmountTooltip && (
                    <Popover>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className="inline-flex items-center justify-center rounded-full hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          aria-label="Information about data amount"
                        >
                          <Info className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto max-w-xs p-3" side="top" align="center">
                        <p className="text-sm leading-relaxed">{t.pages.pricing.dataAmountTooltip}</p>
                      </PopoverContent>
                    </Popover>
                  )}
                </div>
                
                <div className="space-y-6">
                  <div className="px-2">
                    <Slider
                      value={[dataAmountIndex]}
                      onValueChange={(value) => setDataAmountIndex(value[0])}
                      max={4}
                      min={0}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  {/* Labels Data Amount */}
                  <div className="flex justify-between text-sm text-muted-foreground px-3 w-full">
                    {dataAmountLabels.map((label) => (
                      <span key={label.value} className="text-center flex-[0_0_5%]">
                        {label.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Perspectives Slider - RIGHT */}
              <div className="bg-card rounded-lg p-8 border">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="flex items-center gap-0">
                    <h3 className="text-lg font-semibold text-foreground">
                      {t.pages.pricing.perspectives ?? t.pages.pricing.teamSize}
                    </h3>
                    {t.pages.pricing.perspectivesSuffix && (
                      <span className="text-lg text-foreground">
                        {t.pages.pricing.perspectivesSuffix}
                      </span>
                    )}
                  </div>
                  {t.pages.pricing.perspectivesTooltip && (
                    <Popover>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className="inline-flex items-center justify-center rounded-full hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          aria-label="Information about perspectives"
                        >
                          <Info className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto max-w-xs p-3" side="top" align="center">
                        <p className="text-sm leading-relaxed">{t.pages.pricing.perspectivesTooltip}</p>
                      </PopoverContent>
                    </Popover>
                  )}
                </div>
                <div className="space-y-6">
                  <div className="px-3">
                    <Slider
                      value={[perspectivesIndex]}
                      onValueChange={(value) => setPerspectivesIndex(value[0])}
                      max={4}
                      min={0}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  {/* Labels Perspectives */}
                  <div className="flex justify-between text-sm text-muted-foreground px-3 w-full">
                    {perspectivesLabels.map((label) => (
                      <span key={label.value} className="text-center flex-[0_0_5%]">
                        {label.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start relative py-4">
            {plans.map((plan, index) => {
              const isSelected = selectedPlanIndex === index;
              
              // Extract user count from plan.users (e.g., "3 Power-User" -> 3)
              const extraPowerUserMonthlyPrice = extraPowerUserPrices[index];
              const baseIncludedPowerUsers = extractPowerUserCount(plan.users);
              
              // Calculate per month per user price
              const isOnRequest = (typeof plan.price === 'string' && plan.price === 'onRequest') ||
                                   (plan.name === t.pages.pricing.plans.pro.name && privateLLMPro) ||
                                   (plan.name === t.pages.pricing.plans.excellence.name && privateLLMExcellence);
              
              const baseAnnualPrice = isOnRequest ? null : (plan.price as number);
              const baseMonthlyPrice = baseAnnualPrice !== null ? baseAnnualPrice / 12 : null;
              const perUserMonthlyPrice = baseMonthlyPrice !== null
                ? baseMonthlyPrice / baseIncludedPowerUsers
                : null;
              const roundedPerUserMonthlyPrice = perUserMonthlyPrice !== null ? Math.round(perUserMonthlyPrice) : null;
              const fullAnnualPrice = baseAnnualPrice !== null ? Math.round(baseAnnualPrice) : null;
              
              return (
              <Card 
                key={plan.name} 
                className={`relative flex flex-col h-full cursor-pointer transition-all duration-300 ease-out ${
                  isSelected 
                    ? 'border-primary glow-primary scale-105 z-20' 
                    : 'scale-100 z-10 opacity-70 hover:opacity-85'
                }`}
                onClick={() => setSelectedPlanIndex(index)}
              >
                
                <CardHeader className="text-center pb-4 h-[200px] flex flex-col justify-center">
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">
                      {isOnRequest 
                        ? t.pages.pricing.onRequest
                        : roundedPerUserMonthlyPrice !== null 
                          ? `${formatPrice(roundedPerUserMonthlyPrice)} €`
                          : t.pages.pricing.onRequest}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-center gap-1">
                    {!isOnRequest && roundedPerUserMonthlyPrice !== null && (
                      <>
                        <span className="text-muted-foreground text-sm">
                          {t.pages.pricing.perMonthAndUser}
                        </span>
                        <Popover>
                          <PopoverTrigger asChild>
                            <button
                              type="button"
                              className="inline-flex items-center justify-center rounded-full hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                              aria-label="Full price information"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedPlanIndex(index);
                              }}
                            >
                              <Info className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground" />
                            </button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-3" side="bottom" align="center">
                            <div className="text-sm text-center">
                              <p className="text-foreground mb-1">
                                {t.pages.pricing.annualCostTooltip}<br />
                                {formatPrice(fullAnnualPrice!)} €
                              </p>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </>
                    )}
                  </div>
                  <CardDescription className="text-base mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex flex-col flex-grow pt-0 min-h-0">
                  {/* Top section - Feature and Service - allows flexible growth */}
                  <div className="flex-grow flex flex-col">
                    {/* Feature Category - fixed height to ensure Service alignment */}
                    <div className="mb-8 h-[140px]">
                      <h4 className="font-semibold text-foreground mb-4 text-base leading-tight">{t.pages.pricing.categories.feature}</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => {
                          const normalizedFeature = feature.toLowerCase();
                          const isItalic = normalizedFeature === 'alles aus core' ||
                                            normalizedFeature === 'alles aus pro' ||
                                            normalizedFeature === 'all from core' ||
                                            normalizedFeature === 'all from pro';
                          return (
                            <li key={index} className="flex text-foreground text-sm">
                              <span className="mr-2 text-primary flex-shrink-0 leading-none mt-[0.1em]">•</span>
                              <span className={isItalic ? 'italic' : ''}>{feature}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Users Category - between features and services */}
                    {plan.users && (
                      <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                          <h4 className="font-semibold text-foreground text-base leading-tight">
                            {t.pages.pricing.categories.users}
                          </h4>
                          {t.pages.pricing.usersTooltip && (
                            <Popover>
                              <PopoverTrigger asChild>
                                <button
                                  type="button"
                                  className="inline-flex items-center justify-center rounded-full hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                  aria-label="Information about users"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Info className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                                </button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto max-w-xs p-3" side="top" align="center">
                                <p className="text-sm leading-relaxed">{t.pages.pricing.usersTooltip}</p>
                              </PopoverContent>
                            </Popover>
                          )}
                        </div>
                        <ul className="space-y-2">
                          <li className="flex text-foreground text-sm">
                            <span className="mr-2 text-primary flex-shrink-0 leading-none mt-[0.1em]">•</span>
                            <span>{plan.users}</span>
                          </li>
                          <li className="flex text-foreground text-sm">
                            <span className="mr-2 text-primary flex-shrink-0 leading-none mt-[0.1em]">•</span>
                            <span>{t.pages.pricing.extraPowerUserPrice.replace('{value}', extraPowerUserMonthlyPrice.toString())}</span>
                          </li>
                          <li className="flex text-foreground text-sm">
                            <span className="mr-2 text-primary flex-shrink-0 leading-none mt-[0.1em]">•</span>
                            <span>
                              {(() => {
                                if (plan.name === t.pages.pricing.plans.core.name) {
                                  return '20 lesende Nutzer';
                                }
                                if (plan.name === t.pages.pricing.plans.pro.name) {
                                  return '50 lesende Nutzer';
                                }
                                return '100 lesende Nutzer';
                              })()}
                            </span>
                          </li>
                        </ul>
                      </div>
                    )}

                    {/* LLM + AI Category - only show for Pro and Excellence, but reserve space for Core */}
                    <div className="mb-8 h-[160px] flex flex-col">
                      {plan.name !== t.pages.pricing.plans.core.name ? (
                        <>
                          <h4 className="font-semibold text-foreground mb-4 text-base leading-tight ml-0">{t.pages.pricing.categories.llmAi}</h4>
                          {plan.llmAi.length > 0 && (
                            <ul className="space-y-2 mb-4">
                              {plan.llmAi.map((item, index) => {
                                const normalizedItem = item.toLowerCase();
                                const isItalic = normalizedItem === 'alles aus core' ||
                                                  normalizedItem === 'alles aus pro' ||
                                                  normalizedItem === 'all from core' ||
                                                  normalizedItem === 'all from pro';
                                return (
                                  <li key={index} className="flex text-foreground text-sm">
                                    <span className="mr-2 text-primary flex-shrink-0 leading-none mt-[0.1em]">•</span>
                                    <span className={isItalic ? 'italic' : ''}>{item}</span>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                          <div 
                            className="flex items-center gap-3 border rounded-md p-3"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Checkbox
                              id={`private-llm-${plan.name}`}
                              checked={plan.name === t.pages.pricing.plans.pro.name ? privateLLMPro : privateLLMExcellence}
                              onCheckedChange={(checked) => {
                                if (plan.name === t.pages.pricing.plans.pro.name) {
                                  setPrivateLLMPro(!!checked);
                                } else {
                                  setPrivateLLMExcellence(!!checked);
                                }
                                setSelectedPlanIndex(index);
                              }}
                            />
                            <label htmlFor={`private-llm-${plan.name}`} className="text-sm text-foreground">
                              {t.pages.pricing.privateLLMHosting}
                            </label>
                          </div>
                        </>
                      ) : null}
                    </div>

                    {/* Service Category - min height to ensure alignment, but allow growth */}
                    <div className="mb-8 min-h-[300px]">
                      <h4 className="font-semibold text-foreground mb-4 text-base leading-tight">{t.pages.pricing.categories.service}</h4>
                      <ul className="space-y-2">
                        {plan.services
                          .filter(service => {
                            // Filter out the rate service items
                            const lowerService = service.toLowerCase();
                            return !lowerService.includes('rate for') && 
                                   !lowerService.includes('tagessatz') &&
                                   !lowerService.includes('rate for on');
                          })
                          .map((service, index) => {
                            const isIndented = service.startsWith('  ');
                            const displayText = isIndented ? service.trimStart() : service;
                            return (
                              <li key={index} className={`flex text-foreground text-sm ${isIndented ? 'pl-6' : ''}`}>
                                <span className="mr-2 text-primary flex-shrink-0 leading-none mt-[0.1em]">•</span>
                                <span>{displayText}</span>
                              </li>
                            );
                          })}
                      </ul>
                    </div>

                    {/* Support Rate Category - shows the on-top support rate */}
                    {(() => {
                      const rateService = plan.services.find(service => {
                        const lowerService = service.toLowerCase();
                        return lowerService.includes('rate for') || 
                               lowerService.includes('tagessatz') ||
                               lowerService.includes('rate for on');
                      });
                      
                      return rateService ? (
                        <div className="mb-8">
                          <h4 className="font-semibold text-foreground mb-4 text-base leading-tight">{t.pages.pricing.categories.supportRate}</h4>
                          <ul className="space-y-2">
                            <li className="flex text-foreground text-sm">
                              <span className="mr-2 text-primary flex-shrink-0 leading-none mt-[0.1em]">•</span>
                              <span>{rateService}</span>
                            </li>
                          </ul>
                        </div>
                      ) : null;
                    })()}
                  </div>

                  {/* Bottom section - LLM + AI and Statistics/Button - aligned from bottom */}
                  <div className="flex flex-col -mt-2">
                    <div className="space-y-4">
                      {/* Statistics Box / ROI Box */}
                      {plan.statistics && (
                        <div className="px-0 pb-0 flex items-center">
                          <AnimatedGradientBox
                            costDriverPercent={plan.statistics.costDriverPercent}
                            ftePercent={plan.statistics.ftePercent}
                            className="w-full"
                          />
                        </div>
                      )}

                      <Button 
                        variant={isSelected ? "default" : "outline"}
                        className={`w-full ${isSelected ? 'gradient-primary glow-primary hover:opacity-90 text-white' : 'border-border text-foreground hover:bg-secondary hover:text-foreground'}`}
                        size="lg"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent card selection when clicking button
                          // Scroll to HubSpot form
                          const formElement = document.getElementById('hubspot-contact-form');
                          if (formElement) {
                            formElement.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        {t.pages.pricing.contactUs}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              );
            })}
          </div>

          {/* Statistics Explanation Note */}
          {t.pages.pricing.statisticsNote && (
            <div className="max-w-6xl mx-auto mt-12 text-center">
              <p className="text-xs text-muted-foreground">
                {t.pages.pricing.statisticsNote}
              </p>
            </div>
          )}
        </div>
        
        {/* Gradient fade to FAQ section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none z-0" />
      </div>

      {/* FAQ Section with gradient background */}
      <div className="relative" style={{
        background: `
          linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.14) 50%, hsl(var(--background)) 100%),
          radial-gradient(ellipse 1000px 800px at 50% 50%, hsl(var(--noreja-secondary) / 0.10) 0%, transparent 60%)
        `
      }}>
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                {t.pages.pricing.faq.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t.pages.pricing.faq.subtitle}
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {t.pages.pricing.faq.items.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg mb-2">
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-foreground hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                {t.pages.contact.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t.pages.contact.subtitle}
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-border shadow-sm p-8 sm:p-12">
              {/* HubSpot Form Container */}
              <div className="w-full">
                <div 
                  className="hubspot-form-container"
                  id="hubspot-contact-form"
                  style={{ minHeight: '400px' }}
                >
                  <div
                    className="hs-form-frame"
                    data-region="eu1"
                    data-form-id="8e77caaf-8841-462e-b0bb-0ef0082e0c48"
                    data-portal-id="144242473"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;