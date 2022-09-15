import React from "react";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import theme from "../src/styles/theme";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*", control: "none" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    canvas: {
      hidden: true,
    },
  },
  viewMode: "docs",
};

addDecorator((story) => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      {/* <Toast */}
      <CssBaseline />
      {story()}
    </ThemeProvider>
  </MuiThemeProvider>
));
