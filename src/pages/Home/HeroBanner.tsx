import { Box, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: 300, sm: 400, md: 500 },
        backgroundImage: `url(/images/HeroBackground.avif)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.3))",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          px: { xs: 2, sm: 4, md: 24 },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          fontWeight="bold"
          color="#fff"
          sx={{ my: 2, textAlign: { xs: "center", sm: "left" } }}
        >
          Level Up Your Game
        </Typography>
        <Typography
          variant="h2"
          color="#fff"
          sx={{ my: 1, mb: 3, textAlign: { xs: "center", sm: "left" } }}
        >
          Premium badminton gear for all players
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          component={RouterLink}
          to="/products"
          sx={{
            width: "160px",
            alignSelf: { xs: "center", sm: "flex-start" },
          }}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
};

export default HeroBanner;
