import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { LanguageProvider } from '@/contexts/LanguageContext'

// Optimize font loading with next/font
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Matheus Lôbo | Dev',
  description: 'Engenheiro e Especialista em formatação LaTeX, gráficos vetoriais (TikZ/Python) e automação de relatórios. Soluções para acadêmicos e empresas.',
  keywords: 'LaTeX, TikZ, Python, Automação, Gráficos Científicos, Formatação ABNT, Matheus Lôbo',
  authors: [{ name: 'Matheus Lôbo' }],
  openGraph: {
    type: 'website',
    url: 'https://matheuslobo.com/',
    title: 'Matheus Lôbo | Engenharia & Dados',
    description: 'Especialista em formatação LaTeX, gráficos vetoriais e automação de relatórios. Transforme seus dados em impacto.',
    images: [
      {
        url: 'https://thematheusls.github.io/thematheusls/assets/profile-pic2.png',
        alt: 'Matheus Lôbo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matheus Lôbo | Engenharia & Dados',
    description: 'Especialista em formatação LaTeX, gráficos vetoriais e automação de relatórios.',
    images: ['https://thematheusls.github.io/thematheusls/assets/profile-pic2.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent flash of unstyled content for theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && systemPrefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0BXV8JXT7G"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0BXV8JXT7G');
            `,
          }}
        />
      </head>
      <body className="bg-paper text-text-dark font-sans antialiased selection:bg-academic-blue selection:text-white dark:bg-slate-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
