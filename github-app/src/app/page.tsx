import { Home as HomeScreen } from "@screens";

async function getData() {
  const res = await fetch(" https://api.github.com/orgs/octokit/repos");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return <HomeScreen data={data} />;
}
