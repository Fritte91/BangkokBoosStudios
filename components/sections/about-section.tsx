'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Lightbulb, ShoppingBag } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const audienceIcons = [Users, Lightbulb, ShoppingBag]

export default function AboutSection() {
  const { t } = useLanguage()
  const audiences = t.about.audiences
  const bilingualParts = t.about.bilingualSupport.split(':')
  const bilingualTitle = bilingualParts.shift()?.trim()
  const bilingualDescription = bilingualParts.join(':').trim()

  return (
    <section className="py-20 bg-muted/50 thai-pattern relative overflow-hidden">
      {/* Subtle gradient falloff for depth - top to bottom */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.015) 50%, rgba(0, 0, 0, 0.03) 100%)'
        }}
      />
      
      {/* Refined ambient accent - more subtle */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary opacity-[0.02] rounded-full blur-3xl z-[1]" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary opacity-[0.015] rounded-full blur-3xl z-[1]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up" style={{ animationDuration: '1s', animationTimingFunction: 'ease-out' }}>
          <h2 
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-7 tracking-[-0.01em]"
            style={{ 
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
              filter: 'brightness(1.01)',
              letterSpacing: '-0.01em'
            }}
          >
            {t.about.title}
          </h2>
          <p 
            className="text-lg text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed tracking-tight mt-2"
            style={{ 
              textShadow: '0 1px 1px rgba(0, 0, 0, 0.04)',
              filter: 'brightness(1.02)'
            }}
          >
            {t.about.description}
          </p>
        </div>

        {/* Story */}
        <div className="grid md:grid-cols-2 gap-16 mb-20 items-center">
          <div className="space-y-5 animate-slide-in-left" style={{ animationDuration: '1s', animationTimingFunction: 'ease-out' }}>
            <h3 
              className="font-serif text-2xl font-bold text-foreground tracking-tight mb-1"
              style={{ 
                textShadow: '0 1px 1px rgba(0, 0, 0, 0.06)',
                filter: 'brightness(1.02)'
              }}
            >
              {t.about.storyTitle}
            </h3>
            {t.about.storyParagraphs.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-muted-foreground/92 leading-[1.8] tracking-tight"
                style={{ 
                  textShadow: '0 1px 1px rgba(0, 0, 0, 0.02)'
                }}
              >
                {paragraph}
              </p>
            ))}
            <p 
              className="text-muted-foreground/92 leading-[1.8] tracking-tight pt-2"
              style={{ 
                textShadow: '0 1px 1px rgba(0, 0, 0, 0.02)'
              }}
            >
              {bilingualTitle ? (
                <strong 
                  className="text-foreground/90 font-semibold"
                  style={{ 
                    textShadow: '0 1px 1px rgba(0, 0, 0, 0.04)',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {bilingualTitle}:
                </strong>
              ) : null}{' '}
              {bilingualDescription || (!bilingualTitle ? t.about.bilingualSupport : '')}
            </p>
          </div>

          {/* Team Photo - Refined as brand element */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s', animationDuration: '1.2s', animationTimingFunction: 'ease-out' }}>
            <div 
              className="aspect-square bg-gradient-to-br from-secondary/12 via-secondary/6 to-secondary/4 border border-border/60 rounded-xl relative overflow-hidden transition-all duration-700 hover:shadow-lg hover:shadow-secondary/5"
              style={{
                filter: 'saturate(0.88) brightness(0.98)',
                boxShadow: '0 2px 16px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
              }}
            >
              {/* Subtle inner glow and desaturation overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/3 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-0 bg-background/5 pointer-events-none z-[9]" />
              
              {/* Team Portrait Image */}
              <img 
                src="/6.png" 
                alt={t.about.teamPlaceholder}
                className="w-full h-full object-cover"
                style={{
                  filter: 'saturate(0.85) brightness(0.97) contrast(0.98)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((audience, index) => {
            const IconComponent = audienceIcons[index % audienceIcons.length]
            return (
              <Card 
                key={index}
                className="border border-border/70 hover:border-secondary/30 transition-all duration-700 ease-out hover:shadow-sm hover:shadow-secondary/3 animate-fade-in-up bg-card/50 backdrop-blur-sm group cursor-pointer"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: '1s',
                  animationTimingFunction: 'ease-out',
                  filter: 'brightness(1.005)',
                  boxShadow: '0 1px 6px rgba(0, 0, 0, 0.015)',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <CardHeader className="pb-3">
                  <div 
                    className="w-12 h-12 bg-secondary/12 group-hover:bg-secondary/20 rounded-lg flex items-center justify-center mb-4 transition-all duration-700 ease-out group-hover:scale-[1.03]"
                    style={{
                      boxShadow: '0 1px 4px rgba(0, 0, 0, 0.02)',
                      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <IconComponent 
                      className="w-6 h-6 text-secondary/90 transition-colors duration-700 ease-out" 
                      style={{ filter: 'saturate(0.92)' }}
                    />
                  </div>
                  <CardTitle 
                    className="font-serif text-foreground/95 group-hover:text-secondary/90 transition-colors duration-700 ease-out tracking-tight"
                    style={{ 
                      textShadow: '0 1px 1px rgba(0, 0, 0, 0.04)',
                      filter: 'brightness(1.01)',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {audience.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p 
                    className="text-sm text-muted-foreground/93 leading-[1.7] tracking-tight"
                    style={{ 
                      textShadow: '0 1px 1px rgba(0, 0, 0, 0.015)'
                    }}
                  >
                    {audience.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
