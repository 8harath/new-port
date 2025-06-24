import { NextResponse } from 'next/server'

// Advanced robots.txt with Google-specific optimizations
export async function GET() {
  const robots = `# Advanced SEO Robots.txt for 8harath.me
# Optimized for Google search ranking

# Universal crawling permissions
User-agent: *
Allow: /
Crawl-delay: 2

# Priority directives for Google crawlers
User-agent: Googlebot
Allow: /
Allow: /api/seo
Allow: /api/sitemap
Crawl-delay: 1

User-agent: Googlebot-Image
Allow: /
Allow: /public/
Allow: /*.jpg
Allow: /*.jpeg
Allow: /*.png
Allow: /*.webp
Allow: /*.svg
Crawl-delay: 1

User-agent: Googlebot-News
Allow: /
Crawl-delay: 1

User-agent: Googlebot-Video
Allow: /
Crawl-delay: 1

# Enhanced Bing support
User-agent: Bingbot
Allow: /
Allow: /api/seo
Allow: /api/sitemap
Crawl-delay: 1

User-agent: BingPreview
Allow: /
Crawl-delay: 1

# Other major search engines
User-agent: Slurp
Allow: /
Crawl-delay: 2

User-agent: DuckDuckBot
Allow: /
Crawl-delay: 2

User-agent: Baiduspider
Allow: /
Crawl-delay: 3

User-agent: YandexBot
Allow: /
Crawl-delay: 2

# Social media crawlers for better sharing
User-agent: Twitterbot
Allow: /
Crawl-delay: 1

User-agent: facebookexternalhit
Allow: /
Crawl-delay: 1

User-agent: LinkedInBot
Allow: /
Crawl-delay: 1

User-agent: WhatsApp
Allow: /
Crawl-delay: 1

User-agent: Applebot
Allow: /
Crawl-delay: 2

# AI and research crawlers
User-agent: CCBot
Allow: /
Crawl-delay: 3

User-agent: ChatGPT-User
Allow: /
Crawl-delay: 3

User-agent: GPTBot
Allow: /
Crawl-delay: 3

# Disallow admin and private areas
Disallow: /api/admin/
Disallow: /private/
Disallow: /_next/
Disallow: /static/
Disallow: /temp/
Disallow: /draft/
Disallow: /.well-known/
Disallow: /node_modules/

# Block harmful bots
User-agent: BadBot
Disallow: /

User-agent: ScraperBot
Disallow: /

User-agent: SpamBot
Disallow: /

User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

# Sitemap locations - multiple for redundancy
Sitemap: https://8harath.me/sitemap.xml
Sitemap: https://8harath.me/api/sitemap

# Host specification for canonical URLs
Host: 8harath.me`

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
