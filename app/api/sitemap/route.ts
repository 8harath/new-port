import { NextResponse } from 'next/server'

// Dynamic sitemap API route with advanced SEO optimization
export async function GET() {
  const baseUrl = 'https://8harath.me'
  const currentDate = new Date().toISOString()
  
  // Dynamic sitemap with enhanced priority and frequency settings
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
                            http://www.google.com/schemas/sitemap-image/1.1
                            http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd">
  
  <!-- Main Page - Primary landing for 8harath keyword -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${baseUrl}/og-image.jpg</image:loc>
      <image:title>8harath - AI Researcher &amp; Software Developer Portfolio</image:title>
      <image:caption>Professional portfolio of 8harath showcasing expertise in AI research and software development</image:caption>
    </image:image>
  </url>

  <!-- About Section -->
  <url>
    <loc>${baseUrl}/#about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>

  <!-- Skills Section -->
  <url>
    <loc>${baseUrl}/#skills</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.90</priority>
  </url>

  <!-- Projects Section -->
  <url>
    <loc>${baseUrl}/#projects</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.95</priority>
  </url>

  <!-- Experience Section -->
  <url>
    <loc>${baseUrl}/#experience</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.90</priority>
  </url>

  <!-- Education Section -->
  <url>
    <loc>${baseUrl}/#education</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>

  <!-- Certifications Section -->
  <url>
    <loc>${baseUrl}/#certifications</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.90</priority>
  </url>

  <!-- Contact Section -->
  <url>
    <loc>${baseUrl}/#contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>

  <!-- Beyond Tech Section -->
  <url>
    <loc>${baseUrl}/#beyond-tech</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.80</priority>
  </url>

  <!-- SEO API Endpoint -->
  <url>
    <loc>${baseUrl}/api/seo</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.75</priority>
  </url>

</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
