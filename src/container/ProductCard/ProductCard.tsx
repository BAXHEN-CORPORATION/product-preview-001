//** External Imports */
import React from "react";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CartIcon from "../../components/CartIcon";

//** Local Imports */

//** Typings */

/**
 * JSON representation of an {@link ProductCard}
 * @see ProductCard
 */
export interface ProductCardProps {
  /**
   * Product's category
   */
  category: string;
  /**
   * Product's name
   */
  title: string;
  /**
   * Product's description
   */
  description: string;
  /**
   * Product's full price
   */
  price: number;
  /**
   * Product's discount price
   */
  discountPrice: number;
  /**
   * Product's image url
   */
  productUrl: string;
}

//** Default Props */
const defaultProps: Partial<ProductCardProps> = {};

/**
 * Container for displaying product info
 * @category Containers
 * @component
 */
const ProductCard: React.FC<ProductCardProps> = ({
  productUrl,
  title,
  category,
  description,
  price,
  discountPrice,
}) => {
  return (
    <Stack
      sx={{
        height: { mobile: "100%", tablet: "450px" },
        width: { mobile: "100%", tablet: "600px" },
        borderRadius: "10px",
        overflow: "hidden",
      }}
      direction={{ mobile: "column", tablet: "row" }}
    >
      <Box
        height={{ mobile: "240px", tablet: "100%" }}
        flex={{ mobile: "unset", tablet: 1 }}
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={productUrl}
          alt={title}
        />
      </Box>
      <Stack flex={1} bgcolor="common.white" padding="24px" spacing={3}>
        <Typography variant="overline">{category}</Typography>
        <Typography variant="display">{title}</Typography>
        <Typography variant="body">{description}</Typography>

        <Stack direction="row" spacing="19px">
          <Typography variant="display" color="primary.main">
            ${discountPrice}
          </Typography>
          <Typography variant="body" component="del">
            ${price}
          </Typography>
        </Stack>

        <Button variant="contained" startIcon={<CartIcon />}>
          Add to Cart
        </Button>
      </Stack>
    </Stack>
  );
};

ProductCard.defaultProps = defaultProps;

export default ProductCard;
