import { Typography, Box, Container } from "@mui/material";
import ColourPaletteGrid from "../../components/ColourPaletteGrid";
import HeroBanner from "./HeroBanner";
import AboutUs from "./AboutUs";
import FeaturedProducts from "./FeaturedProducts";
import InstagramFeed from "./InstagramFeed";

const HomePage = () => {
  return (
    <Box>
      <HeroBanner />
      <Container maxWidth="lg">
        <AboutUs />
        <FeaturedProducts />
        <InstagramFeed />



{/* For development */}
        <Typography variant="h1">Main Title h1</Typography>

        <Typography variant="h2">Section Heading h2</Typography>

        <Typography variant="body1">This is paragraph text. body1</Typography>

        <Typography variant="caption" color="text.secondary">
          Supporting info caption
        </Typography>
        <ColourPaletteGrid />



      </Container>
    </Box>
  );
};

export default HomePage;
