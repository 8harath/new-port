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
      id: "vishvam-ai",
      company: "Vishvam.Ai",
      role: "AI Developer Intern",
      period: "March 2024",
      description: "Contributing to the development of the world's first Telugu LLM through crowdsourced data collection and model training.",
      details: {
        fullDescription:
          "As an AI Developer Intern at Vishvam.Ai, I am part of a groundbreaking initiative to develop the world's first Telugu Language Model. This crowdsourced project aims to create a comprehensive LLM that captures all the nuances of the Telugu language, enabling training from scratch through collaborative effort.",
        responsibilities: [
          "Collecting and curating Telugu language data for model training",
          "Implementing data preprocessing and cleaning pipelines",
          "Contributing to the development of data collection methodologies",
          "Participating in model training and evaluation processes",
          "Collaborating with the team to ensure comprehensive language coverage",
        ],
        technologies: ["Python", "NLP", "Data Collection Tools", "Machine Learning", "Natural Language Processing"],
        achievements: [
          "Contributing to the development of a unique Telugu language dataset",
          "Participating in the creation of the world's first Telugu LLM",
          "Working on a pioneering crowdsourced AI project",
        ],
        impact:
          "This project aims to make Telugu language AI more accessible and culturally relevant, potentially benefiting millions of Telugu speakers worldwide.",
      },
    },
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
      role: "Data Analytics Intern (Sustainability Focus)",
      period: "3 Months (Part-Time, Remote + On-Campus)",
      description: "Worked at the intersection of data analytics and environmental sustainability, analyzing university resource usage and creating actionable insights through Tableau dashboards.",
      details: {
        fullDescription:
          "During my internship with 1M1B (One Million for One Billion), I worked at the intersection of data analytics and environmental sustainability. My primary role involved gathering real-world data from my university on water consumption, electricity usage, and waste disposal, then analyzing it to identify key sustainability challenges. I translated this raw data into actionable insights using Tableau dashboards, backed by Python-driven data preprocessing. This hands-on project combined technical skills with community impact and aligned with national sustainability goals.",
        responsibilities: [
          "Collected sustainability-related datasets from university sources: energy usage, water consumption, waste management",
          "Preprocessed and cleaned the data using Python, ensuring it was analysis-ready",
          "Designed and developed interactive Tableau dashboards to visualize sustainability metrics and trends",
          "Researched national benchmarks and proposed practical data-backed solutions for improving campus sustainability",
          "Created detailed documentation and recommendations for the university administration to support long-term eco-initiatives",
          "Conducted peer-to-peer awareness activities to promote sustainable practices through data storytelling"
        ],
        technologies: ["Python", "Tableau", "Excel", "Data Visualization", "Sustainability Analytics"],
        achievements: [
          "Successfully built a custom Tableau dashboard that visualized real-time university sustainability metrics",
          "Presented solution-oriented reports aligned with government-mandated sustainability thresholds",
          "Bridged the gap between data science and environmental advocacy by turning local data into policy recommendations"
        ],
        impact:
          "Enabled the university to track, assess, and optimize resource usage through centralized visual tools. Supported 1M1B's broader mission to drive social impact using youth-led, data-driven innovation. Contributed to institutional planning and awareness campaigns that could scale to other academic environments.",
        keywords: [
          "Data analytics internship",
          "Sustainability data project",
          "Python data preprocessing",
          "Tableau dashboard for sustainability",
          "Student sustainability initiative",
          "Environmental data visualization",
          "Real-world data analytics",
          "1M1B internship experience",
          "Energy usage analytics",
          "University green campus solutions"
        ]
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
    <div className="space-y-8">
      <div>
        <h2 className="section-header">Education</h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.id} className="card">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-xl">{edu.institution}</h3>
                  <p className="text-gray-600">{edu.degree}</p>
                  {edu.specialization && <p className="text-gray-600">{edu.specialization}</p>}
                  <p className="text-sm text-gray-500">{edu.period}</p>
                </div>
                <button
                  onClick={() => openModal(edu.id)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Info size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="section-header">Experience</h2>
        <div className="space-y-6">
          {experience.map((exp) => (
            <div key={exp.id} className="card">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-xl">{exp.company}</h3>
                  <p className="text-gray-600">{exp.role}</p>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                  <p className="mt-2 text-gray-700">{exp.description}</p>
                </div>
                <button
                  onClick={() => openModal(exp.id)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Info size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeModal && (
        <Modal 
          isOpen={true}
          onClose={closeModal}
          title={
            education.find((edu) => edu.id === activeModal)
              ? `${education.find((edu) => edu.id === activeModal)!.institution} - ${education.find((edu) => edu.id === activeModal)!.degree}`
              : `${experience.find((exp) => exp.id === activeModal)!.company} - ${experience.find((exp) => exp.id === activeModal)!.role}`
          }
        >
          {education.find((edu) => edu.id === activeModal) && (
            <>{renderEducationModal(education.find((edu) => edu.id === activeModal)!)}</>
          )}
          {experience.find((exp) => exp.id === activeModal) && (
            <>{renderExperienceModal(experience.find((exp) => exp.id === activeModal)!)}</>
          )}
        </Modal>
      )}
    </div>
  )
}
