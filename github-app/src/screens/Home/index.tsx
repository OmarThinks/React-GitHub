"use client";
import { MainLayout } from "@hocs";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Box, Button, Card, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { changeTheme, themeSelector } from "@redux";
import { Repos } from "@services";
import { useDispatch, useSelector } from "react-redux";

export default function Home({ data }: { data: Repos }) {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();
  const muiTheme = useTheme();
  const queryString =
    "q=" + encodeURIComponent("GitHub Octocat in:readme user:defunkt");

  console.log(queryString);

  //console.log(data);

  //console.log(muiTheme.palette.mode);

  const a = data.map((repo, index) => {
    //console.log(repo);
    const v = repo.id.toString();
    return (
      <Card key={index}>
        <p>{v}</p>
        <p>{repo.name}</p>
        <p>{repo.full_name}</p>
      </Card>
    );
  });

  return <MainLayout>{a}</MainLayout>;
}

//export default MainLayout(Home);
