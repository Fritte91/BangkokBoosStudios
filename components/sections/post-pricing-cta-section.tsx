'use client'

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'

export default function PostPricingCtaSection() {
  const { t } = useLanguage()

  return (
    <section 
      className="py-24 md:py-28 relative"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.04) 0%, rgba(212, 175, 55, 0.015) 50%, transparent 100%)'
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card/98 backdrop-blur-sm border border-secondary/25 rounded-2xl shadow-lg p-10 md:p-14 text-center relative overflow-hidden"
          style={{
            boxShadow: '0 10px 40px -10px rgba(212, 175, 55, 0.1), 0 0 0 1px rgba(212, 175, 55, 0.06)'
          }}
        >
          {/* Subtle radial gradient overlay - center brighter */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.15) 40%, transparent 70%)'
            }}
          />
          
          <div className="relative z-10">
            <p className="text-xs text-muted-foreground/50 mb-3 font-normal tracking-wide uppercase">
              {t.postPricingCta.eyebrow}
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
              {t.postPricingCta.headline}
            </h3>
            <p className="text-base md:text-lg text-muted-foreground mb-7 max-w-2xl mx-auto leading-relaxed">
              {t.postPricingCta.supportingText}
            </p>
            <p className="text-xs text-muted-foreground/60 mb-12 font-normal">
              {t.postPricingCta.trustReassurance}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground h-12 px-10 text-base font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-secondary/20"
                onClick={() => {
                  // Scroll to contact section
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {t.postPricingCta.primaryCta}
              </Button>
              <a 
                href="#contact" 
                className="text-xs text-muted-foreground/50 hover:text-muted-foreground/70 transition-colors duration-200"
              >
                {t.postPricingCta.secondaryLink}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

