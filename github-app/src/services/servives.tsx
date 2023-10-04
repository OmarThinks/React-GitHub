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
