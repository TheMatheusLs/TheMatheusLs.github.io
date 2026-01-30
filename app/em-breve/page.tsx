'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { ThemeToggle } from '@/components/ThemeToggle'
import { LanguageSwitch } from '@/components/LanguageSwitch'

export default function EmBreve() {
    const { t } = useLanguage()

    return (
        <>
            <header className="fixed w-full top-0 z-50 bg-paper/95 dark:bg-slate-900/95 backdrop-blur border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
                <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
                    <Link
                        href="/"
                        className="font-serif text-2xl font-bold tracking-tight text-academic-blue dark:text-blue-400"
                    >
                        Matheus Lôbo<span className="text-gray-400">.</span>
                    </Link>

                    <div className="flex items-center gap-6">
                        <nav className="hidden md:flex space-x-8 text-sm font-medium">
                            <Link
                                href="/#servicos"
                                className="hover:text-academic-blue dark:hover:text-blue-400 transition-colors"
                            >
                                {t('menu_services')}
                            </Link>
                            <Link
                                href="/#ferramentas"
                                className="hover:text-academic-blue dark:hover:text-blue-400 transition-colors"
                            >
                                {t('menu_tools')}
                            </Link>
                            <Link
                                href="/#blog"
                                className="hover:text-academic-blue dark:hover:text-blue-400 transition-colors"
                            >
                                {t('menu_blog')}
                            </Link>
                            <Link
                                href="/#fale-comigo"
                                className="hover:text-academic-blue dark:hover:text-blue-400 transition-colors"
                            >
                                {t('menu_contact')}
                            </Link>
                        </nav>

                        <div className="flex items-center space-x-4 border-l border-gray-300 dark:border-gray-700 pl-4">
                            <ThemeToggle />
                            <LanguageSwitch />
                        </div>

                        <Link
                            href="/"
                            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none flex items-center"
                        >
                            <span className="text-xs font-semibold mr-1">{t('btn_back')}</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center text-center px-6 pt-20 min-h-screen">
                <div className="relative mb-8">
                    <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900 rounded-full animate-ping opacity-25"></div>
                    <div className="relative bg-white dark:bg-slate-800 p-6 rounded-full shadow-sm border border-gray-100 dark:border-gray-700">
                        <svg
                            className="w-16 h-16 text-academic-blue dark:text-blue-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                        </svg>
                    </div>
                </div>

                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-800 rounded-full text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase mb-4">
                    {t('status_code')}
                </span>

                <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    {t('compiling_title')}
                </h1>

                <p className="text-lg text-text-light dark:text-gray-400 max-w-xl mb-10 leading-relaxed">
                    {t('compiling_desc')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/"
                        className="bg-academic-blue dark:bg-blue-600 text-white px-8 py-3 rounded hover:bg-[#152a4d] dark:hover:bg-blue-700 transition duration-300 font-medium shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                        {t('btn_home')}
                    </Link>
                    <Link
                        href="/#fale-comigo"
                        className="bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-8 py-3 rounded hover:bg-gray-50 dark:hover:bg-slate-700 transition duration-300 font-medium flex items-center justify-center"
                    >
                        {t('btn_urgent')}
                    </Link>
                </div>
            </main>

            <footer className="bg-paper dark:bg-slate-900 border-t border-gray-200 dark:border-gray-700 py-8 transition-colors duration-300">
                <div className="max-w-6xl mx-auto px-6 text-center text-xs text-gray-500 dark:text-gray-400">
                    {t('footer_copyright')}
                </div>
            </footer>
        </>
    )
}
