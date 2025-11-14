'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Smartphone, Zap, Globe } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const serviceIcons = [MapPin, Smartphone, Zap, Globe]
const workflowEmojis = ['🎯', '📊', '💡']

export default function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary opacity-3 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {t.services.list.map((service, index) => {
            const IconComponent = serviceIcons[index % serviceIcons.length]
            return (
              <Card
                key={index}
                className="border border-border hover:border-secondary/50 transition-all duration-300 group cursor-pointer animate-fade-in-up hover:shadow-lg hover:shadow-secondary/10 bg-card/50 backdrop-blur"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-secondary/20 group-hover:bg-secondary/30 rounded-lg flex items-center justify-center mb-4 transition-all group-hover:scale-110">
                    <IconComponent className="w-7 h-7 text-secondary" />
                  </div>
                  <CardTitle className="font-serif text-foreground group-hover:text-secondary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                  <div className="text-secondary font-semibold text-sm">{service.price}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="bg-gradient-to-br from-muted/30 to-secondary/5 rounded-lg border border-secondary/20 p-12 text-center animate-fade-in backdrop-blur" style={{ animationDelay: '0.4s' }}>
          <p className="text-muted-foreground mb-6 font-medium">{t.services.workflowTitle}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-background/60 backdrop-blur rounded-lg border border-border h-48 flex flex-col items-center justify-center hover:border-secondary/30 transition-all hover:shadow-md">
                <div className="text-4xl mb-3">{workflowEmojis[i]}</div>
                <p className="text-xs text-muted-foreground font-semibold">{t.services.workflowShots[i] ?? ''}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
