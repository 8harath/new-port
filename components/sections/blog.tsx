"use client"

import type React from "react"
import { useState, useMemo } from "react"
import { ExternalLink, ChevronLeft, ChevronRight, Search, Calendar, Clock, User } from "lucide-react"

type BlogPost = {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  publishDate: string
  readTime: string
  category: string
  tags: string[]
  featured: boolean
}

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  // Blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Evolution of Large Language Models: From GPT to AGI",
      excerpt: "Exploring the rapid development of LLMs and their journey towards Artificial General Intelligence, examining key breakthroughs and future implications.",
      content: `Large Language Models have transformed the AI landscape in unprecedented ways. From the early days of GPT-1 to the sophisticated models we see today, the evolution has been remarkable.

The journey began with transformer architecture, which revolutionized how we process sequential data. The attention mechanism allowed models to understand context in ways that were previously impossible.

Key milestones include:
- GPT-1: Demonstrating unsupervised pre-training effectiveness
- BERT: Bidirectional understanding and context
- GPT-3: Scale and emergent capabilities
- ChatGPT: Conversational AI breakthrough
- GPT-4: Multimodal capabilities and reasoning

The path to AGI involves several challenges:
1. Understanding vs. Pattern Matching
2. Reasoning and Logic
3. Consciousness and Self-awareness
4. Generalization across domains

As we work on India's first Telugu LLM, these lessons guide our approach to creating culturally grounded AI systems.`,
      author: "Bharath K",
      publishDate: "2024-12-15",
      readTime: "8 min read",
      category: "Generative AI",
      tags: ["LLM", "AGI", "GPT", "AI Research"],
      featured: true
    },
    {
      id: 2,
      title: "Ethical AI Development: Building Responsible Systems",
      excerpt: "Discussing the critical importance of ethics in AI development, covering bias mitigation, transparency, and responsible deployment practices.",
      content: `As AI systems become more powerful and pervasive, the need for ethical considerations has never been more crucial. Responsible AI development requires a multi-faceted approach.

Core principles of ethical AI:
- Fairness and Non-discrimination
- Transparency and Explainability
- Privacy and Data Protection
- Human Autonomy and Oversight
- Robustness and Safety

Bias mitigation strategies:
1. Diverse training data
2. Regular bias audits
3. Inclusive development teams
4. Community feedback loops

The challenge lies in balancing innovation with responsibility. We must ensure that AI systems serve all of humanity, not just privileged groups.

Cultural considerations are paramount, especially when developing language models for diverse populations. Our work on Telugu LLM emphasizes cultural grounding and ethical deployment.`,
      author: "Bharath K",
      publishDate: "2024-11-28",
      readTime: "6 min read",
      category: "AI Ethics",
      tags: ["Ethics", "Bias", "Responsible AI", "Fairness"],
      featured: true
    },
    {
      id: 3,
      title: "Diffusion Models: The Art of AI-Generated Content",
      excerpt: "Deep dive into diffusion models, their mathematical foundations, and applications in creating high-quality synthetic content.",
      content: `Diffusion models have emerged as one of the most powerful generative AI techniques, revolutionizing how we create synthetic content.

The core concept involves a forward diffusion process that gradually adds noise to data, and a reverse process that learns to denoise and generate new samples.

Mathematical foundation:
- Forward process: q(x_t|x_{t-1})
- Reverse process: p_θ(x_{t-1}|x_t)
- Training objective: Variational lower bound

Key advantages:
1. High-quality generation
2. Stable training process
3. Controllable generation
4. Diverse applications

Applications in my work:
- Image synthesis and editing
- Data augmentation for ML
- Creative content generation
- Research in generative modeling

The future of diffusion models includes better efficiency, controllability, and integration with other AI systems.`,
      author: "Bharath K",
      publishDate: "2024-11-10",
      readTime: "7 min read",
      category: "Machine Learning",
      tags: ["Diffusion Models", "Generative AI", "Deep Learning"],
      featured: false
    },
    {
      id: 4,
      title: "The Future of Human-AI Collaboration",
      excerpt: "Exploring how humans and AI systems can work together effectively, enhancing rather than replacing human capabilities.",
      content: `The future doesn't belong to AI replacing humans, but to AI augmenting human capabilities in meaningful ways.

Collaboration models:
- AI as a research assistant
- Human-in-the-loop systems
- Collaborative problem-solving
- Enhanced decision making

Key areas of synergy:
1. Creative processes
2. Scientific research
3. Educational technology
4. Healthcare applications

Challenges to address:
- Trust and reliability
- User interface design
- Training and adaptation
- Ethical considerations

My experience with GitHub Copilot and AI-assisted development showcases how AI can enhance programmer productivity while maintaining human creativity and oversight.

The goal is to create AI systems that amplify human intelligence rather than replace it.`,
      author: "Bharath K",
      publishDate: "2024-10-22",
      readTime: "5 min read",
      category: "Future of AI",
      tags: ["Human-AI Collaboration", "Augmentation", "Future"],
      featured: false
    },
    {
      id: 5,
      title: "Building India's First Telugu LLM: Cultural AI Considerations",
      excerpt: "Insights from developing a culturally grounded Telugu language model, addressing unique challenges in Indian language AI.",
      content: `Developing India's first Telugu LLM presents unique challenges and opportunities in creating culturally aware AI systems.

Cultural considerations:
- Language nuances and context
- Regional variations and dialects
- Cultural references and idioms
- Ethical and social values

Technical challenges:
1. Limited training data
2. Tokenization for Indic scripts
3. Handling code-mixing
4. Cultural bias mitigation

Our approach:
- Community-driven data collection
- Cultural expert involvement
- Iterative feedback loops
- Ethical review processes

The goal is to create an AI system that truly understands and respects Telugu culture while providing valuable assistance to Telugu speakers worldwide.

This work contributes to the broader mission of democratizing AI and ensuring representation for all languages and cultures.`,
      author: "Bharath K",
      publishDate: "2024-10-05",
      readTime: "9 min read",
      category: "Research",
      tags: ["Telugu LLM", "Cultural AI", "Indian Languages", "Research"],
      featured: true
    },
    {
      id: 6,
      title: "AI in Education: Transforming Learning Experiences",
      excerpt: "Examining how AI technologies are revolutionizing education, from personalized learning to intelligent tutoring systems.",
      content: `Artificial Intelligence is reshaping education, offering personalized learning experiences and intelligent assistance to students and educators.

AI applications in education:
- Personalized learning paths
- Intelligent tutoring systems
- Automated assessment and feedback
- Content generation and curation

Benefits observed:
1. Adaptive learning experiences
2. Immediate feedback and support
3. Accessibility improvements
4. Teacher workload reduction

Challenges to consider:
- Privacy and data security
- Digital divide concerns
- Over-reliance on technology
- Maintaining human connection

My research includes developing AI-powered educational tools that enhance rather than replace traditional teaching methods.

The future of education lies in thoughtful integration of AI technologies that support both learners and educators.`,
      author: "Bharath K",
      publishDate: "2024-09-18",
      readTime: "6 min read",
      category: "Technology Trends",
      tags: ["AI Education", "EdTech", "Personalized Learning"],
      featured: false
    }
  ]

  // Filter posts based on search query only
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      return matchesSearch
    })
  }, [searchQuery, blogPosts])

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  // Handle reading a post
  const handleReadPost = (post: BlogPost) => {
    setSelectedPost(post)
  }

  const handleBackToPosts = () => {
    setSelectedPost(null)
  }

  // If a post is selected, show the full post view
  if (selectedPost) {
    return (
      <section>
        <div className="mb-6">
          <button
            onClick={handleBackToPosts}
            className="retro-button flex items-center gap-2 mb-4"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Blog
          </button>
          
          <div className="card">
            <div className="mb-4">
              <span className="inline-block bg-amber-200 text-gray-800 px-3 py-1 text-xs font-bold border-2 border-gray-800 mb-2">
                {selectedPost.category}
              </span>
              <h1 className="text-2xl md:text-3xl font-bold mb-3">{selectedPost.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {selectedPost.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(selectedPost.publishDate).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {selectedPost.readTime}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 text-gray-800 px-2 py-1 text-xs border border-gray-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="prose prose-gray max-w-none">
              {selectedPost.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section>
      <h2 className="section-header">AI RESEARCH BLOG</h2>

      {/* Search Input */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600" />
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-800 bg-amber-50 text-gray-900 font-mono focus:bg-white focus:border-amber-600 transition-all duration-300 outline-none"
            style={{
              boxShadow: 'inset 2px 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <div key={post.id} className="card">
            <div className="mb-3">
              <span className="inline-block bg-amber-200 text-gray-800 px-2 py-1 text-xs font-bold border border-gray-600">
                {post.category}
              </span>
              {post.featured && (
                <span className="inline-block bg-amber-300 text-gray-800 px-2 py-1 text-xs font-bold border border-gray-600 ml-2">
                  ★
                </span>
              )}
            </div>
            
            <h3 className="font-bold text-lg mb-2">{post.title}</h3>
            <p className="text-sm text-gray-700 mb-3">{post.excerpt}</p>
            
            <div className="flex items-center gap-3 text-xs text-gray-600 mb-3">
              <div className="flex items-center gap-1">
                <User className="w-3 h-3" />
                {post.author}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(post.publishDate).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </div>
            </div>

            <div className="flex flex-wrap gap-1 mb-3">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 text-gray-700 px-2 py-1 text-xs border border-gray-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            <button
              onClick={() => handleReadPost(post)}
              className="retro-button text-sm flex items-center justify-center"
            >
              Read More
              <ExternalLink className="w-3 h-3 ml-1" />
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
