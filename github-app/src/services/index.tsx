import type {
  Maybe,
  PageInfo,
  Repository,
  Scalars,
  SearchResultItemEdge,
} from "./graphql/generated/index";
import type { SearchResult } from "./services";
import { searchRepos } from "./services";

export { searchRepos };
export type {
  Maybe,
  PageInfo,
  Repository,
  Scalars,
  SearchResult,
  SearchResultItemEdge,
};
