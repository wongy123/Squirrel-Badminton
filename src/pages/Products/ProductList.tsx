import ProductCard, { Product } from "../../components/product/ProductCard";
import { Grid } from "@mui/material";


interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <Grid container spacing={4} justifyContent="center" alignItems="stretch">
      {products.map((product) => (
        <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
