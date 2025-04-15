import { Box, Typography, Link, Stack, AppBar } from '@mui/material';

const Footer = () => {
  return (
    <AppBar
      component="footer"
      elevation={3}
      position="static" // ✅ important! static = part of normal flow
      sx={{
        mt: 'auto',
        backgroundColor: 'primary.main',
        color: 'text.primary',
        py: 3,
      }}
    >
      <Stack direction="column" alignItems="center" spacing={1}>
        <Typography variant="caption">
          © {new Date().getFullYear()} Squirrel Badminton
        </Typography>

        <Stack direction="row" spacing={2}>
          <Link
            href="https://www.instagram.com/squirrelbadminton"
            target="_blank"
            rel="noopener"
            underline="hover"
            color="inherit"
          >
            
            <Typography variant='caption'>Instagram</Typography>
          </Link>
          <Link
            href="https://www.facebook.com/squirrelbadminton"
            target="_blank"
            rel="noopener"
            underline="hover"
            color="inherit"
          >
    <Typography variant='caption'>Facebook</Typography>
          </Link>
        </Stack>
      </Stack>
    </AppBar>
  );
};

export default Footer;
