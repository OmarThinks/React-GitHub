"use client";
import { MainLayout } from "@hocs";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Box, Button, Card, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { changeTheme, themeSelector } from "@redux";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();
  const muiTheme = useTheme();

  //console.log(muiTheme.palette.mode);

  return (
    <MainLayout>
      <Box>
        <Typography>Home</Typography>
        <Button
          onClick={() => {
            dispatch(changeTheme(theme === "light" ? "dark" : "light"));
          }}
          color={"secondary"}
        >
          Change Theme
        </Button>
        <Card></Card>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "background.default",
            color: "text.primary",
            borderRadius: 1,
            p: 3,
          }}
        >
          {muiTheme.palette.mode} mode
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => {
              dispatch(changeTheme(theme === "light" ? "dark" : "light"));
            }}
            color="inherit"
          >
            {muiTheme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Box>
      </Box>
    </MainLayout>
  );
}

//export default MainLayout(Home);
