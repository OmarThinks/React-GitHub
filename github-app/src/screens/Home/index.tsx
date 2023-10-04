"use client";
import { MainLayout } from "@hocs";
import { Repository, SearchResult } from "@services";

export default function Home({ data }: { data: SearchResult<Repository> }) {
  console.log(data);
  console.log(data.data.search);

  return <MainLayout>{"Hi"}</MainLayout>;
}

//export default MainLayout(Home);
