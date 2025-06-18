export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-header">ABOUT ME</h2>

      <div className="card mb-6">
        <p className="mb-4">
          I&apos;m <strong>Bharath K</strong>, a Computer Science undergraduate at Jain University, Bangalore, with a deep passion for Artificial Intelligence, 
          Large Language Models (LLMs), and Artificial General Intelligence (AGI). My academic journey is focused on understanding and 
          developing cutting-edge AI technologies while maintaining a strong emphasis on ethical AI implementation.
        </p>

        <p className="mb-4">
          As an active member of the R&D Club at Jain University, I collaborate with peers on innovative projects that push the boundaries
          of what&apos;s possible with today&apos;s technology. My work spans across <strong>machine learning</strong>, <strong>natural language processing</strong>, and 
          <strong>generative AI</strong>, with a particular interest in developing solutions that are both technically advanced and ethically sound.
        </p>

        <p className="mb-4">
          Currently, I&apos;m contributing to India&apos;s first Telugu LLM initiative, where I help design culturally grounded datasets and explore efficient training techniques. 
          This project showcases my expertise in <strong>AI development</strong> and <strong>large language models</strong>, demonstrating my commitment to advancing AI technology 
          with cultural sensitivity and ethical considerations.
        </p>

        <p>
          Beyond my technical pursuits, I&apos;m deeply interested in the philosophical implications of AI development, cryptocurrency 
          technologies, and emerging innovations that will shape our future. This interdisciplinary approach helps me bring unique 
          perspectives to my work in <strong>AI research</strong> and <strong>technology development</strong>.
        </p>
      </div>

      <div className="card mb-6">
        <h3 className="text-xl font-semibold mb-4">My Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">AI & Machine Learning</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Large Language Models (LLMs)</li>
              <li>Artificial General Intelligence (AGI)</li>
              <li>Deep Learning & Neural Networks</li>
              <li>Natural Language Processing</li>
              <li>Computer Vision</li>
              <li>Ethical AI Development</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Software Development</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Full Stack Development</li>
              <li>Python & JavaScript</li>
              <li>React & Next.js</li>
              <li>Web Development</li>
              <li>API Development</li>
              <li>Database Design</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-semibold mb-4">My Background</h3>
        <div className="space-y-3">
          <div>
            <strong>Education:</strong> Computer Science Undergraduate at Jain University, Bangalore
          </div>
          <div>
            <strong>Research Focus:</strong> AI, LLMs, AGI, and Ethical AI Development
          </div>
          <div>
            <strong>Current Project:</strong> India's First Telugu LLM Initiative
          </div>
          <div>
            <strong>Location:</strong> Bangalore, India
          </div>
          <div>
            <strong>Languages:</strong> English, Telugu
          </div>
        </div>
      </div>

      {/* SEO-friendly hidden content for search engines */}
      <div className="sr-only">
        <h2>About Bharath K</h2>
        <p>Bharath K is an AI Researcher and Software Developer based in Bangalore, India. Currently pursuing Computer Science at Jain University with expertise in artificial intelligence, machine learning, large language models, and ethical AI development.</p>
        <p>Bharath K specializes in AI research, software development, machine learning, LLMs, AGI, and ethical AI implementation. As a member of Jain University's R&D Club, Bharath K works on innovative AI projects and contributes to India's first Telugu LLM initiative.</p>
        <p>Keywords: Bharath K, AI Researcher, Software Developer, Computer Science, Jain University, Bangalore, AI, LLM, AGI, Machine Learning, Ethical AI</p>
      </div>
    </section>
  )
}
