import { Home as HomeScreen } from "@screens";
import { Repos } from "@services";

async function getData() {
  const res = await fetch(" https://api.github.com/orgs/octokit/repos");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = (await getData()) as Repos;

  return <HomeScreen data={data} />;
}
