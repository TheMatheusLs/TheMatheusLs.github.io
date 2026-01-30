'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export function Contact() {
    const { t, language } = useLanguage()
    const [clientName, setClientName] = useState('')
    const [interestSubject, setInterestSubject] = useState('geral')
    const [messagePreview, setMessagePreview] = useState('')

    // Listen for custom events from other sections
    useEffect(() => {
        const handleSetInterest = (e: CustomEvent) => {
            setInterestSubject(e.detail)
            // Focus on name input if not filled
            if (!clientName) {
                const nameInput = document.getElementById('clientName') as HTMLInputElement
                if (nameInput) nameInput.focus()
            }
        }

        window.addEventListener('setContactInterest', handleSetInterest as EventListener)
        return () => {
            window.removeEventListener('setContactInterest', handleSetInterest as EventListener)
        }
    }, [clientName])

    useEffect(() => {
        updateMessage()
    }, [clientName, interestSubject, language])

    const updateMessage = () => {
        const name = clientName.trim() || (language === 'pt' ? '[Seu Nome]' : '[Your Name]')
        let contextText = ''

        if (language === 'pt') {
            if (interestSubject === 'academico')
                contextText = 'Tenho interesse nos serviços de formatação LaTeX e criação de gráficos.'
            else if (interestSubject === 'automacao')
                contextText = 'Gostaria de cotar uma solução de automação de relatórios.'
            else contextText = 'Gostaria de saber mais sobre seus serviços.'
            setMessagePreview(`Olá Matheus, sou ${name} e cheguei aqui pelo seu site. ${contextText}`)
        } else {
            if (interestSubject === 'academico')
                contextText = 'I am interested in LaTeX formatting and graph creation services.'
            else if (interestSubject === 'automacao')
                contextText = 'I would like a quote for a report automation solution.'
            else contextText = 'I would like to know more about your services.'
            setMessagePreview(`Hello Matheus, I am ${name} and I found you through your website. ${contextText}`)
        }
    }

    const sendMessage = (platform: string) => {
        const encodedMsg = encodeURIComponent(messagePreview)
        let url = ''
        const myWhatsapp = '5582998254729'
        const myTelegram = 'thematheusls'
        const myEmail = 'matheuslobo.eng@gmail.com'
        const myInsta = 'thematheusls'

        if (platform === 'whatsapp') url = `https://wa.me/${myWhatsapp}?text=${encodedMsg}`
        else if (platform === 'telegram') url = `https://t.me/${myTelegram}`
        else if (platform === 'email')
            url = `mailto:${myEmail}?subject=${encodeURIComponent(t('email_subject'))}&body=${encodedMsg}`
        else if (platform === 'instagram') url = `https://instagram.com/${myInsta}`

        window.open(url, '_blank')
    }

    return (
        <section
            id="fale-comigo"
            className="py-20 bg-white dark:bg-slate-800 border-t border-gray-100 dark:border-gray-700 transition-colors duration-300"
        >
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {t('contact_title')}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">{t('contact_desc')}</p>
                </div>

                <div className="bg-paper dark:bg-slate-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-300">
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                {t('label_name')}
                            </label>
                            <input
                                type="text"
                                id="clientName"
                                placeholder={t('name_placeholder')}
                                value={clientName}
                                onChange={(e) => setClientName(e.target.value)}
                                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-academic-blue dark:focus:ring-blue-500 focus:border-academic-blue bg-white dark:bg-slate-800 dark:text-white outline-none transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                {t('label_subject')}
                            </label>
                            <select
                                id="interestSubject"
                                value={interestSubject}
                                onChange={(e) => setInterestSubject(e.target.value)}
                                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-academic-blue dark:focus:ring-blue-500 outline-none bg-white dark:bg-slate-800 dark:text-white"
                            >
                                <option value="geral">{t('opt_general')}</option>
                                <option value="academico">{t('opt_academic')}</option>
                                <option value="automacao">{t('opt_automation')}</option>
                            </select>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-4 rounded border border-gray-200 dark:border-gray-600 mb-8">
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2">{t('msg_label')}</label>
                        <p className="text-gray-600 dark:text-gray-300 italic text-sm">{messagePreview}</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <button
                            onClick={() => sendMessage('whatsapp')}
                            className="flex flex-col items-center justify-center p-4 rounded border border-green-500 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30 transition group"
                        >
                            <svg className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            <span className="text-xs font-bold">WhatsApp</span>
                        </button>
                        <button
                            onClick={() => sendMessage('telegram')}
                            className="flex flex-col items-center justify-center p-4 rounded border border-blue-400 text-blue-500 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition group"
                        >
                            <svg className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.306-.346-.108l-6.4 4.02-2.76-.86c-.6-.188-.612-.602.126-.892l10.766-4.154c.498-.19.934.125.75.919z" />
                            </svg>
                            <span className="text-xs font-bold">Telegram</span>
                        </button>
                        <button
                            onClick={() => sendMessage('instagram')}
                            className="flex flex-col items-center justify-center p-4 rounded border border-pink-500 text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/30 transition group"
                        >
                            <svg className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            <span className="text-xs font-bold">Instagram</span>
                        </button>
                        <button
                            onClick={() => sendMessage('email')}
                            className="flex flex-col items-center justify-center p-4 rounded border border-gray-400 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700 transition group"
                        >
                            <svg className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-xs font-bold">E-mail</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
