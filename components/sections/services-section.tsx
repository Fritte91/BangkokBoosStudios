'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Smartphone, Zap, Globe } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const serviceIcons = [MapPin, Smartphone, Zap, Globe]
const workflowImages = ['/7.png', '/8.png', '/9.png']

export default function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary opacity-3 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {t.services.list.map((service, index) => {
            const IconComponent = serviceIcons[index % serviceIcons.length]
            // Create hierarchy: first card slightly emphasized, alternating weights
            const isPrimary = index === 0
            const isEven = index % 2 === 0
            
            return (
              <Card
                key={index}
                className={`group cursor-pointer bg-gradient-to-br from-card via-card to-muted/6 ${
                  isPrimary 
                    ? 'border border-secondary/30 shadow-sm shadow-secondary/5' 
                    : isEven
                    ? 'border border-border/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
                    : 'border border-border/70 shadow-[0_1px_2px_rgba(0,0,0,0.02)]'
                } hover:border-secondary/50 hover:shadow-md hover:shadow-secondary/8 transition-all duration-300`}
              >
                <CardHeader className="pb-5">
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
                    isPrimary 
                      ? 'bg-secondary/20 shadow-sm' 
                      : 'bg-secondary/15'
                  } group-hover:bg-secondary/25 transition-colors duration-300`}>
                    <IconComponent className={`w-7 h-7 ${
                      isPrimary ? 'text-secondary' : 'text-secondary/90'
                    }`} />
                  </div>
                  <CardTitle className={`font-serif ${
                    isPrimary ? 'text-foreground text-xl' : 'text-foreground'
                  } group-hover:text-secondary/90 transition-colors duration-300`}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed min-h-[3rem]">
                    {service.description}
                  </p>
                  <div className="pt-4 mt-4 border-t border-border/60 bg-muted/30 -mx-6 px-6 py-3 rounded-b-lg">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-muted-foreground/80 uppercase tracking-wider font-medium">
                        Investment
                      </span>
                      <div className="text-secondary font-semibold text-lg tracking-tight">
                        {service.price}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="bg-muted/15 rounded-lg border border-border/70 p-10">
          <p className="text-foreground/80 mb-10 font-medium text-base text-center">
            {t.services.workflowTitle}
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i} 
                className="bg-background border border-border/80 rounded-lg p-6 flex flex-col items-center justify-center min-h-[180px] shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:border-secondary/50 hover:shadow-sm transition-all duration-300 overflow-hidden"
              >
                <div className="w-full h-32 mb-4 rounded-md overflow-hidden bg-muted/30 flex items-center justify-center">
                  <img 
                    src={workflowImages[i]} 
                    alt={t.services.workflowShots[i] ?? `Service ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-foreground/70 font-medium text-center leading-relaxed">
                  {t.services.workflowShots[i] ?? ''}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
