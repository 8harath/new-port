"use client"

import React, { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, Brain } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'assistant'
  timestamp: Date
}

const quickQuestions = [
  "Tell me about Bharath's AI/ML projects",
  "What technologies does Bharath work with?", 
  "What are Bharath's research interests?",
  "How can I contact Bharath?"
]

const areteResponses: Record<string, string> = {
  "Tell me about Bharath's AI/ML projects": "Bharath has worked on several impressive AI/ML projects! He's currently contributing to India's first Telugu LLM initiative, focusing on culturally grounded datasets and efficient training techniques. He's also worked on diffusion models, image processing pipelines, and 3D environment reconstruction using LIDAR data. His work emphasizes making AI systems interpretable, ethical, and human-aligned.",
  "What technologies does Bharath work with?": "Bharath is proficient in Python for AI/ML development, JavaScript/TypeScript for web development, and works extensively with frameworks like React, Next.js, TensorFlow, and PyTorch. He's particularly strong in AI/ML libraries, distributed computing, and modern web technologies. He also has experience with LIDAR data processing and blockchain technologies.",
  "What are Bharath's research interests?": "Bharath's research focuses on several cutting-edge areas: Generative AI, Large Language Models (LLMs), Diffusion Models, and ethical AI development. He's particularly interested in distributed computing for ML training, creating culturally grounded AI systems, and exploring AGI development. As a member of his university's R&D Club, he engages in experimental projects that blend scientific depth with real-world impact.",
  "How can I contact Bharath?": "You can reach Bharath through several channels! Check out the Contact section for his interactive email decoder, or connect with him on LinkedIn and GitHub. He's always open to discussing AI research, collaboration opportunities, and innovative projects. He's particularly interested in conversations about ethical AI, Telugu language models, and cutting-edge research collaborations."
}

export default function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Arete, Bharath's AI assistant. I can help you learn more about his projects, skills, research interests, and experience. What would you like to know about Bharath?",
      sender: 'assistant',
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      const response = getAIResponse(userMessage.text)
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'assistant',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1500)
  }

  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    // Check for exact matches first
    for (const [question, response] of Object.entries(areteResponses)) {
      if (input.includes(question.toLowerCase().slice(0, 15))) {
        return response
      }
    }

    // Keyword-based responses
    if (input.includes('project') || input.includes('work')) {
      return areteResponses["Tell me about Bharath's AI/ML projects"]
    }
    if (input.includes('language') || input.includes('programming') || input.includes('code') || input.includes('tech')) {
      return areteResponses["What technologies does Bharath work with?"]
    }
    if (input.includes('research') || input.includes('interest') || input.includes('ai') || input.includes('ml')) {
      return areteResponses["What are Bharath's research interests?"]
    }
    if (input.includes('education') || input.includes('experience') || input.includes('university') || input.includes('background')) {
      return "Bharath is a 3rd-year Computer Science undergraduate at Jain University in Bangalore. He's an active member of the university's R&D Club and has been contributing to cutting-edge research projects. He combines academic learning with practical research and development, focusing on AI/ML applications and real-world problem solving."
    }
    if (input.includes('contact') || input.includes('email') || input.includes('reach')) {
      return areteResponses["How can I contact Bharath?"]
    }
    if (input.includes('certification') || input.includes('certificate')) {
      return "Bharath has earned various certifications in AI/ML, software development, and emerging technologies. You can find the complete list with details in the Certifications section of this portfolio. His certifications span across machine learning, web development, cloud technologies, and specialized AI frameworks."
    }
    if (input.includes('arete') || input.includes('who are you') || input.includes('assistant')) {
      return "I'm Arete, Bharath's AI assistant! I'm named after the ancient Greek concept of excellence and virtue. I'm here to help you learn about Bharath's work, projects, and expertise. Think of me as your guide through his portfolio and achievements!"
    }
    if (input.includes('telugu') || input.includes('llm') || input.includes('language model')) {
      return "Bharath is contributing to India's first Telugu LLM initiative! This is particularly exciting as it focuses on creating culturally grounded AI systems. He's working on dataset design and exploring efficient training techniques with distributed compute. This project showcases his expertise in both AI development and cultural sensitivity in machine learning."
    }
    if (input.includes('philosophy') || input.includes('beyond tech') || input.includes('interests')) {
      return "Beyond his technical work, Bharath has a deep interest in philosophy, systems theory, and the intersection of technology with human values. He explores connections between abstract philosophical concepts and practical applications, particularly in areas like blockchain, neuro-AI, and ethical AI development."
    }
    if (input.includes('collaboration') || input.includes('work together') || input.includes('hire')) {
      return "Bharath is always open to collaboration opportunities! He's particularly interested in AI research projects, innovative software development, and work that combines technical excellence with ethical considerations. You can reach out through the contact methods in the Contact section to discuss potential collaborations."
    }

    // Default responses from Arete's perspective
    const defaultResponses = [
      "That's an interesting question about Bharath! I'd be happy to tell you more about his work in AI and software development. Could you be more specific about what aspect interests you?",
      "I'd be glad to help you learn more about Bharath! You can ask me about his projects, technical skills, research interests, or how to get in touch with him.",
      "Bharath has diverse experience in AI/ML and software development. What particular area of his work would you like to explore?",
      "Feel free to ask me about Bharath's research, programming projects, certifications, or professional background. I'm here to help!",
      "As Bharath's assistant, I can share details about his AI research, Telugu LLM project, technical expertise, or academic journey. What interests you most?"
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleQuickQuestion = (question: string) => {
    setInputText(question)
    inputRef.current?.focus()
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <section className="min-h-screen py-8" id="chat">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="highlighted-section inline-block px-6 py-4 mb-4">
            <h1 className="text-3xl font-bold flex items-center justify-center gap-3">
              <Brain className="w-7 h-7 text-red-600" />
              Arete - Bharath's AI Assistant
            </h1>
          </div>
          <p className="text-gray-700 max-w-xl mx-auto">
            Ask me about Bharath's projects, skills, research, or experience.
          </p>
        </div>

        {/* Quick Questions */}
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuickQuestion(question)}
                className="retro-button text-left p-3 text-sm transition-all duration-300 hover:scale-105"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Container */}
        <div className="card shadow-lg">
          {/* Messages Area */}
          <div className="h-80 overflow-y-auto mb-4 p-4 bg-amber-50 border-2 border-gray-400 custom-scrollbar">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${
                    message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div className={`flex-shrink-0 w-8 h-8 border-2 border-gray-800 rounded-full flex items-center justify-center transition-transform hover:scale-110 ${
                    message.sender === 'user' 
                      ? 'bg-amber-300 text-gray-800' 
                      : 'bg-gray-200 text-gray-800'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4" />
                    )}
                  </div>
                  <div className={`max-w-xs lg:max-w-sm border-2 border-gray-800 px-3 py-2 transition-all duration-300 hover:shadow-md ${
                    message.sender === 'user'
                      ? 'bg-amber-200 text-gray-900'
                      : 'bg-gray-100 text-gray-900'
                  }`} style={{
                    boxShadow: '2px 2px 0px rgba(0, 0, 0, 0.3)'
                  }}>
                    <p className="text-sm font-mono">{message.text}</p>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 border-2 border-gray-800 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center animate-pulse">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-gray-100 border-2 border-gray-800 px-3 py-2" style={{
                    boxShadow: '2px 2px 0px rgba(0, 0, 0, 0.3)'
                  }}>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t-2 border-gray-400 pt-4">
            <div className="flex gap-3">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about Bharath..."
                className="flex-1 px-3 py-2 border-2 border-gray-800 bg-amber-50 text-gray-900 font-mono text-sm focus:bg-white focus:border-amber-600 transition-all duration-300 outline-none"
                disabled={isTyping}
                style={{
                  boxShadow: 'inset 2px 2px 4px rgba(0, 0, 0, 0.1)'
                }}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="retro-button px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm"
              >
                <Send className="w-4 h-4" />
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-600 font-mono bg-amber-100 border border-gray-400 px-3 py-1 inline-block">
            🤖 Arete AI Assistant • Powered by Bharath's knowledge base
          </p>
        </div>
      </div>
    </section>
  )
} 