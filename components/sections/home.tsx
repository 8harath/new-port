"use client"
import { ArrowDown } from "lucide-react"

export default function Home({ setActiveSection }: { setActiveSection?: (section: string) => void }) {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center">
      <div className="highlighted-section mb-8 inline-block">
        <h1 className="text-4xl font-bold mb-4">Exploring Intelligence Through Code and Theory</h1>
        <h2 className="text-xl mb-2">BHARATH K</h2>
      </div>

      <div className="max-w-2xl mb-8 space-y-4 px-4">
        <p className="text-lg">
          I'm a 2nd-year Computer Science undergraduate at Jain University with a passion for AI/ML, Generative Models,
          LLMs, and Ethical AI. My goal? Build systems that aren't just smart—but responsible.
        </p>

        <p className="text-lg">
          As an active member of the R&D Club, I experiment with cutting-edge tech, collaborate on forward-looking
          projects, and never stop asking "what if?"
        </p>

        <p className="text-lg">
          Beyond code, I'm fascinated by philosophy, cryptocurrency, and technologies that will redefine how we live and
          think in the decades ahead.
        </p>
      </div>

      <div className="mb-12">
        <a
          href="https://drive.google.com/file/d/1JH87mrksZFSBAQj49RrW3t9yp8t7lYBl/view"
          className="retro-button text-lg px-6 py-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          DOWNLOAD RÉSUMÉ
        </a>
      </div>

      <div className="mt-8 animate-bounce">
        <ArrowDown className="w-6 h-6 mx-auto" />
      </div>
    </section>
  )
}
