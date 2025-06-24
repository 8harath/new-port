"use client"

import { useState, useEffect } from "react"
import Sidebar from "@/components/sidebar"
import MainContent from "@/components/main-content"
import LoadingScreen from "@/components/loading-screen"
import SEOOptimizer from "@/components/seo-optimizer"
import AdvancedSEO from "@/components/advanced-seo"
import GoogleSEOBooster from "@/components/google-seo-booster"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true)

  useEffect(() => {
    // Check if this is the first visit in this session
    const hasVisited = sessionStorage.getItem("hasVisited")

    if (!hasVisited) {
      // Show loading screen for 2 seconds on first visit
      const timer = setTimeout(() => {
        setIsLoading(false)
        sessionStorage.setItem("hasVisited", "true")
      }, 2000)

      return () => clearTimeout(timer)
    } else {
      setIsLoading(false)
    }

    // Check sidebar state from localStorage
    const savedSidebarState = localStorage.getItem("sidebarCollapsed")
    if (savedSidebarState !== null) {
      setSidebarCollapsed(savedSidebarState === "true")
    } else {
      // If no saved state, set to collapsed (true) and save it
      localStorage.setItem("sidebarCollapsed", "true")
    }
  }, [])

  const toggleSidebar = () => {
    const newState = !sidebarCollapsed
    setSidebarCollapsed(newState)
    localStorage.setItem("sidebarCollapsed", String(newState))
  }

  if (isLoading) {
    return <LoadingScreen />
  }  return (
    <>
      <AdvancedSEO page="home" />
      <GoogleSEOBooster activeSection={activeSection} />
      <SEOOptimizer
        title="Bharath K - AI Researcher & Software Developer"
        description="Bharath K - AI Researcher, Software Developer, and Computer Science student at Jain University. Expert in AI, LLMs, AGI, Machine Learning, and ethical AI development. View projects, research, and achievements."
        keywords={[
          "8harath",
          "Bharath K", 
          "AI Researcher",
          "Software Developer",
          "Computer Science",
          "AI",
          "LLM",
          "AGI",
          "Machine Learning",
          "Jain University",
          "Bangalore",
          "Artificial Intelligence",
          "Portfolio",
          "Software Development",
          "Web Development",
          "Full Stack Developer",
          "AI Projects",
          "Research",
          "Technology",
          "Innovation",
          "Deep Learning",
          "Neural Networks",
          "Python",
          "JavaScript",
          "React",
          "Next.js",
          "Data Science",
          "Ethical AI",
          "Telugu LLM",
          "Diffusion Models"
        ]}
        canonical="https://8harath.me"
        ogImage="/og-image.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Bharath K Portfolio",
          "description": "Bharath K - AI Researcher, Software Developer, and Computer Science student at Jain University. Expert in AI, LLMs, AGI, and ethical AI development.",
          "url": "https://8harath.me",
          "mainEntity": {
            "@type": "Person",
            "name": "8harath",
            "alternateName": "Bharath K",
            "jobTitle": "AI Researcher & Software Developer",
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "Jain University"
            },
            "knowsAbout": [
              "Artificial Intelligence",
              "Machine Learning",
              "Large Language Models",
              "LLMs",
              "AGI",
              "Software Development",
              "AI Research"
            ]
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://8harath.me"
              }
            ]
          }
        }}
      />
      
      <div className="flex min-h-screen">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          collapsed={sidebarCollapsed}
          toggleSidebar={toggleSidebar}
        />
        <MainContent
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          sidebarCollapsed={sidebarCollapsed}
        />
      </div>
    </>
  )
}
