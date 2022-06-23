import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
  const query = gql`
  query MyQuery {
    postsConnection {
      edges {
        node {
          excerpt
          slug
          title
          createdAt
          author {
            bio
            id
            name
            profilePicture {
              url
            }
          }
          image {
            url
          }
          categories {
            name
            slug
          }
        }
      }
    }
  }
  `
  const result = await request(graphqlAPI, query)

  return result.postsConnection.edges

}

export const getRecentPosts = async () => {
  const query = gql`
    query MyQuery {
      posts(last: 3, orderBy: createdAt_ASC) {
        slug
        title
        image {
          url
        }
        createdAt
      }
    }  
  `
  const result = await request(graphqlAPI, query)

  return result.posts

}