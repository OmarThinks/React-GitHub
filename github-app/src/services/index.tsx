import type {
  PageInfo,
  Repository,
  Maybe,
  Scalars,
  SearchResultItemEdge,
} from "./graphql/generated/index";
import { searchRepos } from "./services";

export { searchRepos };
export type { PageInfo, Repository, Maybe, Scalars, SearchResultItemEdge };
