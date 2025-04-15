import { useEffect, useState } from "react";
import { Box, Typography, Container, Stack, Button } from "@mui/material";
import { Product } from "../../components/product/ProductCard";
import ProductList from "./ProductList";

type ProductIndexEntry = { brand: string; id: string };

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [brandFilter, setBrandFilter] = useState<string | null>(null);
  const brandNames = Array.from(new Set(products.map((p) => p.brand)));

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

  const filteredProducts = brandFilter
    ? products.filter((p) => p.brand === brandFilter)
    : products;

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          m: 4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          All Products
        </Typography>
        {/* Filter */}
        <Box sx={{ my: 3, alignSelf: "center" }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Filter by brand:
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant={brandFilter === null ? "contained" : "outlined"}
              onClick={() => setBrandFilter(null)}
              color="secondary"
            >
              <Typography variant="caption">All</Typography>
            </Button>
            {brandNames.map((brand) => (
              <Button
                key={brand}
                variant={brandFilter === brand ? "contained" : "outlined"}
                onClick={() => setBrandFilter(brand)}
                color="secondary"
              >
                <Typography variant="caption">{brand}</Typography>
              </Button>
            ))}
          </Stack>
        </Box>

        <ProductList products={filteredProducts} />
      </Box>
    </Container>
  );
};

export default ProductsPage;
