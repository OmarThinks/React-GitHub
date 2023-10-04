"use client";
import { MainLayout } from "@hocs";
import { Box, Card, Link as MLInk, Typography } from "@mui/material";
import type { Maybe, Repository, SearchResult } from "@services";
import { ForkRight } from "@mui/icons-material";
import type { SxProps } from "@mui/material";
import { useTheme } from "@mui/material";

const RepoCard = ({ repo, sx }: { repo: Maybe<Repository>; sx?: SxProps }) => {
  return (
    <Card
      sx={{
        borderRadius: 5,
        borderColor: "text.primary",
        borderWidth: 2,
        p: 1.5,
        display: "flex",
        flexDirection: "column",
        ...sx,
      }}
      variant="elevation"
    >
      <MLInk href={"/"} underline="hover" sx={{ alignSelf: "flex-start" }}>
        <Typography variant="h5">{repo?.nameWithOwner}</Typography>
      </MLInk>
      <Typography variant="body2">{repo?.description}</Typography>
    </Card>
  );
};

export default function Home({ data }: { data: SearchResult<Repository> }) {
  console.log(data);
  //console.log(data.data.search);
  const repos = data.data.search.nodes;
  const pageInfo = data.data.search.pageInfo;
  const r = repos?.[0];

  console.log(useTheme().palette);
  console.log(atob("Y3Vyc29yOjE="));

  return (
    <MainLayout>
      {repos?.map((repo, index) => {
        return (
          <RepoCard
            key={index}
            repo={repo}
            sx={{
              m: 1,
            }}
          />
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

      <Card>
        <Typography variant="h6">{`Id: ${r?.id}`}</Typography>
        <Typography variant="h6">{`Name: ${r?.name}`}</Typography>
        <Typography variant="h6">{`Name With Owner: ${r?.nameWithOwner}`}</Typography>
        <Typography variant="h6">{`url: ${r?.url}`}</Typography>
        <Typography variant="h6">{`description: ${r?.description}`}</Typography>
        <Typography variant="h6">{`forkCount: ${r?.forkCount}`}</Typography>
        <Typography variant="h6">{`diskUsage: ${r?.diskUsage}`}</Typography>
        <Typography variant="h6">{`homepageUrl: ${r?.homepageUrl}`}</Typography>
        <Typography variant="h6">{`updatedAt: ${r?.updatedAt}`}</Typography>
        <Typography variant="h6">{`stargazerCount: ${r?.stargazerCount}`}</Typography>
        <Typography variant="h6">{`createdAt: ${r?.createdAt}`}</Typography>

        <Typography variant="h6">{`Primary language name: ${r?.primaryLanguage?.name}`}</Typography>
        <Typography variant="h6">{`Primary language id: ${r?.primaryLanguage?.id}`}</Typography>

        <Typography variant="h6">{`owner name: ${r?.owner.login}`}</Typography>
        <Typography variant="h6">{`owner id: ${r?.owner.id}`}</Typography>
        <Typography variant="h6">{`owner avatar url: ${r?.owner.avatarUrl}`}</Typography>
        <Typography variant="h6">{`owner url: ${r?.owner.url}`}</Typography>
      </Card>
    </MainLayout>
  );
}

//export default MainLayout(Home);
