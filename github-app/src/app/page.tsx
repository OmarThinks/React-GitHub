import { Home as HomeScreen } from "@screens";
import { Repository, SearchResult, searchRepos } from "@services";

async function getData() {
  return await searchRepos({ q: "hi", first: 20 });
}

export default async function Home() {
  const data = (await getData()) as SearchResult<Repository>;

  return <HomeScreen data={data} />;
}
