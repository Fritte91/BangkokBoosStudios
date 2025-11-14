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
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary opacity-3 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.about.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.about.description}
          </p>
        </div>

        {/* Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="space-y-4 animate-slide-in-left">
            <h3 className="font-serif text-2xl font-bold text-foreground">{t.about.storyTitle}</h3>
            {t.about.storyParagraphs.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
            <p className="text-muted-foreground leading-relaxed">
              {bilingualTitle ? <strong className="text-foreground">{bilingualTitle}:</strong> : null}{' '}
              {bilingualDescription || (!bilingualTitle ? t.about.bilingualSupport : '')}
            </p>
          </div>

          {/* Team Photo Placeholder */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-square bg-gradient-to-br from-secondary/20 to-secondary/5 border-2 border-secondary rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300">
              <div className="text-center">
                <div className="text-7xl mb-4">👥</div>
                <p className="text-muted-foreground">{t.about.teamPlaceholder}</p>
              </div>
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
                className="border border-border hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-secondary/10 animate-fade-in-up bg-card/50 backdrop-blur group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/20 group-hover:bg-secondary/30 rounded-lg flex items-center justify-center mb-4 transition-all group-hover:scale-110">
                    <IconComponent className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="font-serif text-foreground group-hover:text-secondary transition-colors">{audience.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{audience.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
