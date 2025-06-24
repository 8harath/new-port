import { NextResponse } from 'next/server'

// API route for dynamic SEO data - helps search engines understand content structure
export async function GET() {
  const seoData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://8harath.me/#person",
        "name": "8harath",
        "alternateName": ["Bharath K", "Bharath", "8harath"],
        "url": "https://8harath.me/",
        "identifier": "8harath",
        "mainEntityOfPage": "https://8harath.me/",
        "sameAs": [
          "https://github.com/8harath",
          "https://www.linkedin.com/in/8harath/",
          "https://twitter.com/8harath_k"
        ],
        "jobTitle": "AI Researcher & Software Developer",
        "description": "Expert AI Researcher and Software Developer specializing in Large Language Models, AGI, and ethical AI development",
        "hasOccupation": {
          "@type": "Occupation",
          "name": "AI Researcher",
          "occupationLocation": {
            "@type": "Place",
            "name": "Bangalore, India"
          },
          "skills": "Artificial Intelligence, Machine Learning, LLMs, AGI, Software Development",
          "responsibilities": "AI Research, Software Development, Machine Learning Implementation"
        },
        "knowsAbout": [
          "Artificial Intelligence",
          "Machine Learning", 
          "Large Language Models",
          "LLMs",
          "AGI",
          "Deep Learning",
          "Neural Networks",
          "Software Development",
          "Python Programming",
          "JavaScript",
          "React",
          "Next.js",
          "AI Ethics",
          "Computer Science"
        ],
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Jain University",
          "location": "Bangalore, India"
        },
        "nationality": "Indian",
        "knowsLanguage": ["English", "Telugu"],
        "award": [
          "AI Research Excellence",
          "Software Development Expertise",
          "Computer Science Academic Achievement"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://8harath.me/#website",
        "url": "https://8harath.me/",
        "name": "8harath Portfolio",
        "description": "Professional portfolio showcasing AI research, software development projects, and expertise in machine learning technologies",
        "publisher": {
          "@id": "https://8harath.me/#person"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://8harath.me/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },
        "inLanguage": "en-US",
        "copyrightYear": 2024,
        "copyrightHolder": {
          "@id": "https://8harath.me/#person"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://8harath.me/#webpage",
        "url": "https://8harath.me/",
        "name": "8harath | AI Researcher & Software Developer Portfolio",
        "isPartOf": {
          "@id": "https://8harath.me/#website"
        },
        "about": {
          "@id": "https://8harath.me/#person"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://8harath.me/og-image.jpg",
          "contentUrl": "https://8harath.me/og-image.jpg",
          "width": 1200,
          "height": 630,
          "caption": "8harath - AI Researcher & Software Developer Portfolio"
        },
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString(),
        "description": "Comprehensive portfolio showcasing expertise in AI research, software development, and machine learning technologies by 8harath"
      },
      {
        "@type": "Organization",
        "@id": "https://8harath.me/#organization",
        "name": "8harath Portfolio",
        "url": "https://8harath.me/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://8harath.me/android-chrome-512x512.png",
          "contentUrl": "https://8harath.me/android-chrome-512x512.png",
          "width": 512,
          "height": 512,
          "caption": "8harath Logo"
        },
        "founder": {
          "@id": "https://8harath.me/#person"
        },
        "description": "Professional portfolio organization showcasing AI research and software development expertise"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://8harath.me/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://8harath.me/"
          },
          {
            "@type": "ListItem", 
            "position": 2,
            "name": "8harath Portfolio",
            "item": "https://8harath.me/"
          }
        ]
      }
    ]
  }

  return NextResponse.json(seoData, {
    headers: {
      'Content-Type': 'application/ld+json',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
