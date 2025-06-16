"use client"
import { ArrowDown } from "lucide-react"

export default function Home({ setActiveSection }: { setActiveSection?: (section: string) => void }) {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center">
      <div className="highlighted-section mb-12 inline-block px-8 py-6">
        <h1 className="text-5xl font-bold mb-3">Bharath K</h1>
        <h2 className="text-2xl text-gray-700">Building Intelligent Systems with Purpose and Precision</h2>
      </div>

      <div className="max-w-3xl mb-12 space-y-6 px-6">
        <p className="text-lg leading-relaxed">
          I'm a 2nd-year Computer Science undergraduate at Jain University, passionate about building AI/ML systems that are not only intelligent—but interpretable, ethical, and human-aligned.
        </p>

        <p className="text-lg leading-relaxed">
          I explore Generative AI, Diffusion Models, Large Language Models (LLMs), and systems that blend scientific depth with real-world impact. As a member of my university's R&D Club, I engage in experimental projects—from automating image pipelines to reconstructing environments in 3D using LIDAR data.
        </p>

        <p className="text-lg leading-relaxed">
          Currently, I'm contributing to India's first Telugu LLM initiative, helping design culturally grounded datasets and exploring efficient training techniques with distributed compute.
        </p>

        <p className="text-lg leading-relaxed">
          Outside of code, I dive deep into philosophy, systems theory, and emerging tech like blockchain and neuro-AI—seeking to connect the abstract with the practical.
        </p>

        <p className="text-xl font-semibold mt-8">
          Let's build what's next.
        </p>
      </div>

      <div className="mb-12">
        <div className="flex gap-6">
          <a
            href="https://drive.google.com/file/d/1JH87mrksZFSBAQj49RrW3t9yp8t7lYBl/view"
            className="retro-button px-6 py-3 text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get My Résumé
          </a>
          <button 
            onClick={() => setActiveSection?.('projects')}
            className="retro-button px-6 py-3 text-lg"
          >
            Explore Projects
          </button>
        </div>
      </div>

      <div className="mt-8 animate-bounce">
        <ArrowDown className="w-6 h-6 mx-auto" />
      </div>
    </section>
  )
}
