import { useEffect, useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import { Product } from "../../components/product/ProductCard";
import ProductList from "./ProductList";

type ProductIndexEntry = { brand: string; id: string };

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const indexRes = await fetch("/products/index.json");
      const entries: ProductIndexEntry[] = await indexRes.json();

      const productData = await Promise.all(
        entries.map(async ({ brand, id }) => {
          const res = await fetch(`/products/${brand}/${id}/index.json`);
          return res.json();
        })
      );

      setProducts(productData);
    };

    fetchProducts();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ m: 4 }}>
        <Typography variant="h1" sx={{ mb: 4, textAlign: "center" }}>
          All Products
        </Typography>
        <ProductList products={products} />
      </Box>
    </Container>
  );
};

export default ProductsPage;
