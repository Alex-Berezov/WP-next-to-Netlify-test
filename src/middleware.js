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
  if (request.nextUrl.pathname.startsWith('/grasshopper---variable-assignment-debug')) {
    return NextResponse.rewrite(new URL('/grasshopper-variable-assignment-debug', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/enumerable-magic-1---true-for-all')) {
    return NextResponse.rewrite(new URL('/enumerable-magic-1-true-for-all', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/thinkful---dictionary-drills-order-filler')) {
    return NextResponse.rewrite(new URL('/thinkful-dictionary-drills-order-filler', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/grasshopper---create-the-rooms')) {
    return NextResponse.rewrite(new URL('/grasshopper-create-the-rooms', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/be-concise-i---the-ternary-operator')) {
    return NextResponse.rewrite(new URL('/be-concise-i-the-ternary-operator', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/grasshopper---terminal-game-combat-function')) {
    return NextResponse.rewrite(new URL('/grasshopper-terminal-game-combat-function', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/ruby-metaprogramming-101---dynamic-method-calls')) {
    return NextResponse.rewrite(new URL('/ruby-metaprogramming-101-dynamic-method-calls', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/coding-3min--jumping-dutch-act')) {
    return NextResponse.rewrite(new URL('/coding-3min-jumping-dutch-act', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/lua-is-easy-lesson-2---control-structures')) {
    return NextResponse.rewrite(new URL('/lua-is-easy-lesson-2-control-structures', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/lua-is-easy-lesson-1---the-basics')) {
    return NextResponse.rewrite(new URL('/lua-is-easy-lesson-1-the-basics', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/fun-with-es6-classes-1---people-people-people')) {
    return NextResponse.rewrite(new URL('/fun-with-es6-classes-1-people-people-people', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/grasshopper---bug-squashing')) {
    return NextResponse.rewrite(new URL('/grasshopper-bug-squashing', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/training-js-7-if..else-and-ternary-operator')) {
    return NextResponse.rewrite(new URL('/training-js-7-if-else-and-ternary-operator', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/grasshopper---terminal-game-1')) {
    return NextResponse.rewrite(new URL('/grasshopper-terminal-game-1', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/grasshopper---terminal-game-turn-function')) {
    return NextResponse.rewrite(new URL('/grasshopper-terminal-game-turn-function', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/easy-sql---ordering')) {
    return NextResponse.rewrite(new URL('/easy-sql-ordering', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/learning-typescript.-basic-types')) {
    return NextResponse.rewrite(new URL('/learning-typescript-basic-types', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/learning-typescript.-basic-types.-type-assertions')) {
    return NextResponse.rewrite(new URL('/learning-typescript-basic-types-type-assertions', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/bash-basics---while-loop')) {
    return NextResponse.rewrite(new URL('/bash-basics-while-loop', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/fix-the-bugs-syntax---my-first-kata')) {
    return NextResponse.rewrite(new URL('/fix-the-bugs-syntax-my-first-kata', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/php-functions---pass-by-reference')) {
    return NextResponse.rewrite(new URL('/php-functions-pass-by-reference', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/a--b')) {
    return NextResponse.rewrite(new URL('/a-b', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/noobcode-02-tricky-questions--primitives-and-operator-precedence')) {
    return NextResponse.rewrite(
      new URL('/noobcode-02-tricky-questions-primitives-and-operator-precedence', request.url)
    );
  }
  if (request.nextUrl.pathname.startsWith('/be-concise-ii---i-need-squares')) {
    return NextResponse.rewrite(new URL('/be-concise-ii-i-need-squares', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/be-concise-iii---sum-squares')) {
    return NextResponse.rewrite(new URL('/be-concise-iii-sum-squares', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/a-bugs-trilogy-episode-1-let-math.random;-decide-your-future')) {
    return NextResponse.rewrite(new URL('/a-bugs-trilogy-episode-1-let-math-random-decide-your-future', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/improving-math.roundx')) {
    return NextResponse.rewrite(new URL('/improving-math-roundx', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/implement-array.prototype.filter')) {
    return NextResponse.rewrite(new URL('/implement-array-prototype-filter', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/grasshopper---array-mean')) {
    return NextResponse.rewrite(new URL('/grasshopper-array-mean', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/invalid-login---bug-fixing-11')) {
    return NextResponse.rewrite(new URL('/invalid-login-bug-fixing-11', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/enumerable-magic-23---filter-array-by-regex')) {
    return NextResponse.rewrite(new URL('/enumerable-magic-23-filter-array-by-regex', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/enumerable-magic-24---array-rejection')) {
    return NextResponse.rewrite(new URL('/enumerable-magic-24-array-rejection', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/enumerable-magic-26---grab-elements-while')) {
    return NextResponse.rewrite(new URL('/enumerable-magic-26-grab-elements-while', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/enumerable-magic-15---flat-map-that-array')) {
    return NextResponse.rewrite(new URL('/enumerable-magic-15-flat-map-that-array', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/shorter-concat-[reverse-longer]')) {
    return NextResponse.rewrite(new URL('/shorter-concat-reverse-longer', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/car-crash--o`o')) {
    return NextResponse.rewrite(new URL('/car-crash-oo', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/thinking--testing-a-and-b')) {
    return NextResponse.rewrite(new URL('/thinking-testing-a-and-b', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/t.t.t.32-count-with-your-fingers')) {
    return NextResponse.rewrite(new URL('/t-t-t-32-count-with-your-fingers', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/balanced-number-special-numbers-series-1-')) {
    return NextResponse.rewrite(new URL('/balanced-number-special-numbers-series-1', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/thinkful---number-drills-quadratic-formula')) {
    return NextResponse.rewrite(new URL('/thinkful-number-drills-quadratic-formula', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/hamming-distance---part-1-binary-codes')) {
    return NextResponse.rewrite(new URL('/hamming-distance-part-1-binary-codes', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/chuck-norris-ii---one-punch')) {
    return NextResponse.rewrite(new URL('/chuck-norris-ii-one-punch', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/array.prototype.reverse')) {
    return NextResponse.rewrite(new URL('/array-prototype-reverse', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/for-kids-d-m-y-day-of-the-week.')) {
    return NextResponse.rewrite(new URL('/for-kids-d-m-y-day-of-the-week', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/playing-cards-draw-order-–-part-1')) {
    return NextResponse.rewrite(new URL('/playing-cards-draw-order-part-1', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/i-will-take-the-biggest-one-and-nothing-else.')) {
    return NextResponse.rewrite(new URL('/i-will-take-the-biggest-one-and-nothing-else', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/chuck-norris-i---push-ups')) {
    return NextResponse.rewrite(new URL('/chuck-norris-i-push-ups', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/small-enough---beginner')) {
    return NextResponse.rewrite(new URL('/small-enough-beginner', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/thinkful---object-drills-quarks')) {
    return NextResponse.rewrite(new URL('/thinkful-object-drills-quarks', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/google-dorking---validating-queries')) {
    return NextResponse.rewrite(new URL('/google-dorking-validating-queries', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/computer-science-101---3-deques')) {
    return NextResponse.rewrite(new URL('/computer-science-101-3-deques', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/computer-science-101---2-queues')) {
    return NextResponse.rewrite(new URL('/computer-science-101-2-queues', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/computer-science-101---1-stacks')) {
    return NextResponse.rewrite(new URL('/computer-science-101-1-stacks', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/fourseven')) {
    return NextResponse.rewrite(new URL('/four-seven', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/holiday-iii---fire-on-the-boat')) {
    return NextResponse.rewrite(new URL('/holiday-iii-fire-on-the-boat', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/duck-shoot---easy-version')) {
    return NextResponse.rewrite(new URL('/duck-shoot-easy-version', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/the-fusc-function----part-1')) {
    return NextResponse.rewrite(new URL('/the-fusc-function-part-1', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/birthday-ii---presents')) {
    return NextResponse.rewrite(new URL('/birthday-ii-presents', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/[code-golf]-number-pyramid-series-1---sum-of-corners')) {
    return NextResponse.rewrite(new URL('/code-golf-number-pyramid-series-1-sum-of-corners', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/help-suzuki-count-his-vegetables....')) {
    return NextResponse.rewrite(new URL('/help-suzuki-count-his-vegetables', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/[code-golf]-one-line-task-pyramid-of-spheres')) {
    return NextResponse.rewrite(new URL('/code-golf-one-line-task-pyramid-of-spheres', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/fun-with-lists-anymatch--allmatch')) {
    return NextResponse.rewrite(new URL('/fun-with-lists-anymatch-allmatch', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/the-office-i---outed')) {
    return NextResponse.rewrite(new URL('/the-office-i-outed', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/upstreamdownstream')) {
    return NextResponse.rewrite(new URL('/upstream-downstream', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/find-heavy-ball---level-novice')) {
    return NextResponse.rewrite(new URL('/find-heavy-ball-level-novice', request.url));
  }
  if (
    request.nextUrl.pathname.startsWith(
      '/coding-meetup-5---higher-order-functions-series---prepare-the-count-of-languages'
    )
  ) {
    return NextResponse.rewrite(
      new URL('/coding-meetup-5-higher-order-functions-series-prepare-the-count-of-languages', request.url)
    );
  }
  if (request.nextUrl.pathname.startsWith('/networking-1012-identify-the-ipv4-address-class')) {
    return NextResponse.rewrite(new URL('/networking-101-2-identify-the-ipv4-address-class', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/coding-meetup-2---higher-order-functions-series---greet-developers')) {
    return NextResponse.rewrite(
      new URL('/coding-meetup-2-higher-order-functions-series-greet-developers', request.url)
    );
  }
  if (request.nextUrl.pathname.startsWith('/bingo--or-not-')) {
    return NextResponse.rewrite(new URL('/bingo-or-not', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/ascii-shift-encryptiondecryption')) {
    return NextResponse.rewrite(new URL('/ascii-shift-encryption-decryption', request.url));
  }
}
