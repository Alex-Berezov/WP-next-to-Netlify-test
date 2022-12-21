import { gql } from '@apollo/client';

export const POST_FIELDS = gql`
  fragment PostFields on Post {
    id
    categories {
      edges {
        node {
          databaseId
          id
          name
          slug
        }
      }
    }
    databaseId
    date
    isSticky
    postId
    slug
    title
  }
`;

export const QUERY_ALL_POSTS_INDEX = gql`
  ${POST_FIELDS}
  query AllPostsIndex {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;

export const QUERY_ALL_POSTS_ARCHIVE = gql`
  ${POST_FIELDS}
  query AllPostsArchive {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          excerpt
        }
      }
    }
  }
`;

export const QUERY_ALL_POSTS = gql`
  ${POST_FIELDS}
  query AllPosts {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              sourceUrl
              srcSet
              sizes
              id
            }
          }
          modified
        }
      }
    }
  }
`;

export const QUERY_POST_BY_SLUG = gql`
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      author {
        node {
          avatar {
            height
            url
            width
          }
          id
          name
          slug
        }
      }
      id
      categories {
        edges {
          node {
            databaseId
            id
            name
            slug
          }
        }
      }
      content
      date
      excerpt
      featuredImage {
        node {
          altText
          caption
          sourceUrl
          srcSet
          sizes
          id
        }
      }
      modified
      databaseId
      title
      slug
      isSticky
      linkToImageResource {
        linkToImageResource
      }
      solutions {
        solutionsTabs {
          javascriptSolution1
          javascriptSolution2
          javascriptSolution3
          pythonSolution1
          pythonSolution2
          pythonSolution3
          cSolution1
          cSolution2
          cSolution3
          cSharpSolution1
          cSharpSolution2
          cSharpSolution3
          cPlusPlusSolution1
          cPlusPlusSolution2
          cPlusPlusSolution3
          clojureSolution1
          clojureSolution2
          clojureSolution3
          coffeescriptSolution1
          coffeescriptSolution2
          coffeescriptSolution3
          crystalSolution1
          crystalSolution2
          crystalSolution3
          dSolution1
          dSolution2
          dSolution3
          dartSolution1
          dartSolution2
          dartSolution3
          elixirSolution1
          elixirSolution2
          elixirSolution3
          elmSolution1
          elmSolution2
          elmSolution3
          erlangSolution1
          erlangSolution2
          erlangSolution3
          fieldGroupName
          fortranSolution1
          fortranSolution2
          fortranSolution3
          goSolution1
          goSolution2
          goSolution3
          groovySolution1
          groovySolution2
          groovySolution3
          haskellSolution1
          haskellSolution2
          haskellSolution3
          javaSolution1
          javaSolution2
          javaSolution3
          juliaSolution1
          juliaSolution2
          juliaSolution3
          kotlinSolution1
          kotlinSolution2
          kotlinSolution3
          luaSolution1
          luaSolution2
          luaSolution3
          nimSolution1
          nimSolution2
          nimSolution3
          objectiveCSolution1
          objectiveCSolution2
          objectiveCSolution3
          ocamlSolution1
          ocamlSolution2
          ocamlSolution3
          perlSolution1
          perlSolution2
          perlSolution3
          phpSolution1
          phpSolution2
          phpSolution3
          powershellSolution1
          powershellSolution2
          powershellSolution3
          prologSolution1
          prologSolution2
          prologSolution3
          rSolution1
          rSolution2
          rSolution3
          rubySolution1
          rubySolution2
          rubySolution3
          rustSolution1
          rustSolution2
          rustSolution3
          scalaSolution1
          scalaSolution2
          scalaSolution3
          shellSolution1
          shellSolution2
          shellSolution3
          sqlSolution1
          sqlSolution2
          sqlSolution3
          swiftSolution1
          swiftSolution2
          swiftSolution3
          typescriptSolution1
          typescriptSolution2
          typescriptSolution3
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_CATEGORY_ID_INDEX = gql`
  ${POST_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    posts(where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_CATEGORY_ID_ARCHIVE = gql`
  ${POST_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    posts(where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          excerpt
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_CATEGORY_ID = gql`
  ${POST_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    posts(where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...PostFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_AUTHOR_SLUG_INDEX = gql`
  ${POST_FIELDS}
  query PostByAuthorSlugIndex($slug: String!) {
    posts(where: { authorName: $slug, hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_AUTHOR_SLUG_ARCHIVE = gql`
  ${POST_FIELDS}
  query PostByAuthorSlugArchive($slug: String!) {
    posts(where: { authorName: $slug, hasPassword: false }) {
      edges {
        node {
          ...PostFields
          excerpt
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_AUTHOR_SLUG = gql`
  ${POST_FIELDS}
  query PostByAuthorSlug($slug: String!) {
    posts(where: { authorName: $slug, hasPassword: false }) {
      edges {
        node {
          ...PostFields
          excerpt
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
        }
      }
    }
  }
`;

export const QUERY_POST_SEO_BY_SLUG = gql`
  query PostSEOBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      seo {
        canonical
        metaDesc
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphTitle
        opengraphType
        readingTime
        title
        twitterDescription
        twitterTitle
        twitterImage {
          altText
          sourceUrl
          mediaDetails {
            width
            height
          }
        }
        opengraphImage {
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
`;

export const QUERY_POST_PER_PAGE = gql`
  query PostPerPage {
    allSettings {
      readingSettingsPostsPerPage
    }
  }
`;
