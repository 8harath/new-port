import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Add comprehensive SEO headers
  response.headers.set('X-Robots-Tag', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  
  // Add cache control for better performance
  if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600')
  }
  
  // Add specific headers for homepage
  if (request.nextUrl.pathname === '/') {
    response.headers.set('X-Page-Type', 'homepage')
    response.headers.set('X-Primary-Keyword', '8harath')
    response.headers.set('X-Content-Language', 'en')
    response.headers.set('X-Geographic-Location', 'IN-KA')
  }
  
  // Ensure HTTPS redirect in production
  if (process.env.NODE_ENV === 'production' && request.headers.get('x-forwarded-proto') !== 'https') {
    return NextResponse.redirect(`https://${request.headers.get('host')}${request.nextUrl.pathname}`, 301)
  }
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
