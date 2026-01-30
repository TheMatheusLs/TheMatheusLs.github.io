'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export function Services() {
    const { t } = useLanguage()
    const [slideIndex, setSlideIndex] = useState(0)

    const slides = [
        { src: '/assets/raman.svg', alt: 'Gráfico Raman 3D', caption: t('caption_raman') },
        { src: '/assets/circuito_tikz.svg', alt: 'Circuito Elétrico', caption: t('caption_circuit') },
        { src: '/assets/caminho.svg', alt: 'Fluxograma ML', caption: t('caption_ml') },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [slides.length])

    const nextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }

    const prevSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
    }

    const scrollToContact = (interestType: string) => {
        const contactSection = document.getElementById('fale-comigo')
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
            // Set the interest type via custom event
            window.dispatchEvent(new CustomEvent('setContactInterest', { detail: interestType }))
        }
    }

    return (
        <section id="servicos" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white mb-16 text-center">
                    {t('section_solutions')}
                </h2>

                {/* Academic Services */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="relative bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-100 dark:border-gray-600 shadow-sm overflow-hidden group h-80 order-1">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`${index === slideIndex ? 'flex' : 'hidden'
                                    } fade-anim w-full h-full flex-col items-center justify-center bg-white p-4`}
                            >
                                <div className="w-full h-56 flex items-center justify-center mb-2 relative">
                                    <Image
                                        src={slide.src}
                                        alt={slide.alt}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <p className="text-xs text-gray-500 font-mono">{slide.caption}</p>
                            </div>
                        ))}
                        <button
                            onClick={prevSlide}
                            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow text-gray-600 hover:text-academic-blue"
                            aria-label="Previous slide"
                        >
                            ❮
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow text-gray-600 hover:text-academic-blue"
                            aria-label="Next slide"
                        >
                            ❯
                        </button>
                    </div>

                    <div className="flex flex-col h-full justify-center order-2">
                        <span className="text-academic-blue dark:text-blue-400 font-bold tracking-wider text-xs uppercase mb-2">
                            {t('badge_researchers')}
                        </span>
                        <h3 className="font-serif text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                            {t('title_academic')}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            {t('desc_academic')}
                        </p>
                        <ul className="space-y-3 mb-8 text-gray-600 dark:text-gray-300">
                            <li className="flex items-center text-sm">
                                <svg
                                    className="w-5 h-5 text-academic-blue dark:text-blue-400 mr-3 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{t('list_formatting')}</span>
                            </li>
                            <li className="flex items-center text-sm">
                                <svg
                                    className="w-5 h-5 text-academic-blue dark:text-blue-400 mr-3 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{t('list_vectors')}</span>
                            </li>
                            <li className="flex items-center text-sm">
                                <svg
                                    className="w-5 h-5 text-academic-blue dark:text-blue-400 mr-3 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{t('list_latex')}</span>
                            </li>
                        </ul>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <button
                                onClick={() => scrollToContact('academico')}
                                className="bg-academic-blue dark:bg-blue-600 text-white px-6 py-3 rounded text-center hover:bg-[#152a4d] dark:hover:bg-blue-700 transition shadow-md hover:shadow-lg font-medium flex-1 sm:flex-none"
                            >
                                {t('btn_quote_academic')}
                            </button>
                            <Link
                                href="/em-breve"
                                className="border border-academic-blue dark:border-blue-400 text-academic-blue dark:text-blue-400 px-6 py-3 rounded text-center hover:bg-blue-50 dark:hover:bg-slate-700 transition font-medium flex items-center justify-center flex-1 sm:flex-none group"
                            >
                                <svg
                                    className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                                <span>{t('btn_portfolio')}</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-gray-100 dark:bg-gray-700 my-12 md:hidden"></div>

                {/* Automation Services */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col h-full justify-center order-2 md:order-1">
                        <span className="text-green-700 dark:text-green-400 font-bold tracking-wider text-xs uppercase mb-2">
                            {t('badge_companies')}
                        </span>
                        <h3 className="font-serif text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                            {t('title_automation')}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            {t('desc_automation')}
                        </p>
                        <ul className="space-y-3 mb-8 text-gray-600 dark:text-gray-300">
                            <li className="flex items-center text-sm">
                                <svg
                                    className="w-5 h-5 text-green-700 dark:text-green-400 mr-3 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>{t('list_bulk')}</span>
                            </li>
                            <li className="flex items-center text-sm">
                                <svg
                                    className="w-5 h-5 text-green-700 dark:text-green-400 mr-3 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>{t('list_layouts')}</span>
                            </li>
                            <li className="flex items-center text-sm">
                                <svg
                                    className="w-5 h-5 text-green-700 dark:text-green-400 mr-3 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>{t('list_integration')}</span>
                            </li>
                        </ul>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <button
                                onClick={() => scrollToContact('automacao')}
                                className="bg-green-700 dark:bg-green-600 text-white px-6 py-3 rounded text-center hover:bg-green-800 transition shadow-md hover:shadow-lg font-medium flex-1 sm:flex-none"
                            >
                                {t('btn_quote_automation')}
                            </button>
                            <Link
                                href="/em-breve"
                                className="border border-green-700 dark:border-green-400 text-green-700 dark:text-green-400 px-6 py-3 rounded text-center hover:bg-green-50 dark:hover:bg-slate-700 transition font-medium flex items-center justify-center flex-1 sm:flex-none group"
                            >
                                <svg
                                    className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                    />
                                </svg>
                                <span>{t('btn_examples')}</span>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 h-80 flex items-center justify-center order-1 md:order-2 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full opacity-50"></div>
                        <div className="flex items-center space-x-4 relative z-10">
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-gray-100 rounded border border-gray-300 flex items-center justify-center text-gray-500 mb-2">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                                        />
                                    </svg>
                                </div>
                                <span className="text-xs font-mono text-gray-400">dados.csv</span>
                            </div>
                            <div className="text-green-600 animate-pulse">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="relative">
                                    <div className="w-14 h-16 bg-academic-blue rounded border border-blue-800 absolute -top-2 -right-2 opacity-50"></div>
                                    <div className="w-14 h-16 bg-academic-blue rounded border border-blue-800 absolute -top-1 -right-1 opacity-75"></div>
                                    <div className="w-14 h-16 bg-academic-blue rounded border border-blue-800 flex items-center justify-center text-white relative z-10">
                                        <span className="font-serif font-bold text-lg">PDF</span>
                                    </div>
                                </div>
                                <span className="text-xs font-mono text-gray-400 mt-3">{t('icon_reports')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
