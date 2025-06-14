"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { ExternalLink, ChevronLeft, ChevronRight, Search } from "lucide-react"

type Certificate = {
  id: number
  title: string
  platform: string
  offeredBy: string
  score: string
  verifyLink: string
  category: string
}

export default function Certifications() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const certificatesPerPage = 9

  // Certificate categories
  const categories = [
    "All",
    "Generative AI & LLMs",
    "Artificial Intelligence & Machine Learning (General)",
    "Software Development & Engineering",
    "Philosophy & Ethics",
    "Data & Business Analytics",
    "Cloud Computing & Networking",
    "Finance, Blockchain & Strategy",
  ]

  // Actual certificate data
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Microsoft Copilot for Software Development",
      platform: "Coursera",
      offeredBy: "Microsoft",
      score: "95%",
      verifyLink: "https://www.coursera.org/account/accomplishments/specialization/3KKJH73D4EOF",
      category: "Generative AI & LLMs",
    },
    {
      id: 2,
      title: "Generative AI in Marketing",
      platform: "Coursera",
      offeredBy: "University of Virginia Darden School Foundation",
      score: "97%",
      verifyLink: "https://www.coursera.org/account/accomplishments/specialization/J9US20GH4W60",
      category: "Generative AI & LLMs",
    },
    {
      id: 3,
      title: "Introduction to Generative AI Learning Path",
      platform: "Coursera",
      offeredBy: "Google Cloud",
      score: "98%",
      verifyLink: "https://www.coursera.org/account/accomplishments/specialization/NYYGS7FLD8IP",
      category: "Generative AI & LLMs",
    },
    {
      id: 4,
      title: "Generative AI Fundamentals",
      platform: "Coursera",
      offeredBy: "IBM",
      score: "96%",
      verifyLink: "https://www.coursera.org/account/accomplishments/specialization/3WGHWWXJNRO3",
      category: "Generative AI & LLMs",
    },
    {
      id: 5,
      title: "GitHub Copilot for Project Management",
      platform: "Coursera",
      offeredBy: "Microsoft",
      score: "97.50%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/MLFH8LQ282OW",
      category: "Software Development & Engineering",
    },
    {
      id: 6,
      title: "Building Generative AI Capabilities",
      platform: "Coursera",
      offeredBy: "University of Virginia Darden School Foundation",
      score: "99%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/J2BFDH358J00",
      category: "Generative AI & LLMs",
    },
    {
      id: 7,
      title: "Statistics Foundations",
      platform: "Coursera",
      offeredBy: "Meta",
      score: "95%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/RVAAQ8WDA30V",
      category: "Data & Business Analytics",
    },
    {
      id: 8,
      title: "Optimizing Your Workflow with GitHub Copilot and VS Code",
      platform: "Coursera",
      offeredBy: "Microsoft",
      score: "90%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/KWIOTVPL0P9J",
      category: "Software Development & Engineering",
    },
    {
      id: 9,
      title: "Introduction to Generative AI with Snowflake",
      platform: "Coursera",
      offeredBy: "Snowflake",
      score: "91.83%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/6BB9V3YZFP6Y",
      category: "Generative AI & LLMs",
    },
    {
      id: 10,
      title: "Introduction to Data Analytics",
      platform: "Coursera",
      offeredBy: "Meta",
      score: "89.37%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/VR3BU84NVFBA",
      category: "Data & Business Analytics",
    },
    {
      id: 11,
      title: "Introduction to Generative AI for Developers With Copilot",
      platform: "Coursera",
      offeredBy: "Microsoft",
      score: "90%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/NZUYH7MESJO6",
      category: "Generative AI & LLMs",
    },
    {
      id: 12,
      title: "Boost Your Productivity with GitHub Copilot",
      platform: "Coursera",
      offeredBy: "Microsoft",
      score: "97.50%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/BLWBT2XZATEQ",
      category: "Software Development & Engineering",
    },
    {
      id: 13,
      title: "Trustworthy AI: Managing Bias, Ethics, and Accountability",
      platform: "Coursera",
      offeredBy: "Johns Hopkins University",
      score: "89.16%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/49T90O9EAKX2",
      category: "Philosophy & Ethics",
    },
    {
      id: 14,
      title: "Introduction to Business Analytics",
      platform: "Coursera",
      offeredBy: "Tableau Learning Partner",
      score: "93.12%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/VSJRC35CYCO7",
      category: "Data & Business Analytics",
    },
    {
      id: 15,
      title: "Introduction to Artificial Intelligence (AI)",
      platform: "Coursera",
      offeredBy: "IBM",
      score: "98%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/KPUTWPYTCNEV",
      category: "Artificial Intelligence & Machine Learning (General)",
    },
    {
      id: 16,
      title: "GenAI Basics - How LLMs Work",
      platform: "Coursera",
      offeredBy: "Duke University",
      score: "100%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/XRFAIOY8WD3D",
      category: "Generative AI & LLMs",
    },
    {
      id: 17,
      title: "Responsible AI: Applying AI Principles with Google Cloud",
      platform: "Coursera",
      offeredBy: "Google Cloud",
      score: "100%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/UF9LHEDU8Y6R",
      category: "Philosophy & Ethics",
    },
    {
      id: 18,
      title: "Advertising in the Age of Generative AI",
      platform: "Coursera",
      offeredBy: "University of Virginia Darden School Foundation",
      score: "100%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/BAUYMJSK84OU",
      category: "Generative AI & LLMs",
    },
    {
      id: 19,
      title: "Introduction to Responsible AI",
      platform: "Coursera",
      offeredBy: "Google Cloud",
      score: "75%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/6HZ4TBRZ9O47",
      category: "Philosophy & Ethics",
    },
    {
      id: 20,
      title: "Google Prompting Essentials",
      platform: "Coursera",
      offeredBy: "Google",
      score: "99.16%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/KXWRC3B1GVEG",
      category: "Generative AI & LLMs",
    },
    {
      id: 21,
      title: "Introduction to Large Language Models",
      platform: "Coursera",
      offeredBy: "Google Cloud",
      score: "100%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/C243AJWXC7QG",
      category: "Generative AI & LLMs",
    },
    {
      id: 22,
      title: "Generative AI with Large Language Models",
      platform: "Coursera",
      offeredBy: "DeepLearning.AI, Amazon Web Services",
      score: "99.25%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/17KQ5EOAQ8VL",
      category: "Generative AI & LLMs",
    },
    {
      id: 23,
      title: "Customer Service in the Age of Generative AI",
      platform: "Coursera",
      offeredBy: "University of Virginia Darden School Foundation",
      score: "100%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/LQQUVUIJ557X",
      category: "Generative AI & LLMs",
    },
    {
      id: 24,
      title: "Content Marketing Using Generative AI",
      platform: "Coursera",
      offeredBy: "University of Virginia Darden School Foundation",
      score: "98.75%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/G3LR24E0CTWX",
      category: "Generative AI & LLMs",
    },
    {
      id: 25,
      title: "Ancient Philosophy: Plato & His Predecessors",
      platform: "Coursera",
      offeredBy: "University of Pennsylvania",
      score: "95.32%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/DTP6TPJYOQY9",
      category: "Philosophy & Ethics",
    },
    {
      id: 26,
      title: "Introduction to Software Engineering",
      platform: "Coursera",
      offeredBy: "IBM",
      score: "88.50%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/00KT3ZKLZYL5",
      category: "Software Development & Engineering",
    },
    {
      id: 27,
      title: "Prompt Engineering for ChatGPT",
      platform: "Coursera",
      offeredBy: "Vanderbilt University",
      score: "100%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/ZRMA3UBYYLFW",
      category: "Generative AI & LLMs",
    },
    {
      id: 28,
      title: "Philosophy of Science",
      platform: "Coursera",
      offeredBy: "University of Pennsylvania",
      score: "90.33%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/S6SFXTATOZYY",
      category: "Philosophy & Ethics",
    },
    {
      id: 29,
      title: "Introduction to Generative AI",
      platform: "Coursera",
      offeredBy: "Google Cloud",
      score: "100%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/QYVDXOBJKE2V",
      category: "Generative AI & LLMs",
    },
    {
      id: 30,
      title: "Design Thinking for Innovation",
      platform: "Coursera",
      offeredBy: "University of Virginia",
      score: "100%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/0PHQBZX8ZJ8M",
      category: "Software Development & Engineering",
    },
    {
      id: 31,
      title: "Basics of Computer Systems",
      platform: "Coursera",
      offeredBy: "Jain Group of Institutes",
      score: "100%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/X6XC2F0BH8WY",
      category: "Software Development & Engineering",
    },
    {
      id: 32,
      title: "Software Engineering: Modeling Software Systems using UML",
      platform: "Coursera",
      offeredBy: "The Hong Kong University of Science and Technology",
      score: "85.71%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/BG2PQP3G7LAY",
      category: "Software Development & Engineering",
    },
    {
      id: 33,
      title: "Global Strategy II: Doing Business in The Global Economy",
      platform: "Coursera",
      offeredBy: "University of Illinois Urbana-Champaign",
      score: "98.14%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/C12A2F4VI5AS",
      category: "Data & Business Analytics",
    },
    {
      id: 34,
      title: "Blockchain and Cryptocurrency Explained",
      platform: "Coursera",
      offeredBy: "University of Michigan",
      score: "93.29%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/7WTGK8E3WKPI",
      category: "Finance, Blockchain & Strategy",
    },
    {
      id: 35,
      title: "Introduction to Philosophy",
      platform: "Coursera",
      offeredBy: "The University of Edinburgh",
      score: "94%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/TO9ABXVM7ONM",
      category: "Philosophy & Ethics",
    },
    {
      id: 36,
      title: "The Bits and Bytes of Computer Networking",
      platform: "Coursera",
      offeredBy: "Google",
      score: "92.80%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/7CCSO9DD4ZA2",
      category: "Cloud Computing & Networking",
    },
    {
      id: 37,
      title: "Machine Learning for All",
      platform: "Coursera",
      offeredBy: "University of London",
      score: "96%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/0WRT0BIH4AG8",
      category: "Artificial Intelligence & Machine Learning (General)",
    },
    {
      id: 38,
      title: "The Structured Query Language (SQL)",
      platform: "Coursera",
      offeredBy: "University of Colorado Boulder",
      score: "98%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/1DCQ7D77SI0H",
      category: "Data & Business Analytics",
    },
    {
      id: 39,
      title: "Generative AI: Business Transformation and Career Growth",
      platform: "Coursera",
      offeredBy: "IBM",
      score: "95.14%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/8AOOJDZZZ8H4",
      category: "Generative AI & LLMs",
    },
    {
      id: 40,
      title: "Operators in C",
      platform: "Coursera",
      offeredBy: "Jain Group of Institutes",
      score: "100%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/1DBLNT4REJQ4",
      category: "Software Development & Engineering",
    },
    {
      id: 41,
      title: "AI For Everyone",
      platform: "Coursera",
      offeredBy: "DeepLearning.AI",
      score: "93.25%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/AKAMHHAL0A6D",
      category: "Artificial Intelligence & Machine Learning (General)",
    },
    {
      id: 42,
      title: "Global Impact: Business Ethics",
      platform: "Coursera",
      offeredBy: "University of Illinois Urbana-Champaign",
      score: "95.50%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/DNJD9Y98OZ6A",
      category: "Philosophy & Ethics",
    },
    {
      id: 43,
      title: "Generative AI: Impact, Considerations, and Ethical Issues",
      platform: "Coursera",
      offeredBy: "IBM",
      score: "91.75%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/6VU9XHC78L1A",
      category: "Philosophy & Ethics",
    },
    {
      id: 44,
      title: "Programming for Everybody (Getting Started with Python)",
      platform: "Coursera",
      offeredBy: "University of Michigan",
      score: "95.77%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/6ZYB84BDQ0IJ",
      category: "Software Development & Engineering",
    },
    {
      id: 45,
      title: "Generative AI: Foundation Models and Platforms",
      platform: "Coursera",
      offeredBy: "IBM",
      score: "93.75%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/LU0CJO4ZC8SZ",
      category: "Generative AI & LLMs",
    },
    {
      id: 46,
      title: "Generative AI: Prompt Engineering Basics",
      platform: "Coursera",
      offeredBy: "IBM",
      score: "85.71%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/0A4MJCHC3JE7",
      category: "Generative AI & LLMs",
    },
    {
      id: 47,
      title: "Introduction to Networking",
      platform: "Coursera",
      offeredBy: "NVIDIA",
      score: "86%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/JOP1ZZICV5YH",
      category: "Cloud Computing & Networking",
    },
    {
      id: 48,
      title: "Generative AI: Introduction and Applications",
      platform: "Coursera",
      offeredBy: "IBM",
      score: "100%",
      verifyLink: "https://www.coursera.org/account/accomplishments/records/0TB4CZMZTGOY",
      category: "Generative AI & LLMs",
    },
  ]

  // Filter certificates based on search query and category
  const filteredCertificates = useMemo(() => {
    return certificates.filter((cert) => {
      const matchesSearch =
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.offeredBy.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = selectedCategory === "All" || cert.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory, certificates])

  // Calculate pagination
  const totalPages = Math.ceil(filteredCertificates.length / certificatesPerPage)
  const indexOfLastCertificate = currentPage * certificatesPerPage
  const indexOfFirstCertificate = indexOfLastCertificate - certificatesPerPage
  const currentCertificates = filteredCertificates.slice(indexOfFirstCertificate, indexOfLastCertificate)

  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
    }
  }

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1) // Reset to first page when changing category
  }

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1) // Reset to first page when searching
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="section-header text-center mb-8">CERTIFICATIONS</h2>

      {/* Search and Filter */}
      <div className="mb-8 space-y-6">
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search certificates..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-800 bg-amber-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-transparent"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`retro-button text-sm px-4 py-2 transition-all duration-200 ${
                selectedCategory === category 
                  ? "bg-amber-200 shadow-lg scale-105" 
                  : "hover:bg-amber-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Certificate count */}
      <p className="text-center mb-6 text-sm text-gray-600">
        Showing {currentCertificates.length} of {filteredCertificates.length} certificates
        {selectedCategory !== "All" && ` in ${selectedCategory}`}
      </p>

      {/* Certificates Grid */}
      {currentCertificates.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentCertificates.map((cert) => (
            <div 
              key={cert.id} 
              className="card border-2 border-gray-800 bg-amber-50 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="p-4">
                <h3 className="font-bold text-lg mb-3 line-clamp-2">{cert.title}</h3>
                <div className="text-sm space-y-2 mb-4">
                  <p className="flex items-center">
                    <span className="font-bold min-w-[80px]">Platform:</span>
                    <span className="ml-2">{cert.platform}</span>
                  </p>
                  <p className="flex items-center">
                    <span className="font-bold min-w-[80px]">Offered by:</span>
                    <span className="ml-2">{cert.offeredBy}</span>
                  </p>
                  <p className="flex items-center">
                    <span className="font-bold min-w-[80px]">Score:</span>
                    <span className="ml-2">{cert.score}</span>
                  </p>
                  <p className="flex items-center text-xs">
                    <span className="font-bold min-w-[80px]">Category:</span>
                    <span className="ml-2">{cert.category}</span>
                  </p>
                </div>
                <a
                  href={cert.verifyLink}
                  className="retro-button text-sm flex items-center justify-center w-full py-2 hover:bg-amber-200 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Verify Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card text-center py-12 border-2 border-gray-800 bg-amber-50">
          <p className="text-gray-800">No certificates found matching your criteria.</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mb-8">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`retro-button p-2 rounded-full ${
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-amber-200'
            }`}
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="px-4 py-2 bg-white rounded-lg shadow-sm">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`retro-button p-2 rounded-full ${
              currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-amber-200'
            }`}
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  )
}
