import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import img from "../../assets/product_image.png";

import ProductCard from "./ProductCard";
import Stack from "@mui/material/Stack";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Containers/ProductCard",
  component: ProductCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: {
      control: "text",
      description: "Product's name",
    },
    category: {
      control: "text",
      description: "Product's category (i.e PERFUME, ELECTRONICS, FASHION)",
    },
    description: { control: "text", description: "Product's description" },
    price: { control: "number", description: "Product's end price" },
    fullPrice: {
      control: "number",
      description: "Product's full price without discount",
    },
    productImageUrl: {
      control: "text",
      description: "Product's photo",
      defaultValue:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",
    },
    onClick: { control: "none" },
  },
} as ComponentMeta<typeof ProductCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProductCard> = (args) => (
  <Stack
    alignItems="center"
    justifyContent="center"
    bgcolor="common.cream"
    p={8}
  >
    <ProductCard {...args} />
  </Stack>
);

export const DefaultProductCard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultProductCard.args = {
  title: "Gabrielle Essence Eau De Parfum",
  category: "PERFUME",
  description:
    "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
  fullPrice: 169.99,
  price: 149.99,
  productImageUrl: img,
};
export const NoImageProductCard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoImageProductCard.args = {
  title: "Gabrielle Essence Eau De Parfum",
  category: "PERFUME",
  description:
    "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
  fullPrice: 169.99,
  price: 149.99,
};
