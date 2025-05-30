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
        "The Online Voting System is a secure, web-based voting platform designed primarily for college elections. Users can register and log in with unique credentials, view candidate profiles, and cast a single vote. Each vote is confirmed with a unique reference number, and users can log out securely. The system enforces one-person-one-vote using a database flag, and all passwords are securely hashed. The project is structured with clear separation of concerns: Flask handles the backend logic, SQLite is used for persistent storage, and Jinja2 templates render the frontend. The main files include app logic (app.py), database setup (database.py), data models (models.py), HTML templates, and static assets. Security is prioritized through session management, hashed passwords, and prevention of duplicate voting. The platform is easy to set up and extend, making it suitable for academic or small-scale organizational elections.",
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
        "The Academic Essay Evaluation Platform is a web application designed to automate and enhance the essay grading process, primarily for academic institutions like Jain University. It replaces manual essay grading with an AI-powered system that evaluates student essays for relevance, coverage, and structure. Faculty can create essay questions with reference answers, set word/mark limits, review submissions, and generate detailed PDF reports. Students can browse available questions, submit essays with real-time word count feedback, and view AI-generated feedback and scores. The platform uses Google’s Gemini 1.5 Pro AI model for evaluation, supports role-based authentication, and features interactive dashboards, dynamic charts, and responsive design. It works with SQLite for development and PostgreSQL for production, and generates comprehensive PDF reports. The backend is built with Python (Flask), SQLAlchemy ORM, and integrates the Gemini API; the frontend uses HTML, CSS, JavaScript, Bootstrap 5, and Chart.js for data visualization.",
      stack: [
        "Python",
        "Flask",
        "SQLite/PostgreSQL",
        "SQLAlchemy",
        "Flask-Login",
        "Flask-WTF",
        "Gemini API",
        "HTML/CSS",
        "JavaScript",
        "Bootstrap 5",
        "Chart.js",
        "AOS",
        "ReportLab"
      ],
      github: "https://github.com/8harath/Essay-Evaluation-001",
      category: "Web Development",
      demo: "https://demo-link.com",
      features: [
        "AI-based essay evaluation (Gemini 1.5 Pro)",
        "Role-based authentication for faculty and students",
        "Faculty dashboard for question creation and report generation",
        "Student interface with real-time word count and feedback",
        "Dynamic charts and animated UI",
        "PDF report generation",
        "Database flexibility (SQLite/PostgreSQL)"
      ]
    },
    {
      id: "webpage-summarizer",
      title: "Webpage Summarizer Extension",
      image: "/web-page-sum.png",
      description:
        "A Chrome browser extension that brings AI-powered summarization and question-answering to any web page using Google’s Gemini API. The extension injects a content script to intelligently extract the main content of the current page, removing navigation, ads, and irrelevant elements. Through its popup UI, users can generate concise summaries (in 50, 100, or 200 words), ask natural language questions about the page, and highlight answers directly on the page. The extension communicates with Gemini to generate summaries, answer questions, and suggest follow-up queries. Answers can be located and highlighted on the original page for context. The UI supports light/dark themes, and users securely set their Gemini API key in the extension. Main files include popup.js (UI logic and API calls), content.js (content extraction and highlighting), and popup.html (UI markup). The extension is designed for privacy (all processing is local except for Gemini API calls) and a seamless, interactive user experience.",
      stack: ["JavaScript", "HTML/CSS", "Chrome Extension API", "Gemini API"],
      github: "https://github.com/8harath/sum-extention",
      category: "Extensions",
      demo: "https://demo-link.com",
      features: [
        "Real-time summarization",
        "Contextual question answering",
        "Data privacy"
      ]
    },
    {
      id: "car-parking-detection",
      title: "Car Parking Detection System",
      image: "/car-parking.png",
      description:
        "An advanced car parking space detection system that uses computer vision and machine learning (YOLOv8) to analyze parking lots, detect vehicles, and report on parking space occupancy. Users provide an image or video of a parking lot, interactively select parking spaces via a graphical interface, and the system saves these coordinates for future sessions. The pipeline processes the input with grayscale conversion, blurring, adaptive thresholding, and dilation to clean up the image. YOLOv8 detects vehicles (car, truck, bus, motorcycle) and assigns confidence scores. For each parking space, the code checks occupancy by analyzing pixel values and comparing them to a threshold, handling occlusions, large vehicles, and lighting variations. The system displays the lot with color-coded spaces (green for empty, red for occupied) and can generate comprehensive reports: annotated images, text summaries, and CSV data. The project is modular, with scripts for detection, UI, and reporting, and is easily extensible for future enhancements like cloud deployment or multi-camera support.",
      stack: ["Python", "YOLO", "OpenCV", "Pandas", "Matplotlib"],
      github: "https://github.com/8harath/Car-Parking-Detection",
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
        "A Chrome browser extension that allows users to define custom text shortcuts for fast, automated text replacement in any editable field across websites. Users can create, edit, and manage shortcuts (e.g., typing '/mail' to insert their email address) via a popup UI. The extension injects a content script into every page to listen for input events, detect trigger words, and replace them with preset values in real time. It supports up to 50 shortcuts, live updates across tabs, import/export of shortcut sets, and site-specific enable/disable via whitelist/blacklist. The UI offers light/dark/system themes and settings for full control. Core files include content.js (input detection and replacement), background.js (storage and messaging), and popup.js (UI and settings). Built for efficiency and privacy, it streamlines repetitive typing and personalizes web input workflows.",
      stack: ["JavaScript", "HTML/CSS", "Chrome Extension API", "LocalStorage"],
      github: "https://github.com/8harath/text-replace-ext",
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
