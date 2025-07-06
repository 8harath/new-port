"use client"

import React, { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, MessageCircle } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'assistant'
  timestamp: Date
}

const quickQuestions = [
  "Tell me about your AI/ML projects",
  "What technologies do you work with?", 
  "What are your research interests?",
  "Tell me about your experience"
]

const sampleResponses: Record<string, string> = {
  "Tell me about your AI/ML projects": "I've worked on several AI/ML projects including a Telugu LLM initiative, diffusion models, image processing pipelines, and 3D environment reconstruction using LIDAR data. My work focuses on making AI systems interpretable, ethical, and human-aligned.",
  "What technologies do you work with?": "I'm proficient in Python for AI/ML, JavaScript/TypeScript for web development, and work with frameworks like React, Next.js, TensorFlow, PyTorch. I'm particularly strong in AI/ML libraries and modern web technologies.",
  "What are your research interests?": "My research focuses on Generative AI, Large Language Models (LLMs), Diffusion Models, ethical AI development, and distributed computing for ML training. I'm particularly interested in creating culturally grounded AI systems.",
  "Tell me about your experience": "I'm a 3rd-year Computer Science undergraduate at Jain University and an active member of the university's R&D Club. I contribute to India's first Telugu LLM initiative and combine academic learning with practical research."
}

export default function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm here to help you learn more about my projects, skills, and experience. What would you like to know?",
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
    for (const [question, response] of Object.entries(sampleResponses)) {
      if (input.includes(question.toLowerCase().slice(0, 10))) {
        return response
      }
    }

    // Keyword-based responses
    if (input.includes('project') || input.includes('work')) {
      return sampleResponses["Tell me about your AI/ML projects"]
    }
    if (input.includes('language') || input.includes('programming') || input.includes('code') || input.includes('tech')) {
      return sampleResponses["What technologies do you work with?"]
    }
    if (input.includes('research') || input.includes('interest') || input.includes('ai') || input.includes('ml')) {
      return sampleResponses["What are your research interests?"]
    }
    if (input.includes('education') || input.includes('experience') || input.includes('university')) {
      return sampleResponses["Tell me about your experience"]
    }
    if (input.includes('contact') || input.includes('email') || input.includes('reach')) {
      return "You can reach me through the contact methods listed in the Contact section of this portfolio. I'm always open to discussing AI research, collaboration opportunities, and innovative projects."
    }

    // Default responses
    const defaultResponses = [
      "That's an interesting question! I'd be happy to tell you more about my work in AI and software development. Could you be more specific?",
      "I'd be glad to help! You can ask me about my projects, skills, research interests, or experience.",
      "I have diverse experience in AI/ML and software development. What particular area would you like to explore?",
      "Feel free to ask about my research, programming projects, or professional background!"
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
              <MessageCircle className="w-7 h-7 text-red-600" />
              Chat Assistant
            </h1>
          </div>
          <p className="text-gray-700 max-w-xl mx-auto">
            Ask me about my projects, skills, research, or experience.
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
                placeholder="Type your question..."
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
            ⚡ Demo Assistant • Explore other sections for detailed info
          </p>
        </div>
      </div>
    </section>
  )
} 