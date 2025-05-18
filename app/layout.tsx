import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bharath K (8harath) | CS Undergraduate & AI Enthusiast',
  description: 'Official portfolio of Bharath K (8harath), Computer Science undergraduate at Jain University, Bangalore. Specializing in AI, LLMs, AGI, and ethical AI development.',
  keywords: ['Bharath K', '8harath', 'Computer Science', 'AI', 'LLM', 'AGI', 'Jain University', 'Bangalore', 'Machine Learning', 'Artificial Intelligence', 'Portfolio'],
  authors: [{ name: 'Bharath K' }],
  openGraph: {
    title: 'Bharath K (8harath) | CS Undergraduate & AI Enthusiast',
    description: 'Official portfolio of Bharath K (8harath), Computer Science undergraduate at Jain University, Bangalore. Specializing in AI, LLMs, and AGI development.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bharath K (8harath) | CS Undergraduate & AI Enthusiast',
    description: 'Official portfolio of Bharath K (8harath), Computer Science undergraduate at Jain University, Bangalore. Specializing in AI, LLMs, and AGI development.',
  },
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
        {/* SEO Structured Data for Person and Website */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Bharath K",
          "alternateName": "8harath",
          "url": "https://8harath.me/",
          "sameAs": [
            "https://github.com/8harath",
            "https://www.linkedin.com/in/8harath/",
            "https://twitter.com/8harath_k"
          ],
          "jobTitle": "Computer Science Undergraduate",
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Jain University"
          },
          "description": "Official portfolio of Bharath K (8harath), Computer Science undergraduate and AI enthusiast."
        }` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Bharath K Portfolio",
          "url": "https://8harath.me/",
          "author": {
            "@type": "Person",
            "name": "Bharath K"
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
