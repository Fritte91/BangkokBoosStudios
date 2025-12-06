'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export default function TestimonialsSection() {
  const { t } = useLanguage()
  const testimonials = t.testimonials.entries

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary opacity-3 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const isHighlighted = index === 1 // Center testimonial
            return (
              <Card 
                key={index}
                className={`border-border hover:border-secondary/30 transition-all animate-fade-in-up hover:shadow-md hover:shadow-secondary/5 bg-card/50 backdrop-blur group ${
                  isHighlighted ? 'bg-card/70 border-secondary/20' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground/90 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="pt-2 border-t border-border/50">
                    <p className="font-semibold text-foreground/90 group-hover:text-secondary/80 transition-colors">{testimonial.name}</p>
                    <p className="text-sm text-secondary/80">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground/60 mt-0.5">Local business</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
