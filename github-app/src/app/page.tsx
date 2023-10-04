import { Home as HomeScreen } from "@screens";
import type { Repos } from "@services";
import { searchRepos } from "@services";

async function getData() {
  return await searchRepos({ q: "hi", first: 20 });
}

export default async function Home() {
  const data = (await getData()) as Repos;

  return <HomeScreen data={data} />;
}
