'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Wrench, Zap, Headphones } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const stepIcons = [Calendar, Wrench, Zap, Headphones]

export default function HowItWorksSection() {
  const { t } = useLanguage()

  return (
    <section id="how-it-works" className="py-20 bg-muted/30 thai-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.howItWorks.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.howItWorks.steps.map((item, index) => {
            const Icon = stepIcons[index % stepIcons.length]
            const isLastStep = index === t.howItWorks.steps.length - 1
            return (
              <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                {/* Connector Line */}
                {index < t.howItWorks.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-3 w-8 h-0.5 bg-gradient-to-r from-secondary/40 via-secondary/30 to-transparent" />
                )}

                <Card className={`border-secondary/30 hover:border-secondary transition-all h-full ${
                  isLastStep 
                    ? 'bg-gradient-to-br from-secondary/5 to-transparent shadow-sm' 
                    : ''
                }`}>
                  <CardContent className={`pt-6 space-y-4 ${isLastStep ? 'pb-7' : ''}`}>
                    {/* Step Number and Icon */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center font-serif font-bold text-secondary">
                        {index + 1}
                      </div>
                      <Icon className="text-secondary" size={24} />
                    </div>

                    <div>
                      <h3 className="font-serif text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
