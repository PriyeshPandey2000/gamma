import { NextResponse } from 'next/server';

export function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === '/Login' || path === '/Signup' || path === '/verify';

  const token = request.cookies.get('token')?.value || '';

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/Login', request.nextUrl));
  }
}

export const config = {
  matcher: [
    '/',
    '/profile',
    '/Login',
    '/Signup',
    '/verifyemail'
  ]
};
