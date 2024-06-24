import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "@site/src/components/App/index";
const theme = createTheme({
  palette: {
    primary: {
      main: "",
      light: "",
      dark: "",
    },
    secondary: {
      main: "",
      light: "",
      dark: "",
    },
  },
});
export default function Root({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <App children={children}>
      </ThemeProvider>
    </>
  )
}