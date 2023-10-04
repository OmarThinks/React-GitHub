const AUTH_HEADER = "bearer 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";

const fetchQuery = async (query: string, variables: object = {}) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", AUTH_HEADER);
  myHeaders.append("Content-Type", "application/json");

  var graphql = JSON.stringify({ query, variables });

  var requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: graphql,
    redirect: "follow",
  };

  const response = await fetch(
    "https://api.github.com/graphql",
    requestOptions
  );
  if (!response.ok) {
    console.log(response);
    throw new Error(response.statusText);
  }
  return response.json();
};

export const searchRepos = async (variables: { q: String; first: Number }) => {
  const query = `#graphql
    query searchRepos($q: String!, $first: Int!){
      search(query: $q, type: REPOSITORY, first: $first) {
        repositoryCount
        pageInfo{
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        nodes {
          ... on Repository {
            id
            name
            owner {
              id
              url
            }
          }
        }
      }
    }
  `;

  return await fetchQuery(query, variables);
};
