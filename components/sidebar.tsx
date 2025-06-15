"use client"

import { Home, Code, Briefcase, Award, GraduationCap, Globe, Mail, ChevronLeft, ChevronRight } from "lucide-react"

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  collapsed: boolean
  toggleSidebar: () => void
}

export default function Sidebar({ activeSection, setActiveSection, collapsed, toggleSidebar }: SidebarProps) {
  const navItems = [
    { id: "home", label: "Home", icon: <Home className="w-5 h-5" /> },
    { id: "projects", label: "Projects", icon: <Briefcase className="w-5 h-5" /> },
    { id: "certifications", label: "Certifications", icon: <Award className="w-5 h-5" /> },
    { id: "education", label: "Edu & Exp", icon: <GraduationCap className="w-5 h-5" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
  ]

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
          className="retro-button p-1"
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
                onClick={() => setActiveSection(item.id)}
                className={`w-full text-left retro-button flex items-center ${
                  activeSection === item.id ? "bg-amber-200" : ""
                } ${collapsed ? "justify-center" : "justify-start"}`}
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
