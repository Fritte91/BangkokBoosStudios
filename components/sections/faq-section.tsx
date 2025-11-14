'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)
  const { t } = useLanguage()
  const faqs = t.faq.items

  return (
    <section className="py-20 bg-background thai-pattern relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary opacity-3 rounded-full blur-3xl" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.faq.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              className="border-border hover:border-secondary/50 transition-all cursor-pointer animate-fade-in-up bg-card/50 backdrop-blur hover:shadow-lg hover:shadow-secondary/10 group"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-serif text-lg text-foreground group-hover:text-secondary transition-colors">
                    {faq.question}
                  </CardTitle>
                  <ChevronDown 
                    className={`w-5 h-5 text-secondary transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </CardHeader>
              {openIndex === index && (
                <CardContent className="animate-fade-in">
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
