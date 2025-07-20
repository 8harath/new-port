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
      title: "A Hallucination Filter Idea That Might Not Scale—Yet",
      excerpt: "Exploring a potential approach to reduce LLM hallucinations through multi-sampling and evaluation, considering the compute costs and future possibilities.",
      content: `When I first started using large language models (LLMs), I honestly saw them as glorified autocomplete machines—clever, predictive, and sure, sometimes useful. But the more I explored them, the more I started noticing possibilities beyond surface-level word prediction. Especially now, with the rise of agentic systems and protocols like MCP (Model Context Protocol), LLMs are starting to behave more like tools with agency—calling APIs, triggering workflows, even making decisions in context.

This shift is exciting, but also fragile. With access to external tools, things like prompt injection attacks become more than theoretical—suddenly they're risks with real-world consequences. That might be one reason we haven't seen these capabilities adopted at massive scale just yet.

Still, something caught my attention recently, and I wanted to get the thought down.

**Tuning the Parameters, Sampling the Truth**

LLMs generate responses by sampling from a probability distribution over the next token. That sampling can be shaped using two key parameters:

- Temperature: Controls randomness. Lower = more deterministic. Higher = more exploratory.
- Top-p (nucleus sampling): Restricts sampling to a dynamic shortlist of tokens whose cumulative probability crosses a threshold (like 0.9).

Most models—especially closed ones—lock these to default values optimized for perceived coherence. But "coherent" doesn't always mean accurate, and I don't think there's a one-size-fits-all value for either of these parameters.

So I started wondering—what if we didn't treat those values as fixed?

**The Thought: Generate, Score, Select**

Instead of answering with a single response at a fixed top-p and temperature, imagine this:

1. Generate multiple outputs for the same prompt (say, 10).
2. Vary temperature and top-p slightly for each one. Not dramatically—just enough to nudge different edges of the model's response spectrum.
3. Run each output through evaluation tools: something like a perplexity filter, a semantic fact-checker, or even an internal critic model.
4. Return the best-scoring result—based not just on fluency, but factual grounding or internal consistency.

Is this compute-intensive? Absolutely. But it might also help surface more reliable outputs in certain contexts—especially ones where hallucinations carry a higher cost.

**Yes, It's Expensive (For Now)**

This kind of multi-sample, score-and-select approach isn't feasible at scale right now. GPU time is costly, and energy constraints make things worse. But that bottleneck won't last forever. With growing attention on nuclear fusion, renewable resources, and more efficient compute architectures, it's possible we'll see a shift in what's affordable to run in real time.

If the cost of compute drops—or the value of high-confidence outputs rises—this method might start to look less ridiculous and more like a viable direction.

**A Quick Reality Check**

Is this idea already out there? Maybe. It feels obvious enough that someone's likely thought about it or even implemented a variant of it in internal eval systems. But that doesn't really matter here. What matters is the reasoning path that led to this thought—and the realization that accuracy isn't just about improving models, but also how we sample from them.

**Postscript**

This isn't a proposal, or a whitepaper, or even a serious recommendation. It's just a piece of mental scratchwork. A reminder that sometimes even small changes—like treating parameters as levers instead of constants—can open up whole new ways of thinking.`,
      author: "Bharath K",
      publishDate: "2024-12-20",
      readTime: "6 min read",
      category: "AI Research",
      tags: ["LLM", "Hallucinations", "Sampling", "AI Safety", "Research"],
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
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="prose prose-gray max-w-none">
              {selectedPost.content.split('\n\n').map((paragraph, index) => {
                // Handle bold text formatting
                const formattedParagraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                
                return (
                  <div key={index} className="mb-4 text-gray-700 leading-relaxed">
                    <div dangerouslySetInnerHTML={{ __html: formattedParagraph }} />
                  </div>
                );
              })}
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
                  {tag}
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
