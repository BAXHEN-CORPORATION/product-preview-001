//** External Imports */

import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

//** Local Imports */

import CartIcon from "../../components/CartIcon";

/**
 * JSON representation of a {@link ProductCard}
 * @see ProductCard,
 
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
  fullPrice: number;
  /**
   * Product's discount price
   */
  price: number;
  /**
   * Product's image url
   */
  productImageUrl?: string;
  /**
   * Product's action when the user clicks on add to cart button
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

//** Default Props */
const defaultProps: Partial<ProductCardProps> = {
  productImageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",
};

/**
 * @container
 * Container for displaying product info
 * @example
 *
 * const category = "PERFUME"
 * const title = "Gabrielle Essence Eau De Parfum"
 * const description = "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
 * const fullPrice = 169.99
 * const price = 149.99
 * const productImageUrl = "https://cdn.pixabay.com/photo/2019/04/06/19/22/glass-4108085__340.jpg"
 * const onClick = () => {}
 *
 * return (
 *   <ProductCard
 *    category={category}
 *    title={title}
 *    description={description}
 *    fullPrice={fullPrice}
 *    price={price}
 *    productImageUrl={productImageUrl}
 *    onClick={onClick}
 *  />
 * )
 *
 */
const ProductCard: React.FC<ProductCardProps> = ({
  productImageUrl,
  title,
  category,
  description,
  fullPrice,
  price,
  onClick,
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
          src={productImageUrl}
          alt={title}
        />
      </Box>
      <Stack flex={1} bgcolor="common.white" padding="24px" spacing={3}>
        <Typography variant="overline">{category}</Typography>
        <Typography variant="display">{title}</Typography>
        <Typography variant="body">{description}</Typography>

        <Stack direction="row" spacing="19px">
          <Typography variant="display" color="primary.main">
            ${price}
          </Typography>
          <Typography variant="body" component="del">
            ${fullPrice}
          </Typography>
        </Stack>

        <Button onClick={onClick} variant="contained" startIcon={<CartIcon />}>
          Add to Cart
        </Button>
      </Stack>
    </Stack>
  );
};

ProductCard.defaultProps = defaultProps;

export default ProductCard;
