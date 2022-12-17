import { gql } from '@apollo/client';

export const QUERY_SITE_DATA = gql`
  query SiteData {
    generalSettings {
      description
      language
      title
    }
  }
`;

export const QUERY_SEO_DATA = gql`
  query SeoData {
    seo {
      webmaster {
        yandexVerify
        msVerify
        googleVerify
        baiduVerify
      }
      social {
        youTube {
          url
        }
        wikipedia {
          url
        }
        twitter {
          username
          cardType
        }
        pinterest {
          metaTag
          url
        }
        mySpace {
          url
        }
        linkedIn {
          url
        }
        instagram {
          url
        }
        facebook {
          url
          defaultImage {
            altText
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }
`;

export const QUERY_SITE_LOGO = gql`
  query getLogo {
    mediaItems(where: { name: "logo" }) {
      nodes {
        mediaItemUrl
        mediaDetails {
          height
          width
        }
      }
    }
  }
`;

export const QUERY_HOME_PAGE_INFO = gql`
  query getHomePageInfo {
    pages(where: { id: 18 }) {
      nodes {
        title
        content
      }
    }
  }
`;
