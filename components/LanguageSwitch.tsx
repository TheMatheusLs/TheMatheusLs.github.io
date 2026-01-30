'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'

export function LanguageSwitch() {
    const { language, setLanguage } = useLanguage()

    return (
        <div className="flex items-center space-x-2">
            <button
                onClick={() => setLanguage('pt')}
                className={`hover:opacity-75 transition ${language === 'pt' ? 'opacity-100' : 'opacity-60'
                    }`}
                title="Português"
                aria-label="Mudar para Português"
            >
                <Image
                    src="https://flagcdn.com/w40/br.png"
                    width={24}
                    height={16}
                    alt="Brasil"
                    unoptimized
                />
            </button>
            <button
                onClick={() => setLanguage('en')}
                className={`hover:opacity-75 transition ${language === 'en' ? 'opacity-100' : 'opacity-60'
                    }`}
                title="English"
                aria-label="Switch to English"
            >
                <Image
                    src="https://flagcdn.com/w40/us.png"
                    width={24}
                    height={16}
                    alt="USA"
                    unoptimized
                />
            </button>
        </div>
    )
}
