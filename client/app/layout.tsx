import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500'],
})

export const metadata: Metadata = {
  title: 'the_z0ne',
  description: 'thez0ne.xyz',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: './favicon.ico',
  },
  openGraph: {
    title: 'Anik Patel',
    description: 'Welcome to my Portfolio Website',
    url: 'https://thez0ne.xyz',
    siteName: 'the_z0ne',
    images: [
      {

        url: 'https://thez0ne.xyz/logo.png',
        width: 100,
        height: 100,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  generator: 'Next.js',
  applicationName: 'thez0ne',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'thez0ne', 'z0ne', 'the', 'anik', 'patel', 'portfolio'],
  authors: [{ name: 'Anik', url: 'https://thez0ne.xyz' }],
  colorScheme: 'dark',
  creator: 'Anik Patel',
  publisher: 'Anik Patel',
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}
