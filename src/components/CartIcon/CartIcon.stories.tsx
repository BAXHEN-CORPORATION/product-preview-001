import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CartIcon from "./CartIcon";
import Stack from "@mui/material/Stack";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/CartIcon",
  component: CartIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    fill: {
      control: "color",
      description: "Icon color",
      defaultValue: "white",
    },
  },
} as ComponentMeta<typeof CartIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CartIcon> = (args) => (
  <Stack
    alignItems="center"
    justifyContent="center"
    bgcolor="common.cream"
    p={8}
  >
    <CartIcon {...args} />
  </Stack>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
export const DarkIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DarkIcon.args = {
  fill: "black",
};
