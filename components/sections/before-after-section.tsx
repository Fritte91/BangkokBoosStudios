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
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.beforeAfter.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.beforeAfter.subtitle}
          </p>
        </div>

        {/* Before/After Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Before */}
            <div className="bg-muted/20 rounded-lg border border-border/50 p-6 text-center">
              <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">{t.beforeAfter.beforeLabel}</p>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">{example.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{example.before}</p>
              <div className="mt-5 h-48 bg-background rounded border border-border/50 overflow-hidden">
              </div>
            </div>

            {/* After */}
            <div className="bg-secondary/6 rounded-lg border-2 border-secondary/50 p-8 text-center">
              <p className="text-xs font-semibold text-secondary mb-2 uppercase tracking-wider">{t.beforeAfter.afterLabel}</p>
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">{example.title}</h3>
              <p className="text-secondary/90 font-medium text-sm leading-relaxed">{example.after}</p>
              <div className="mt-6 h-48 bg-background rounded border border-secondary/30 overflow-hidden">
              </div>
              {example.projectUrl && (
                <a
                  href={example.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-xs text-muted-foreground/80 hover:text-foreground/70 transition-colors"
                >
                  View full project →
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prev}
              className="rounded-full border-secondary/50 hover:border-secondary hover:text-secondary transition-colors"
            >
              <ChevronLeft size={20} />
            </Button>

            <div className="flex gap-2.5 items-center">
              {examples.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-secondary w-10' 
                      : 'bg-border/60 w-1.5'
                  }`}
                  aria-label={`Go to example ${index + 1}`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="icon"
              onClick={next}
              className="rounded-full border-secondary/50 hover:border-secondary hover:text-secondary transition-colors"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
