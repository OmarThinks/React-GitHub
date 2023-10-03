"use client";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { changeTheme, themeSelector } from "@redux";
import { useDispatch, useSelector } from "react-redux";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();
  const muiTheme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        minHeight: "100vh",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          bgcolor: "secondary.main",
        }}
      >
        <div></div>
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
      {children}
    </Box>
  );
};

export default MainLayout;
