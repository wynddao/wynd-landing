import React from "react";
import { ThemeProvider } from '@emotion/react'
import GlobalStyles from "@mui/material/GlobalStyles";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import BarlowRegular from "./Barlow-Regular.ttf";
import BarlowBold from "./Barlow-Bold.ttf";
import LatoRegular from "./Lato-Regular.ttf";
import LatoBold from "./Lato-Bold.ttf";

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
    h1: {
      fontFamily: "Barlow Regular",
      fontStyle: "normal",
      fontWeight: 700,
      color: "white",
      textAlign: 'center',
      fontSize: '64px',
      lineHeight: '77px'
    },
    h2: {
      fontFamily: "Barlow Regular",
      fontStyle: "normal",
      fontWeight: 700,
      color: "white",
      textAlign: 'center',
      fontSize: '50px',
      lineHeight: '120%'
    },
    h3: {
      fontFamily: "Barlow Regular",
      fontStyle: "normal",
      fontWeight: 700,
      color: "white",
      textAlign: 'center',
      fontSize: '32px',
      lineHeight: '38px'
    },
    button: {
      textTransform: 'none',
      fontFamily: "Lato Regular",
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '700'
    },
    text: {
      fontFamily: 'Lato Regular',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '150%',
      color: 'rgba(232, 232, 255, 0.8);'
    }
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthSm: {
          '&.MuiContainer-maxWidthSm': {
            maxWidth: 200,
          },
        },
        maxWidthMd: {
          '&.MuiContainer-maxWidthMd': {
            maxWidth: 320,
          },
        },
        maxWidthLg: {
          '&.MuiContainer-maxWidthLg': {
            maxWidth: 1310,
          },
        }
      }
    }
  },
  spacing: 8
});

const Layout = ({ children }) => {
  return (
    <>
      <style
          dangerouslySetInnerHTML={{
            __html: `
            @font-face {
              font-family: 'Barlow Regular';
              font-style: normal;
              font-weight: 300;
              src: url('${BarlowRegular}');
            }
            @font-face {
              font-family: 'Barlow Bold';
              font-style: normal;
              font-weight: 300;
              src: url('${BarlowBold}');
            }
            @font-face {
              font-family: 'Lato Regular';
              font-style: normal;
              font-weight: 300;
              src: url('${LatoRegular}');
            }
            @font-face {
              font-family: 'Lato Bold';
              font-style: normal;
              font-weight: 700;
              src: url('${LatoBold}');
            }
        `,
        }}
      />
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