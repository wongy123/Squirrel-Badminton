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
import MobileMenu from "./MobileMenu";
import basePath from "../../../utils/basePath"

const Header = () => {
  const logoUrl = `${basePath}/images/RealisticLogo.png`;

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
            src={logoUrl}
            alt="Squirrel Badminton"
            sx={{ height: 70 }}
          />
          <Typography variant="h2" color="text.primary">
            Squirrel Badminton
          </Typography>
        </ButtonBase>

        {/* Navigation Links + Socials */}
        <Box sx={{ ml: "auto" }}>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {/* Desktop nav items */}
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
          </Box>

          <MobileMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
