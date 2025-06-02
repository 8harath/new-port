import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bharath K Portfolio – AI, LLMs, Projects, Certifications, Skills, Contact',
  description: '8harath (Bharath K) – Computer Science undergraduate at Jain University, Bangalore. Explore AI/ML, Generative AI, LLMs, projects, certifications, skills, and contact. Portfolio of 8harath, AI enthusiast and developer.',
  keywords: ['8harath', 'Bharath K', 'Portfolio', 'AI', 'Artificial Intelligence', 'LLM', 'Generative AI', 'Machine Learning', 'Jain University', 'Bangalore', 'Projects', 'Skills', 'Certifications', 'Contact', 'Academic', 'Student', 'Developer', 'Ethical AI', 'AGI', 'R&D Club', 'Python', 'Java', 'TensorFlow', 'OpenCV', 'Blockchain', 'Philosophy', 'Cryptocurrency', 'Web Development', '8harath portfolio', '8harath AI', '8harath projects', '8harath certifications', '8harath contact'],
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
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Bharath K (8harath)" />
        <meta name="keywords" content="8harath, Bharath K, Portfolio, AI, Artificial Intelligence, LLM, Generative AI, Machine Learning, Jain University, Bangalore, Projects, Skills, Certifications, Contact, Academic, Student, Developer, Ethical AI, AGI, R&D Club, Python, Java, TensorFlow, OpenCV, Blockchain, Philosophy, Cryptocurrency, Web Development, 8harath portfolio, 8harath AI, 8harath projects, 8harath certifications, 8harath contact" />
        <meta property="og:title" content="8harath | Bharath K Portfolio – AI, LLMs, Projects, Certifications, Skills, Contact" />
        <meta property="og:description" content="8harath (Bharath K) – Computer Science undergraduate at Jain University, Bangalore. Explore AI/ML, Generative AI, LLMs, projects, certifications, skills, and contact. Portfolio of 8harath, AI enthusiast and developer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://8harath.me/" />
        <meta property="og:image" content="/android-chrome-512x512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="8harath | Bharath K Portfolio – AI, LLMs, Projects, Certifications, Skills, Contact" />
        <meta name="twitter:description" content="8harath (Bharath K) – Computer Science undergraduate at Jain University, Bangalore. Explore AI/ML, Generative AI, LLMs, projects, certifications, skills, and contact. Portfolio of 8harath, AI enthusiast and developer." />
        <meta name="twitter:image" content="/android-chrome-512x512.png" />
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
          "description": "Portfolio of 8harath (Bharath K), Computer Science undergraduate at Jain University, Bangalore. AI, LLMs, projects, certifications, skills, contact."
        }` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "8harath Portfolio",
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
