'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

import { Header } from '@/components/Header'

export default function NotFound() {
    const { t } = useLanguage()

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow flex flex-col items-center justify-center text-center px-6 pt-20">
                <div className="mb-8 opacity-90 relative group">
                    <svg
                        className="w-32 h-32 text-gray-200 dark:text-slate-700"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h5v5h5v11H6z" />
                    </svg>
                    <div className="absolute -bottom-2 -right-2 bg-paper dark:bg-slate-900 rounded-full p-1">
                        <svg
                            className="w-12 h-12 text-red-500 animate-bounce"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                </div>

                <h1 className="font-serif text-6xl font-bold text-academic-blue dark:text-blue-400 mb-2">
                    404
                </h1>
                <h2 className="font-sans text-xl font-semibold text-gray-900 dark:text-white mb-6">
                    {t('title_404')}
                </h2>

                <div className="bg-gray-900 text-gray-300 font-mono text-sm p-4 rounded-lg shadow-inner text-left max-w-md w-full mb-8 overflow-x-auto border border-gray-700">
                    <p>
                        <span className="text-green-400">user@matheus:~$</span> cd /website/page-requested
                    </p>
                    <p className="text-red-400">bash: cd: /website/page-requested: No such file or directory</p>
                    <p>
                        <span className="text-green-400">user@matheus:~$</span>{' '}
                        <span className="animate-pulse">_</span>
                    </p>
                </div>

                <p className="text-text-light dark:text-gray-400 max-w-lg mb-10">{t('text_404')}</p>

                <Link
                    href="/"
                    className="bg-academic-blue dark:bg-blue-600 text-white px-8 py-3 rounded hover:bg-[#152a4d] dark:hover:bg-blue-700 transition duration-300 font-medium shadow-lg hover:shadow-xl inline-flex items-center"
                >
                    {t('btn_return')}
                </Link>
            </main>

            <footer className="bg-paper dark:bg-slate-900 border-t border-gray-200 dark:border-gray-700 py-8 transition-colors duration-300">
                <div className="max-w-6xl mx-auto px-6 text-center text-xs text-gray-500 dark:text-gray-400">
                    {t('footer_copyright')}
                </div>
            </footer>
        </div>
    )
}
