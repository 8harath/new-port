"use client"

import React, { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, MessageCircle, Sparkles, Brain, Code, Lightbulb } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'assistant'
  timestamp: Date
}

const predefinedQuestions = [
  "Tell me about Bharath's AI/ML projects",
  "What programming languages does he know?",
  "What are his current research interests?",
  "Tell me about his education and experience",
  "What certifications does he have?",
  "How can I contact Bharath?"
]

const sampleResponses: Record<string, string> = {
  "Tell me about Bharath's AI/ML projects": "Bharath has worked on several impressive AI/ML projects including a Telugu LLM initiative, diffusion models, image processing pipelines, and 3D environment reconstruction using LIDAR data. His work focuses on making AI systems interpretable, ethical, and human-aligned.",
  "What programming languages does he know?": "Bharath is proficient in Python (for AI/ML), JavaScript/TypeScript (for web development), and has experience with various frameworks like React, Next.js, TensorFlow, PyTorch, and more. He's particularly strong in AI/ML libraries and web technologies.",
  "What are his current research interests?": "Bharath's research focuses on Generative AI, Large Language Models (LLMs), Diffusion Models, ethical AI development, and distributed computing for ML training. He's particularly interested in creating culturally grounded AI systems and exploring AGI development.",
  "Tell me about his education and experience": "Bharath is a 3rd-year Computer Science undergraduate at Jain University. He's an active member of the university's R&D Club and contributes to India's first Telugu LLM initiative. He combines academic learning with practical research and development.",
  "What certifications does he have?": "Bharath has various certifications in AI/ML, software development, and emerging technologies. You can find the complete list in the Certifications section of this portfolio.",
  "How can I contact Bharath?": "You can reach Bharath through email (check the Contact section for the interactive email decoder), LinkedIn, or GitHub. He's also open to discussions about AI research, collaboration opportunities, and innovative projects."
}

export default function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Bharath's AI assistant. I can help you learn more about his projects, skills, experience, and research interests. Feel free to ask me anything!",
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
      return sampleResponses["Tell me about Bharath's AI/ML projects"]
    }
    if (input.includes('language') || input.includes('programming') || input.includes('code')) {
      return sampleResponses["What programming languages does he know?"]
    }
    if (input.includes('research') || input.includes('interest') || input.includes('ai') || input.includes('ml')) {
      return sampleResponses["What are his current research interests?"]
    }
    if (input.includes('education') || input.includes('experience') || input.includes('university')) {
      return sampleResponses["Tell me about his education and experience"]
    }
    if (input.includes('certification') || input.includes('certificate')) {
      return sampleResponses["What certifications does he have?"]
    }
    if (input.includes('contact') || input.includes('email') || input.includes('reach')) {
      return sampleResponses["How can I contact Bharath?"]
    }

    // Default responses
    const defaultResponses = [
      "That's an interesting question! Bharath's portfolio covers various aspects of AI research and software development. Could you be more specific about what you'd like to know?",
      "I'd be happy to help! You can ask me about his projects, skills, education, research interests, or how to contact him.",
      "Bharath has diverse experience in AI/ML and software development. What particular area would you like to explore?",
      "Feel free to ask about his AI research, programming projects, certifications, or professional background!"
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handlePredefinedQuestion = (question: string) => {
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
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="highlighted-section inline-block px-6 py-4 mb-4">
            <h1 className="text-3xl font-bold flex items-center justify-center gap-3">
              <MessageCircle className="w-8 h-8 text-blue-600" />
              Chat with Bharath's AI Assistant
              <Sparkles className="w-6 h-6 text-amber-500" />
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ask me anything about Bharath's projects, skills, research, or experience. 
            I'm here to help you learn more about his work in AI and software development!
          </p>
        </div>

        {/* Predefined Questions */}
        <div className="card mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold">Quick Questions</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {predefinedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handlePredefinedQuestion(question)}
                className="text-left p-3 rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 text-sm"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Container */}
        <div className="card">
          {/* Messages Area */}
          <div className="h-96 overflow-y-auto mb-4 p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${
                    message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-green-600 text-white'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4" />
                    )}
                  </div>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-white border-2 border-gray-300 rounded-tl-none'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white border-2 border-gray-300 rounded-lg rounded-tl-none px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about Bharath..."
              className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              disabled={isTyping}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isTyping}
              className="retro-button px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send
            </button>
          </div>
          
          {/* Footer Info */}
          <div className="mt-4 p-3 bg-amber-50 border-2 border-amber-200 rounded-lg">
            <div className="flex items-center gap-2 text-sm text-amber-800">
              <Brain className="w-4 h-4" />
              <span>
                This is a demo AI assistant. For detailed information, please explore the other sections 
                or use the contact methods in the Contact section.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 