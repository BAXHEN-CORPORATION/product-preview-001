import React from "react";

import ProductCard from "./container/ProductCard";
import Stack from "@mui/material/Stack";

import productImg from "./assets/product_image.png";

export default function App() {
  return (
    <Stack
      minHeight="100vh"
      width="100%"
      bgcolor="common.cream"
      alignItems="center"
      justifyContent="center"
      padding="2rem 1rem"
    >
      <ProductCard
        category="PERFUME"
        title="Gabrielle Essence Eau De Parfum"
        description="A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
        fullPrice={169.99}
        price={149.99}
        productImageUrl={productImg}
      />
    </Stack>
  );
}
