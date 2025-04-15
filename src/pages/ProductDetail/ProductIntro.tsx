import { Grid, Typography, Box, Button } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { Product } from "../../components/product/ProductCard";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";

interface Props {
  product: Product;
}

const ProductIntro = ({ product }: Props) => {
  const imageUrl = `/products/${product.brand.toLowerCase()}/${product.id}/${
    product.images[0]
  }`;

  return (
    <Grid container spacing={4}>
      {/* Image */}
      <Grid item xs={12} md={5}>
        <Box
          component="img"
          src={imageUrl}
          alt={product.name}
          sx={{
            width: "100%",
            maxWidth: 400,
            borderRadius: 2,
            objectFit: "cover",
          }}
        />
      </Grid>
      {/* Product Intro */}
      <Grid item xs={12} md={7}>
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
            {product.colour?.length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.5,
                }}
              >
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.5 }}>
                  Available in:
                </Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  {product.colour.map((c) => (
                    <CircleIcon
                      key={c}
                      sx={{
                        fontSize: 16,
                        color: c.toLowerCase(),
                        stroke: "#444",
                        strokeWidth: 1.2,
                        lineHeight: 1.5
                      }}
                    />
                  ))}
                </Box>
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
                  Messenger
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<WhatsAppIcon />}
                  href={`https://wa.me/1234567890`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
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
