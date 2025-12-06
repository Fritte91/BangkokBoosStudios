'use client'

import { MessageCircle, Phone, Mail } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { useEffect, useRef, useState } from 'react'

export default function Footer() {
  const { t } = useLanguage()
  const footerRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-b from-foreground to-foreground/95 text-background py-20 overflow-hidden"
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        <div className="grid md:grid-cols-4 gap-10 md:gap-12 mb-16">
          {/* About */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 bg-secondary rounded-full flex items-center justify-center border border-background/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_1px_3px_rgba(0,0,0,0.2)] before:absolute before:inset-0 before:rounded-full before:border before:border-secondary/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
                <span className="font-serif text-sm font-bold text-foreground relative z-10">B</span>
              </div>
              <span className="font-serif text-lg font-bold">Bangkok Boost</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h3 className="font-serif font-bold text-base">{t.footer.servicesTitle}</h3>
            <div className="space-y-2.5 text-sm opacity-80">
              {t.footer.services.map(service => (
                <p key={service}>
                  <a
                    href="#"
                    className="inline-block relative group transition-all duration-250 ease-out hover:opacity-100"
                  >
                    <span className="relative inline-block transition-transform duration-250 ease-out group-hover:translate-x-1">
                      {service}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-background/50 group-hover:w-full transition-all duration-250 ease-out" />
                    </span>
                  </a>
                </p>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-5">
            <h3 className="font-serif font-bold text-base">{t.footer.companyTitle}</h3>
            <div className="space-y-2.5 text-sm opacity-80">
              {t.footer.company.map(item => (
                <p key={item}>
                  <a
                    href="#"
                    className="inline-block relative group transition-all duration-250 ease-out hover:opacity-100"
                  >
                    <span className="relative inline-block transition-transform duration-250 ease-out group-hover:translate-x-1">
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-background/50 group-hover:w-full transition-all duration-250 ease-out" />
                    </span>
                  </a>
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h3 className="font-serif font-bold text-base">{t.footer.contactTitle}</h3>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-center gap-2.5 opacity-80 group/item">
                <MessageCircle size={18} className="transition-opacity duration-250 group-hover/item:opacity-100" />
                <a
                  href="#"
                  className="inline-block relative group transition-all duration-250 ease-out hover:opacity-100"
                >
                  <span className="relative inline-block transition-transform duration-250 ease-out group-hover:translate-x-1">
                    {t.footer.lineLabel}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-background/50 group-hover:w-full transition-all duration-250 ease-out" />
                  </span>
                </a>
              </div>
              <div className="flex items-center gap-2.5 opacity-80 group/item">
                <Phone size={18} className="transition-opacity duration-250 group-hover/item:opacity-100" />
                <a
                  href="tel:+66"
                  className="inline-block relative group transition-all duration-250 ease-out hover:opacity-100"
                >
                  <span className="relative inline-block transition-transform duration-250 ease-out group-hover:translate-x-1">
                    {t.footer.phoneLabel}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-background/50 group-hover:w-full transition-all duration-250 ease-out" />
                  </span>
                </a>
              </div>
              <div className="flex items-center gap-2.5 opacity-80 group/item">
                <Mail size={18} className="transition-opacity duration-250 group-hover/item:opacity-100" />
                <a
                  href="mailto:"
                  className="inline-block relative group transition-all duration-250 ease-out hover:opacity-100"
                >
                  <span className="relative inline-block transition-transform duration-250 ease-out group-hover:translate-x-1">
                    {t.footer.emailLabel}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-background/50 group-hover:w-full transition-all duration-250 ease-out" />
                  </span>
                </a>
              </div>
              <p className="text-xs opacity-60 mt-5 pt-4 border-t border-background/10 leading-relaxed">
                Thai & English support • Fast response
              </p>
            </div>
          </div>
        </div>

        {/* Micro CTA */}
        <div className="text-center mb-12">
          <a
            href="#"
            className="inline-block text-sm opacity-70 hover:opacity-100 transition-all duration-250 ease-out relative group"
          >
            <span className="relative inline-block transition-transform duration-250 ease-out group-hover:translate-x-0.5">
              Ready to elevate your digital presence?
              <span className="absolute bottom-0 left-0 w-0 h-px bg-background/50 group-hover:w-full transition-all duration-250 ease-out" />
            </span>
          </a>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 text-xs opacity-60">
            <p className="leading-relaxed">{t.footer.copyright}</p>
            <p className="leading-relaxed">{t.footer.operatedBy}</p>
            <div className="flex gap-5">
              <a
                href="#"
                className="inline-block relative group transition-all duration-250 ease-out hover:opacity-100"
              >
                <span className="relative inline-block transition-transform duration-250 ease-out group-hover:translate-x-1">
                  {t.footer.policies.privacy}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-background/50 group-hover:w-full transition-all duration-250 ease-out" />
                </span>
              </a>
              <a
                href="#"
                className="inline-block relative group transition-all duration-250 ease-out hover:opacity-100"
              >
                <span className="relative inline-block transition-transform duration-250 ease-out group-hover:translate-x-1">
                  {t.footer.policies.terms}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-background/50 group-hover:w-full transition-all duration-250 ease-out" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
