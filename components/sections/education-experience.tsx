"use client"

import { useState } from "react"
import Modal from "@/components/ui/modal"
import { Info } from "lucide-react"

type ExperienceDetails = {
  fullDescription: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  impact?: string;
  projects?: string[];
  keywords?: string[];
}

type EducationDetails = {
  description: string;
  courses: string[];
  achievements: string[];
  projects?: string[];
  activities?: string[];
  researchEngagement?: string[];
}

type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  details: ExperienceDetails;
}

type Education = {
  id: string;
  institution: string;
  degree: string;
  specialization: string;
  period: string;
  details: EducationDetails;
}

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
          "Pursuing a Bachelor of Computer Applications (BCA) with a specialization in Data Analytics at Jain University, Bangalore. Passionate about applied AI, data-driven systems, and research at the intersection of large language models and cognitive architectures. Currently involved in research programs focusing on Positioning, Navigation, and Tracking (PNT) and context-aware language models.",
        courses: [
          "Computer Networks",
          "Database Management Systems",
          "Data Structures",
          "Software Engineering",
          "Data Analytics",
          "Probability and Statistics",
          "Programming in Python",
          "Programming in C",
          "Programming in Java",
        ],
        achievements: [
          "Selected for the STAR-PNT Research Program, a collaborative initiative hosted by IIT Tirupati and facilitated by JAIN (Deemed-to-be University), with mentorship from leading faculty in the domain of Positioning, Navigation, and Tracking (PNT) systems",
          "Research & Development Associate at Navarith, the university's student research forum; working on LLM context window optimization and memory-efficient architecture design",
        ],
        projects: [
          "Advanced Smart Parking Detection System\nDeveloped a vision-based detection system to identify vacant parking spaces in real-time using computer vision and spatial analysis. Technologies: Python, OpenCV, Pandas, Numpy",
          "Online Voting System\nBuilt a secure digital voting platform with integrated authentication and real-time vote counting. Technologies: MySQL, PHP, HTML/CSS, JavaScript",
          "Academic Resource Portal\nCreated a centralized academic resource hub for sharing notes, TLEP PDFs, lab files, and study materials for current and junior batches. Technologies: React, TypeScript, CSS, JavaScript, Vite, npm, Sass, ESLint, Prettier",
        ],
        researchEngagement: [
          "STAR-PNT Research Program\nParticipant in collaborative initiative with IIT Tirupati",
          "Research & Development Associate at Navarith\nUniversity's student research forum",
          "LLM Context Window Optimization\nWorking on LLM context window optimization and memory-efficient architecture design",
          "Positioning, Navigation, and Tracking (PNT) Systems\nResearch focus on PNT systems",
          "Context-Aware Language Models\nDevelopment of context-aware language models",
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
      id: "star-pnt-iit",
      company: "Indian Institute of Technology, Tirupati",
      role: "STAR-PNT Summer Research Intern",
      period: "Jul 2025 - Present",
      description: "Engaged in research and development activities at the intersection of satellite navigation, embedded systems, and signal intelligence through the prestigious STAR-PNT Summer Internship Program.",
      details: {
        fullDescription:
          "As a selected intern for the prestigious STAR-PNT Summer Internship Program, I am engaged in research and development activities at the intersection of satellite navigation, embedded systems, and signal intelligence. The program is hosted by IIT Tirupati and facilitated by JAIN (Deemed-to-be University), with guidance from leading faculty in the field of Positioning, Navigation, and Tracking (PNT) systems.",
        responsibilities: [
          "Conducting research on satellite navigation systems and signal processing techniques",
          "Developing embedded systems solutions for PNT applications",
          "Analyzing signal intelligence data and implementing processing algorithms",
          "Collaborating with faculty and research teams on cutting-edge navigation technologies",
          "Contributing to research publications and technical documentation",
          "Participating in hands-on laboratory experiments and field testing"
        ],
        technologies: ["Satellite Navigation", "Embedded Systems", "Signal Processing", "MATLAB", "Python", "C/C++", "GNSS", "Signal Intelligence"],
        achievements: [
          "Selected for the highly competitive STAR-PNT Summer Internship Program",
          "Working directly with leading faculty in PNT systems research",
          "Contributing to advanced research in satellite navigation and signal intelligence",
          "Gaining hands-on experience with state-of-the-art navigation technologies"
        ],
        impact:
          "Contributing to the advancement of satellite navigation technologies and signal intelligence systems that have applications in defense, aerospace, and civilian navigation systems. The research contributes to India's strategic capabilities in positioning and navigation technologies.",
        keywords: [
          "STAR-PNT internship",
          "IIT Tirupati research",
          "satellite navigation research",
          "embedded systems development",
          "signal intelligence",
          "PNT systems",
          "GNSS research",
          "navigation technology",
          "signal processing research",
          "aerospace engineering"
        ]
      },
    },
    {
      id: "vishvam-ai",
      company: "Vishvam.Ai",
      role: "AI Developer Intern",
      period: "May 2025 - Present",
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
      period: "Dec 2024 - Jun 2025",
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
      company: "MonoSpace",
      role: "AI/ML Intern – Event Personalization Startup",
      period: "Jan 2025 - Apr 2025",
      description: "Contributing to the development of a consumer-facing product using diffusion models and 3D reconstruction for event visualization.",
      details: {
        fullDescription: "At this AI-driven event personalization startup, I worked as an AI/ML Intern contributing to the development of a consumer-facing product that used diffusion models and 3D reconstruction to visually simulate customized events. The platform enabled users to select highly specific event preferences—like floral themes, table layouts, lighting, and guest count—and receive realistic image previews of their event setup. My role combined model fine-tuning, backend automation, and LiDAR-based 3D space conversion, allowing for a fully immersive event planning experience.",
        responsibilities: [
          "Collaborated on integrating diffusion models to generate images from user-defined event specifications (e.g., décor style, seating, themes)",
          "Explored and tested open-source model fine-tuning techniques to adapt pretrained image-generation models for event-specific outputs",
          "Automated backend workflows to streamline image generation, model inference, and result delivery",
          "Assisted with image dataset curation for model training and fine-tuning to improve style consistency and prompt accuracy",
          "Worked on 3D conversion using LiDAR, transforming real-world event spaces into immersive digital environments to preview layouts pre-booking",
          "Contributed to end-to-end system integration, connecting frontend user inputs with backend AI outputs"
        ],
        technologies: [
          "Diffusion Models",
          "LiDAR",
          "Python",
          "Flask",
          "OpenCV",
          "Hugging Face",
          "PyTorch",
          "3D Point Cloud Processing"
        ],
        achievements: [
          "Successfully implemented prompt-based image generation pipeline that translated textual event descriptions into visual previews",
          "Enabled backend automation that reduced response time for user-generated mockups, improving user experience significantly",
          "Prototyped a pipeline for converting LiDAR scans into navigable 3D environments, helping clients virtually walk through event spaces"
        ],
        impact: "Helped deliver a real-time visual planning tool for customers to preview events before booking, bridging imagination and execution. Enhanced system scalability by optimizing backend automation for image generation and response delivery. Contributed to making event planning more accessible, data-driven, and visually reliable for end-users using cutting-edge AI.",
        keywords: [
          "AIML internship",
          "diffusion model fine-tuning",
          "event planning AI",
          "generative AI internship project",
          "LiDAR 3D conversion",
          "AI-powered image generation",
          "event mockup generation",
          "backend automation in AI",
          "PyTorch generative models",
          "real-time 3D visualization for events"
        ]
      }
    },
    {
      id: "1m1b",
      company: "1M1B",
      role: "Data Analytics Intern (Sustainability Focus)",
      period: "Nov 2024 - Mar 2025",
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

  const renderEducationModal = (edu: Education) => (
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
          <ul className="list-disc pl-5 space-y-3">
            {edu.details.projects.map((project, index) => {
              const [title, description] = project.split('\n');
              return (
                <li key={index}>
                  <div className="font-semibold">{title}</div>
                  <div className="text-gray-700 mt-1">{description}</div>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {edu.details.researchEngagement && (
        <div className="card">
          <h3 className="font-bold text-xl mb-2">Research Engagement</h3>
          <ul className="list-disc pl-5 space-y-3">
            {edu.details.researchEngagement.map((research, index) => {
              const [title, description] = research.split('\n');
              return (
                <li key={index}>
                  <div className="font-semibold">{title}</div>
                  <div className="text-gray-700 mt-1">{description}</div>
                </li>
              );
            })}
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

  const renderExperienceModal = (exp: Experience) => (
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
            {exp.details.projects.map((project: string, index: number) => (
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
            <>{renderExperienceModal(experience.find((exp) => exp.id === activeModal) as Experience)}</>
          )}
        </Modal>
      )}
    </div>
  )
}
