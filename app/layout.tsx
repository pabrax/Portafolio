import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
// Display face: used only for headings, so body text (the LCP element) keeps Inter.
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['opsz', 'wdth'],
})

const siteUrl = 'https://portafolio-lovat-rho.vercel.app'
const title = 'Pablo Espinosa (pabrax) | Datos, automatización y backend'
const description =
  'Especialista de Data y Producto en Servicios Nutresa. Tableros en Power BI y HTML, ETL con Python y SQL sobre AWS, automatización y APIs con FastAPI.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: ['Python', 'SQL', 'Power BI', 'ETL', 'AWS', 'FastAPI', 'Next.js', 'automatización', 'datos'],
  authors: [{ name: 'Pablo Espinosa', url: 'https://github.com/pabrax' }],
  creator: 'Pablo Espinosa',
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description,
    url: siteUrl,
    type: 'website',
    locale: 'es_CO',
    images: [{ url: '/preview/portafolio_preview.jpeg', alt: 'Vista previa del portafolio de Pablo Espinosa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/preview/portafolio_preview.jpeg'],
  },
  icons: { icon: '/favicon.ico' },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f8fb' },
    { media: '(prefers-color-scheme: dark)', color: '#0c0e1a' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${bricolage.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
