import { createTheme } from "@mui/material/styles";

// A custom theme for this app
let theme = createTheme({
  typography: {
    display: {
      fontFamily: "'Fraunces', serif",
      fontSize: "32px",
      lineHeight: "32px",
    },
    body: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "14px",
      lineHeight: "23px",
      fontWeight: 500,
    },
    button: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "14px",
      lineHeight: "17px",
      fontWeight: 700,
    },
    overline: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "12px",
      lineHeight: "auto",
      fontWeight: 500,
    },
  },
  palette: {
    primary: { main: "#3D8168", dark: "#1A4032" },
    common: { cream: "#F2EAE2", aurometal: "#6C7289", gunmetal: "#1C232B" },
  },
  breakpoints: { values: { mobile: 0, tablet: 700, desktop: 1280 } },
});

theme = createTheme(
  {
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            height: "48px",
            borderRadius: "8px",
            textTransform: "unset",
          },
        },
      },
    },
  },
  theme
);

export default theme;
