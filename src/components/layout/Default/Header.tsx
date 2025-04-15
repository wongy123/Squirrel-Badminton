import { AppBar, Box, Toolbar, Typography, IconButton, Button } from '@mui/material';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo / Site Name */}
        <Box display="flex" alignItems="center" gap={1}>
          <SportsTennisIcon />
          <Typography
            variant="h2"
            component={RouterLink}
            to="/"
            color="inherit"
            sx={{ textDecoration: 'none' }}
          >
            Squirrel Badminton
          </Typography>
        </Box>

        {/* Navigation Links + Socials */}
        <Box display="flex" alignItems="center" gap={2}>
          <Button
            component={RouterLink}
            to="/products"
            color="inherit"
            sx={{ fontWeight: 500 }}
          >
            <Typography variant='body1'>
                Products
            </Typography>
          </Button>

          <IconButton
            component="a"
            href="https://www.instagram.com/squirrelbadminton" // TODO: replace with real link
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <InstagramIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://www.facebook.com/squirrelbadminton" // TODO: replace with real link
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
