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
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.workflow.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.workflow.subtitle}
          </p>
        </div>

        {/* Workflow Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 overflow-x-auto pb-4">
          {t.workflow.steps.map((step, index) => {
            const IconComponent = stepIcons[index % stepIcons.length]
            return (
              <div key={index} className="flex items-center flex-shrink-0">
                <Card className="border-secondary/50 hover:border-secondary transition-all hover:shadow-lg hover:shadow-secondary/10 animate-fade-in-up bg-card/60 backdrop-blur" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="w-16 h-16 bg-secondary/20 hover:bg-secondary/30 rounded-full flex items-center justify-center mb-3 transition-all group-hover:scale-110">
                      <IconComponent className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm text-center">{step.label}</h3>
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

        <div className="bg-gradient-to-br from-background/80 to-secondary/5 rounded-lg border-2 border-secondary/30 p-12 text-center backdrop-blur">
          <p className="text-muted-foreground mb-4 font-medium">{t.workflow.diagramTitle}</p>
          <div className="w-full h-64 bg-gradient-to-b from-muted/50 to-background rounded flex items-center justify-center border border-border hover:border-secondary/30 transition-all">
            <div className="text-center">
              <div className="text-4xl mb-2">🔄</div>
              <p className="text-sm text-muted-foreground">{t.workflow.diagramCaption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
