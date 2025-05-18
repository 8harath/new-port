import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bharath | CS Undergraduate & AI Enthusiast',
  description: 'Portfolio of Bharath, a Computer Science undergraduate at Jain University, Bangalore. Specializing in AI, LLMs, and AGI development with a focus on ethical AI implementation.',
  keywords: ['Bharath', 'Computer Science', 'AI', 'LLM', 'AGI', 'Jain University', 'Bangalore', 'Machine Learning', 'Artificial Intelligence', 'Portfolio'],
  authors: [{ name: 'Bharath' }],
  openGraph: {
    title: 'Bharath | CS Undergraduate & AI Enthusiast',
    description: 'Portfolio of Bharath, a Computer Science undergraduate at Jain University, Bangalore. Specializing in AI, LLMs, and AGI development.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bharath | CS Undergraduate & AI Enthusiast',
    description: 'Portfolio of Bharath, a Computer Science undergraduate at Jain University, Bangalore. Specializing in AI, LLMs, and AGI development.',
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
