"use client";
import store, { themeSelector } from "@redux";
import React from "react";
import { Provider, useSelector } from "react-redux";

import { createTheme, ThemeProvider } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <MUIProvider>{children}</MUIProvider>
    </Provider>
  );
}

const MUIProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useSelector(themeSelector);
  const themeOptions = theme === "light" ? lightTheme : darkTheme;
  return <ThemeProvider theme={themeOptions}>{children}</ThemeProvider>;
};
