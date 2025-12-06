'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export default function PricingSection() {
  const { t } = useLanguage()

  return (
    <section id="pricing" className="py-20 bg-muted/30 thai-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.pricing.plans.map((plan, index) => (
            <Card
              key={index}
              className={`transition-all duration-300 animate-fade-in-up bg-card/95 backdrop-blur-sm ${
                plan.highlighted
                  ? 'border-secondary/50 shadow-xl scale-105'
                  : 'border-border shadow-md hover:border-secondary/30 hover:shadow-lg'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                {plan.highlighted && (
                  <div className="inline-block bg-secondary/20 text-secondary text-xs font-semibold px-3 py-1 rounded-full mb-2 w-fit">
                    {t.pricing.mostPopularLabel}
                  </div>
                )}
                <CardTitle className="font-serif text-2xl text-foreground">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-sm">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="font-serif text-4xl font-bold text-foreground">
                    ฿{plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">{t.pricing.perMonth}</span>
                </div>
                <p className="text-xs text-muted-foreground/70 mt-2 font-normal">
                  {plan.whoThisIsFor}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button 
                  className={`w-full h-10 font-semibold rounded-lg transition-all ${
                    plan.highlighted
                      ? 'bg-secondary hover:bg-secondary/90 text-secondary-foreground gold-glow'
                      : 'border border-secondary/20 bg-background hover:bg-secondary/5 text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {t.pricing.choose(plan.name)}
                </Button>
                <div className="space-y-3 pt-1">
                  {plan.features.map((feature, i) => {
                    // Emphasize first 1-2 features for each plan
                    const isKeyFeature = i < (plan.highlighted ? 2 : 1)
                    // Add subtle spacing after key features for visual grouping
                    const addSpacing = isKeyFeature && i === (plan.highlighted ? 1 : 0)
                    return (
                      <div 
                        key={i} 
                        className={`flex items-start gap-3 ${addSpacing ? 'pb-1' : ''}`}
                      >
                        <Check className="text-secondary flex-shrink-0 mt-0.5" size={18} />
                        <p className={`text-sm text-muted-foreground ${isKeyFeature ? 'font-medium' : ''}`}>
                          {feature}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
