import "@mui/material";

declare module "@mui/material" {
  //** Palette */

  interface CommonColors {
    cream: string;
    aurometal: string;
    gunmetal: string;
  }

  //** Theme */

  interface Theme {}
  interface ThemeOptions {}

  //* Typography */

  interface TypographyVariants {
    display: React.CSSProperties;
    body: React.CSSProperties;
    overline: React.CSSProperties;
    button: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    display?: React.CSSProperties;
    body?: React.CSSProperties;
    overline?: React.CSSProperties;
    button?: React.CSSProperties;
  }

  interface TypographyPropsVariantOverrides {
    // disabled defaults
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
    body1: false;
    body2: false;
    button: false;
    caption: false;

    // custom variants
    display: true;
    body: true;
    overline: true;
    button: true;
  }

  //** Breakpoints */

  interface BreakpointOverrides {
    // removes default breakpoints
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    // custom breakpoints
    mobile: true;
    tablet: true;
    desktop: true;
  }
}
