const AUTH_HEADER =
  "bearer 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";

/*

fetch("https://api.github.com/graphql", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
*/

const fetchQuery = async (query: string, variables: object = {}) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "bearer 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"
  );
  myHeaders.append("Content-Type", "application/json");

  var graphql = JSON.stringify({ query, variables });

  var requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    body: graphql,
    redirect: "follow",
  };

  const response = await fetch(
    "https://api.github.com/graphql",
    requestOptions
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

/*
`
{
    search(query: "hi", type: REPOSITORY, first: 50) {
      userCount
      repositoryCount
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
`

*/

export const searchRepos = async (variables: object = {}) => {
  const query = `#graphql
  {
      search(query: "hi", type: REPOSITORY, first: 50) {
        userCount
        repositoryCount
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
