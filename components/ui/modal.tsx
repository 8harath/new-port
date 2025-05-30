"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
      // Prevent body scrolling when modal is open
      document.body.style.overflow = "hidden"
    } else {
      // Allow scrolling when modal is closed
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(() => {
      onClose()
    }, 300) // Match this with the CSS transition duration
  }

  if (!isOpen && !isAnimating) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Backdrop with blur effect */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      ></div>

      {/* Modal content */}
      <div
        className={`relative w-full max-w-4xl max-h-[80vh] overflow-auto bg-amber-50 border-2 border-gray-800 p-6 transition-all duration-300 transform ${
          isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="flex justify-between items-center mb-4 border-b-2 border-gray-400 pb-2">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button onClick={handleClose} className="retro-button p-1" aria-label="Close modal">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="modal-content">{children}</div>

        <div className="mt-6 text-center">
          <button onClick={handleClose} className="retro-button">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
