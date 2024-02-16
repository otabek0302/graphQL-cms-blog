import { request, gql } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPH_CMS_API;

export const getPosts = async () => {
  try {
    const query = gql`
      query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              updatedAt
              slug
              title
              excerpt
              picture {
                url
              }
              categories {
                title
                slug
              }
            }
          }
        }
      }
    `;

    const result = await request(graphqlAPI, query);

    return result?.postsConnection?.edges;
  } catch (error) {
    console.log(error);
  }
};

export const getPostDetails = async (slug) => {
  try {
    const query = gql`
      query GetPostDetails($slug: String!) {
        post(where: { slug: $slug }) {
          author {
            bio
            name
            id
            photo {
              url
            }
          }
          updatedAt
          createdAt
          slug
          title
          excerpt
          picture {
            url
          }
          categories {
            title
            slug
          }
          content {
            raw
          }
        }
      }
    `;

    const result = await request(graphqlAPI, query, { slug });

    return result?.post;
  } catch (error) {
    console.log(error);
  }
};

export const getRecentPosts = async () => {
  try {
    const query = gql`
    query GetPostDetails() {
        posts(
            orderBy: createdAt_ASC
            last: 4
        ) {
            title
            picture {
                url
            }
            createdAt
            slug
        }
    }
  `;

    const result = await request(graphqlAPI, query);

    return result?.posts;
  } catch (error) {
    console.log(error);
  }
};

export const getReletedPosts = async (slug, categories) => {
  try {
    const query = gql`
      query GetPostDetails($slug: String!, $categories: [String!]) {
        posts(
          where: {
            slug_not: $slug
            AND: { categories_some: { slug_in: $categories } }
          }
          last: 3
        ) {
          title
          picture {
            url
          }
          createdAt
          slug
        }
      }
    `;
    const result = await request(graphqlAPI, query, { slug, categories });

    return result.posts;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  try {
    const query = gql`
      query MyQuery {
        categories {
          slug
          title
        }
      }
    `;

    const result = await request(graphqlAPI, query);

    return result.categories;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryPost = async (slug) => {
  try {
    const query = gql`
      query GetCategoryPost($slug: String!) {
        postsConnection(where: { categories_some: { slug: $slug } }) {
          edges {
            cursor
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              picture {
                url
              }
              categories {
                title
                slug
              }
            }
          }
        }
      }
    `;

    const result = await request(graphqlAPI, query, { slug });

    return result.postsConnection.edges;
  } catch (error) {
    console.log(error);
  }
};

export const getComments = async (slug) => {
  try {
    const query = gql`
      query GetComments($slug: String!) {
        comments(where: { post: { slug: $slug } }) {
          id
          comment
          name
          createdAt
        }
      }
    `;

    const result = await request(graphqlAPI, query, { slug });
    return result.comments;
  } catch (error) {
    console.log(error);
  }
};
