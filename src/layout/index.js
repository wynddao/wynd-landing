import React from "react";
import { ThemeProvider } from '@emotion/react'
import GlobalStyles from "@mui/material/GlobalStyles";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: '#6FCF97'
    },
    background: {
      default: '#131222'
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  spacing: 8
});

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <NavBar />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;