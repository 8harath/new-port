import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://8harath.me'),
  title: {
    default: '8harath | Bharath K - AI Researcher & Software Developer',
    template: '%s | 8harath - Bharath K'
  },
  description: '8harath (Bharath K) - AI Researcher, Software Developer, and Computer Science student at Jain University. Expert in AI, LLMs, AGI, Machine Learning, and ethical AI development. View projects, research, and achievements.',
  keywords: [
    '8harath',
    'Bharath K',
    'AI Researcher',
    'Software Developer',
    'Computer Science',
    'AI',
    'LLM',
    'AGI',
    'Machine Learning',
    'Jain University',
    'Bangalore',
    'Artificial Intelligence',
    'Portfolio',
    'Software Development',
    'Web Development',
    'Full Stack Developer',
    'AI Projects',
    'Research',
    'Technology',
    'Innovation',
    'Deep Learning',
    'Neural Networks',
    'Python',
    'JavaScript',
    'React',
    'Next.js',
    'Data Science',
    'Ethical AI',
    'Telugu LLM',
    'Diffusion Models'
  ],
  authors: [{ name: '8harath', url: 'https://8harath.me' }],
  creator: '8harath',
  publisher: '8harath',
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
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://8harath.me',
    siteName: '8harath Portfolio',
    title: '8harath | Bharath K - AI Researcher & Software Developer',
    description: '8harath (Bharath K) - AI Researcher, Software Developer, and Computer Science student at Jain University. Expert in AI, LLMs, AGI, and ethical AI development. View projects, research, and achievements.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '8harath - Bharath K | AI Researcher & Software Developer Portfolio',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@8harath_k',
    creator: '@8harath_k',
    title: '8harath | Bharath K - AI Researcher & Software Developer',
    description: '8harath (Bharath K) - AI Researcher, Software Developer, and Computer Science student at Jain University. Expert in AI, LLMs, AGI, and ethical AI development.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://8harath.me',
    languages: {
      'en-US': 'https://8harath.me',
    },
  },
  verification: {
    google: 'your-google-site-verification', // Add your Google Search Console verification code
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
  },
  category: 'technology',
  classification: 'Portfolio',
  other: {
    'theme-color': '#000000',
    'msapplication-TileColor': '#000000',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': '8harath',
    'application-name': '8harath Portfolio',
    'mobile-web-app-capable': 'yes',
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
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/android-chrome-192x192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/android-chrome-512x512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://github.com" />
        <link rel="preconnect" href="https://www.linkedin.com" />
        <link rel="preconnect" href="https://twitter.com" />
        
        {/* DNS Prefetch for better performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//www.linkedin.com" />
        <link rel="dns-prefetch" href="//twitter.com" />
        
        {/* SEO Structured Data for Person and Website */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "8harath",
          "alternateName": "Bharath K",
          "givenName": "Bharath",
          "familyName": "K",
          "url": "https://8harath.me/",
          "sameAs": [
            "https://github.com/8harath",
            "https://www.linkedin.com/in/8harath/",
            "https://twitter.com/8harath_k",
            "https://8harath.me"
          ],
          "jobTitle": "AI Researcher & Software Developer",
          "worksFor": {
            "@type": "Organization",
            "name": "Jain University"
          },
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
            "Large Language Models",
            "LLMs",
            "AGI",
            "Web Development",
            "Software Development",
            "AI Research",
            "Ethical AI",
            "Full Stack Development",
            "Python",
            "JavaScript",
            "React",
            "Next.js",
            "Deep Learning",
            "Neural Networks",
            "Diffusion Models",
            "Computer Science"
          ],
          "description": "8harath (Bharath K) - AI Researcher, Software Developer, and Computer Science student specializing in AI, LLMs, and AGI development at Jain University.",
          "image": "https://8harath.me/og-image.jpg",
          "award": [
            "Computer Science Undergraduate",
            "AI Researcher",
            "Software Developer",
            "R&D Club Member"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bangalore",
            "addressCountry": "IN"
          },
          "nationality": "Indian",
          "knowsLanguage": ["English", "Telugu"],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "AI Researcher",
            "description": "Researching and developing AI systems, LLMs, and AGI technologies"
          }
        }` }} />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "8harath Portfolio",
          "url": "https://8harath.me/",
          "description": "8harath - Personal portfolio website showcasing expertise in AI, Machine Learning, and Software Development. View projects, research, and achievements of Bharath K.",
          "author": {
            "@type": "Person",
            "name": "8harath",
            "alternateName": "Bharath K"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://8harath.me/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "keywords": "8harath, Bharath K, AI Researcher, Software Developer, Computer Science, AI, LLM, AGI, Machine Learning, Portfolio",
          "publisher": {
            "@type": "Person",
            "name": "8harath"
          },
          "mainEntity": {
            "@type": "Person",
            "name": "8harath",
            "alternateName": "Bharath K"
          }
        }` }} />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "8harath Portfolio",
          "url": "https://8harath.me",
          "logo": "https://8harath.me/android-chrome-512x512.png",
          "description": "Personal portfolio and professional website of 8harath (Bharath K) - AI Researcher and Software Developer",
          "founder": {
            "@type": "Person",
            "name": "8harath",
            "alternateName": "Bharath K"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "url": "https://8harath.me/contact"
          }
        }` }} />
      </head>
      <body className={`${inter.className} pb-16 md:pb-0`}>
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
