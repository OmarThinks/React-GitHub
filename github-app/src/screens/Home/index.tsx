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
  return <MainLayout>{"Hi"}</MainLayout>;
}

//export default MainLayout(Home);
