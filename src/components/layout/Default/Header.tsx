import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo / Site Name */}
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          component={RouterLink}
          to="/"
          sx={{ textDecoration: "none" }}
        >
          <Box
            component="img"
            src="/images/RealisticLogo.png"
            alt="Squirrel Badminton"
            sx={{ height: 70 }}
          />
          <Typography variant="h2" color="text.primary">
            Squirrel Badminton
          </Typography>
        </Box>

        {/* Navigation Links + Socials */}
        <Box display="flex" alignItems="center" gap={2}>
          <Button component={RouterLink} to="/products" color="inherit">
            <Typography variant="body1">Products</Typography>
          </Button>

          <IconButton
            component="a"
            href="https://www.instagram.com/squirrel.badminton/"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <InstagramIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://www.facebook.com/squirrel.badminton/"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <FacebookIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
