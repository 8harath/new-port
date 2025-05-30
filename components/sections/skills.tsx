export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "SQL", "C++", "C"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["TensorFlow", "OpenCV", "Numpy", "Pandass"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Jupyter", "VS Code"],
    },
    {
      title: "Areas of Interest",
      skills: [
        "Machine Learning",
        "Natural Language Processing",
        "Generative AI",
        "Computer Vision",
        "Reinforcement Learning",
        "Data Analysis",
        "Data Visualization",
        "Web Development",
      ],
    },
  ]

  return (
    <section>
      <h2 className="section-header">SKILLS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="card">
            <h3 className="font-bold text-xl mb-3">{category.title}</h3>
            <ul className="list-disc pl-5 space-y-1">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
