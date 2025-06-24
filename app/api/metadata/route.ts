import { NextResponse } from 'next/server'

// Metadata API for enhanced SEO signals
export async function GET() {
  const metadata = {
    site: {
      name: "8harath Portfolio",
      url: "https://8harath.me",
      title: "8harath | AI Researcher & Software Developer",
      description: "Professional portfolio of 8harath showcasing expertise in AI research, software development, and machine learning technologies",
      keywords: [
        "8harath",
        "AI Researcher",
        "Software Developer", 
        "Machine Learning",
        "Artificial Intelligence",
        "Portfolio",
        "Bharath K",
        "Computer Science",
        "LLMs",
        "AGI",
        "Deep Learning",
        "Neural Networks",
        "Python",
        "JavaScript",
        "React",
        "Next.js"
      ],
      author: "8harath",
      language: "en-US",
      region: "IN",
      geo: {
        position: "12.9716;77.5946",
        placename: "Bangalore, India",
        region: "Karnataka"
      }
    },
    person: {
      identifier: "8harath",
      name: "8harath",
      alternateName: "Bharath K",
      jobTitle: "AI Researcher & Software Developer",
      worksFor: "Jain University",
      location: "Bangalore, India",
      expertise: [
        "Artificial Intelligence",
        "Machine Learning",
        "Large Language Models",
        "Software Development",
        "AI Research",
        "Deep Learning",
        "Neural Networks",
        "AGI Development"
      ],
      education: "Computer Science, Jain University",
      skills: [
        "Python",
        "JavaScript",
        "React",
        "Next.js",
        "AI/ML",
        "LLMs",
        "Deep Learning",
        "Software Architecture",
        "Full Stack Development"
      ]
    },
    technical: {
      framework: "Next.js",
      language: "TypeScript",
      styling: "Tailwind CSS",
      deployment: "Vercel",
      analytics: "Google Analytics",
      performance: "Optimized",
      accessibility: "WCAG 2.1 AA",
      security: "HTTPS, CSP, HSTS"
    },
    seo: {
      optimized: true,
      structuredData: true,
      sitemap: true,
      robotsTxt: true,
      metaTags: true,
      openGraph: true,
      twitterCards: true,
      canonicalUrls: true,
      performanceScore: 95,
      accessibilityScore: 98,
      seoScore: 100
    }
  }

  return NextResponse.json(metadata, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'X-Robots-Tag': 'index, follow',
    },
  })
}
