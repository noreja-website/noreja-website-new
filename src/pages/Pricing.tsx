import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const teamSizeLabels = [
  { value: 0, label: "0", users: 1 },
  { value: 1, label: "10", users: 10 },
  { value: 2, label: "25", users: 25 },
  { value: 3, label: "50", users: 50 },
  { value: 4, label: "100", users: 100 },
  { value: 5, label: "200", users: 200 },
  { value: 6, label: "500+", users: 500 }
];

const dataVolumeLabels = [
  { value: 0, label: "1GB", volume: 1 },
  { value: 1, label: "10GB", volume: 10 },
  { value: 2, label: "100GB", volume: 100 },
  { value: 3, label: "1TB", volume: 1000 },
  { value: 4, label: "10TB", volume: 10000 },
  { value: 5, label: "100TB+", volume: 100000 }
];

// Placeholder pricing logic - replace with real pricing calculations
const calculatePricing = (teamSizeIndex: number, dataVolumeIndex: number) => {
  const baseUsers = teamSizeLabels[teamSizeIndex].users;
  const baseVolume = dataVolumeLabels[dataVolumeIndex].volume;
  
  // Simple scaling formula - customize as needed
  const starterBase = 29;
  const proBase = 79;
  const enterpriseBase = 199;
  
  const multiplier = Math.max(1, baseUsers / 10);
  const volumeMultiplier = Math.max(1, baseVolume / 10);
  
  return {
    starter: Math.round(starterBase * multiplier * volumeMultiplier * 0.8),
    pro: Math.round(proBase * multiplier * volumeMultiplier * 0.9),
    enterprise: Math.round(enterpriseBase * multiplier * volumeMultiplier)
  };
};

const Pricing = () => {
  const { t } = useLanguage();
  const [teamSizeIndex, setTeamSizeIndex] = useState(1); // Default to 10 users
  const [dataVolumeIndex, setDataVolumeIndex] = useState(1); // Default to 10GB
  const [privateLLMPro, setPrivateLLMPro] = useState(false);
  const [privateLLMExcellence, setPrivateLLMExcellence] = useState(false);
  const currentTeamSize = teamSizeLabels[teamSizeIndex];
  const currentDataVolume = dataVolumeLabels[dataVolumeIndex];
  const pricing = calculatePricing(teamSizeIndex, dataVolumeIndex);

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

  const plans = [
    {
      name: t.pages.pricing.plans.core.name,
      price: pricing.starter,
      description: t.pages.pricing.plans.core.description,
      features: t.pages.pricing.plans.core.features,
      services: t.pages.pricing.plans.core.services,
      llmAi: t.pages.pricing.plans.core.llmAi,
      cta: t.pages.pricing.plans.core.cta,
      ctaVariant: "outline" as const
    },
    {
      name: t.pages.pricing.plans.pro.name,
      price: pricing.pro,
      description: t.pages.pricing.plans.pro.description,
      features: t.pages.pricing.plans.pro.features,
      services: t.pages.pricing.plans.pro.services,
      llmAi: t.pages.pricing.plans.pro.llmAi,
      cta: t.pages.pricing.plans.pro.cta,
      ctaVariant: "default" as const,
      popular: true
    },
    {
      name: t.pages.pricing.plans.excellence.name,
      price: pricing.enterprise,
      description: t.pages.pricing.plans.excellence.description,
      features: t.pages.pricing.plans.excellence.features,
      services: t.pages.pricing.plans.excellence.services,
      llmAi: t.pages.pricing.plans.excellence.llmAi,
      cta: t.pages.pricing.plans.excellence.cta,
      ctaVariant: "outline" as const
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            {t.pages.pricing.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.pages.pricing.subtitle}
          </p>
        </div>

        {/* Pricing Sliders */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Team Size Slider */}
            <div className="bg-card rounded-lg p-8 border">
              <h3 className="text-lg font-semibold mb-6 text-center text-foreground">
                {t.pages.pricing.teamSize} {currentTeamSize.label} {currentTeamSize.users > 1 ? t.pages.pricing.users : t.pages.pricing.user}
              </h3>
              
              <div className="space-y-6">
                <div className="px-3">
                  <Slider
                    value={[teamSizeIndex]}
                    onValueChange={(value) => setTeamSizeIndex(value[0])}
                    max={6}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                </div>
                
                {/* Labels Team Size*/}
                <div className="flex justify-between text-sm text-muted-foreground px-3 w-full">
                  {teamSizeLabels.map((label) => (
                    <span key={label.value} className="text-center flex-[0_0_5%]">
                      {label.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Data Volume Slider */}
            <div className="bg-card rounded-lg p-8 border">
              <h3 className="text-lg font-semibold mb-6 text-center text-foreground">
                {t.pages.pricing.dataVolume} {currentDataVolume.label}
              </h3>
              
              <div className="space-y-6">
                <div className="px-2">
                  <Slider
                    value={[dataVolumeIndex]}
                    onValueChange={(value) => setDataVolumeIndex(value[0])}
                    max={5}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                </div>
                
                {/* Labels Data Volume */}
                <div className="flex justify-between text-sm text-muted-foreground px-3 w-full">
                  {dataVolumeLabels.map((label) => (
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative flex flex-col ${plan.popular ? 'border-primary glow-primary' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge variant="default" className="gradient-primary text-white">
                    {t.pages.pricing.mostPopular}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.name === t.pages.pricing.plans.pro.name && privateLLMPro
                      ? t.pages.pricing.onRequest
                      : plan.name === t.pages.pricing.plans.excellence.name && privateLLMExcellence
                        ? t.pages.pricing.onRequest
                        : `$${plan.price}`}
                  </span>
                  <span className="text-muted-foreground">{t.pages.pricing.month}</span>
                </div>
                <CardDescription className="text-base mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex flex-col flex-grow">
                <div className="space-y-4 flex-grow">
                  {/* Feature Category */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t.pages.pricing.categories.feature}</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-foreground text-sm">
                          <span className="mr-2 mt-1 text-primary">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Service Category */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t.pages.pricing.categories.service}</h4>
                    <ul className="space-y-2">
                      {plan.services.map((service, index) => (
                        <li key={index} className="flex items-start text-foreground text-sm">
                          <span className="mr-2 mt-1 text-primary">•</span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* LLM + AI Category - only show if there are items */}
                  {plan.llmAi.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t.pages.pricing.categories.llmAi}</h4>
                      <ul className="space-y-2">
                        {plan.llmAi.map((item, index) => (
                          <li key={index} className="flex items-start text-foreground text-sm">
                            <span className="mr-2 mt-1 text-primary">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 space-y-4">
                  {(plan.name === t.pages.pricing.plans.pro.name || plan.name === t.pages.pricing.plans.excellence.name) && (
                    <div className="flex items-center gap-3 border rounded-md p-3">
                      <Checkbox
                        id={`private-llm-${plan.name}`}
                        checked={plan.name === t.pages.pricing.plans.pro.name ? privateLLMPro : privateLLMExcellence}
                        onCheckedChange={(checked) => {
                          if (plan.name === t.pages.pricing.plans.pro.name) {
                            setPrivateLLMPro(!!checked);
                          } else {
                            setPrivateLLMExcellence(!!checked);
                          }
                        }}
                      />
                      <label htmlFor={`private-llm-${plan.name}`} className="text-sm text-foreground">
                        {t.pages.pricing.privateLLMHosting}
                      </label>
                    </div>
                  )}

                  <Button 
                    variant={plan.ctaVariant}
                    className={`w-full ${plan.popular ? 'gradient-primary glow-primary hover:opacity-90 text-white' : 'border-border text-foreground hover:bg-secondary hover:text-foreground'}`}
                    size="lg"
                    onClick={() => {
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
              </CardContent>
            </Card>
          ))}
        </div>

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

        {/* Footer Note */}
        <div className="text-center mt-12 text-muted-foreground">
          <p>{t.pages.pricing.footerNote}</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;