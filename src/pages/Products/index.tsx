import { useEffect, useState } from "react";
import { Box, Typography, Container, Stack, Button } from "@mui/material";
import { Product } from "../../components/product/ProductCard";
import ProductList from "./ProductList";

type ProductIndexEntry = { brand: string; id: string };

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [brandFilter, setBrandFilter] = useState<string | null>(null);
  const [brandList, setBrandList] = useState<{ slug: string; name: string }[]>(
    []
  );

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

    const fetchBrands = async () => {
      const res = await fetch("/products/brands.json");
      const brands = await res.json();
      setBrandList(brands);
    };

    fetchProducts();
    fetchBrands();
  }, []);

  const filteredProducts = brandFilter
    ? products.filter((p) => p.brand.toLowerCase() === brandFilter)
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
            {brandList.map(({ slug, name }) => (
              <Button
                key={slug}
                variant={brandFilter === slug ? "contained" : "outlined"}
                onClick={() => setBrandFilter(slug)}
                color="secondary"
              >
                <Typography variant="caption">{name}</Typography>
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
