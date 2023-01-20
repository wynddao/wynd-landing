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
      fontSize: '48px',
      lineHeight: '58px',
      '@media (min-width:768px)': {
        fontSize: '4rem',
        lineHeight: '76px'
      },
    },
    h2: {
      fontFamily: "Barlow Regular",
      fontStyle: "normal",
      fontWeight: 700,
      color: "white",
      textAlign: 'center',
      fontSize: '28px',
      lineHeight: '33.6px',
      '@media (min-width:768px)': {
        fontSize: '3.125rem',
        lineHeight: '120%'
      },
    },
    h3: {
      fontFamily: "Barlow Regular",
      fontStyle: "normal",
      fontWeight: 700,
      color: "white",
      textAlign: 'center',
      fontSize: '24px',
      lineHeight: '28.8px',
      '@media (min-width:768px)': {
        fontSize: '2rem',
        lineHeight: '38px'
      },
    },
    h4: {
      fontFamily: "Barlow Regular",
      fontStyle: "normal",
      fontWeight: 700,
      color: "white",
      textAlign: 'center',
      fontSize: '16px',
      lineHeight: '18px',
      '@media (min-width:768px)': {
        fontSize: '1.25rem',
        lineHeight: '24px'
      },
    },
    button: {
      textTransform: 'none',
      fontFamily: "Lato Regular",
      fontSize: '14px',
      lineHeight: '21px',
      fontWeight: '700',
      '@media (min-width:768px)': {
        fontSize: '1rem',
        lineHeight: '24px'
      },
    },
    text: {
      fontFamily: 'Lato Regular',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '21px',
      color: 'rgba(232, 232, 255, 0.8)',
      '@media (min-width:768px)': {
        fontSize: '1rem',
        lineHeight: '150%',
      },
    },
    subtitle1: {
      fontFamily: "Barlow Regular",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "40px",
      lineHeight: "48px",
      letterSpacing: "-0.03em",
      '@media (min-width:768px)': {
        fontSize: '4.375rem',
        lineHeight: '84px',
      },
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

const Layout = (props) => {
  const {checkDisclaimer, children} = props;

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
        <NavBar checkDisclaimer={checkDisclaimer} />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;