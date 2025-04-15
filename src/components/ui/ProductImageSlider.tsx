import Slider from "react-slick";
import { Box } from "@mui/material";

interface Props {
  images: string[];
  imagePath: string;
  variant?: "card" | "detail";
}

const styles = {
  card: {
    height: 250,
    objectFit: "cover",
    mt: 1,
    borderRadius: 2,
  },
  detail: {
    width: "100%",
    maxWidth: 400,
    borderRadius: 2,
    objectFit: "cover",
  },
} as const;

const ProductImageSlider = ({ images, imagePath, variant = "detail" }: Props) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 400 }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <Box
            key={index}
            component="img"
            src={`${imagePath}/${img}`}
            alt={`Product image ${index + 1}`}
            sx={{
              width: "100%",
              ...styles[variant],
              display: "block",
              mx: "auto",
            }}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default ProductImageSlider;
