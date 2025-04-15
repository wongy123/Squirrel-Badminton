import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

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
  const imageUrl = `/products/${product.brand.toLowerCase()}/${product.id}/${
    product.images[0]
  }`;

  return (
    <Card sx={{ width: 240, height: '100%', display: 'flex', flexDirection: 'column'  }}>
      <CardMedia
        component="img"
        image={imageUrl}
        alt={product.name}
        sx={{ height: 250, objectFit: "cover", mt: 1 }}
      />
      <CardContent>
        <Typography variant="h2">
          {product.brand} {product.name}
        </Typography>
        <Typography variant="body1" >
          ${product.price.toFixed(2)}
        </Typography>
        {product.colour?.length > 0 && (
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
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
