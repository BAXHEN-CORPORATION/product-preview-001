import { create } from "@storybook/theming";
import { themes } from "@storybook/theming";

import logo from "../public/logo.png";

export default create({
  ...themes.dark,
  brandTitle: "Baxhen",
  brandUrl: "https://classy-narwhal-e82e98.netlify.app/",
  brandImage: logo,
  brandTarget: "_self",
});
