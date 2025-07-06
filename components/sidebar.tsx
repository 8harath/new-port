"use client"

import { Home, Code, FolderOpen, Award, GraduationCap, Globe, Mail, ChevronLeft, ChevronRight, FileText, Layers, MessageCircle } from "lucide-react"
import Image from "next/image"

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  collapsed: boolean
  toggleSidebar: () => void
}

export default function Sidebar({ activeSection, setActiveSection, collapsed, toggleSidebar }: SidebarProps) {  const navItems = [
    { id: "home", label: "Home", icon: <Home className="w-5 h-5" /> },
    { id: "projects", label: "Projects", icon: <Layers className="w-5 h-5" /> },
    { id: "certifications", label: "Certifications", icon: <Award className="w-5 h-5" /> },
    { id: "education", label: "Edu & Exp", icon: <GraduationCap className="w-5 h-5" /> },
    { id: "chat", label: "Chat", icon: <MessageCircle className="w-5 h-5" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
  ]

  return (    <aside
      className={`hidden md:flex bg-gray-100 border-r-2 border-gray-800 h-screen sticky top-0 transition-all duration-300 flex-col relative ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Subtle expandable indicator for collapsed state */}
      {collapsed && (
        <>
          {/* Breathing border effect to indicate interactivity */}
          <div className="absolute -right-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary/40 to-transparent animate-pulse" />
          
          {/* Subtle dots indicator */}
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1">
            <div className="w-1 h-1 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
            <div className="w-1 h-1 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
            <div className="w-1 h-1 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '400ms' }} />
          </div>
          
          {/* Hover area for expansion */}
          <div 
            className="absolute -right-4 top-0 bottom-0 w-8 cursor-pointer group z-10"
            onClick={toggleSidebar}
            aria-label="Expand sidebar"
            title="Click to expand sidebar"
          >
            {/* Visual feedback on hover */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-16 bg-accent/0 group-hover:bg-accent/60 transition-all duration-300 rounded-l-full" />
          </div>
        </>
      )}      <div className="p-4 border-b-2 border-gray-400 flex justify-between items-center relative">
        {collapsed && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-amber-100/30 pointer-events-none" />
        )}
        <Image
          src="/android-chrome-192x192.png"
          alt="Logo"
          width={32}
          height={32}
          className={`transition-all duration-300 ${collapsed ? 'hover:scale-110' : ''}`}
        />
        {!collapsed && (
          <button
            onClick={toggleSidebar}
            className="retro-button p-1 group"
            aria-label="Collapse sidebar"
            title="Click to collapse sidebar"
          >
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          </button>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 px-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`w-full text-left retro-button flex items-center group relative ${
                  activeSection === item.id ? "bg-amber-200" : ""
                } ${collapsed ? "justify-center" : "justify-start"}`}
                aria-label={item.label}
                title={collapsed ? item.label : undefined}
              >
                <span className="flex-shrink-0 transition-transform group-hover:scale-110">{item.icon}</span>
                {!collapsed && <span className="ml-2 transition-all group-hover:translate-x-1">{item.label}</span>}
                
                {/* Tooltip for collapsed state */}
                {collapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20 pointer-events-none">
                    {item.label}
                  </div>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
