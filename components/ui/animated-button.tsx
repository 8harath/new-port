import { ReactNode, useState } from 'react'

interface AnimatedButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'neural' | 'holographic' | 'dataflow'
  className?: string
  target?: string
  rel?: string
  ariaLabel?: string
  title?: string
}

export default function AnimatedButton({
  children,
  onClick,
  href,
  variant = 'neural',
  className = '',
  target,
  rel,
  ariaLabel,
  title
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const baseClasses = `
    relative font-mono border-2 border-primary bg-background px-6 py-3 text-lg
    transition-all duration-500 ease-out overflow-hidden cursor-pointer
    inline-flex items-center justify-center gap-2 group
    hover:transform hover:-translate-y-1 hover:translate-x-1
    active:transform active:translate-y-0.5 active:translate-x-0.5
    ${className}
  `

  const variantClasses = {
    neural: 'ai-button-neural border-primary hover:border-accent',
    holographic: 'ai-button-holo border-gradient',
    dataflow: 'ai-button-flow border-secondary hover:border-accent2'
  }

  const ButtonContent = () => (
    <>
      {/* Interactive neural nodes for neural variant */}
      {variant === 'neural' && (
        <div className="absolute inset-0 pointer-events-none">
          {isHovered && (
            <>
              <div 
                className="absolute w-1 h-1 bg-primary rounded-full animate-ping"
                style={{ 
                  top: '20%', 
                  left: '15%',
                  animationDelay: '0ms',
                  animationDuration: '1500ms'
                }}
              />
              <div 
                className="absolute w-1 h-1 bg-accent rounded-full animate-ping"
                style={{ 
                  top: '70%', 
                  right: '20%',
                  animationDelay: '300ms',
                  animationDuration: '1500ms'
                }}
              />
              <div 
                className="absolute w-1 h-1 bg-secondary rounded-full animate-ping"
                style={{ 
                  bottom: '30%', 
                  left: '70%',
                  animationDelay: '600ms',
                  animationDuration: '1500ms'
                }}
              />
            </>
          )}
        </div>
      )}

      {/* Holographic shimmer effect */}
      {variant === 'holographic' && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"
          />
        </div>
      )}

      {/* Data flow lines for dataflow variant */}
      {variant === 'dataflow' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {isHovered && (
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 60">
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
              <path 
                d="M0,30 Q50,10 100,30 T200,30" 
                stroke="url(#flowGradient)" 
                strokeWidth="2" 
                fill="none"
                className="animate-pulse"
                style={{ animationDuration: '2s' }}
              />
              <path 
                d="M0,30 Q50,50 100,30 T200,30" 
                stroke="url(#flowGradient)" 
                strokeWidth="1" 
                fill="none"
                className="animate-pulse"
                style={{ animationDuration: '2s', animationDelay: '0.5s' }}
              />
            </svg>
          )}
        </div>
      )}

      {/* Button content */}
      <span className="relative z-10 transition-all duration-300 group-hover:scale-105">
        {children}
      </span>

      {/* Glow effect on hover */}
      <div 
        className={`
          absolute inset-0 rounded-sm transition-all duration-300 -z-10
          ${isHovered ? 'shadow-lg shadow-primary/20' : ''}
          ${isActive ? 'shadow-sm shadow-primary/10' : ''}
        `}
      />
    </>
  )

  const commonProps = {
    className: `${baseClasses} ${variantClasses[variant]}`,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onMouseDown: () => setIsActive(true),
    onMouseUp: () => setIsActive(false),
    'aria-label': ariaLabel,
    title
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        {...commonProps}
      >
        <ButtonContent />
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      {...commonProps}
    >
      <ButtonContent />
    </button>
  )
}
