'use client'

import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { ArrowRight, Star } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export default function HeroSection() {
  const [parallaxOffset, setParallaxOffset] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setParallaxOffset(window.scrollY * 0.5)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-muted thai-pattern">
      {/* Animated Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(212, 175, 55, 0.08) 35px, rgba(212, 175, 55, 0.08) 70px),
            repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(212, 175, 55, 0.05) 35px, rgba(212, 175, 55, 0.05) 70px)
          `,
          transform: `translateY(${parallaxOffset}px)`
        }}
      />

      {/* Gold accent circles */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-secondary opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary opacity-5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium">
                {t.hero.badge}
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-tight">
                {t.hero.title.start}{' '}
                <span className="text-secondary">{t.hero.title.highlight}</span>
                {t.hero.title.end ? ` ${t.hero.title.end}` : ''}
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                {t.hero.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground h-12 px-8 gold-glow text-base font-semibold rounded-lg flex items-center justify-center gap-2">
                {t.hero.primaryCta} <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="h-12 px-8 border-secondary text-secondary hover:bg-secondary/10 text-base font-semibold rounded-lg">
                {t.hero.secondaryCta}
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <span>{t.hero.trust}</span>
            </div>
          </div>

          {/* Right Mockup */}
          <div className="relative h-96 md:h-full min-h-[500px] animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Phone Mockup */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-80 bg-white border-8 border-gray-900 rounded-3xl shadow-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-b from-secondary to-secondary/80 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <div className="text-3xl mb-2">📱</div>
                  <p className="text-xs font-semibold">{t.hero.phoneLabel}</p>
                </div>
              </div>
            </div>

            {/* Laptop Mockup */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-56 bg-white border-8 border-gray-900 rounded-2xl shadow-2xl overflow-hidden">
              <div className="w-full h-32 bg-gradient-to-r from-secondary to-secondary/80 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl mb-1">💻</div>
                  <p className="text-xs font-semibold">{t.hero.laptopLabel}</p>
                </div>
              </div>
              <div className="px-3 py-2 space-y-1 h-16">
                <div className="h-2 bg-gray-200 rounded w-3/4" />
                <div className="h-2 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
