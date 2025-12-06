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
      // Extremely subtle parallax for calm, confident motion
      setParallaxOffset(window.scrollY * 0.1)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image layer - z-0 */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/black3.jpg')`,
          filter: 'saturate(0.7) contrast(0.85) blur(1px)',
          transform: `translateY(${parallaxOffset * 0.2}px)`,
          willChange: 'transform'
        }}
      />

      {/* Dark gradient overlay - darker on left (text area), lighter on right - z-1 */}
      <div 
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0.25) 100%)'
        }}
      />

      {/* Refined gold accent circles - ambient lighting only - z-2 */}
      <div className="absolute top-10 right-20 w-48 h-48 bg-secondary opacity-[0.02] rounded-full blur-3xl z-[2]" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-secondary opacity-[0.02] rounded-full blur-3xl z-[2]" />

      {/* Soft light isolation layer behind text content - z-3 */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[700px] bg-background/20 dark:bg-background/30 rounded-full blur-[120px] z-[3] pointer-events-none" />

      {/* Content layer - z-10 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up relative z-10" style={{ animationDuration: '1s', animationTimingFunction: 'ease-out' }}>
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium">
                {t.hero.badge}
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.12)', filter: 'brightness(1.06)' }}>
                {t.hero.title.start}{' '}
                <span className="text-secondary" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.15)' }}>{t.hero.title.highlight}</span>
                {t.hero.title.end ? ` ${t.hero.title.end}` : ''}
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl tracking-tight" style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.1)', filter: 'brightness(1.07)' }}>
                {t.hero.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground h-12 px-8 text-base font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-500 hover:shadow-xl hover:shadow-secondary/25 hover:-translate-y-1">
                {t.hero.primaryCta} <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="h-12 px-8 border-secondary text-secondary hover:bg-secondary/10 text-base font-semibold rounded-lg transition-all duration-500 hover:shadow-lg hover:shadow-secondary/15 hover:-translate-y-1">
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
          <div className="relative h-96 md:h-full min-h-[500px] animate-fade-in opacity-90" style={{ animationDelay: '0.2s', animationDuration: '1.2s', animationTimingFunction: 'ease-out' }}>
            {/* Phone Mockup */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-80 bg-white border-8 border-gray-800 rounded-3xl shadow-2xl overflow-hidden" style={{ filter: 'saturate(0.85) brightness(0.95)' }}>
              <div className="w-full h-full bg-gradient-to-b from-secondary/90 to-secondary/70 flex items-center justify-center" style={{ filter: 'saturate(0.9)' }}>
                <div className="text-center text-white p-4">
                  <div className="text-3xl mb-2">📱</div>
                  <p className="text-xs font-semibold">{t.hero.phoneLabel}</p>
                </div>
              </div>
            </div>

            {/* Laptop Mockup */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-56 bg-white border-8 border-gray-800 rounded-2xl shadow-2xl overflow-hidden" style={{ filter: 'saturate(0.85) brightness(0.95)' }}>
              <div className="w-full h-32 bg-gradient-to-r from-secondary/90 to-secondary/70 flex items-center justify-center" style={{ filter: 'saturate(0.9)' }}>
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
