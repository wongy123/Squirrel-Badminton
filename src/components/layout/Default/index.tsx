import { Box, Container } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Container component="main" maxWidth="lg" sx={{ flexGrow: 1, py: 4 }}>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export default DefaultLayout;
