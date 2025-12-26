'use client'

import { Card, CardContent } from '@/components/ui/card'
import { MessageCircle, Zap, CheckCircle, Bell } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { useEffect, useRef, useState } from 'react'

const stepIcons = [MessageCircle, Zap, CheckCircle, Bell]

export default function WorkflowSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeSteps, setActiveSteps] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate steps sequentially
            stepRefs.current.forEach((stepRef, index) => {
              if (stepRef) {
                setTimeout(() => {
                  setActiveSteps((prev) => [...prev, index])
                }, index * 200) // 200ms delay between each step
              }
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30 thai-pattern relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary opacity-3 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.workflow.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.workflow.subtitle}
          </p>
        </div>

        {/* Workflow Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 md:mb-24 overflow-x-auto pb-4">
          {t.workflow.steps.map((step, index) => {
            const IconComponent = stepIcons[index % stepIcons.length]
            // Emphasize steps 2 and 3 (automation and auto-reply) with subtle hierarchy
            const isEmphasized = index === 1 || index === 2
            const isActive = activeSteps.includes(index)
            
            // Different animation styles for each step
            const getAnimationClass = () => {
              if (!isActive) return 'opacity-0 translate-y-5'
              switch (index) {
                case 0: // Step 1: Fade in
                  return 'opacity-100 translate-y-0 animate-fade-in-step'
                case 1: // Step 2: Slide up with glow
                  return 'opacity-100 translate-y-0 animate-slide-up-glow'
                case 2: // Step 3: Slide up with pulse
                  return 'opacity-100 translate-y-0 animate-slide-up-pulse'
                case 3: // Step 4: Slide up and lock in
                  return 'opacity-100 translate-y-0 animate-slide-up-lock'
                default:
                  return 'opacity-100 translate-y-0'
              }
            }
            
            return (
              <div 
                key={index} 
                ref={(el) => { stepRefs.current[index] = el }}
                className={`flex items-center flex-shrink-0 transition-all duration-[600ms] ease-out ${getAnimationClass()}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Card className={`bg-gradient-to-br from-card via-card to-muted/6 transition-all duration-300 hover:scale-105 ${
                  isActive && isEmphasized
                    ? 'border-2 border-secondary/60 shadow-xl shadow-secondary/20'
                    : isActive
                    ? 'border-2 border-secondary/40 shadow-lg shadow-secondary/10'
                    : isEmphasized
                    ? 'border-2 border-secondary/40 shadow-lg shadow-secondary/10 hover:border-secondary/60 hover:shadow-xl hover:shadow-secondary/15'
                    : 'border border-border/90 shadow-md hover:border-secondary/30 hover:shadow-lg'
                } ${isActive ? 'step-active' : ''}`}>
                  <CardContent className={`flex flex-col items-center ${isEmphasized ? 'p-8' : 'p-7'}`}>
                    <div className={`${isEmphasized ? 'w-20 h-20 mb-5' : 'w-16 h-16 mb-4'} bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-secondary/30 hover:to-secondary/20 shadow-sm ${
                      isActive && (index === 1 || index === 2) ? 'animate-icon-pulse' : ''
                    }`}>
                      <IconComponent className={`${isEmphasized ? 'w-10 h-10' : 'w-8 h-8'} text-secondary transition-transform duration-300 ${
                        isActive ? 'scale-110' : 'scale-100'
                      }`} />
                    </div>
                    <h3 className={`font-bold text-foreground text-center mb-2 transition-colors duration-300 ${isEmphasized ? 'text-lg' : 'text-base'} ${
                      isActive ? 'text-secondary' : ''
                    }`}>{step.label}</h3>
                    <p className={`text-muted-foreground text-center leading-relaxed transition-opacity duration-300 ${isEmphasized ? 'text-sm' : 'text-xs'} ${
                      isActive ? 'opacity-100' : 'opacity-70'
                    }`}>{step.description}</p>
                  </CardContent>
                </Card>
                {index < t.workflow.steps.length - 1 && (
                  <div className={`text-secondary/60 hidden md:block mx-3 flex-shrink-0 text-3xl font-bold transition-all duration-300 arrow-connector ${
                    activeSteps.includes(index) && activeSteps.includes(index + 1) ? 'arrow-draw' : 'opacity-30'
                  }`}>→</div>
                )}
              </div>
            )
          })}
        </div>

        <div className="relative">
          <p className="text-foreground/90 mb-6 font-semibold text-lg md:text-xl text-center">{t.workflow.diagramTitle}</p>
          
          {/* Enhanced container with gradient background and better integration */}
          <div className="relative bg-gradient-to-br from-secondary/8 via-secondary/4 to-muted/20 rounded-2xl border-2 border-secondary/20 shadow-2xl shadow-secondary/10 overflow-hidden">
            {/* Subtle pattern overlay */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--secondary)) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}
            />
            
            {/* Glowing accent borders */}
            <div className="absolute inset-0 rounded-2xl border border-secondary/10 pointer-events-none" />
            <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
            <div className="absolute bottom-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
            
            {/* Image container - tighter padding, better fit */}
            <div className="relative p-4 md:p-8 lg:p-12 flex items-center justify-center min-h-[400px] md:min-h-[500px]">
              <div className="relative w-full max-w-4xl">
                <img 
                  src="/5.png" 
                  alt={t.workflow.diagramCaption}
                  className="w-full h-auto object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.12)] brightness-[0.97] saturate-[0.98] contrast-[1.02]"
                  style={{
                    filter: 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.12)) brightness(0.97) saturate(0.98) contrast(1.02)'
                  }}
                />
                
                {/* Subtle inner glow effect */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-secondary/5 via-transparent to-transparent" />
              </div>
            </div>
            
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
