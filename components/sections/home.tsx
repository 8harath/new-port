"use client"
import { ArrowDown } from "lucide-react"
import AnimatedButton from "@/components/ui/animated-button"

export default function Home({ setActiveSection }: { setActiveSection?: (section: string) => void }) {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center" id="home">
      <div className="highlighted-section mb-12 inline-block px-8 py-6">
        <h1 className="text-5xl font-bold mb-3">
          Bharath K
        </h1>
        <h2 className="text-2xl text-gray-700">Building Intelligent Systems with Purpose and Precision</h2>
      </div>

      <div className="max-w-3xl mb-12 space-y-6 px-6">
        <p className="text-lg leading-relaxed">
          I'm a 2nd-year Computer Science undergraduate at Jain University, passionate about building AI/ML systems that are not only intelligent—but interpretable, ethical, and human-aligned.
        </p>

        <p className="text-lg leading-relaxed">
          As an AI Researcher and Software Developer, I explore Generative AI, Diffusion Models, Large Language Models (LLMs), and systems that blend scientific depth with real-world impact. As a member of my university's R&D Club, I engage in experimental projects—from automating image pipelines to reconstructing environments in 3D using LIDAR data.
        </p>

        <p className="text-lg leading-relaxed">
          Currently, I'm contributing to India's first Telugu LLM initiative, helping design culturally grounded datasets and exploring efficient training techniques with distributed compute. This work showcases my expertise in AI development and machine learning.
        </p>

        <p className="text-lg leading-relaxed">
          Outside of code, I dive deep into philosophy, systems theory, and emerging tech like blockchain and neuro-AI—seeking to connect the abstract with the practical. My approach combines technical expertise with ethical considerations in artificial intelligence.
        </p>
      </div>      <div className="mb-12">
        <div className="flex gap-6 flex-wrap justify-center">
          <AnimatedButton
            href="https://drive.google.com/file/d/1JH87mrksZFSBAQj49RrW3t9yp8t7lYBl/view"
            variant="holographic"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="Download Bharath K's Resume"
            title="Download Bharath K's Resume"
          >
            <span className="flex items-center gap-2">
              📄 Get My Résumé
              <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </span>
          </AnimatedButton>

          <AnimatedButton
            onClick={() => setActiveSection?.('projects')}
            variant="neural"
            ariaLabel="View Bharath K's Projects"
            title="Explore Bharath K's AI and Software Development Projects"
          >
            <span className="flex items-center gap-2">
              🚀 Explore Projects
              <span className="inline-block transition-transform group-hover:rotate-12 group-hover:scale-110">
                ⚡
              </span>
            </span>
          </AnimatedButton>
        </div>
      </div>

      <div className="mt-8 animate-bounce" aria-hidden="true">
        <ArrowDown className="w-6 h-6 mx-auto" />
      </div>

      {/* SEO-friendly hidden content for search engines */}
      <div className="sr-only">
        <h2>Bharath K Portfolio</h2>
        <p>Bharath K is an AI Researcher and Software Developer based in Bangalore, India. Specializing in artificial intelligence, machine learning, large language models, and software development. Computer Science student at Jain University with expertise in AI, LLMs, AGI, and ethical AI development.</p>
        <p>Keywords: Bharath K, AI Researcher, Software Developer, Computer Science, AI, LLM, AGI, Machine Learning, Jain University, Bangalore, India</p>
      </div>
    </section>
  )
}
