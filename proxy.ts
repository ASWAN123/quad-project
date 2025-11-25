// proxy.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const validRoutes = [
  '/',
  '/experiences/quad-biking-and-camel-ride-in-the-agafay-desert',
  '/gallery',
  '/stories',
  '/contact',
  '/about',
  '/guides',
  '/safety',
  '/sustainability',
  '/faq',
  '/booking-policy',
  '/privacy',
]

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path is valid
  const isValidRoute = validRoutes.some(route => {
    if (route === '/' && pathname === '/') return true
    return pathname.startsWith(route + '/') || pathname === route
  })

  // If it's not a valid route, redirect to home
  if (!isValidRoute) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images/|sitemap.xml|robots.txt|.*\\..*).*)',
  ],
}