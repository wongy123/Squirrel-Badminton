import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  CardActions,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { Link as RouterLink } from "react-router-dom";
import basePath from "../../utils/basePath";
import Tooltip from "@mui/material/Tooltip";

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  colour?: string[];
  description: string;
  images: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const imageUrl = `${basePath}/products/${product.brand.toLowerCase()}/${
    product.id
  }/${product.images[0]}`;
  const productUrl = `/products/${product.brand.toLowerCase()}/${product.id}`;

  return (
    <Card
      sx={{
        width: 240,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        mx: "auto",
      }}
    >
      <CardMedia
        component="img"
        image={imageUrl}
        alt={product.name}
        sx={{
          height: 250,
          objectFit: "contain",
          mt: 1,
          backgroundColor: "#ffffff",
        }}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Product Name */}
        <Typography variant="h2">
          {product.brand} {product.name}
        </Typography>

        <Box sx={{ mt: "auto" }}>
          {/* Product Price */}
          <Typography variant="body1">${product.price.toFixed(2)}</Typography>

          {/* Product Colours */}
          {(product.colour ?? []).length > 0 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography variant="caption" color="text.secondary">
                Available in:
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                {(product.colour ?? []).map((c) => (
                  <Tooltip key={c} title={c} arrow>
                    <CircleIcon
                      key={c}
                      sx={{
                        fontSize: 16,
                        color: c.toLowerCase(),
                        stroke: "#444",
                        strokeWidth: 1.2,
                      }}
                    />
                  </Tooltip>
                ))}
              </Box>
            </Box>
          )}
          
        </Box>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          component={RouterLink}
          to={productUrl}
          fullWidth
        >
          <Typography variant="body1">View Product</Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
