'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { translations } from '@/locales/translations'

type Language = 'pt' | 'en'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('pt')
    const [mounted, setMounted] = useState(false)

    // Load language preference from localStorage after mount
    useEffect(() => {
        setMounted(true)
        const savedLang = localStorage.getItem('language') as Language | null
        if (savedLang && (savedLang === 'pt' || savedLang === 'en')) {
            setLanguageState(savedLang)
        }
    }, [])

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        if (mounted && typeof window !== 'undefined') {
            localStorage.setItem('language', lang)
            // Update HTML lang attribute
            document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
        }
    }

    const t = (key: string): string => {
        const translationObj = translations[language]
        if (key in translationObj) {
            return translationObj[key as keyof typeof translationObj]
        }
        // Fallback to key if translation not found
        console.warn(`Translation missing for key: ${key} in language: ${language}`)
        return key
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
