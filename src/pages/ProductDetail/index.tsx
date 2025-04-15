import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, CircularProgress, Container } from "@mui/material";
import { Product } from "../../components/product/ProductCard";
import ProductIntro from "./ProductIntro";
import ProductDescription from "./ProductDescription";

const ProductDetailPage = () => {
  const { brand, id } = useParams<{ brand: string; id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!brand || !id) {
      navigate("/not-found", { replace: true });
      return;
    }

    (async () => {
      try {
        const res = await fetch(`/products/${brand}/${id}/index.json`);
        if (!res.ok) throw new Error("Not found");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Failed to load product:", err);
        navigate("/not-found", { replace: true });
      } finally {
        setLoading(false);
      }
    })();
  }, [brand, id, navigate]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={8}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="md">
      {product && (
        <>
          <ProductIntro product={product} />
          <ProductDescription product={product} />
        </>
      )}
    </Container>
  );
};

export default ProductDetailPage;
