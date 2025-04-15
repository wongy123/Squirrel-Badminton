import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export interface Product {
  id: string;
  name: string;
  price: number;
  colour?: string[];
  description: string;
  images: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const imageUrl = `/products/${product.id}/${product.images[0]}`;

  return (
    <Card sx={{ maxWidth: 300, width: "100%" }}>
      <CardMedia
        component="img"
        image={imageUrl}
        alt={product.name}
        sx={{ height: 200, objectFit: "cover", mt: 1 }}
      />
      <CardContent>
        <Typography variant="h2">{product.name}</Typography>
        <Typography variant="body1" color="text.secondary">
          ${product.price.toFixed(2)}
        </Typography>
        {product.colour?.length > 0 && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="caption" color="text.secondary">
              Available in:
            </Typography>
            {product.colour.map((c) => (
              <CircleIcon
                key={c}
                sx={{
                  fontSize: 16,
                  color: c.toLowerCase(),
                  stroke: "#444",
                  strokeWidth: 1.2,
                }}
              />
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
