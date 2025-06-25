"use client"

import { useState, useMemo, useRef, useEffect } from "react"
import { Github, Info, Search, ChevronDown } from "lucide-react"
import Modal from "@/components/ui/modal"

export default function Projects() {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const categories = ["All", "AI/ML", "Web Development", "Extensions", "Full Stack"]

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

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
        "The Academic Essay Evaluation Platform is a web application designed to automate and enhance the essay grading process, primarily for academic institutions like Jain University. It replaces manual essay grading with an AI-powered system that evaluates student essays for relevance, coverage, and structure. Faculty can create essay questions with reference answers, set word/mark limits, review submissions, and generate detailed PDF reports. Students can browse available questions, submit essays with real-time word count feedback, and view AI-generated feedback and scores. The platform uses Google's Gemini 1.5 Pro AI model for evaluation, supports role-based authentication, and features interactive dashboards, dynamic charts, and responsive design. It works with SQLite for development and PostgreSQL for production, and generates comprehensive PDF reports. The backend is built with Python (Flask), SQLAlchemy ORM, and integrates the Gemini API; the frontend uses HTML, CSS, JavaScript, Bootstrap 5, and Chart.js for data visualization.",
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
        "A Chrome browser extension that brings AI-powered summarization and question-answering to any web page using Google's Gemini API. The extension injects a content script to intelligently extract the main content of the current page, removing navigation, ads, and irrelevant elements. Through its popup UI, users can generate concise summaries (in 50, 100, or 200 words), ask natural language questions about the page, and highlight answers directly on the page. The extension communicates with Gemini to generate summaries, answer questions, and suggest follow-up queries. Answers can be located and highlighted on the original page for context. The UI supports light/dark themes, and users securely set their Gemini API key in the extension. Main files include popup.js (UI logic and API calls), content.js (content extraction and highlighting), and popup.html (UI markup). The extension is designed for privacy (all processing is local except for Gemini API calls) and a seamless, interactive user experience.",
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
    {
      id: "jnu-resource-hub",
      title: "JNU Resource Hub",
      image: "/placeholder-logo.png",
      description:
        "A modern, open-source web application built for Jain University to organize and access educational materials by semester, subject, and specialization. Designed with a focus on performance, maintainability, and ease of use, the platform helps students seamlessly navigate study resources like TLEP PDFs, cheat sheets, and module-wise content. The frontend is developed using React and TypeScript with Vite for a fast dev environment. The application supports multiple specializations including AI, Cyber Security, Data Analytics, and more. It features a responsive layout, CI/CD via GitHub Actions, and a contact form powered by EmailJS. The modular, component-based architecture ensures reusability and scalability. Sass handles the styling, while ESLint and Prettier enforce consistent code quality. Ideal for students, educators, and contributors looking to extend the academic resource ecosystem.",
      stack: [
        "TypeScript",
        "React",
        "Vite",
        "Sass",
        "GitHub Actions",
        "EmailJS",
        "ESLint/Prettier"
      ],
      github: "https://github.com/yourusername/jnu-resource-hub",
      category: "Web Development",
      demo: "https://demo-link.com",
      features: [
        "Organized resource browsing by semester, subject, and stream",
        "Specialization support (AI, DA, CS, IoT, etc.)",
        "Responsive, mobile-friendly UI",
        "Type-safe development with TypeScript",
        "Component-based, scalable architecture",
        "Contact form with EmailJS integration",
        "CI/CD pipeline with GitHub Actions",
        "Clean code practices using ESLint and Prettier"
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
    <section id="projects" className="projects-section">
      <h2 className="section-header">MY PROJECTS</h2>

      {/* SEO-friendly project introduction */}
      <div className="mb-6">
        <p className="text-lg leading-relaxed">
          Explore my portfolio of innovative projects showcasing expertise in <strong>AI/ML</strong>, <strong>Web Development</strong>, and <strong>Software Development</strong>. From AI-powered applications to full-stack web solutions, each project demonstrates technical skills and creative problem-solving.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="relative" ref={dropdownRef}>
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search my projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-12 py-2.5 border-2 border-gray-800 bg-amber-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            aria-label="Search projects by title, description, or technology stack"
          />
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 hover:bg-amber-100 rounded-md transition-colors"
            aria-label="Filter projects by category"
          >
            <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {/* Dropdown Menu */}
          <div className={`absolute top-full left-0 right-0 mt-1 bg-white border-2 border-gray-800 rounded-lg shadow-lg z-10 transition-all duration-200 ${
            isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
          }`}>
            <div className="p-2 border-b-2 border-gray-200">
              <span className="text-sm font-medium text-gray-600">Filter by Category</span>
            </div>
            <div className="max-h-60 overflow-y-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category)
                    setIsDropdownOpen(false)
                  }}
                  className={`w-full px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-amber-500 text-white'
                      : 'hover:bg-amber-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <article key={project.id} className="card flex flex-col h-full group cursor-pointer hover:shadow-lg transition-all duration-300" onClick={() => openModal(project.id)}>
            <div className="mb-3 overflow-hidden border border-gray-800 aspect-square">
              <img
                src={project.image || "/placeholder.svg"}
                alt={`${project.title} - ${project.category} project`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
            <h3 className="font-bold text-xl mb-2 group-hover:text-amber-600 transition-colors">{project.title}</h3>
            <div className="mt-auto pt-3">
              <button
                onClick={() => openModal(project.id)}
                className="retro-button flex items-center text-sm w-full justify-center"
                aria-label={`View details of ${project.title} project`}
              >
                <Info className="w-4 h-4 mr-1" />
                More Information
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* No results message */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            No projects found matching your search criteria.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Try adjusting your search terms or category filter.
          </p>
        </div>
      )}

      {/* Project Modals */}
      {activeModal && (
        <Modal isOpen={!!activeModal} onClose={closeModal}>
          {(() => {
            const project = projects.find((p) => p.id === activeModal)
            if (!project) return null

            return (
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-button flex items-center text-sm"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github className="w-4 h-4 mr-1" />
                    View Code
                  </a>
                </div>

                <div className="aspect-video overflow-hidden rounded-lg border-2 border-gray-800">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} - ${project.category} project`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">Description</h4>
                    <p className="text-gray-700">{project.description}</p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-amber-100 border border-amber-600 px-2 py-1 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Key Features</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })()}
        </Modal>
      )}

      {/* SEO-friendly hidden content for search engines */}
      <div className="sr-only">
        <h2>Bharath K's Projects - Portfolio</h2>
        <p>Bharath K has developed various projects including AI/ML applications, web development solutions, browser extensions, and full-stack applications. Projects showcase expertise in Python, JavaScript, React, AI, machine learning, and software development.</p>
        <p>Key projects include: Online Voting System, Automated Student Evaluation Portal, Webpage Summarizer Extension, Car Parking Detection System, and Custom Shortcut Generator. All projects demonstrate Bharath K's skills in AI research, software development, and innovative problem-solving.</p>
        <p>Keywords: Bharath K projects, portfolio, AI projects, software development, machine learning, web development, browser extensions, Python, JavaScript, React, AI research</p>
      </div>
    </section>
  )
}
