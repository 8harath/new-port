export default function BeyondTech() {
  const interests = [
    {
      title: "Cryptocurrency",
      description:
        "Exploring DeFi ecosystems and smart contract applications. Interested in the intersection of blockchain technology and AI.",
    },
    {
      title: "Philosophy",
      description:
        "Fascinated by how technology meets existentialism. Exploring questions about consciousness, AI ethics, and the future of human-machine relationships.",
    },
    {
      title: "Reading",
      description:
        "Avid reader of science fiction, philosophy, and technical literature. Favorite authors include Isaac Asimov, Neal Stephenson, and Nick Bostrom.",
    },
    {
      title: "Podcasts",
      description:
        "Regular listener of podcasts covering tech innovations, AI developments, and ethical considerations in technology.",
    },
  ]

  return (
    <section>
      <h2 className="section-header">BEYOND TECH</h2>

      <div className="highlighted-section mb-6">
        <blockquote className="text-lg italic">
          "I engage with a diverse set of disciplines, approaching problems through a multidimensional lens."
        </blockquote>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interests.map((interest, index) => (
          <div key={index} className="card">
            <h3 className="font-bold text-xl mb-2">{interest.title}</h3>
            <p>{interest.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
