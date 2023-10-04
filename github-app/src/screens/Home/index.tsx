"use client";
import { MainLayout } from "@hocs";
import { Card, Typography } from "@mui/material";
import { Repository, SearchResult } from "@services";

export default function Home({ data }: { data: SearchResult<Repository> }) {
  console.log(data);
  //console.log(data.data.search);
  const repos = data.data.search.nodes;

  return (
    <MainLayout>
      {repos?.map((repo, index) => {
        return (
          <Card key={index}>
            <Typography variant="h6">{repo?.name}</Typography>
            <Typography variant="h6">{repo?.nameWithOwner}</Typography>
            <Typography variant="h6">{repo?.createdAt}</Typography>
            <Typography variant="h6">{}</Typography>
          </Card>
        );
      })}
    </MainLayout>
  );
}

//export default MainLayout(Home);
