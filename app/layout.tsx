import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '8harath | Bharath K - CS Undergraduate & AI Enthusiast',
  description: '8harath - Official portfolio of Bharath K, Computer Science undergraduate at Jain University, Bangalore. Specializing in AI, LLMs, AGI, and ethical AI development.',
  keywords: ['8harath', 'Bharath K', 'Computer Science', 'AI', 'LLM', 'AGI', 'Jain University', 'Bangalore', 'Machine Learning', 'Artificial Intelligence', 'Portfolio', 'Software Development', 'Web Development', 'Full Stack Developer'],
  authors: [{ name: '8harath' }],
  creator: '8harath',
  publisher: '8harath',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: '8harath | Bharath K - CS Undergraduate & AI Enthusiast',
    description: '8harath - Official portfolio of Bharath K, Computer Science undergraduate at Jain University, Bangalore. Specializing in AI, LLMs, and AGI development.',
    type: 'website',
    locale: 'en_US',
    siteName: '8harath Portfolio',
    url: 'https://8harath.me',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '8harath Portfolio Preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '8harath | Bharath K - CS Undergraduate & AI Enthusiast',
    description: '8harath - Official portfolio of Bharath K, Computer Science undergraduate at Jain University, Bangalore. Specializing in AI, LLMs, and AGI development.',
    creator: '@8harath_k',
    images: ['/og-image.jpg']
  },
  alternates: {
    canonical: 'https://8harath.me'
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
          "jobTitle": "Computer Science Undergraduate",
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
          "knowsAbout": ["Artificial Intelligence", "Machine Learning", "LLMs", "AGI", "Web Development", "Software Development"],
          "description": "8harath - Official portfolio of Bharath K, Computer Science undergraduate and AI enthusiast.",
          "image": "https://8harath.me/og-image.jpg"
        }` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "8harath Portfolio",
          "url": "https://8harath.me/",
          "description": "8harath - Personal portfolio website showcasing projects and skills in AI, Machine Learning, and Software Development",
          "author": {
            "@type": "Person",
            "name": "8harath"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://8harath.me/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
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
