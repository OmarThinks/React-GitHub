"use client";
import { MainLayout } from "@hocs";
import { Card, Typography } from "@mui/material";
import { Repository, SearchResult } from "@services";

export default function Home({ data }: { data: SearchResult<Repository> }) {
  console.log(data);
  //console.log(data.data.search);
  const repos = data.data.search.nodes;
  const pageInfo = data.data.search.pageInfo;

  return (
    <MainLayout>
      {repos?.map((repo, index) => {
        return (
          <Card key={index}>
            <Typography variant="h6">{`Id: ${repo?.id}`}</Typography>
            <Typography variant="h6">{`Name: ${repo?.name}`}</Typography>
            <Typography variant="h6">{`Name With Owner: ${repo?.nameWithOwner}`}</Typography>
            <Typography variant="h6">{`url: ${repo?.url}`}</Typography>
            <Typography variant="h6">{`description: ${repo?.description}`}</Typography>
            <Typography variant="h6">{`forkCount: ${repo?.forkCount}`}</Typography>
            <Typography variant="h6">{`diskUsage: ${repo?.diskUsage}`}</Typography>
            <Typography variant="h6">{`homepageUrl: ${repo?.homepageUrl}`}</Typography>
            <Typography variant="h6">{`updatedAt: ${repo?.updatedAt}`}</Typography>
            <Typography variant="h6">{`stargazerCount: ${repo?.stargazerCount}`}</Typography>
            <Typography variant="h6">{`createdAt: ${repo?.createdAt}`}</Typography>

            <Typography variant="h6">{`Primary language name: ${repo?.primaryLanguage?.name}`}</Typography>
            <Typography variant="h6">{`Primary language id: ${repo?.primaryLanguage?.id}`}</Typography>

            <Typography variant="h6">{`owner name: ${repo?.owner.login}`}</Typography>
            <Typography variant="h6">{`owner id: ${repo?.owner.id}`}</Typography>
            <Typography variant="h6">{`owner avatar url: ${repo?.owner.avatarUrl}`}</Typography>
            <Typography variant="h6">{`owner url: ${repo?.owner.url}`}</Typography>
          </Card>
        );
      })}

      <Typography variant="h6">
        {pageInfo.hasNextPage
          ? "There is a next page"
          : "There is no next page"}
      </Typography>

      <Typography variant="h6">
        {pageInfo.hasPreviousPage
          ? "There is a previous page"
          : "There is no previous page"}
      </Typography>

      <Typography variant="h6">
        {`startCursor: ${pageInfo.startCursor}, endCursor: ${pageInfo.endCursor}`}
      </Typography>
      <Typography variant="h6">
        {`number of Repos: ${data.data.search.repositoryCount}`}
      </Typography>
    </MainLayout>
  );
}

//export default MainLayout(Home);
