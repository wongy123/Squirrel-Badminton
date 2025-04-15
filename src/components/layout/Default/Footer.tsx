import { Box, Typography, Link, Stack, AppBar } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary',
        py: 3,
        mt: 'auto',
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
    </Box>
    </AppBar>
  );
};

export default Footer;
