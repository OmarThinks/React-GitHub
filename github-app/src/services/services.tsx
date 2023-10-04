import { GITHUB_API_TOKEN } from "./secretToken";
import {
  Repository,
  Maybe,
  Scalars,
  SearchResultItemEdge,
  PageInfo,
} from "./graphql/generated";

const AUTH_HEADER = `bearer ${GITHUB_API_TOKEN}`;

export type SearchResult<T> = {
  data: {
    search: {
      __typename?: "SearchResultItemConnection";
      /**
       * The total number of pieces of code that matched the search query. Regardless
       * of the total number of matches, a maximum of 1,000 results will be available
       * across all types.
       */
      codeCount: Scalars["Int"]["output"];
      /**
       * The total number of discussions that matched the search query. Regardless of
       * the total number of matches, a maximum of 1,000 results will be available
       * across all types.
       */
      discussionCount: Scalars["Int"]["output"];
      /** A list of edges. */
      edges?: Maybe<Array<Maybe<SearchResultItemEdge>>>;
      /**
       * The total number of issues that matched the search query. Regardless of the
       * total number of matches, a maximum of 1,000 results will be available across all types.
       */
      issueCount: Scalars["Int"]["output"];
      /** A list of nodes. */
      nodes?: Maybe<Array<Maybe<T>>>;
      /** Information to aid in pagination. */
      pageInfo: PageInfo;
      /**
       * The total number of repositories that matched the search query. Regardless of
       * the total number of matches, a maximum of 1,000 results will be available
       * across all types.
       */
      repositoryCount: Scalars["Int"]["output"];
      /**
       * The total number of users that matched the search query. Regardless of the
       * total number of matches, a maximum of 1,000 results will be available across all types.
       */
      userCount: Scalars["Int"]["output"];
      /**
       * The total number of wiki pages that matched the search query. Regardless of
       * the total number of matches, a maximum of 1,000 results will be available
       * across all types.
       */
      wikiCount: Scalars["Int"]["output"];
    };
  };
};

const fetchQuery = async <T,>(query: string, variables: object = {}) => {
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
  return response.json() as Promise<T>;
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

  return await fetchQuery<SearchResult<Repository>>(query, variables);
};
