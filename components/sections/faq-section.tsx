'use client'

import { useState, KeyboardEvent } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)
  const { t } = useLanguage()
  const faqs = t.faq.items

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleToggle(index)
    }
  }

  return (
    <section className="py-20 bg-background thai-pattern relative overflow-hidden" aria-labelledby="faq-title">
      {/* Fade overlay for diamond pattern */}
      <div className="absolute inset-0 bg-background/60 z-[1]" />
      
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary opacity-3 rounded-full blur-3xl z-[2]" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 id="faq-title" className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.faq.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3" role="list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const itemId = `faq-item-${index}`
            const contentId = `faq-content-${index}`
            
            return (
              <Card 
                key={index}
                role="listitem"
                className={`
                  border transition-all duration-500 ease-in-out cursor-pointer animate-fade-in-up
                  backdrop-blur-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-secondary/50 focus-within:ring-offset-2
                  ${isOpen 
                    ? 'border-secondary/50 shadow-xl shadow-secondary/10 translate-y-0 scale-[1.01]' 
                    : 'border-border/60 hover:border-secondary/35 scale-100'
                  }
                  hover:translate-y-[-2px] hover:shadow-md hover:shadow-secondary/8
                  group relative
                `}
                style={{
                  animationDelay: `${index * 0.05}s`,
                  background: isOpen
                    ? 'linear-gradient(to bottom right, oklch(0.99 0.005 70), oklch(1 0 0), oklch(0.98 0.01 65))'
                    : 'linear-gradient(to bottom right, oklch(0.99 0.003 70), oklch(1 0 0))',
                }}
                onClick={() => handleToggle(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                tabIndex={0}
                aria-expanded={isOpen}
                aria-controls={contentId}
                id={itemId}
              >
                {/* Soft inner glow for active state */}
                {isOpen && (
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-secondary/5 via-transparent to-transparent pointer-events-none transition-opacity duration-500" />
                )}
                
                {/* Light border highlight for active state */}
                {isOpen && (
                  <div className="absolute inset-0 rounded-lg border border-secondary/20 pointer-events-none transition-opacity duration-500" />
                )}

                <CardHeader className="pb-3 relative">
                  {/* Subtle accent line for open state */}
                  {isOpen && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary/70 to-secondary/40 rounded-r-full transition-opacity duration-500" />
                  )}
                  <div className="flex items-center justify-between gap-4 pl-4">
                    <CardTitle 
                      className={`
                        font-serif text-lg md:text-xl font-semibold leading-snug
                        transition-colors duration-300
                        ${isOpen 
                          ? 'text-foreground/95' 
                          : 'text-foreground/85 group-hover:text-foreground/95'
                        }
                      `}
                    >
                      {faq.question}
                    </CardTitle>
                    <ChevronDown 
                      className={`
                        w-5 h-5 flex-shrink-0 transition-all duration-500 ease-in-out
                        ${isOpen 
                          ? 'rotate-180 text-secondary' 
                          : 'text-secondary/60 group-hover:text-secondary/80'
                        }
                      `}
                      aria-hidden="true"
                    />
                  </div>
                </CardHeader>
                <div 
                  id={contentId}
                  role="region"
                  aria-labelledby={itemId}
                  className={`
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${isOpen 
                      ? 'max-h-96 opacity-100 translate-y-0' 
                      : 'max-h-0 opacity-0 -translate-y-2'
                    }
                  `}
                >
                  <CardContent className="pt-0 pb-5 pl-8 pr-6">
                    <p className="text-muted-foreground/90 text-base leading-[1.75] tracking-tight">
                      {faq.answer}
                    </p>
                  </CardContent>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Subtle CTA */}
        <div className="mt-12 pt-8 text-center animate-fade-in-up border-t border-border/40">
          <p className="text-muted-foreground mb-4 text-base">
            {t.faq.ctaQuestion}
          </p>
          <div className="relative inline-block">
            {/* Subtle radial glow behind button */}
            <div className="absolute inset-0 bg-secondary/20 rounded-lg blur-xl -z-10 animate-pulse-slow" />
            {/* Soft gradient background for CTA */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-secondary/3 rounded-lg -z-10" />
            <Button 
              className="
                bg-secondary hover:bg-secondary/90 text-secondary-foreground 
                h-11 px-8 text-base font-medium rounded-lg
                transition-all duration-300 relative z-0
                hover:shadow-lg hover:shadow-secondary/20
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 focus-visible:ring-offset-2
              "
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              aria-label={`${t.faq.ctaButton} - ${t.faq.trustLine}`}
            >
              {t.faq.ctaButton}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground/70 mt-3 font-normal">
            {t.faq.trustLine}
          </p>
        </div>
      </div>
    </section>
  )
}
