import type { Metadata, Viewport } from 'next'
import { Inter_Tight } from 'next/font/google'
import './globals.css'

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter-tight',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HeyMariner — Coming Soon | Your Maritime Companion',
  description:
    'Your Maritime Companion. Maritime news, learning, regulations, safety updates and AI-powered support for seafarers worldwide.',
  keywords: [
    'maritime',
    'seafarer',
    'maritime learning',
    'maritime safety',
    'maritime news',
    'maritime regulations',
    'maritime AI',
    'shipping',
    'cadet',
    'officer',
  ],
  authors: [{ name: 'HeyMariner' }],
  creator: 'HeyMariner',
  publisher: 'HeyMariner',
  metadataBase: new URL('https://heymariner.com'),
  openGraph: {
    type: 'website',
    url: 'https://heymariner.com',
    title: 'HeyMariner — Coming Soon',
    description:
      'A smarter way for seafarers and maritime professionals to learn, stay informed and navigate with confidence.',
    siteName: 'HeyMariner',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HeyMariner — Coming Soon',
    description:
      'A smarter way for seafarers and maritime professionals to learn, stay informed and navigate with confidence.',
    creator: '@heymariner',
  },
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
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#06264D',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={interTight.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'HeyMariner',
              url: 'https://heymariner.com',
              description:
                'AI-powered maritime knowledge platform for seafarers and maritime professionals.',
              foundingDate: '2025',
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'contact@heymariner.com',
                contactType: 'customer support',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
