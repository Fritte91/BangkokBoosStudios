'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Star, Sparkles } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export default function HeroSection() {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Premium Dark Gradient Base - Sophisticated multi-layer depth */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 50% -10%, rgba(212, 175, 55, 0.25) 0%, rgba(212, 175, 55, 0.15) 20%, rgba(212, 175, 55, 0.08) 40%, transparent 70%),
            radial-gradient(ellipse 80% 60% at -10% 110%, rgba(212, 175, 55, 0.18) 0%, rgba(212, 175, 55, 0.10) 30%, transparent 60%),
            radial-gradient(ellipse 70% 55% at 110% 110%, rgba(212, 175, 55, 0.16) 0%, rgba(212, 175, 55, 0.08) 35%, transparent 65%),
            radial-gradient(circle at 30% 50%, rgba(212, 175, 55, 0.12) 0%, transparent 50%),
            linear-gradient(180deg, #0a0a0a 0%, #121212 15%, #0f0f0f 30%, #0d0d0d 50%, #0a0a0a 70%, #080808 85%, #000000 100%)
          `
        }}
      />

      {/* Sophisticated diagonal gradient overlay */}
      <div 
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            linear-gradient(135deg, rgba(20, 18, 12, 0.3) 0%, rgba(15, 13, 8, 0.5) 25%, rgba(10, 8, 5, 0.6) 50%, rgba(8, 6, 3, 0.65) 75%, rgba(5, 4, 2, 0.7) 100%)
          `
        }}
      />

      {/* Premium gold accent glows - strategic placement for luxury */}
      <div className="absolute top-[15%] left-[20%] w-[600px] h-[600px] bg-secondary opacity-[0.20] rounded-full blur-[140px] z-[2]" />
      <div className="absolute bottom-[20%] right-[25%] w-[550px] h-[550px] bg-secondary opacity-[0.18] rounded-full blur-[150px] z-[2]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary opacity-[0.12] rounded-full blur-[180px] z-[2]" />
      
      {/* Additional sophisticated depth layers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-secondary opacity-[0.10] rounded-full blur-[200px] z-[2]" />
      <div className="absolute bottom-0 right-[30%] w-[700px] h-[600px] bg-secondary opacity-[0.08] rounded-full blur-[170px] z-[2]" />
      <div className="absolute top-[60%] left-[10%] w-[500px] h-[500px] bg-secondary opacity-[0.06] rounded-full blur-[130px] z-[2]" />
      
      {/* Subtle warm tone overlay for richness */}
      <div 
        className="absolute inset-0 z-[3]"
        style={{
          background: `
            radial-gradient(ellipse at center, rgba(212, 175, 55, 0.03) 0%, transparent 70%)
          `
        }}
      />

      {/* Content - Text First, Centered */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="space-y-6 md:space-y-7">
          
          {/* Badge - reduced visual weight */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/8 border border-secondary/20">
            <Sparkles className="w-3 h-3 text-secondary/80" />
            <span className="text-secondary/90 text-xs font-medium tracking-wide">
              {t.hero.badge}
            </span>
          </div>

          {/* Hero Heading - tighter line-height, stronger typographic authority */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
            <span className="text-white block">
              {t.hero.title.start}
            </span>
            <span 
              className="block bg-gradient-to-r from-secondary/90 via-secondary/95 to-secondary/90 bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {t.hero.title.highlight}
            </span>
            {t.hero.title.end && (
              <span className="text-white/90 block">
                {t.hero.title.end}
              </span>
            )}
          </h1>

          {/* Description - shortened, sharper, confident */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-snug font-normal">
            {t.hero.description}
          </p>

          {/* CTA Buttons - primary CTA more commanding */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="group bg-secondary hover:bg-secondary/90 text-secondary-foreground h-16 px-12 text-base font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              {t.hero.primaryCta}
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <Button
              onClick={() => scrollToSection('services')}
              variant="outline"
              className="h-14 px-10 border-2 border-secondary/40 text-secondary hover:bg-secondary/10 hover:border-secondary/60 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              {t.hero.secondaryCta}
            </Button>
          </div>

          {/* Trust Indicator */}
          <div className="flex items-center justify-center gap-3 text-sm md:text-base text-gray-400 pt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="font-medium">{t.hero.trust}</span>
          </div>

        </div>
      </div>

    </section>
  )
}
