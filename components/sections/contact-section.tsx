'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '@/components/language-provider'
import { CheckCircle, Loader2, ArrowRight } from 'lucide-react'

type FormErrors = {
  name?: string
  phone?: string
  businessType?: string
}

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessType: '',
    challenges: '',
    preferredContact: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [formState, setFormState] = useState<FormState>('idle')
  const { t, locale } = useLanguage()

  // Get page source and URL for automation
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Store initial page info
    }
  }, [])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = t.contact.validationErrors.nameRequired
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.contact.validationErrors.phoneRequired
    }

    if (!formData.businessType) {
      newErrors.businessType = t.contact.validationErrors.businessTypeRequired
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!validateForm()) {
      return
    }

    setFormState('loading')

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_MAKE_COM_WEBHOOK_URL

      if (!webhookUrl) {
        console.error('Make.com webhook URL is not configured')
        setFormState('error')
        return
      }

      // Prepare data for Make.com with clean field names
      const submissionData = {
        // User-provided fields
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        businessType: formData.businessType,
        challenges: formData.challenges.trim(),
        preferredContact: formData.preferredContact || 'none',
        
        // Hidden automation fields
        source: typeof window !== 'undefined' ? document.referrer || 'direct' : 'direct',
        page: typeof window !== 'undefined' ? window.location.pathname : '/',
        language: locale,
        timestamp: new Date().toISOString(),
        submittedAt: new Date().toISOString(),
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      setFormState('success')
    } catch (error) {
      console.error('Error submitting form:', error)
      setFormState('error')
    }
  }

  const getFieldErrorClass = (fieldName: keyof FormErrors) => {
    return errors[fieldName]
      ? 'border-red-500 focus:ring-red-500/50'
      : 'border-border focus:ring-secondary/50'
  }

  return (
    <section id="contact" className="py-20 bg-muted/30 thai-pattern">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Form */}
        <Card className="border-secondary/30 shadow-lg overflow-hidden">
          {/* Subtle warm gradient background */}
          <div className="bg-gradient-to-br from-amber-50/50 via-yellow-50/30 to-amber-50/50 dark:from-amber-950/10 dark:via-yellow-950/5 dark:to-amber-950/10">
            <CardHeader className="pb-3">
              <CardTitle className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">
                {t.contact.cardTitle}
              </CardTitle>
              <p className="text-sm text-muted-foreground font-normal">
                {t.contact.cardSubtitle}
              </p>
            </CardHeader>
            <CardContent className="pt-4">
              {formState === 'success' ? (
                // Success Message
                <div className="text-center py-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-muted-foreground">
                    {t.contact.successMessage}
                  </p>
                </div>
              ) : (
                // Form
                <form onSubmit={handleSubmit} className="space-y-5">
                  {formState === 'error' && (
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <p className="text-sm text-red-800 dark:text-red-200">
                        {t.contact.errorMessage}
                      </p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        {t.contact.nameLabel}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 border rounded-lg bg-background/80 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-colors ${getFieldErrorClass('name')}`}
                        placeholder={t.contact.namePlaceholder}
                        disabled={formState === 'loading'}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        {t.contact.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 border rounded-lg bg-background/80 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-colors ${getFieldErrorClass('phone')}`}
                        placeholder={t.contact.phonePlaceholder}
                        disabled={formState === 'loading'}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      {t.contact.businessTypeLabel}
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 border rounded-lg bg-background/80 text-foreground focus:outline-none focus:ring-2 transition-colors ${getFieldErrorClass('businessType')}`}
                      disabled={formState === 'loading'}
                    >
                      {t.contact.businessOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.businessType && (
                      <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                        {errors.businessType}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      {t.contact.challengeLabel}
                      <span className="text-muted-foreground font-normal ml-1 text-xs">(optional)</span>
                    </label>
                    <textarea
                      name="challenges"
                      value={formData.challenges}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2.5 border border-border rounded-lg bg-background/80 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none transition-colors"
                      placeholder={t.contact.challengePlaceholder}
                      disabled={formState === 'loading'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      {t.contact.preferredContactLabel}
                      <span className="text-muted-foreground font-normal ml-1 text-xs">(optional)</span>
                    </label>
                    <select
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-border rounded-lg bg-background/80 text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-colors"
                      disabled={formState === 'loading'}
                    >
                      {t.contact.preferredContactOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground h-12 font-semibold rounded-lg gold-glow disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 group"
                      disabled={formState === 'loading'}
                    >
                      {formState === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{t.contact.submitLoading}</span>
                        </>
                      ) : (
                        <>
                          <span>{t.contact.submit}</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                    
                    {/* Trust microcopy */}
                    <p className="text-xs text-muted-foreground text-center mt-3 leading-relaxed">
                      {t.contact.trustMicrocopy}
                    </p>
                  </div>
                </form>
              )}
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  )
}
