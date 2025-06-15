"use client"

import { Home, Briefcase, Award, GraduationCap, Mail } from "lucide-react"

interface MobileNavProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function MobileNav({ activeSection, setActiveSection }: MobileNavProps) {
  const navItems = [
    { id: "home", label: "Home", icon: <Home className="w-6 h-6" /> },
    { id: "projects", label: "Projects", icon: <Briefcase className="w-6 h-6" /> },
    { id: "certifications", label: "Certs", icon: <Award className="w-6 h-6" /> },
    { id: "education", label: "Edu", icon: <GraduationCap className="w-6 h-6" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-6 h-6" /> },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-100 border-t-2 border-gray-800 md:hidden">
      <ul className="flex justify-around items-center h-14">
        {navItems.map((item) => (
          <li key={item.id} className="flex-1">
            <button
              onClick={() => setActiveSection(item.id)}
              className={`w-full h-full flex items-center justify-center transition-colors ${
                activeSection === item.id ? "text-amber-600" : "text-gray-600 hover:text-gray-900"
              }`}
              aria-label={item.label}
            >
              {item.icon}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
} 