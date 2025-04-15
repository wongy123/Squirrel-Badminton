import { useEffect, useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import ProductCard, { Product } from '../../components/product/ProductCard';

const productFolders = ['yonex-exbolt-68','yonex-exbolt-68','yonex-exbolt-68','yonex-exbolt-68',];

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productData = await Promise.all(
        productFolders.map(async (folder) => {
          const res = await fetch(`/products/${folder}/index.json`);
          return res.json();
        })
      );

      setProducts(productData);
    };

    fetchProducts();
  }, []);

  return (
    <Box
    sx={{
        display: 'flex',
        flexDirection: "column",
        my: 4
    }}>
      <Typography variant="h1" sx={{ mb: 2, textAlign: "center" }}>
        Featured Products
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedProducts;
