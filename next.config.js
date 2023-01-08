const indexSearch = require('./plugins/search-index');
const feed = require('./plugins/feed');
const sitemap = require('./plugins/sitemap');
// const socialImages = require('./plugins/socialImages'); TODO: failing to run on Netlify

/**
 * 301 redirects
 */

module.exports = {
  async redirects() {
    return [
      {
        source: '/filling-an-array-(part-1)',
        destination: '/filling-an-array-part-1',
        permanent: true,
      },
      {
        source: '/is-it-even?',
        destination: '/is-it-even',
        permanent: true,
      },
      {
        source: '/thinkful-logic-drills:-traffic-light',
        destination: '/thinkful-logic-drills-traffic-light',
        permanent: true,
      },
      {
        source: '/training-js-8:-conditional-statement-switch',
        destination: '/training-js-8-conditional-statement-switch',
        permanent: true,
      },
      {
        source: '/training-js-2:-basic-data-types-number',
        destination: '/training-js-2-basic-data-types-number',
        permanent: true,
      },
      {
        source: '/is-the-string-uppercase?',
        destination: '/is-the-string-uppercase',
        permanent: true,
      },
      {
        source: '/the-wide-mouthed-frog!',
        destination: '/the-wide-mouthed-frog',
        permanent: true,
      },
      {
        source: '/is-n-divisible-by-x-and-y?',
        destination: '/is-n-divisible-by-x-and-y',
        permanent: true,
      },
      {
        source: '/to-square(root)-or-not-to-square(root)',
        destination: '/to-squareroot-or-not-to-squareroot',
        permanent: true,
      },
      {
        source: '/training-js-12:-loop-statement-for-in-and-for-of',
        destination: '/training-js-12-loop-statement-for-in-and-for-of',
        permanent: true,
      },
      {
        source: '/square(n)-sum',
        destination: '/square-n-sum',
        permanent: true,
      },
      {
        source: '/alan-partridge-ii---apple-turnover',
        destination: '/alan-partridge-ii-apple-turnover',
        permanent: true,
      },
      {
        source: '/regexp-basics---is-it-a-digit',
        destination: '/regexp-basics-is-it-a-digit',
        permanent: true,
      },
      {
        source: '/grasshopper---basic-function-fixer',
        destination: '/grasshopper-basic-function-fixer',
        permanent: true,
      },
      {
        source: '/string-templates---bug-fixing-5',
        destination: '/string-templates-bug-fixing-5',
        permanent: true,
      },
      {
        source: '/enumerable-magic-20---cascading-subsets',
        destination: '/enumerable-magic-20-cascading-subsets',
        permanent: true,
      },
      {
        source: '/grasshopper---debug-sayhello',
        destination: '/grasshopper-debug-sayhello',
        permanent: true,
      },
      {
        source: '/function-2---squaring-an-argument',
        destination: '/function-2-squaring-an-argument',
        permanent: true,
      },
      {
        source: '/101-dalmatians---squash-the-bugs-not-the-dogs',
        destination: '/101-dalmatians-squash-the-bugs-not-the-dogs',
        permanent: true,
      },
      {
        source: '/aspect-ratio-cropping---part-1',
        destination: '/aspect-ratio-cropping-part-1',
        permanent: true,
      },
      {
        source: '/usd--cny',
        destination: '/usd-cny',
        permanent: true,
      },
      {
        source: '/enumerable-magic-25---take-the-first-n-elements',
        destination: '/enumerable-magic-25-take-the-first-n-elements',
        permanent: true,
      },
      {
        source: '/for-twins-2.-math-operations',
        destination: '/for-twins-2-math-operations',
        permanent: true,
      },
      {
        source: '/grasshopper---variable-assignment-debug',
        destination: '/grasshopper-variable-assignment-debug',
        permanent: true,
      },
      {
        source: '/enumerable-magic-1---true-for-all',
        destination: '/enumerable-magic-1-true-for-all',
        permanent: true,
      },
      {
        source: '/thinkful---dictionary-drills-order-filler',
        destination: '/thinkful-dictionary-drills-order-filler',
        permanent: true,
      },
      {
        source: '/grasshopper---create-the-rooms',
        destination: '/grasshopper-create-the-rooms',
        permanent: true,
      },
      {
        source: '/be-concise-i---the-ternary-operator',
        destination: '/be-concise-i-the-ternary-operator',
        permanent: true,
      },
      {
        source: '/grasshopper---terminal-game-combat-function',
        destination: '/grasshopper-terminal-game-combat-function',
        permanent: true,
      },
      {
        source: '/ruby-metaprogramming-101---dynamic-method-calls',
        destination: '/ruby-metaprogramming-101-dynamic-method-calls',
        permanent: true,
      },
      {
        source: '/coding-3min--jumping-dutch-act',
        destination: '/coding-3min-jumping-dutch-act',
        permanent: true,
      },
      {
        source: '/lua-is-easy-lesson-2---control-structures',
        destination: '/lua-is-easy-lesson-2-control-structures',
        permanent: true,
      },
      {
        source: '/lua-is-easy-lesson-1---the-basics',
        destination: '/lua-is-easy-lesson-1-the-basics',
        permanent: true,
      },
      {
        source: '/fun-with-es6-classes-1---people-people-people',
        destination: '/fun-with-es6-classes-1-people-people-people',
        permanent: true,
      },
      {
        source: '/grasshopper---bug-squashing',
        destination: '/grasshopper-bug-squashing',
        permanent: true,
      },
      {
        source: '/training-js-7-if..else-and-ternary-operator',
        destination: '/training-js-7-if-else-and-ternary-operator',
        permanent: true,
      },
      {
        source: '/grasshopper---terminal-game-1',
        destination: '/grasshopper-terminal-game-1',
        permanent: true,
      },
      {
        source: '/grasshopper---terminal-game-turn-function',
        destination: '/grasshopper-terminal-game-turn-function',
        permanent: true,
      },
      {
        source: '/easy-sql---ordering',
        destination: '/easy-sql-ordering',
        permanent: true,
      },
      {
        source: '/learning-typescript.-basic-types',
        destination: '/learning-typescript-basic-types',
        permanent: true,
      },
      {
        source: '/learning-typescript.-basic-types.-type-assertions',
        destination: '/learning-typescript-basic-types-type-assertions',
        permanent: true,
      },
      {
        source: '/bash-basics---while-loop',
        destination: '/bash-basics-while-loop',
        permanent: true,
      },
      {
        source: '/fix-the-bugs-syntax---my-first-kata',
        destination: '/fix-the-bugs-syntax-my-first-kata',
        permanent: true,
      },
      {
        source: '/php-functions---pass-by-reference',
        destination: '/php-functions-pass-by-reference',
        permanent: true,
      },
      {
        source: '/a--b',
        destination: '/a-b',
        permanent: true,
      },
      {
        source: '/noobcode-02-tricky-questions--primitives-and-operator-precedence',
        destination: '/noobcode-02-tricky-questions-primitives-and-operator-precedence',
        permanent: true,
      },
      {
        source: '/be-concise-ii---i-need-squares',
        destination: '/be-concise-ii-i-need-squares',
        permanent: true,
      },
      {
        source: '/be-concise-iii---sum-squares',
        destination: '/be-concise-iii-sum-squares',
        permanent: true,
      },
      {
        source: '/a-bugs-trilogy-episode-1-let-math.random;-decide-your-future',
        destination: '/a-bugs-trilogy-episode-1-let-math-random-decide-your-future',
        permanent: true,
      },
      {
        source: '/improving-math.roundx',
        destination: '/improving-math-roundx',
        permanent: true,
      },
      {
        source: '/implement-array.prototype.filter',
        destination: '/implement-array-prototype-filter',
        permanent: true,
      },
      {
        source: '/grasshopper---array-mean',
        destination: '/grasshopper-array-mean',
        permanent: true,
      },
      {
        source: '/invalid-login---bug-fixing-11',
        destination: '/invalid-login-bug-fixing-11',
        permanent: true,
      },
      {
        source: '/enumerable-magic-23---filter-array-by-regex',
        destination: '/enumerable-magic-23-filter-array-by-regex',
        permanent: true,
      },
      {
        source: '/enumerable-magic-24---array-rejection',
        destination: '/enumerable-magic-24-array-rejection',
        permanent: true,
      },
      {
        source: '/enumerable-magic-26---grab-elements-while',
        destination: '/enumerable-magic-26-grab-elements-while',
        permanent: true,
      },
      {
        source: '/enumerable-magic-15---flat-map-that-array',
        destination: '/enumerable-magic-15-flat-map-that-array',
        permanent: true,
      },
      {
        source: '/shorter-concat-[reverse-longer]',
        destination: '/shorter-concat-reverse-longer',
        permanent: true,
      },
      {
        source: '/car-crash--o`o',
        destination: '/car-crash-oo',
        permanent: true,
      },
      {
        source: '/thinking--testing-a-and-b',
        destination: '/thinking-testing-a-and-b',
        permanent: true,
      },
      {
        source: '/t.t.t.32-count-with-your-fingers',
        destination: '/t-t-t-32-count-with-your-fingers',
        permanent: true,
      },
      {
        source: '/balanced-number-special-numbers-series-1-',
        destination: '/balanced-number-special-numbers-series-1',
        permanent: true,
      },
      {
        source: '/thinkful---number-drills-quadratic-formula',
        destination: '/thinkful-number-drills-quadratic-formula',
        permanent: true,
      },
      {
        source: '/hamming-distance---part-1-binary-codes',
        destination: '/hamming-distance-part-1-binary-codes',
        permanent: true,
      },
      {
        source: '/chuck-norris-ii---one-punch',
        destination: '/chuck-norris-ii-one-punch',
        permanent: true,
      },
      {
        source: '/array.prototype.reverse',
        destination: '/array-prototype-reverse',
        permanent: true,
      },
      {
        source: '/for-kids-d-m-y-day-of-the-week.',
        destination: '/for-kids-d-m-y-day-of-the-week',
        permanent: true,
      },
      {
        source: '/playing-cards-draw-order-–-part-1',
        destination: '/playing-cards-draw-order-part-1',
        permanent: true,
      },
      {
        source: '/i-will-take-the-biggest-one-and-nothing-else.',
        destination: '/i-will-take-the-biggest-one-and-nothing-else',
        permanent: true,
      },
      {
        source: '/chuck-norris-i---push-ups',
        destination: '/chuck-norris-i-push-ups',
        permanent: true,
      },
      {
        source: '/small-enough---beginner',
        destination: '/small-enough-beginner',
        permanent: true,
      },
      {
        source: '/thinkful---object-drills-quarks',
        destination: '/thinkful-object-drills-quarks',
        permanent: true,
      },
      {
        source: '/google-dorking---validating-queries',
        destination: '/google-dorking-validating-queries',
        permanent: true,
      },
      {
        source: '/computer-science-101---3-deques',
        destination: '/computer-science-101-3-deques',
        permanent: true,
      },
      {
        source: '/computer-science-101---2-queues',
        destination: '/computer-science-101-2-queues',
        permanent: true,
      },
      {
        source: '/computer-science-101---1-stacks',
        destination: '/computer-science-101-1-stacks',
        permanent: true,
      },
      {
        source: '/fourseven',
        destination: '/four-seven',
        permanent: true,
      },
      {
        source: '/holiday-iii---fire-on-the-boat',
        destination: '/holiday-iii-fire-on-the-boat',
        permanent: true,
      },
      {
        source: '/duck-shoot---easy-version',
        destination: '/duck-shoot-easy-version',
        permanent: true,
      },
      {
        source: '/the-fusc-function----part-1',
        destination: '/the-fusc-function-part-1',
        permanent: true,
      },
      {
        source: '/birthday-ii---presents',
        destination: '/birthday-ii-presents',
        permanent: true,
      },
      {
        source: '/[code-golf]-number-pyramid-series-1---sum-of-corners',
        destination: '/code-golf-number-pyramid-series-1-sum-of-corners',
        permanent: true,
      },
      {
        source: '/help-suzuki-count-his-vegetables....',
        destination: '/help-suzuki-count-his-vegetables',
        permanent: true,
      },
      {
        source: '/[code-golf]-one-line-task-pyramid-of-spheres',
        destination: '/code-golf-one-line-task-pyramid-of-spheres',
        permanent: true,
      },
      {
        source: '/fun-with-lists-anymatch--allmatch',
        destination: '/fun-with-lists-anymatch-allmatch',
        permanent: true,
      },
      {
        source: '/the-office-i---outed',
        destination: '/the-office-i-outed',
        permanent: true,
      },
      {
        source: '/upstreamdownstream',
        destination: '/upstream-downstream',
        permanent: true,
      },
      {
        source: '/find-heavy-ball---level-novice',
        destination: '/find-heavy-ball-level-novice',
        permanent: true,
      },
      {
        source: '/coding-meetup-5---higher-order-functions-series---prepare-the-count-of-languages',
        destination: '/coding-meetup-5-higher-order-functions-series-prepare-the-count-of-languages',
        permanent: true,
      },
      {
        source: '/networking-1012-identify-the-ipv4-address-class',
        destination: '/networking-101-2-identify-the-ipv4-address-class',
        permanent: true,
      },
      {
        source: '/coding-meetup-2---higher-order-functions-series---greet-developers',
        destination: '/coding-meetup-2-higher-order-functions-series-greet-developers',
        permanent: true,
      },
      {
        source: '/bingo--or-not-',
        destination: '/bingo-or-not',
        permanent: true,
      },
      {
        source: '/ascii-shift-encryptiondecryption',
        destination: '/ascii-shift-encryption-decryption',
        permanent: true,
      },
    ];
  },
  experimental: {
    allowMiddlewareResponseBody: true,
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // By default, Next.js removes the trailing slash. One reason this would be good
  // to include is by default, the `path` property of the router for the homepage
  // is `/` and by using that, would instantly create a redirect

  trailingSlash: false,

  // By enabling verbose logging, it will provide additional output details for
  // diagnostic purposes. By default is set to false.
  // verbose: true,

  env: {
    // The image directory for open graph images will be saved at the location above
    // with `public` prepended. By default, images will be saved at /public/images/og
    // and available at /images/og. If changing, make sure to update the .gitignore

    OG_IMAGE_DIRECTORY: '/images/og',

    // By default, only render this number of post pages ahead of time, otherwise
    // the rest will be rendered on-demand
    POSTS_PRERENDER_COUNT: 5,

    WORDPRESS_GRAPHQL_ENDPOINT: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
    WORDPRESS_MENU_LOCATION_NAVIGATION: process.env.WORDPRESS_MENU_LOCATION_NAVIGATION || 'PRIMARY',
    WORDPRESS_PLUGIN_SEO: parseEnvValue(process.env.WORDPRESS_PLUGIN_SEO, false),
  },
};

module.exports = () => {
  const plugins = [indexSearch, feed, sitemap];
  return plugins.reduce((acc, plugin) => plugin(acc), nextConfig);
};

/**
 * parseEnv
 * @description Helper function to check if a variable is defined and parse booelans
 */

function parseEnvValue(value, defaultValue) {
  if (typeof value === 'undefined') return defaultValue;
  if (value === true || value === 'true') return true;
  if (value === false || value === 'false') return false;
  return value;
}
