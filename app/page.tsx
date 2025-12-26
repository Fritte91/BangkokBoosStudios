'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import HeroSection from '@/components/sections/hero-section'
import AboutSection from '@/components/sections/about-section'
import ServicesSection from '@/components/sections/services-section'
import WorkflowSection from '@/components/sections/workflow-section'
import BeforeAfterSection from '@/components/sections/before-after-section'
import PricingSection from '@/components/sections/pricing-section'
import PostPricingCtaSection from '@/components/sections/post-pricing-cta-section'
import TestimonialsSection from '@/components/sections/testimonials-section'
import HowItWorksSection from '@/components/sections/how-it-works-section'
import FAQSection from '@/components/sections/faq-section'
import ContactSection from '@/components/sections/contact-section'
import Footer from '@/components/sections/footer'
import { useLanguage } from '@/components/language-provider'
import type { Locale } from '@/lib/translations'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t, locale, setLocale } = useLanguage()

  const handleLocaleChange = (nextLocale: Locale) => {
    if (nextLocale !== locale) {
      setLocale(nextLocale)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img 
                src="/112.png" 
                alt="Bangkok Boost Logo" 
                className="h-16 md:h-20 w-auto object-contain"
              />
              <span className="font-serif text-xl md:text-2xl font-bold text-foreground hidden sm:inline">Bangkok Boost</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {t.nav.links.map(link => (
                <a key={link.id} href={`#${link.id}`} className="text-sm font-medium hover:text-secondary transition">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <div className="flex items-center rounded-full border border-border overflow-hidden text-xs font-semibold">
                {(['en', 'th'] as const).map(code => (
                  <button
                    key={code}
                    onClick={() => handleLocaleChange(code)}
                    className={`px-3 py-1 transition ${
                      locale === code ? 'bg-secondary text-secondary-foreground' : 'text-muted-foreground'
                    }`}
                    aria-pressed={locale === code}
                  >
                    {code.toUpperCase()}
                  </button>
                ))}
              </div>
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gold-glow">
                {t.nav.cta}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <div className="flex items-center gap-2 px-4">
                {(['en', 'th'] as const).map(code => (
                  <button
                    key={code}
                    onClick={() => {
                      handleLocaleChange(code)
                      setMobileMenuOpen(false)
                    }}
                    className={`flex-1 border rounded-lg px-3 py-2 text-sm font-semibold transition ${
                      locale === code ? 'border-secondary text-secondary bg-secondary/10' : 'border-border'
                    }`}
                  >
                    {code.toUpperCase()}
                  </button>
                ))}
              </div>
              {t.nav.links.map(link => (
                <a key={link.id} href={`#${link.id}`} className="block px-4 py-2 rounded hover:bg-muted">
                  {link.label}
                </a>
              ))}
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                {t.nav.cta}
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorkflowSection />
        <BeforeAfterSection />
        <PricingSection />
        <PostPricingCtaSection />
        <TestimonialsSection />
        <HowItWorksSection />
        <FAQSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
