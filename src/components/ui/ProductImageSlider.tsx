import SwipeableViews from "react-swipeable-views";
import { Box, MobileStepper, useTheme } from "@mui/material";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";

interface Props {
  images: string[];
  imagePath: string; // e.g. /products/yonex/bg66-w
  variant?: "card" | "detail";
}

const ProductImageSlider = ({ images, imagePath, variant }: Props) => {
  const styles = {
    card: {
      height: 250,
      objectFit: "cover",
      mt: 1,
      display: "block",
      mx: "auto",
    },
    detail: {
      width: "100%",
      maxWidth: 400,
      objectFit: "cover",
      borderRadius: 2,
      display: "block",
      mx: "auto",
    },
  } as const;
  const variantStyles = variant && styles[variant];
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ width: "100%", maxWidth: 400, position: "relative" }}>
        <SwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((img, index) => (
            <Box
              key={index}
              component="img"
              src={`${imagePath}/${img}`}
              alt={`Product image ${index + 1}`}
              sx={{
                width: "100%",
                ...variantStyles,
              }}
            />
          ))}
        </SwipeableViews>

        {maxSteps > 1 && (
          <>
            <IconButton
              onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
              disabled={activeStep === 0}
              sx={{
                position: "absolute",
                top: "50%",
                left: 4,
                transform: "translateY(-50%)",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            <IconButton
              onClick={() =>
                setActiveStep((prev) => Math.min(prev + 1, maxSteps - 1))
              }
              disabled={activeStep === maxSteps - 1}
              sx={{
                position: "absolute",
                top: "50%",
                right: 4,
                transform: "translateY(-50%)",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </>
        )}
      </Box>
      {maxSteps > 1 && (
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={null}
          backButton={null}
          sx={{ justifyContent: "center", mt: 1 }}
        />
      )}
    </Box>
  );
};

export default ProductImageSlider;
