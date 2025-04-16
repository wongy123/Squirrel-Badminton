import { Grid, Typography, Box, Button } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { Product } from "../../components/product/ProductCard";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ProductImageSlider from "../../components/ui/ProductImageSlider";
import basePath from "../../utils/basePath";

interface Props {
  product: Product;
}

const ProductIntro = ({ product }: Props) => {
  const imagePath = `${basePath}/products/${product.brand.toLowerCase()}/${
    product.id
  }`;

  return (
    <Grid
      container
      spacing={4}
      sx={{
        mt: 4,
        flexWrap: { xs: "wrap", md: "nowrap" },
        justifyContent: { xs: "center", md: "flex-start" },
      }}
      wrap="nowrap"
    >
      {/* Image */}
      <Grid size={{ xs: 12, md: 5 }}>
        {/* <Box
          component="img"
          src={imageUrl}
          alt={product.name}
          sx={{
            width: "100%",
            maxWidth: 400,
            borderRadius: 2,
            objectFit: "cover",
          }}
        /> */}
        <ProductImageSlider
          images={product.images}
          imagePath={imagePath}
          variant="detail"
        />
      </Grid>
      {/* Product Intro */}
      <Grid size={{ xs: 12, md: 7 }}>
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h1" sx={{ lineHeight: 2.5 }}>
              {product.brand} {product.name}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.5 }}
            >
              Brand: {product.brand}
            </Typography>
            {/* Colours */}
            {(product.colour ?? []).length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.5,
                }}
              >
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.5 }}
                >
                  Available in:
                </Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  {(product.colour ?? []).map((c) => (
                    <CircleIcon
                      key={c}
                      sx={{
                        fontSize: 16,
                        color: c.toLowerCase(),
                        stroke: "#444",
                        strokeWidth: 1.2,
                        lineHeight: 1.5,
                      }}
                    />
                  ))}
                </Box>
                <Typography variant="caption" color="text.secondary">
                  {(product.colour ?? []).join(", ")}
                </Typography>
              </Box>
            )}
            <Typography variant="h2" sx={{ my: 2, lineHeight: 2 }}>
              Price: ${product.price.toFixed(2)}
            </Typography>
            {/* Contact buttons */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="body1" sx={{ mb: 2 }}>
                Contact us to place an order 👇
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<FacebookIcon />}
                  href={`https://m.me/squirrel.badminton`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography variant="body1">Messenger</Typography>
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<InstagramIcon />}
                  href={`https://ig.me/m/squirrel.badminton`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography variant="body1">Instagram</Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductIntro;
