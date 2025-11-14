'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/components/language-provider'

export default function BeforeAfterSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useLanguage()
  const examples = t.beforeAfter.examples

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % examples.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + examples.length) % examples.length)
  }

  const example = examples[currentIndex]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.beforeAfter.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.beforeAfter.subtitle}
          </p>
        </div>

        {/* Before/After Carousel */}
        <div className="max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Before */}
            <div className="bg-muted/50 rounded-lg border-2 border-border p-8 text-center">
              <p className="text-sm font-semibold text-muted-foreground mb-2 uppercase">{t.beforeAfter.beforeLabel}</p>
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">{example.title}</h3>
              <p className="text-muted-foreground text-sm">{example.before}</p>
              <div className="mt-6 h-40 bg-background rounded border border-border flex items-center justify-center">
                <p className="text-xs text-muted-foreground">{t.beforeAfter.beforePlaceholder}</p>
              </div>
            </div>

            {/* After */}
            <div className="bg-secondary/5 rounded-lg border-2 border-secondary/30 p-8 text-center">
              <p className="text-sm font-semibold text-secondary mb-2 uppercase">{t.beforeAfter.afterLabel}</p>
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">{example.title}</h3>
              <p className="text-secondary font-semibold text-sm">{example.after}</p>
              <div className="mt-6 h-40 bg-secondary/10 rounded border border-secondary/30 flex items-center justify-center">
                <p className="text-xs text-secondary">{t.beforeAfter.afterPlaceholder}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prev}
              className="rounded-full border-secondary/50 hover:border-secondary hover:text-secondary"
            >
              <ChevronLeft size={20} />
            </Button>

            <div className="flex gap-2">
              {examples.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-secondary w-8' : 'bg-border'
                  }`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="icon"
              onClick={next}
              className="rounded-full border-secondary/50 hover:border-secondary hover:text-secondary"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
