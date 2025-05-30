"use client"

import { useState, useMemo } from "react"
import { Github, Info, Search } from "lucide-react"
import Modal from "@/components/ui/modal"

export default function Projects() {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "AI/ML", "Web Development", "Extensions", "Full Stack"]

  const projects = [
    {
      id: "online-voting",
      title: "Online Voting System",
      image: "/ovs.png",
      description:
        "A secure and intuitive web application developed to enable digital voting in a university setting. The system supports user registration, authentication, and vote casting, with each vote encrypted prior to storage to ensure confidentiality and integrity. Built with SQLite as the backend database, the platform includes candidate profile management and implements robust access control mechanisms to prevent duplicate or unauthorized voting—ensuring a transparent and fair electoral process.",
      stack: ["Python", "Flask", "SQLite", "HTML/CSS", "JavaScript"],
      github: "https://github.com/yourusername/online-voting-system",
      category: "Full Stack",
      demo: "https://demo-link.com",
      features: [
        "Secure user authentication",
        "Encrypted vote storage",
        "Real-time results",
        "Admin dashboard"
      ]
    },
    {
      id: "student-evaluation",
      title: "Automated Student Evaluation Portal",
      image: "/Automated-student-portal.png",
      description:
        "A web-based assessment platform designed to automate and streamline the student evaluation process. Faculty members can upload questions, marking schemes, and key answers, while students submit their responses directly through the interface. The system automatically evaluates the submissions by comparing them against the provided keys, assigning scores based on predefined benchmarks. It also compiles total marks and generates rank lists, enabling consistent, objective, and efficient academic evaluation.",
      stack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
      github: "https://github.com/8harath/Essay-Evaluation-001",
      category: "Web Development",
      demo: "https://demo-link.com",
      features: [
        "Automated evaluation",
        "Real-time results",
        "Admin dashboard"
      ]
    },
    {
      id: "webpage-summarizer",
      title: "Webpage Summarizer Extension",
      image: "/web-page-sum.png",
      description:
        "A browser extension powered by the Gemini API that enables real-time summarization and contextual question answering for any active web page. Users can generate summaries in different formats and word limits, and interact with the extension to extract answers directly from the page content. Operated locally using a user-provided Gemini API key, the extension ensures data privacy without relying on external servers, offering a flexible, responsive, and private browsing assistant.",
      stack: ["JavaScript", "HTML/CSS", "Chrome Extension API", "Gemini API"],
      github: "https://github.com/yourusername/webpage-summarizer",
      category: "Extensions",
      demo: "https://demo-link.com",
      features: [
        "Real-time summarization",
        "Contextual question answering",
        "Data privacy"
      ]
    },
    {
      id: "image-recognition",
      title: "Image Recognition Interface",
      image: "/image-recognition.png",
      description:
        "A web application that allows users to upload images and receive accurate, AI-generated classifications or descriptive insights. The interface is built with a focus on smooth transitions, responsiveness, and user experience. Leveraging Gemini's image analysis capabilities, the application provides fast, reliable results entirely within the browser, making it a convenient tool for lightweight image recognition and analysis tasks.",
      stack: ["React", "Tailwind CSS", "Gemini API", "Firebase"],
      github: "https://github.com/yourusername/image-recognition-interface",
      category: "AI/ML",
      demo: "https://demo-link.com",
      features: [
        "AI-generated classifications",
        "Descriptive insights",
        "Fast, reliable results"
      ]
    },
    {
      id: "resume-analyzer",
      title: "Resume Analyzer Using LLM",
      image: "/resume-llm.png",
      description:
        "A resume optimization platform that uses a large language model (LLM) to evaluate resumes for specific job roles and experience levels. Users can upload their resumes and select a target domain, after which the system analyzes the content and provides structured feedback. This includes ATS (Applicant Tracking System) compatibility tips, section-wise improvement suggestions, and missing keyword alerts—helping users refine their resumes to match industry standards and increase job market competitiveness.",
      stack: ["Python", "Flask", "LangChain", "OpenAI API", "React"],
      github: "https://github.com/yourusername/resume-analyzer",
      category: "Full Stack",
      demo: "https://demo-link.com",
      features: [
        "ATS compatibility tips",
        "Section-wise improvement suggestions",
        "Missing keyword alerts"
      ]
    },
    {
      id: "car-parking-detection",
      title: "Car Parking Detection System",
      image: "/car-parking.png",
      description:
        "A computer vision project that detects the number of cars parked in a given image and identifies available parking spaces. The system generates a detailed report in CSV format and provides a graphical visualization of the parking lot. Built using a YOLO-based vision model, custom-trained and adjusted for parking lot scenarios.",
      stack: ["Python", "YOLO", "OpenCV", "Pandas", "Matplotlib"],
      github: "https://github.com/yourusername/car-parking-detection",
      category: "AI/ML",
      demo: "https://demo-link.com",
      features: [
        "Detects parked cars in images",
        "Identifies available parking spaces",
        "Exports CSV reports",
        "Graphical visualization of parking lot",
        "Custom YOLO model for parking use case"
      ]
    },
    {
      id: "shortcut-generator",
      title: "Custom Shortcut Generator",
      image: "/shortcut-generater.png",
      description:
        'A productivity-enhancing Chrome extension that enables users to create and manage up to 50 personalized typing shortcuts. Common inputs like email addresses, physical locations, or social links can be mapped to quick commands (e.g., typing "/addr" to expand into a saved address). Featuring a clean and responsive interface, the extension is designed to reduce repetitive typing and streamline workflows—especially useful for form filling and frequent text inputs.',
      stack: ["JavaScript", "HTML/CSS", "Chrome Extension API", "LocalStorage"],
      github: "https://github.com/yourusername/custom-shortcut-generator",
      category: "Extensions",
      demo: "https://demo-link.com",
      features: [
        "Customizable shortcuts",
        "Streamlined workflows",
        "Data privacy"
      ]
    },
  ]

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.stack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const openModal = (id: string) => {
    setActiveModal(id)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  return (
    <section>
      <h2 className="section-header">PROJECTS</h2>

      {/* Search and Filter Section */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-800 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${
                selectedCategory === category
                  ? "bg-amber-500 text-white"
                  : "bg-transparent border border-gray-800 hover:bg-amber-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="card flex flex-col h-full">
            <div className="mb-3 overflow-hidden border border-gray-800 aspect-square">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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
              <h3 className="font-bold text-xl mb-2">Key Features</h3>
              <ul className="list-disc pl-5 space-y-1">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
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

            <div className="flex justify-center gap-4">
              <a
                href={project.github}
                className="retro-button flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  className="retro-button flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </Modal>
      ))}
    </section>
  )
}
