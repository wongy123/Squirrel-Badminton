import { Typography, Link, Stack, AppBar, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <AppBar
      component="footer"
      elevation={3}
      position="static"
      sx={{
        mt: "auto",
        backgroundColor: "primary.main",
        color: "text.primary",
        py: 3,
      }}
    >
      <Stack direction="column" alignItems="center" spacing={1}>
        <Typography variant="caption">
          © {new Date().getFullYear()} Squirrel Badminton
        </Typography>

        <Stack direction="row" spacing={2}>
          <Link
            href="https://www.instagram.com/squirrel.badminton/"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <IconButton color="inherit" size="small">
              <InstagramIcon fontSize="small" />
            </IconButton>
          </Link>
          <Link
            href="https://www.facebook.com/squirrel.badminton/"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <IconButton color="inherit" size="small">
              <FacebookIcon fontSize="small" />
            </IconButton>
          </Link>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography variant="caption" fontSize="0.7rem">
            Designed and Built with ❤️ by
          </Typography>
          <Link
            href="https://www.linkedin.com/in/manshingwong/"
            target="_blank"
            rel="noopener"
            color="inherit"
            underline="hover"
            sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
          >
            <Typography variant="caption" fontSize="0.7rem">
              Angus Wong
            </Typography>
            <LinkedInIcon fontSize="small" />
          </Link>
        </Stack>
      </Stack>
    </AppBar>
  );
};

export default Footer;
