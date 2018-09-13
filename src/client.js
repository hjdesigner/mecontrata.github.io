import ApolloClient, { gql } from "apollo-boost";

const getToken = async () => {
  const tokens = await fetch(
    "https://us-central1-server-mecontrata.cloudfunctions.net/getApiKeys"
  )
    .then(response => response.json())
    .catch(error => console.error(error));
  return tokens.github;
};

const prepareClient = async () => {
  const token = await getToken();
  return new ApolloClient({
    uri: "https://api.github.com/graphql",
    headers: {
      Authorization: `bearer ${token}`
    }
  });
};

export const getPeopleService = async () => {
  const client = await prepareClient();

  return client.query({
    query: gql`
      {
        repository(owner: "frontendbr", name: "me-contrata") {
          issues(
            last: 100
            states: OPEN
            orderBy: { field: CREATED_AT, direction: DESC }
          ) {
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
