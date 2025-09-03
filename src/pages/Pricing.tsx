import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

const teamSizeLabels = [
  { value: 0, label: "0", users: 1 },
  { value: 1, label: "10", users: 10 },
  { value: 2, label: "25", users: 25 },
  { value: 3, label: "50", users: 50 },
  { value: 4, label: "100", users: 100 },
  { value: 5, label: "200", users: 200 },
  { value: 6, label: "500+", users: 500 }
];

// Placeholder pricing logic - replace with real pricing calculations
const calculatePricing = (teamSizeIndex: number) => {
  const baseUsers = teamSizeLabels[teamSizeIndex].users;
  
  // Simple scaling formula - customize as needed
  const starterBase = 29;
  const proBase = 79;
  const enterpriseBase = 199;
  
  const multiplier = Math.max(1, baseUsers / 10);
  
  return {
    starter: Math.round(starterBase * multiplier),
    pro: Math.round(proBase * multiplier),
    enterprise: Math.round(enterpriseBase * multiplier)
  };
};

const Pricing = () => {
  const { t } = useLanguage();
  const [teamSizeIndex, setTeamSizeIndex] = useState(1); // Default to 10 users
  const currentTeamSize = teamSizeLabels[teamSizeIndex];
  const pricing = calculatePricing(teamSizeIndex);

  const plans = [
    {
      name: t.pages.pricing.plans.starter.name,
      price: pricing.starter,
      description: t.pages.pricing.plans.starter.description,
      features: t.pages.pricing.plans.starter.features,
      cta: t.pages.pricing.plans.starter.cta,
      ctaVariant: "outline" as const
    },
    {
      name: t.pages.pricing.plans.pro.name,
      price: pricing.pro,
      description: t.pages.pricing.plans.pro.description,
      features: t.pages.pricing.plans.pro.features,
      cta: t.pages.pricing.plans.pro.cta,
      ctaVariant: "default" as const,
      popular: true
    },
    {
      name: t.pages.pricing.plans.enterprise.name,
      price: pricing.enterprise,
      description: t.pages.pricing.plans.enterprise.description,
      features: t.pages.pricing.plans.enterprise.features,
      cta: t.pages.pricing.plans.enterprise.cta,
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

        {/* Team Size Slider */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-card rounded-lg p-8 border">
            <h3 className="text-lg font-semibold mb-6 text-center text-foreground">
              {t.pages.pricing.teamSize} {currentTeamSize.label} {currentTeamSize.users > 1 ? t.pages.pricing.users : t.pages.pricing.user}
            </h3>
            
            <div className="space-y-6">
              <Slider
                value={[teamSizeIndex]}
                onValueChange={(value) => setTeamSizeIndex(value[0])}
                max={6}
                min={0}
                step={1}
                className="w-full"
              />
              
              {/* Labels */}
              <div className="flex justify-between text-sm text-muted-foreground px-2">
                {teamSizeLabels.map((label) => (
                  <span key={label.value} className="text-center">
                    {label.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.popular ? 'border-primary glow-primary' : ''}`}>
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
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground">{t.pages.pricing.month}</span>
                </div>
                <CardDescription className="text-base mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-foreground">
                      <span className="mr-3 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                 <div className="space-y-3 pt-4">
                  <Button 
                    variant={plan.ctaVariant}
                    className={`w-full ${plan.popular ? 'gradient-primary glow-primary hover:opacity-90 text-white' : 'border-border text-foreground hover:bg-secondary hover:text-foreground'}`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                  
                  <div className="text-center">
                    <button className="text-sm text-primary hover:underline">
                      {t.pages.pricing.viewAllFeatures}
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
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