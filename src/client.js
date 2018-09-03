import ApolloClient, { gql } from "apollo-boost";

export const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GITHUB}`
  }
});

export const getpeople = () => {
  return client.query({
    query: gql`
      {
        repository(owner: "frontendbr", name: "me-contrata") {
          issues(last: 100, states: OPEN, orderBy: {field: CREATED_AT, direction: DESC}) {
            edges {
              node {
                id
                title
                bodyText
                author {
                  avatarUrl
                  login
                }
                labels(first: 100) {
                  edges {
                    node {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  });
};
