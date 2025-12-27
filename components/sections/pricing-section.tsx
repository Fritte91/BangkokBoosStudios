'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Presence Starter',
    highlighted: false,
    setupPrice: '15,000–25,000',
    monthlyCare: '1,000–1,500',
    features: [
      '1–5 pages (WordPress)',
      'Mobile-friendly + basic SEO',
      'Contact + map + social links',
      'Client handover training'
    ]
  },
  {
    name: 'Lead Gen Starter',
    highlighted: true,
    setupPrice: '18,000–25,000',
    monthlyCare: '2,500–3,500',
    features: [
      'Conversion landing page (WP or React)',
      'Lead form + auto-reply',
      'Tracking (GA / basic events)',
      'Hosting + updates included (monthly)'
    ]
  },
  {
    name: 'Growth System',
    highlighted: false,
    setupPrice: '25,000–35,000',
    monthlyCare: '4,000–6,000',
    features: [
      'Premium landing + newsletter/blog option',
      'Google Business Profile setup (or audit)',
      'Analytics + reporting',
      'Priority support + monthly improvements'
    ]
  }
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-muted/30 thai-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the package that fits your business needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
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
                    Most Popular
                  </div>
                )}
                <CardTitle className="font-serif text-2xl text-foreground">
                  {plan.name}
                </CardTitle>
                <div className="mt-4 space-y-2">
                  <div>
                    <span className="font-serif text-4xl font-bold text-foreground">
                      ฿{plan.setupPrice}
                    </span>
                    <div className="text-xs text-muted-foreground/70 mt-1">
                      Setup fee
                    </div>
                  </div>
                  <div className="pt-2 border-t border-border/40">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Monthly Care (optional):</span>
                      <div className="text-foreground font-semibold mt-1">
                        ฿{plan.monthlyCare} / month
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button 
                  asChild
                  className={`w-full h-10 font-semibold rounded-lg transition-all ${
                    plan.highlighted
                      ? 'bg-secondary hover:bg-secondary/90 text-secondary-foreground gold-glow'
                      : 'border border-secondary/20 bg-background hover:bg-secondary/5 text-foreground/70 hover:text-foreground'
                  }`}
                >
                  <a href="#contact">Book a free 15-min call</a>
                </Button>
                <div className="space-y-3 pt-1">
                  <div className="text-xs text-muted-foreground/70 font-semibold uppercase tracking-wider mb-2">
                    What's included
                  </div>
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
