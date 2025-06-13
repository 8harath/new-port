"use client"

import { Home, Code, Briefcase, Award, GraduationCap, Globe, Mail, ChevronLeft, ChevronRight, Menu } from "lucide-react"
import { useState, useEffect } from "react"

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  collapsed: boolean
  toggleSidebar: () => void
}

export default function Sidebar({ activeSection, setActiveSection, collapsed, toggleSidebar }: SidebarProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setIsMobileMenuOpen(false)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const navItems = [
    { id: "home", label: "Home", icon: <Home className="w-5 h-5" /> },
    { id: "skills", label: "Skills", icon: <Code className="w-5 h-5" /> },
    { id: "projects", label: "Projects", icon: <Briefcase className="w-5 h-5" /> },
    { id: "certifications", label: "Certifications", icon: <Award className="w-5 h-5" /> },
    { id: "education", label: "Edu & Exp", icon: <GraduationCap className="w-5 h-5" /> },
    { id: "beyond", label: "Beyond Tech", icon: <Globe className="w-5 h-5" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
  ]

  const handleSectionClick = (section: string) => {
    setActiveSection(section)
    if (isMobile) {
      setIsMobileMenuOpen(false)
    }
  }

  if (isMobile) {
    return (
      <>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed bottom-6 right-6 z-50 p-3 bg-gray-100 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 hover:scale-110"
          aria-label="Toggle mobile menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <aside
              className="fixed bottom-6 right-6 w-16 bg-gray-100 rounded-2xl shadow-xl z-50 transform transition-all duration-300 overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-3 border-b border-gray-200 flex justify-center items-center">
                <h2 className="font-bold text-lg">BK</h2>
              </div>

              <nav className="py-2">
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleSectionClick(item.id)}
                        className={`w-full flex justify-center items-center p-3 transition-all duration-200 ${
                          activeSection === item.id 
                            ? "bg-amber-200 text-gray-900 scale-110" 
                            : "text-gray-700 hover:bg-gray-200 hover:scale-105"
                        }`}
                        aria-label={item.label}
                      >
                        {item.icon}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          </div>
        )}
      </>
    )
  }

  return (
    <aside
      className={`bg-gray-100 border-r-2 border-gray-800 h-screen sticky top-0 transition-all duration-300 flex flex-col ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="p-4 border-b-2 border-gray-400 flex justify-between items-center">
        {!collapsed && <h2 className="font-bold">BK</h2>}
        <button
          onClick={toggleSidebar}
          className="retro-button p-1 hover:bg-gray-200 transition-colors"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 px-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleSectionClick(item.id)}
                className={`w-full text-left retro-button flex items-center ${
                  activeSection === item.id ? "bg-amber-200" : ""
                } ${collapsed ? "justify-center" : "justify-start"} hover:bg-gray-200 transition-colors`}
                aria-label={item.label}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {!collapsed && <span className="ml-2">{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
