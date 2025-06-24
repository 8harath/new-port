// SEO and Performance Optimization Utilities
export class SEOOptimizer {
  private static instance: SEOOptimizer
  
  public static getInstance(): SEOOptimizer {
    if (!SEOOptimizer.instance) {
      SEOOptimizer.instance = new SEOOptimizer()
    }
    return SEOOptimizer.instance
  }

  // Track page views with enhanced SEO data
  public trackPageView(page: string): void {
    if (typeof window !== 'undefined') {
      // Google Analytics 4 tracking
      if ((window as any).gtag) {
        (window as any).gtag('event', 'page_view', {
          page_title: `8harath - ${page}`,
          page_location: window.location.href,
          content_group1: 'Portfolio',
          content_group2: 'AI Research',
          custom_parameter_8harath: true,
          engagement_time_msec: 0
        })
      }

      // Custom SEO tracking for search engines
      this.updateDocumentMeta(page)
      this.sendSEOSignals(page)
    }
  }

  // Update document metadata dynamically
  private updateDocumentMeta(page: string): void {
    if (typeof document !== 'undefined') {
      // Update title with keyword prominence
      document.title = `8harath | ${page} - AI Researcher & Software Developer`
      
      // Update meta description
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) {
        metaDesc.setAttribute('content', 
          `8harath - ${page} section showcasing expertise in AI research, software development, and machine learning technologies. Professional portfolio of 8harath.`
        )
      }

      // Update canonical URL
      let canonical = document.querySelector('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
      }
      canonical.setAttribute('href', `https://8harath.me${page === 'home' ? '' : `/#${page}`}`)

      // Add page-specific structured data
      this.addPageStructuredData(page)
    }
  }

  // Send SEO signals to search engines
  private sendSEOSignals(page: string): void {
    // Preload critical resources for better Core Web Vitals
    this.preloadCriticalResources()
    
    // Update breadcrumb navigation
    this.updateBreadcrumbs(page)
    
    // Track user engagement for SEO metrics
    this.trackEngagementMetrics()
  }

  // Add page-specific structured data
  private addPageStructuredData(page: string): void {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `https://8harath.me/#${page}`,
      "name": `8harath - ${page}`,
      "description": `Professional ${page} section of 8harath's portfolio showcasing AI research and software development expertise`,
      "url": `https://8harath.me/${page === 'home' ? '' : `#${page}`}`,
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://8harath.me/#website",
        "name": "8harath Portfolio"
      },
      "about": {
        "@type": "Person",
        "@id": "https://8harath.me/#person",
        "name": "8harath"
      },
      "dateModified": new Date().toISOString(),
      "potentialAction": {
        "@type": "ReadAction",
        "target": `https://8harath.me/#${page}`
      }
    }

    // Remove existing structured data script for this page
    const existingScript = document.querySelector(`script[data-page="${page}"]`)
    if (existingScript) {
      existingScript.remove()
    }

    // Add new structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-page', page)
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)
  }

  // Preload critical resources
  private preloadCriticalResources(): void {
    const resources = [
      { href: '/api/seo', as: 'fetch' },
      { href: '/api/metadata', as: 'fetch' },
      { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', as: 'style' }
    ]

    resources.forEach(resource => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = resource.href
      link.as = resource.as
      if (!document.querySelector(`link[href="${resource.href}"]`)) {
        document.head.appendChild(link)
      }
    })
  }

  // Update breadcrumb navigation for SEO
  private updateBreadcrumbs(page: string): void {
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "8harath Home",
          "item": "https://8harath.me/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": `${page.charAt(0).toUpperCase() + page.slice(1)}`,
          "item": `https://8harath.me/#${page}`
        }
      ]
    }

    let breadcrumbScript = document.querySelector('script[data-breadcrumb]')
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script')
      breadcrumbScript.type = 'application/ld+json'
      breadcrumbScript.setAttribute('data-breadcrumb', 'true')
      document.head.appendChild(breadcrumbScript)
    }
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData)
  }

  // Track engagement metrics for SEO
  private trackEngagementMetrics(): void {
    let startTime = Date.now()
    let engaged = false

    // Track scroll depth
    const trackScrollDepth = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
      if (scrollPercent > 25 && !engaged) {
        engaged = true
        if ((window as any).gtag) {
          (window as any).gtag('event', 'scroll', {
            percent_scrolled: scrollPercent,
            engagement_time_msec: Date.now() - startTime,
            custom_parameter_8harath_engaged: true
          })
        }
      }
    }

    // Track time on page
    const trackTimeOnPage = () => {
      const timeSpent = Date.now() - startTime
      if (timeSpent > 30000) { // 30 seconds
        if ((window as any).gtag) {
          (window as any).gtag('event', 'timing_complete', {
            name: 'page_engagement',
            value: timeSpent,
            custom_parameter_8harath_time: true
          })
        }
      }
    }

    window.addEventListener('scroll', trackScrollDepth, { passive: true })
    window.addEventListener('beforeunload', trackTimeOnPage)
    setTimeout(trackTimeOnPage, 30000)
  }

  // Initialize SEO optimizations
  public initialize(): void {
    if (typeof window !== 'undefined') {
      // Set up intersection observer for lazy loading and engagement tracking
      this.setupIntersectionObserver()
      
      // Optimize images for better Core Web Vitals
      this.optimizeImages()
      
      // Setup performance monitoring
      this.setupPerformanceMonitoring()
    }
  }

  private setupIntersectionObserver(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement
          const section = element.id || element.getAttribute('data-section')
          if (section) {
            this.trackPageView(section)
          }
        }
      })
    }, { threshold: 0.5 })

    // Observe all main sections
    document.querySelectorAll('section[id], [data-section]').forEach(section => {
      observer.observe(section)
    })
  }

  private optimizeImages(): void {
    document.querySelectorAll('img').forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy'
      }
      if (!img.decoding) {
        img.decoding = 'async'
      }
    })
  }

  private setupPerformanceMonitoring(): void {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
      // Track LCP, FID, CLS for SEO performance
      const vitalsData = {
        url: window.location.href,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        connectionType: (navigator as any).connection?.effectiveType
      }

      // Send to analytics for SEO performance tracking
      if ((window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', vitalsData)
      }
    }
  }
}

// Export singleton instance
export const seoOptimizer = SEOOptimizer.getInstance()
