"use client"

import { useEffect } from 'react'

interface SEOOptimizerProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  structuredData?: object
}

export default function SEOOptimizer({
  title = "8harath | Bharath K - AI Researcher & Software Developer",
  description = "8harath (Bharath K) - AI Researcher, Software Developer, and Computer Science student at Jain University. Expert in AI, LLMs, AGI, and ethical AI development.",
  keywords = ["8harath", "Bharath K", "AI Researcher", "Software Developer", "Computer Science", "AI", "LLM", "AGI"],
  canonical = "https://8harath.me",
  ogImage = "/og-image.jpg",
  structuredData
}: SEOOptimizerProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', description)
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.setAttribute('name', 'keywords')
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.setAttribute('content', keywords.join(', '))
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonical)
    
    // Update Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: `https://8harath.me${ogImage}` },
      { property: 'og:url', content: canonical },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: '8harath Portfolio' },
      { property: 'og:locale', content: 'en_US' }
    ]
    
    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`)
      if (!metaTag) {
        metaTag = document.createElement('meta')
        metaTag.setAttribute('property', tag.property)
        document.head.appendChild(metaTag)
      }
      metaTag.setAttribute('content', tag.content)
    })
    
    // Update Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@8harath_k' },
      { name: 'twitter:creator', content: '@8harath_k' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `https://8harath.me${ogImage}` }
    ]
    
    twitterTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`)
      if (!metaTag) {
        metaTag = document.createElement('meta')
        metaTag.setAttribute('name', tag.name)
        document.head.appendChild(metaTag)
      }
      metaTag.setAttribute('content', tag.content)
    })
    
    // Add structured data if provided
    if (structuredData) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }
    
    // Add breadcrumb structured data
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://8harath.me"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": title.replace(' | 8harath - Bharath K', ''),
          "item": canonical
        }
      ]
    }
    
    const breadcrumbScript = document.createElement('script')
    breadcrumbScript.type = 'application/ld+json'
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData)
    document.head.appendChild(breadcrumbScript)
    
  }, [title, description, keywords, canonical, ogImage, structuredData])
  
  return null
}

// Predefined structured data for different sections
export const structuredData = {
  person: {
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
      "https://twitter.com/8harath_k"
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
    "knowsLanguage": ["English", "Telugu"]
  },
  
  website: {
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
    "keywords": "8harath, Bharath K, AI Researcher, Software Developer, Computer Science, AI, LLM, AGI, Machine Learning, Portfolio"
  },
  
  organization: {
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
  }
} 