"use client"

import { useState } from "react"
import Modal from "@/components/ui/modal"
import { Info } from "lucide-react"

export default function EducationExperience() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const education = [
    {
      id: "jain-university",
      institution: "Jain (Deemed-to-be University)",
      degree: "Bachelor's in Computer Application",
      specialization: "Data Analytics",
      period: "2023–2026",
      details: {
        description:
          "Pursuing a comprehensive degree focused on computer applications with a specialization in Data Analytics.",
        courses: [
          "Advanced Data Structures and Algorithms",
          "Machine Learning Fundamentals",
          "Database Management Systems",
          "Statistical Methods for Data Science",
          "Web Development Technologies",
          "Cloud Computing Principles",
        ],
        achievements: [
          "Dean's List for academic excellence (2023-2024)",
          "Selected for the university's competitive AI Research Program",
          "Represented the university at the National Collegiate Programming Contest",
        ],
        projects: [
          "Developed a predictive analytics dashboard for student performance metrics",
          "Created a machine learning model to analyze campus resource utilization",
        ],
      },
    },
    {
      id: "jain-pu",
      institution: "Jain PU College",
      degree: "Pre-University Education",
      specialization: "",
      period: "2021–2023",
      details: {
        description:
          "Completed pre-university education with a focus on science and mathematics, establishing a strong foundation for higher studies in computer science.",
        courses: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English"],
        achievements: [
          "Graduated with distinction (90% aggregate)",
          "Winner of the Inter-College Science Project Competition",
          "Active member of the Coding Club",
        ],
        activities: [
          "Organized and led the annual technology symposium",
          "Volunteered for digital literacy programs in local communities",
        ],
      },
    },
    {
      id: "alvas-central-school",
      institution: "Alvas Central School",
      degree: "High School",
      specialization: "Science",
      period: "2011–2021",
      details: {
        description:
          "Completed high school education with a focus on science, participating in various academic and extracurricular activities.",
        courses: ["Mathematics", "Science", "English", "Social Studies", "Computer Science"],
        achievements: [
          "Graduated with distinction",
          "Winner of the School Science Quiz",
          "Active member of the School Science Club",
        ],
        activities: [
          "Participated in inter-school science exhibitions",
          "Volunteered for school events and community outreach programs",
        ],
      },
    },
  ]

  const experience = [
    {
      id: "genx-reality",
      company: "GenX Reality",
      role: "Generative AI Intern",
      period: "May 2025",
      description: "Worked on developing and fine-tuning generative models for virtual reality applications.",
      details: {
        fullDescription:
          "As a Generative AI Intern at GenX Reality, I worked on cutting-edge applications of generative models in virtual reality environments. I collaborated with a team of AI researchers and VR developers to create immersive, dynamically generated virtual experiences.",
        responsibilities: [
          "Developed and fine-tuned generative models for creating realistic virtual environments",
          "Implemented real-time texture and object generation algorithms",
          "Optimized model performance for VR hardware constraints",
          "Conducted user testing and gathered feedback on generated content quality",
        ],
        technologies: ["PyTorch", "Unity3D", "CUDA", "Stable Diffusion", "OpenXR"],
        achievements: [
          "Reduced model inference time by 40% through optimization techniques",
          "Contributed to a patent-pending method for real-time environment generation",
          "Presented findings at the company's quarterly technology showcase",
        ],
      },
    },
    {
      id: "monospace",
      company: "Monospace",
      role: "AI & ML Intern",
      period: "March 2025",
      description: "Implemented machine learning algorithms for data analysis and prediction in fintech applications.",
      details: {
        fullDescription:
          "At Monospace, I worked with the AI team to develop and implement machine learning solutions for financial technology applications. The role involved analyzing large financial datasets and creating predictive models to enhance decision-making processes.",
        responsibilities: [
          "Developed machine learning models for financial risk assessment",
          "Created data pipelines for processing and analyzing financial transactions",
          "Implemented anomaly detection systems for fraud prevention",
          "Collaborated with the product team to integrate ML features into the main application",
        ],
        technologies: ["Python", "TensorFlow", "Pandas", "SQL", "Docker", "AWS SageMaker"],
        achievements: [
          "Improved fraud detection accuracy by 22% compared to previous systems",
          "Developed a recommendation engine that increased user engagement by 15%",
          "Created comprehensive documentation for the ML pipeline",
        ],
        projects: [
          "Transaction Anomaly Detection System",
          "Customer Churn Prediction Model",
          "Automated Financial Report Generator",
        ],
      },
    },
    {
      id: "1m1b",
      company: "1M1B",
      role: "Data Analyst Intern",
      period: "February 2025",
      description: "Analyzed large datasets to extract insights and create visualizations for decision-making.",
      details: {
        fullDescription:
          "As a Data Analyst Intern at 1M1B (One Million for One Billion), I worked on analyzing impact data from various social initiatives. The role involved processing diverse datasets, extracting meaningful insights, and creating visualizations to support strategic decision-making.",
        responsibilities: [
          "Collected and cleaned data from multiple sources",
          "Performed statistical analysis to identify patterns and trends",
          "Created interactive dashboards and visualizations",
          "Prepared reports and presentations for stakeholders",
          "Assisted in developing data collection methodologies",
        ],
        technologies: ["Python", "R", "Tableau", "Excel", "SQL", "Power BI"],
        achievements: [
          "Developed an automated reporting system that saved 10+ hours of manual work weekly",
          "Identified key factors contributing to program success across different demographics",
          "Created a visualization framework adopted by the entire organization",
        ],
        impact:
          "My analysis helped the organization optimize resource allocation across programs, resulting in a 30% increase in overall impact metrics.",
      },
    },
  ]

  const openModal = (id: string) => {
    setActiveModal(id)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  const renderEducationModal = (edu: (typeof education)[0]) => (
    <div className="space-y-4">
      <div className="card">
        <h3 className="font-bold text-xl mb-2">Overview</h3>
        <p>{edu.details.description}</p>
      </div>

      <div className="card">
        <h3 className="font-bold text-xl mb-2">Courses</h3>
        <ul className="list-disc pl-5 space-y-1">
          {edu.details.courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3 className="font-bold text-xl mb-2">Achievements</h3>
        <ul className="list-disc pl-5 space-y-1">
          {edu.details.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>

      {edu.details.projects && (
        <div className="card">
          <h3 className="font-bold text-xl mb-2">Projects</h3>
          <ul className="list-disc pl-5 space-y-1">
            {edu.details.projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
      )}

      {edu.details.activities && (
        <div className="card">
          <h3 className="font-bold text-xl mb-2">Activities</h3>
          <ul className="list-disc pl-5 space-y-1">
            {edu.details.activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )

  const renderExperienceModal = (exp: (typeof experience)[0]) => (
    <div className="space-y-4">
      <div className="card">
        <h3 className="font-bold text-xl mb-2">Overview</h3>
        <p>{exp.details.fullDescription}</p>
      </div>

      <div className="card">
        <h3 className="font-bold text-xl mb-2">Responsibilities</h3>
        <ul className="list-disc pl-5 space-y-1">
          {exp.details.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3 className="font-bold text-xl mb-2">Technologies Used</h3>
        <div className="flex flex-wrap gap-2">
          {exp.details.technologies.map((tech, index) => (
            <span key={index} className="bg-amber-100 border border-amber-600 px-2 py-1 text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="card">
        <h3 className="font-bold text-xl mb-2">Key Achievements</h3>
        <ul className="list-disc pl-5 space-y-1">
          {exp.details.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>

      {exp.details.projects && (
        <div className="card">
          <h3 className="font-bold text-xl mb-2">Projects</h3>
          <ul className="list-disc pl-5 space-y-1">
            {exp.details.projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
      )}

      {exp.details.impact && (
        <div className="card">
          <h3 className="font-bold text-xl mb-2">Impact</h3>
          <p>{exp.details.impact}</p>
        </div>
      )}
    </div>
  )

  return (
    <section>
      <h2 className="section-header">EDUCATION & EXPERIENCE</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div>
          <h3 className="font-bold text-xl mb-4 border-b border-gray-400 pb-1">Education</h3>

          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="card flex flex-col h-full">
                <h3 className="font-bold text-lg mb-1">{edu.institution}</h3>
                <p className="mb-1">{edu.degree}{edu.specialization && `, ${edu.specialization}`}</p>
                <p className="mb-2 text-sm text-gray-600">{edu.period}</p>
                <div className="flex-grow" />
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => openModal(edu.id)}
                    className="retro-button flex items-center justify-center"
                  >
                    <Info className="w-4 h-4 mr-1" />
                    More Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4 border-b border-gray-400 pb-1">Experience</h3>

          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index} className="card">
                <h4 className="font-bold text-lg">{exp.company}</h4>
                <p className="font-bold">{exp.role}</p>
                <p className="text-sm">{exp.period}</p>
                <p className="mt-2">{exp.description}</p>
                <div className="mt-3">
                  <button onClick={() => openModal(exp.id)} className="retro-button flex items-center text-sm">
                    <Info className="w-4 h-4 mr-1" />
                    More Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education Modals */}
      {education.map((edu) => (
        <Modal
          key={edu.id}
          isOpen={activeModal === edu.id}
          onClose={closeModal}
          title={`${edu.institution} - ${edu.degree}`}
        >
          {renderEducationModal(edu)}
        </Modal>
      ))}

      {/* Experience Modals */}
      {experience.map((exp) => (
        <Modal key={exp.id} isOpen={activeModal === exp.id} onClose={closeModal} title={`${exp.company} - ${exp.role}`}>
          {renderExperienceModal(exp)}
        </Modal>
      ))}
    </section>
  )
}
