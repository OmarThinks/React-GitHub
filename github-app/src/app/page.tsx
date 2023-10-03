import { Home as HomeScreen } from "@screens";

async function getData() {
  const res = await fetch(" https://api.github.com/orgs/octokit/repos");
  // /orgs/octokit/repos
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return <HomeScreen data={data} />;
}
