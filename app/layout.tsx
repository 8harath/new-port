import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '8harath | Bharath K - AI Researcher & Software Developer',
  description: '8harath (Bharath K) - AI Researcher, Software Developer, and Computer Science student at Jain University. Expert in AI, LLMs, AGI, and ethical AI development. View projects, research, and achievements.',
  keywords: [
    '8harath',
    'Bharath K',
    'AI Researcher',
    'Software Developer',
    'Computer Science',
    'AI',
    'LLM',
    'AGI',
    'Jain University',
    'Bangalore',
    'Machine Learning',
    'Artificial Intelligence',
    'Portfolio',
    'Software Development',
    'Web Development',
    'Full Stack Developer',
    'AI Projects',
    'Research',
    'Technology',
    'Innovation'
  ],
  authors: [{ name: '8harath', url: 'https://8harath.me' }],
  creator: '8harath',
  publisher: '8harath',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: '8harath | Bharath K - AI Researcher & Software Developer',
    description: '8harath (Bharath K) - AI Researcher, Software Developer, and Computer Science student at Jain University. Expert in AI, LLMs, AGI, and ethical AI development. View projects, research, and achievements.',
    type: 'website',
    locale: 'en_US',
    siteName: '8harath Portfolio',
    url: 'https://8harath.me',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '8harath - AI Researcher & Software Developer Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '8harath | Bharath K - AI Researcher & Software Developer',
    description: '8harath (Bharath K) - AI Researcher, Software Developer, and Computer Science student at Jain University. Expert in AI, LLMs, AGI, and ethical AI development.',
    creator: '@8harath_k',
    images: ['/og-image.jpg']
  },
  alternates: {
    canonical: 'https://8harath.me'
  },
  verification: {
    google: 'your-google-site-verification', // Add your Google Search Console verification code
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/android-chrome-512x512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* SEO Structured Data for Person and Website */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "8harath",
          "alternateName": "Bharath K",
          "url": "https://8harath.me/",
          "sameAs": [
            "https://github.com/8harath",
            "https://www.linkedin.com/in/8harath/",
            "https://twitter.com/8harath_k"
          ],
          "jobTitle": "AI Researcher & Software Developer",
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Jain University",
            "location": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangalore",
                "addressCountry": "IN"
              }
            }
          },
          "knowsAbout": [
            "Artificial Intelligence",
            "Machine Learning",
            "LLMs",
            "AGI",
            "Web Development",
            "Software Development",
            "AI Research",
            "Ethical AI",
            "Full Stack Development"
          ],
          "description": "8harath (Bharath K) - AI Researcher, Software Developer, and Computer Science student specializing in AI, LLMs, and AGI development.",
          "image": "https://8harath.me/og-image.jpg",
          "award": [
            "Computer Science Undergraduate",
            "AI Researcher",
            "Software Developer"
          ]
        }` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "8harath Portfolio",
          "url": "https://8harath.me/",
          "description": "8harath - Personal portfolio website showcasing expertise in AI, Machine Learning, and Software Development. View projects, research, and achievements.",
          "author": {
            "@type": "Person",
            "name": "8harath"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://8harath.me/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "keywords": "8harath, Bharath K, AI Researcher, Software Developer, Computer Science, AI, LLM, AGI"
        }` }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
