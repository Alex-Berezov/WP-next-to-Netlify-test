import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/illing-an-array-(part-1)')) {
    return NextResponse.rewrite(new URL('/filling-an-array-part-1', request.url));
  }
}
