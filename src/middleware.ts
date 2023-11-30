import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// export const config = {
//     matcher: '/dashboard/',
// }

export function middleware(request: NextRequest) {
    let Auth = request.cookies.get('Auth')
    const { pathname } = request.nextUrl

    // if (!Auth) {
    //     console.log('no auth')
    //     if (
    //         !pathname.endsWith('/login') &&
    //         !pathname.match(/((?!\.well-known(?:\/.*)?)(?:[^/]+\/)*[^/]+\.\w+)/)
    //     ) {
    //         console.log('should go to login')
    //         request.nextUrl.pathname = '/auth/login'
    //         return NextResponse.redirect(request.nextUrl)
    //     } else {
    //         console.log('should go to dashoard')
    //         request.nextUrl.pathname = '/dashboard'
    //         return NextResponse.redirect(request.nextUrl)
    //     }
    // }

    //   if (request.nextUrl.pathname.startsWith('/')) {
    //     return NextResponse.rewrite(new URL('/auth/login', request.url))
    //   }
}