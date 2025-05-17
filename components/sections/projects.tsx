"use client"

import { useState } from "react"
import { Github, Info } from "lucide-react"
import Modal from "@/components/ui/modal"

export default function Projects() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const projects = [
    {
      id: "online-voting",
      title: "Online Voting System",
      image: "/placeholder.svg?height=200&width=400",
      description:
        "A secure and intuitive web application developed to enable digital voting in a university setting. The system supports user registration, authentication, and vote casting, with each vote encrypted prior to storage to ensure confidentiality and integrity. Built with SQLite as the backend database, the platform includes candidate profile management and implements robust access control mechanisms to prevent duplicate or unauthorized voting—ensuring a transparent and fair electoral process.",
      stack: ["Python", "Flask", "SQLite", "HTML/CSS", "JavaScript"],
      github: "https://github.com/yourusername/online-voting-system",
    },
    {
      id: "student-evaluation",
      title: "Automated Student Evaluation Portal",
      image: "/placeholder.svg?height=200&width=400",
      description:
        "A web-based assessment platform designed to automate and streamline the student evaluation process. Faculty members can upload questions, marking schemes, and key answers, while students submit their responses directly through the interface. The system automatically evaluates the submissions by comparing them against the provided keys, assigning scores based on predefined benchmarks. It also compiles total marks and generates rank lists, enabling consistent, objective, and efficient academic evaluation.",
      stack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
      github: "https://github.com/yourusername/student-evaluation-portal",
    },
    {
      id: "webpage-summarizer",
      title: "Webpage Summarizer Extension",
      image: "/placeholder.svg?height=200&width=400",
      description:
        "A browser extension powered by the Gemini API that enables real-time summarization and contextual question answering for any active web page. Users can generate summaries in different formats and word limits, and interact with the extension to extract answers directly from the page content. Operated locally using a user-provided Gemini API key, the extension ensures data privacy without relying on external servers, offering a flexible, responsive, and private browsing assistant.",
      stack: ["JavaScript", "HTML/CSS", "Chrome Extension API", "Gemini API"],
      github: "https://github.com/yourusername/webpage-summarizer",
    },
    {
      id: "image-recognition",
      title: "Image Recognition Interface",
      image: "/placeholder.svg?height=200&width=400",
      description:
        "A web application that allows users to upload images and receive accurate, AI-generated classifications or descriptive insights. The interface is built with a focus on smooth transitions, responsiveness, and user experience. Leveraging Gemini's image analysis capabilities, the application provides fast, reliable results entirely within the browser, making it a convenient tool for lightweight image recognition and analysis tasks.",
      stack: ["React", "Tailwind CSS", "Gemini API", "Firebase"],
      github: "https://github.com/yourusername/image-recognition-interface",
    },
    {
      id: "resume-analyzer",
      title: "Resume Analyzer Using LLM",
      image: "/placeholder.svg?height=200&width=400",
      description:
        "A resume optimization platform that uses a large language model (LLM) to evaluate resumes for specific job roles and experience levels. Users can upload their resumes and select a target domain, after which the system analyzes the content and provides structured feedback. This includes ATS (Applicant Tracking System) compatibility tips, section-wise improvement suggestions, and missing keyword alerts—helping users refine their resumes to match industry standards and increase job market competitiveness.",
      stack: ["Python", "Flask", "LangChain", "OpenAI API", "React"],
      github: "https://github.com/yourusername/resume-analyzer",
    },
    {
      id: "shortcut-generator",
      title: "Custom Shortcut Generator",
      image: "/placeholder.svg?height=200&width=400",
      description:
        'A productivity-enhancing Chrome extension that enables users to create and manage up to 50 personalized typing shortcuts. Common inputs like email addresses, physical locations, or social links can be mapped to quick commands (e.g., typing "/addr" to expand into a saved address). Featuring a clean and responsive interface, the extension is designed to reduce repetitive typing and streamline workflows—especially useful for form filling and frequent text inputs.',
      stack: ["JavaScript", "HTML/CSS", "Chrome Extension API", "LocalStorage"],
      github: "https://github.com/yourusername/custom-shortcut-generator",
    },
    {
      id: "futuristic-landing",
      title: "Landing Page for a Futuristic Company",
      image: "/placeholder.svg?height=200&width=400",
      description:
        "A conceptual landing page developed for an imagined company operating a decade into the future. The page blends modern UI/UX practices with futuristic design elements, integrating AI tools, automation cues, and modular web components. Focused on delivering a clean, high-impact digital presence, the landing page reflects themes of innovation, technological progress, and brand clarity—serving as a showcase of forward-thinking digital design.",
      stack: ["Next.js", "Three.js", "GSAP", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/yourusername/futuristic-landing-page",
    },
  ]

  const openModal = (id: string) => {
    setActiveModal(id)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  return (
    <section>
      <h2 className="section-header">PROJECTS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="card flex flex-col h-full">
            <div className="mb-3 overflow-hidden border border-gray-800">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="font-bold text-xl mb-2">{project.title}</h3>
            <div className="mt-auto pt-3">
              <button
                onClick={() => openModal(project.id)}
                className="retro-button flex items-center text-sm w-full justify-center"
              >
                <Info className="w-4 h-4 mr-1" />
                More Information
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modals */}
      {projects.map((project) => (
        <Modal key={project.id} isOpen={activeModal === project.id} onClose={closeModal} title={project.title}>
          <div className="space-y-4">
            <div className="card">
              <h3 className="font-bold text-xl mb-2">Description</h3>
              <p>{project.description}</p>
            </div>

            <div className="card">
              <h3 className="font-bold text-xl mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-amber-100 border border-amber-600 px-2 py-1 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <a
                href={project.github}
                className="retro-button flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </a>
            </div>
          </div>
        </Modal>
      ))}
    </section>
  )
}
