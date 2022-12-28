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
