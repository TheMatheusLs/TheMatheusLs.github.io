'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { ThemeToggle } from './ThemeToggle'
import { LanguageSwitch } from './LanguageSwitch'

export function Header() {
    const { t } = useLanguage()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setMobileMenuOpen(false)
    }

    return (
        <header className="fixed w-full top-0 z-50 bg-paper/95 dark:bg-slate-900/95 backdrop-blur border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
                <Link
                    href="#"
                    className="font-serif text-2xl font-bold tracking-tight text-academic-blue dark:text-blue-400"
                >
                    Matheus Lôbo<span className="text-gray-400">.</span>
                </Link>

                <div className="flex items-center gap-4 md:gap-6">
                    <nav className="hidden md:flex space-x-8 text-sm font-medium">
                        <Link
                            href="#servicos"
                            className="hover:text-academic-blue dark:hover:text-blue-400 transition-colors"
                        >
                            {t('menu_services')}
                        </Link>
                        <Link
                            href="#ferramentas"
                            className="hover:text-academic-blue dark:hover:text-blue-400 transition-colors"
                        >
                            {t('menu_tools')}
                        </Link>
                        <Link
                            href="/em-breve"
                            className="hover:text-academic-blue dark:hover:text-blue-400 transition-colors"
                        >
                            {t('menu_blog')}
                        </Link>
                        <Link
                            href="#fale-comigo"
                            className="hover:text-academic-blue dark:hover:text-blue-400 transition-colors"
                        >
                            {t('menu_contact')}
                        </Link>
                    </nav>

                    <div className="flex items-center space-x-4 border-l border-gray-300 dark:border-gray-700 pl-4">
                        <ThemeToggle />
                        <LanguageSwitch />
                    </div>

                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
                        aria-label="Toggle mobile menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`${mobileMenuOpen ? 'block' : 'hidden'
                    } md:hidden bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 shadow-sm`}
            >
                <nav className="flex flex-col space-y-4 text-center">
                    <Link
                        href="#servicos"
                        onClick={closeMobileMenu}
                        className="block py-2 text-gray-600 dark:text-gray-300 hover:text-academic-blue"
                    >
                        {t('menu_services')}
                    </Link>
                    <Link
                        href="#ferramentas"
                        onClick={closeMobileMenu}
                        className="block py-2 text-gray-600 dark:text-gray-300 hover:text-academic-blue"
                    >
                        {t('menu_tools')}
                    </Link>
                    <Link
                        href="/em-breve"
                        onClick={closeMobileMenu}
                        className="block py-2 text-gray-600 dark:text-gray-300 hover:text-academic-blue"
                    >
                        {t('menu_blog')}
                    </Link>
                    <Link
                        href="#fale-comigo"
                        onClick={closeMobileMenu}
                        className="block py-2 text-gray-600 dark:text-gray-300 hover:text-academic-blue"
                    >
                        {t('menu_contact')}
                    </Link>
                </nav>
            </div>
        </header>
    )
}
