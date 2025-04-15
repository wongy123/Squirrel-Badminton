import { Box, Typography } from "@mui/material";
import { Product } from "../../components/product/ProductCard";

interface Props {
  product: Product;
}

const ProductDescription = ({ product }: Props) => {
  return (
    <Box mb={4}>
      <Typography variant="h2" sx={{ lineHeight: 2.5 }}>
        Description
      </Typography>
      <Typography variant="body1" sx={{ whiteSpace: "pre-line", lineHeight: 2}}>
        {product.description}
      </Typography>
    </Box>
  );
};

export default ProductDescription;
