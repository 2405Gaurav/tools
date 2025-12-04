import type { Metadata, Viewport } from 'next'

import './globals.css'

import { GeistSans } from 'geist/font/sans'

import Analytics from '@/components/analytics'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { Toaster } from '@/components/ui/sonner'
import { env } from '@/env'
import { cn } from '@/utils/cn'

type LayoutProps = {
  children: React.ReactNode
}

const MY_NAME = 'Gaurav Thakur'
const SITE_URL =
  env.NEXT_PUBLIC_SITE_URL && env.NEXT_PUBLIC_SITE_URL.trim() !== ''
    ? env.NEXT_PUBLIC_SITE_URL
    : 'https://tools.vercel.app'
const SITE_TITLE = 'Tools'
const SITE_DESCRIPTION =
  'Discover a powerful collection of web tools designed to streamline your workflow and boost productivity. Made by GT.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`
  },
  description: SITE_DESCRIPTION,
  creator: MY_NAME,
  manifest: '/site.webmanifest',
  alternates: {
    canonical: SITE_URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  authors: [{ name: MY_NAME, url: 'https://thegauravthakur.in' }],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_TITLE,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: SITE_DESCRIPTION
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Gaurav',
    creator: '@Gaurav'
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        type: 'image/png',
        sizes: '180x180'
      }
    ]
  }
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark light'
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang='en-US' className={cn(GeistSans.variable, 'dark')}>
      <body className='bg-black text-white antialiased'>
        <Header />
        <main className='relative mx-auto max-w-4xl px-8 py-24'>{children}</main>
        <Toaster />
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

export default Layout
