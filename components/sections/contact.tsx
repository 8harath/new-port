"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { Send, Loader2, Twitter, Instagram, Linkedin, Github, ExternalLink } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [charCount, setCharCount] = useState(0)
  const maxChars = 500

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    if (name === "message") {
      setCharCount(value.length)
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      // EmailJS credentials configured
      const SERVICE_ID = "service_6yd60g2"
      const TEMPLATE_ID = "template_hdv2629"
      const USER_ID = "qx2jxijBdwq8Vvg0C"

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        USER_ID
      )

      setStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setCharCount(0)

      setTimeout(() => {
        setStatus("idle")
      }, 3000)
    } catch (error) {
      console.error("Error sending email:", error)
      setStatus("error")
      setTimeout(() => {
        setStatus("idle")
      }, 3000)
    }
  }

  // Social media links
  const socialLinks = [
    { name: "X", icon: <Twitter className="w-5 h-5" />, url: "https://twitter.com/8harath_k" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, url: "https://www.instagram.com/8harath.k/" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/8harath/" },
    { name: "GitHub", icon: <Github className="w-5 h-5" />, url: "https://github.com/8harath" },
    { name: "Hugging Face", icon: <ExternalLink className="w-5 h-5" />, url: "https://huggingface.co/8harath" },
    { name: "Bento", icon: <ExternalLink className="w-5 h-5" />, url: "https://bento.me/8harath" },
  ]

  return (
    <section>
      <h2 className="section-header">CONTACT</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="card h-full">
          <h3 className="font-bold text-xl mb-6">Get In Touch</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-bold mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-800 p-2 bg-amber-50"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-bold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-800 p-2 bg-amber-50"
              />
            </div>


            <div>
              <label htmlFor="subject" className="block font-bold mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-800 p-2 bg-amber-50"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-bold mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                maxLength={maxChars}
                rows={5}
                className="w-full border-2 border-gray-800 p-2 bg-amber-50"
              ></textarea>
              <div className="text-right text-sm mt-1">
                {charCount}/{maxChars} characters
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="retro-button w-full flex items-center justify-center"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </button>

            {status === "success" && (
              <div className="bg-green-100 border border-green-600 p-2 text-center">Message sent successfully!</div>
            )}

            {status === "error" && (
              <div className="bg-red-100 border border-red-600 p-2 text-center">
                Failed to send message. Please try again.
              </div>
            )}
          </form>
        </div>

        <div className="card h-full">
          
          {/* Personal Message - Featured prominently */}
          <div className="mb-8 p-6 bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-400 rounded-lg shadow-sm">
            <div className="text-center mb-4">
              <h4 className="font-bold text-lg text-gray-800 mb-3">Professional Discussion</h4>
            </div>
            <div className="space-y-3 text-gray-700">
              <p className="leading-relaxed font-medium">
                I welcome conversations about <strong>artificial intelligence, AGI research, philosophy, cryptocurrency</strong>, and emerging technologies.
              </p>
              <p className="leading-relaxed">
                I'm always open to <em>meaningful discussions</em> and professional collaboration.
              </p>
            </div>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-800">Find Me On</h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-button flex items-center justify-center text-sm py-3"
                >
                  {social.icon}
                  <span className="ml-2">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Response Time Info */}
          <div className="mt-6 p-3 bg-gray-100 border border-gray-400 rounded text-center">
            <p className="text-sm text-gray-600">
              <strong>Response Time:</strong> Usually within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
