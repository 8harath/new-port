"use client"

import { useState, useEffect } from "react"
import Sidebar from "@/components/sidebar"
import MainContent from "@/components/main-content"
import LoadingScreen from "@/components/loading-screen"
import SEOOptimizer from "@/components/seo-optimizer"
import AdvancedSEO from "@/components/advanced-seo"
import GoogleSEOBooster from "@/components/google-seo-booster"
import ChatOverlay from '../components/ChatOverlay'
import Home from '../components/sections/home'
import ChatSection from '../components/sections/chat'

export default function Page() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true)
  const [chatOpen, setChatOpen] = useState(true)

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
    <div className="relative min-h-screen">
      <ChatSection />
      <Home />
    </div>
  )
}
