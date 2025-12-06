'use client'

import { Card, CardContent } from '@/components/ui/card'
import { MessageCircle, Zap, CheckCircle, Bell } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const stepIcons = [MessageCircle, Zap, CheckCircle, Bell]

export default function WorkflowSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-muted/30 thai-pattern relative overflow-hidden">
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-16 md:mb-20 overflow-x-auto pb-4">
          {t.workflow.steps.map((step, index) => {
            const IconComponent = stepIcons[index % stepIcons.length]
            // Emphasize steps 2 and 3 (automation and auto-reply) with subtle hierarchy
            const isEmphasized = index === 1 || index === 2
            
            return (
              <div key={index} className="flex items-center flex-shrink-0">
                <Card className={`bg-gradient-to-br from-card via-card to-muted/6 transition-all duration-300 ${
                  isEmphasized
                    ? 'border border-secondary/30 shadow-sm shadow-secondary/5 hover:border-secondary/50 hover:shadow-md hover:shadow-secondary/8'
                    : 'border border-border/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-border hover:shadow-[0_1px_4px_rgba(0,0,0,0.06)]'
                }`}>
                  <CardContent className={`flex flex-col items-center ${isEmphasized ? 'p-7' : 'p-6'}`}>
                    <div className={`${isEmphasized ? 'w-[4.25rem] h-[4.25rem] mb-4' : 'w-16 h-16 mb-3'} bg-secondary/15 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-secondary/25`}>
                      <IconComponent className={`${isEmphasized ? 'w-[2.25rem] h-[2.25rem]' : 'w-8 h-8'} text-secondary/90`} />
                    </div>
                    <h3 className={`font-semibold text-foreground text-center ${isEmphasized ? 'text-base' : 'text-sm'}`}>{step.label}</h3>
                    <p className="text-xs text-muted-foreground text-center mt-1">{step.description}</p>
                  </CardContent>
                </Card>
                {index < t.workflow.steps.length - 1 && (
                  <div className="text-secondary/50 hidden md:block mx-2 flex-shrink-0 text-2xl">→</div>
                )}
              </div>
            )
          })}
        </div>

        <div className="bg-muted/15 rounded-lg border border-border/50 p-10 text-center">
          <p className="text-foreground/80 mb-6 font-medium text-base">{t.workflow.diagramTitle}</p>
          <div className="w-full bg-background rounded flex items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
            <img 
              src="/flow1.png" 
              alt={t.workflow.diagramCaption}
              className="max-w-full h-auto object-contain max-h-[600px] brightness-[0.98] saturate-[0.95]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
