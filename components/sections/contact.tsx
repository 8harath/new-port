"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { Send, Loader2, Twitter, Instagram, Linkedin, Github, ExternalLink } from "lucide-react"
import emailjs from "emailjs-com"

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
    { name: "X (Twitter)", icon: <Twitter className="w-5 h-5" />, url: "https://twitter.com/8harath_k" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, url: "https://www.instagram.com/8harath.k/" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/8harath/" },
    { name: "GitHub", icon: <Github className="w-5 h-5" />, url: "https://github.com/8harath" },
    { name: "Hugging Face", icon: <ExternalLink className="w-5 h-5" />, url: "https://huggingface.co/8harath" },
    { name: "Bento", icon: <ExternalLink className="w-5 h-5" />, url: "https://bento.me/8harath" },
  ]

  return (
    <section>
      <h2 className="section-header">CONTACT</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="card">
          <h3 className="font-bold text-xl mb-4">Get In Touch</h3>
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

        <div className="card">
          <h3 className="font-bold text-xl mb-4">Connect With Me</h3>
          <div className="grid grid-cols-2 gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="retro-button flex items-center justify-center"
              >
                {social.icon}
                <span className="ml-2">{social.name}</span>
              </a>
            ))}
          </div>
          <div className="mt-8">
            <h4 className="font-bold mb-2">Email</h4>
            <p>8harath.k@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}
