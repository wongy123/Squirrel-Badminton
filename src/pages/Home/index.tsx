import { Typography, Box, Container } from "@mui/material";
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
      </Container>
    </Box>
  );
};

export default HomePage;
