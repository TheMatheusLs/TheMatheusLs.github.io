'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export function Footer() {
    const { t } = useLanguage()
    const [copyFeedback, setCopyFeedback] = useState(false)
    const [copyButtonText, setCopyButtonText] = useState(t('btn_copy'))

    const copyPix = () => {
        const pixKey = 'pix_em_breve@matheuslobo.com'
        navigator.clipboard.writeText(pixKey)
        setCopyFeedback(true)
        setCopyButtonText(t('msg_copied').replace('!', ''))

        setTimeout(() => {
            setCopyFeedback(false)
            setCopyButtonText(t('btn_copy'))
        }, 3000)
    }

    return (
        <footer className="bg-gray-100 dark:bg-slate-800 border-t border-gray-200 dark:border-gray-700 py-16 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <Image
                                src="/assets/profile-pic2.png"
                                alt="Matheus Lôbo"
                                width={64}
                                height={64}
                                className="rounded-full object-cover border-2 border-white dark:border-gray-600 shadow-md"
                                priority
                            />
                            <div>
                                <h4 className="font-serif text-2xl font-bold text-gray-900 dark:text-white leading-none">
                                    Matheus Lôbo
                                </h4>
                                <span className="text-xs text-academic-blue dark:text-blue-400 font-semibold tracking-wider uppercase">
                                    {t('role_title')}
                                </span>
                            </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{t('footer_bio')}</p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="https://www.linkedin.com/in/matheus-lobo-dos-santos/"
                                target="_blank"
                                className="flex items-center px-4 py-2 bg-[#0077b5] text-white rounded hover:bg-[#006097] transition shadow-sm"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                LinkedIn
                            </Link>
                            <Link
                                href="http://lattes.cnpq.br/"
                                target="_blank"
                                className="flex items-center px-4 py-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-50 dark:hover:bg-slate-600 transition shadow-sm"
                            >
                                <svg
                                    className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                                <span>{t('btn_lattes')}</span>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                        <h5 className="font-bold text-gray-900 dark:text-white mb-2 text-center">
                            {t('support_title')}
                        </h5>
                        <p className="text-sm text-gray-500 dark:text-gray-300 mb-4 text-center">{t('support_desc')}</p>
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <div className="bg-gray-200 dark:bg-slate-600 w-24 h-24 flex-shrink-0 flex items-center justify-center rounded text-xs text-gray-500 dark:text-gray-300 text-center px-1">
                                [QR Code]
                            </div>
                            <div className="flex-grow w-full">
                                <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                                    {t('label_pix')}
                                </label>
                                <div className="flex mt-1">
                                    <input
                                        type="text"
                                        value="pix_em_breve@matheuslobo.com"
                                        id="pix-key"
                                        readOnly
                                        className="w-full bg-gray-50 dark:bg-slate-600 border border-gray-300 dark:border-gray-500 text-gray-600 dark:text-gray-200 text-sm rounded-l focus:ring-academic-blue focus:border-academic-blue block p-2.5"
                                    />
                                    <button
                                        onClick={copyPix}
                                        className={`${copyFeedback ? 'bg-green-600' : 'bg-academic-blue hover:bg-blue-800'
                                            } text-white font-medium rounded-r text-sm px-4 py-2.5 text-center items-center flex transition`}
                                        id="copy-btn"
                                    >
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                            />
                                        </svg>
                                        <span>{copyButtonText}</span>
                                    </button>
                                </div>
                                {copyFeedback && (
                                    <p className="text-xs text-green-600 dark:text-green-400 mt-2 font-medium">
                                        {t('msg_copied')}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 text-center text-xs text-gray-500 dark:text-gray-400">
                    <span>{t('footer_copyright')}</span>
                    <span className="mx-2 hidden sm:inline">•</span> <br className="sm:hidden" />
                    <a
                        href="mailto:matheuslobo.eng@gmail.com"
                        className="hover:text-academic-blue dark:hover:text-blue-400 transition font-medium"
                    >
                        matheuslobo.eng@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    )
}
