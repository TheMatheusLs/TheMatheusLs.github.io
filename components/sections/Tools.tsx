'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export function Tools() {
    const { t } = useLanguage()

    const scrollToContact = (interestType: string) => {
        const contactSection = document.getElementById('fale-comigo')
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
            window.dispatchEvent(new CustomEvent('setContactInterest', { detail: interestType }))
        }
    }

    return (
        <section id="ferramentas" className="py-20 bg-paper dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    {t('tools_title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
                    {t('tools_desc')}
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition text-left group flex flex-col h-full">
                        <div className="h-12 w-12 bg-blue-50 dark:bg-slate-700 text-academic-blue dark:text-blue-400 rounded flex items-center justify-center mb-4 group-hover:bg-academic-blue group-hover:text-white transition">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                                />
                            </svg>
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Img to Circuitikz</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-grow">
                            {t('card_img_desc')}
                        </p>
                        <Link
                            href="/em-breve"
                            className="text-academic-blue dark:text-blue-400 text-sm font-bold hover:underline"
                        >
                            {t('link_access')}
                        </Link>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition text-left group flex flex-col h-full">
                        <div className="h-12 w-12 bg-green-50 dark:bg-slate-700 text-green-700 dark:text-green-400 rounded flex items-center justify-center mb-4 group-hover:bg-green-700 group-hover:text-white transition">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Tabela to LaTeX</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-grow">
                            {t('card_table_desc')}
                        </p>
                        <Link
                            href="/em-breve"
                            className="text-academic-blue dark:text-blue-400 text-sm font-bold hover:underline"
                        >
                            {t('link_access')}
                        </Link>
                    </div>

                    <div className="bg-academic-blue dark:bg-blue-900 p-8 rounded-lg shadow-sm border border-academic-blue hover:shadow-lg transition text-left flex flex-col h-full relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 rounded-full bg-white opacity-10"></div>
                        <div className="h-12 w-12 bg-white/10 text-white rounded flex items-center justify-center mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                />
                            </svg>
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-white">{t('card_custom_title')}</h3>
                        <p className="text-sm text-blue-100 mb-6 flex-grow">{t('card_custom_desc')}</p>
                        <button
                            onClick={() => scrollToContact('geral')}
                            className="bg-white text-academic-blue text-sm font-bold py-2 px-4 rounded text-center hover:bg-gray-100 transition w-full"
                        >
                            {t('btn_custom')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
