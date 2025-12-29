import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/components/language-provider'
import { Analytics } from '@vercel/analytics/react'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
})
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Bangkok Boost Studio - Digital Growth & Automation for Thai Businesses',
  description: 'Transform your Thai business with automation, Google Business optimization, and social media management. Free consultation available.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/11.png',
        type: 'image/png',
      },
      {
        url: '/11.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/11.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: '/11.png',
    shortcut: '/11.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
