import { Typography, Box, Grid } from "@mui/material";
import ColourPaletteGrid from "../../components/ColourPaletteGrid";

const HomePage = () => {
  return (
    <Box>
      <Typography variant="h1">Main Title h1</Typography>

      <Typography variant="h2">Section Heading h2</Typography>

      <Typography variant="body1">This is paragraph text. body1</Typography>

      <Typography variant="caption" color="text.secondary">
        Supporting info caption
      </Typography>
      <ColourPaletteGrid />
    </Box>
  );
};

export default HomePage;
