import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pabrax - Full Stack Developer & AI Specialist',
  description: 'Desarrollador Full Stack especializado en Inteligencia Artificial, sistemas RAG, automatizaciones inteligentes y APIs RESTful. Experto en Python, Node.js, React y tecnologías modernas.',
  keywords: ['Desarrollador Full Stack', 'Inteligencia Artificial', 'IA', 'RAG', 'Python', 'Node.js', 'React', 'APIs RESTful'],
  authors: [{ name: 'Pabrax' }],
  creator: 'Pabrax',
  openGraph: {
    title: 'Pabrax - Full Stack Developer & AI Specialist',
    description: 'Desarrollador Full Stack especializado en Inteligencia Artificial y automatizaciones inteligentes',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pabrax - Fullstack Developer & IA Specialist',
    description: 'Desarrollador Fullstack especializado en IA y automatizaciones inteligentes',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('pabrax-theme') === 'dark' || (!localStorage.getItem('pabrax-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
