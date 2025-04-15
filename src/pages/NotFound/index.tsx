import { Box, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="70vh"
      textAlign="center"
      px={2}
    >
      <Typography variant="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h2" gutterBottom>
        Hello There
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        These are not the rackets you are looking for 🛸🥫🤖
      </Typography>
      <Button variant="contained" color="secondary" component={RouterLink} to="/">
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
