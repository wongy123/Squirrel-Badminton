import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  ButtonBase,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo / Site Name */}
        <ButtonBase
          component={RouterLink}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            textDecoration: "none",
          }}
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
        </ButtonBase>

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
