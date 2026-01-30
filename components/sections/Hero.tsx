'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export function Hero() {
    const { t } = useLanguage()

    return (
        <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto">
            <span className="mb-4 px-3 py-1 bg-gray-100 dark:bg-slate-800 rounded-full text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase">
                {t('hero_badge')}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Transformando dados complexos em{' '}
                <span className="text-academic-blue dark:text-blue-400 italic">
                    visualizações precisas
                </span>
                .
            </h1>
            <p className="text-lg md:text-xl text-text-light dark:text-gray-400 max-w-2xl mb-10 leading-relaxed">
                {t('hero_desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="#servicos"
                    className="bg-academic-blue dark:bg-blue-600 text-white px-8 py-3 rounded hover:bg-[#152a4d] dark:hover:bg-blue-700 transition duration-300 font-medium shadow-lg hover:shadow-xl"
                >
                    {t('btn_services')}
                </Link>
                <Link
                    href="#ferramentas"
                    className="bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-8 py-3 rounded hover:bg-gray-50 dark:hover:bg-slate-700 transition duration-300 font-medium flex items-center justify-center"
                >
                    {t('btn_tools')}
                </Link>
            </div>
        </section>
    )
}
