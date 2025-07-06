import Home from "@/components/sections/home"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Certifications from "@/components/sections/certifications"
import EducationExperience from "@/components/sections/education-experience"
import BeyondTech from "@/components/sections/beyond-tech"
import Contact from "@/components/sections/contact"
import ChatSection from "@/components/sections/chat"
import MobileNav from "./mobile-nav"

interface MainContentProps {
  activeSection: string
  setActiveSection: (section: string) => void
  sidebarCollapsed: boolean
}

export default function MainContent({ activeSection, setActiveSection, sidebarCollapsed }: MainContentProps) {
  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home setActiveSection={setActiveSection} />
      case "projects":
        return <Projects />
      case "certifications":
        return <Certifications />
      case "education":
        return <EducationExperience />
      case "chat":
        return <ChatSection />
      case "contact":
        return <Contact />
      default:
        return <Home setActiveSection={setActiveSection} />
    }
  }

  return (
    <>
      <main className={`flex-1 px-2 py-4 md:px-8 md:py-8 transition-all duration-300 md:${sidebarCollapsed ? "ml-16" : "ml-0"}`}>
        <div className="w-full md:container md:mx-auto md:max-w-4xl">{renderSection()}</div>
      </main>
      <MobileNav activeSection={activeSection} setActiveSection={setActiveSection} />
    </>
  )
}
