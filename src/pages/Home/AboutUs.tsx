import { Box, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        my: 1,
      }}
    >
      <Typography variant="h1" align="center" sx={{my: 1}}>
        ABOUT SQUIRREL BADMINTON
      </Typography>
      <Typography variant="body1" my={1}>
        When Sam (a.k.a Squirrel) first landed in Brisbane in 2010, he realized
        there aren't many badminton service providers. He decided to bring his
        professionally trained skill and started servicing others.
      </Typography>
      <Typography variant="body1" fontWeight="bold" my={1}>
        Haven't tried our stringing yet? Check out what we can help you with.
      </Typography>
    </Box>
  );
};

export default AboutUs;
