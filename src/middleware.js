import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/illing-an-array-(part-1)')) {
    return NextResponse.rewrite(new URL('/filling-an-array-part-1', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/is-it-even?')) {
    return NextResponse.rewrite(new URL('/is-it-even', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/thinkful-logic-drills:-traffic-light')) {
    return NextResponse.rewrite(new URL('/thinkful-logic-drills-traffic-light', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/training-js-8:-conditional-statement-switch')) {
    return NextResponse.rewrite(new URL('/training-js-8-conditional-statement-switch', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/training-js-2:-basic-data-types-number')) {
    return NextResponse.rewrite(new URL('/training-js-2-basic-data-types-number', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/is-the-string-uppercase?')) {
    return NextResponse.rewrite(new URL('/is-the-string-uppercase', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/the-wide-mouthed-frog!')) {
    return NextResponse.rewrite(new URL('/the-wide-mouthed-frog', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/is-n-divisible-by-x-and-y?')) {
    return NextResponse.rewrite(new URL('/is-n-divisible-by-x-and-y', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/to-square(root)-or-not-to-square(root)')) {
    return NextResponse.rewrite(new URL('/to-squareroot-or-not-to-squareroot', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/training-js-12:-loop-statement-for-in-and-for-of')) {
    return NextResponse.rewrite(new URL('/training-js-12-loop-statement-for-in-and-for-of', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/square(n)-sum')) {
    return NextResponse.rewrite(new URL('/square-n-sum', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/alan-partridge-ii---apple-turnover')) {
    return NextResponse.rewrite(new URL('/alan-partridge-ii-apple-turnover', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/regexp-basics---is-it-a-digit')) {
    return NextResponse.rewrite(new URL('/regexp-basics-is-it-a-digit', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/grasshopper---basic-function-fixer')) {
    return NextResponse.rewrite(new URL('/grasshopper-basic-function-fixer', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/string-templates---bug-fixing-5')) {
    return NextResponse.rewrite(new URL('/string-templates-bug-fixing-5', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/enumerable-magic-20---cascading-subsets')) {
    return NextResponse.rewrite(new URL('/enumerable-magic-20-cascading-subsets', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/grasshopper---debug-sayhello')) {
    return NextResponse.rewrite(new URL('/grasshopper-debug-sayhello', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/function-2---squaring-an-argument')) {
    return NextResponse.rewrite(new URL('/function-2-squaring-an-argument', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/101-dalmatians---squash-the-bugs-not-the-dogs')) {
    return NextResponse.rewrite(new URL('/101-dalmatians-squash-the-bugs-not-the-dogs', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/aspect-ratio-cropping---part-1')) {
    return NextResponse.rewrite(new URL('/aspect-ratio-cropping-part-1', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/usd--cny')) {
    return NextResponse.rewrite(new URL('/usd-cny', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/enumerable-magic-25---take-the-first-n-elements')) {
    return NextResponse.rewrite(new URL('/enumerable-magic-25-take-the-first-n-elements', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/for-twins-2.-math-operations')) {
    return NextResponse.rewrite(new URL('/for-twins-2-math-operations', request.url));
  }
}
