'use client'

import { MessageCircle, Phone, Mail } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <span className="font-serif text-sm font-bold text-foreground">B</span>
              </div>
              <span className="font-serif text-lg font-bold">Bangkok Boost</span>
            </div>
            <p className="text-sm opacity-80">
              {t.footer.tagline}
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold">{t.footer.servicesTitle}</h3>
            <div className="space-y-2 text-sm opacity-80">
              {t.footer.services.map(service => (
                <p key={service}><a href="#" className="hover:text-secondary transition">{service}</a></p>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold">{t.footer.companyTitle}</h3>
            <div className="space-y-2 text-sm opacity-80">
              {t.footer.company.map(item => (
                <p key={item}><a href="#" className="hover:text-secondary transition">{item}</a></p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold">{t.footer.contactTitle}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
                <MessageCircle size={18} />
                <a href="#" className="hover:text-secondary transition">{t.footer.lineLabel}</a>
              </div>
              <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
                <Phone size={18} />
                <a href="tel:+66" className="hover:text-secondary transition">{t.footer.phoneLabel}</a>
              </div>
              <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
                <Mail size={18} />
                <a href="mailto:" className="hover:text-secondary transition">{t.footer.emailLabel}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
            <p>{t.footer.copyright}</p>
            <p>{t.footer.operatedBy}</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition">{t.footer.policies.privacy}</a>
              <a href="#" className="hover:text-secondary transition">{t.footer.policies.terms}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
