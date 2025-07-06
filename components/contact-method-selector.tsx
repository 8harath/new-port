"use client"

import React, { useState } from 'react'
import { Copy, Eye, EyeOff, Code2, Mail, Check } from 'lucide-react'

interface ObfuscatedEmailProps {
  className?: string
}

export function ObfuscatedEmail({ className = "" }: ObfuscatedEmailProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const [copied, setCopied] = useState(false)
  
  const emailParts = {
    x: "8harath",
    y: "k",
    domain: "gmail.com"
  }
  
  const actualEmail = `${emailParts.x}.${emailParts.y}@${emailParts.domain}`
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(actualEmail)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }
  
  return (
    <div className={`card ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <Mail className="w-4 h-4" />
        <span className="font-bold">Email Address</span>
        <Code2 className="w-4 h-4 text-amber-600" />
      </div>
      
      <div className="space-y-3">
        {/* Code Block Style */}
        <div className="border-2 border-gray-800 bg-gray-900 text-green-400 p-3 font-mono text-sm">
          <div className="text-gray-500 mb-2">// Decode to contact me:</div>
          <div className="space-y-1">
            <div>
              <span className="text-blue-300">const</span>{" "}
              <span className="text-yellow-300">x</span>{" "}
              <span className="text-white">=</span>{" "}
              <span className="text-red-300">"{emailParts.x}"</span>
            </div>
            <div>
              <span className="text-blue-300">const</span>{" "}
              <span className="text-yellow-300">y</span>{" "}
              <span className="text-white">=</span>{" "}
              <span className="text-red-300">"{emailParts.y}"</span>
            </div>
            <div className="text-gray-400">
              // Email: x.y@{emailParts.domain}
            </div>
          </div>
        </div>
        
        {/* Reveal/Copy Section */}
        <div className="flex gap-2">
          <button
            onClick={() => setIsRevealed(!isRevealed)}
            className="retro-button flex-1 flex items-center justify-center gap-2 text-sm"
          >
            {isRevealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {isRevealed ? 'Hide' : 'Reveal'} Email
          </button>
          
          <button
            onClick={handleCopy}
            className="retro-button px-3 flex items-center justify-center"
            title="Copy to clipboard"
          >
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
        
        {/* Revealed Email */}
        {isRevealed && (
          <div className="highlighted-section">
            <div className="font-mono text-center text-lg">
              {actualEmail}
            </div>
            <div className="text-center text-sm text-gray-600 mt-1">
              Click copy button above to copy to clipboard
            </div>
          </div>
        )}
        
        {copied && (
          <div className="bg-green-100 border-2 border-green-600 p-2 text-center text-sm">
            ✅ Email copied to clipboard!
          </div>
        )}
      </div>
    </div>
  )
}

export function CreativeEmailDisplay({ className = "" }: ObfuscatedEmailProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {/* Inline Code Style */}
      <div className="font-mono text-sm">
        <span className="bg-gray-200 border border-gray-400 px-2 py-1 rounded">
          x = 8harath
        </span>
        <span className="mx-2">•</span>
        <span className="bg-gray-200 border border-gray-400 px-2 py-1 rounded">
          y = k
        </span>
      </div>
      <div className="font-mono text-blue-600 font-bold">
        x.y@gmail.com
      </div>
    </div>
  )
}

export default function ContactMethodSelector() {
  return (
    <div className="space-y-6">
      <h3 className="section-header">Get In Touch</h3>
      
      <div className="grid gap-6">
        {/* Interactive Email Component */}
        <ObfuscatedEmail />
        
        {/* Alternative Methods */}
        <div className="card">
          <h4 className="font-bold mb-3">Alternative Contact Methods</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>LinkedIn Direct Message</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>GitHub Issues/Discussions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span>Contact Form Above</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
