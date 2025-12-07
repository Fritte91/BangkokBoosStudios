'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { Locale, TranslationSchema } from '@/lib/translations'
import { translations } from '@/lib/translations'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  t: TranslationSchema
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'bangkokboost:locale'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
    if (stored && stored !== locale) {
      setLocaleState(stored)
      document.documentElement.lang = stored
    } else {
      document.documentElement.lang = locale
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale)
  }

  const toggleLocale = () => {
    setLocaleState(prev => (prev === 'en' ? 'th' : 'en'))
  }

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t: translations[locale],
    }),
    [locale]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}





