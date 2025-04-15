import { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      {/* Menu Icon Button (visible only on xs/sm screens) */}
      <IconButton
        color="inherit"
        edge="end"
        onClick={toggleDrawer}
        sx={{ display: { xs: "flex", md: "none" } }}
        aria-label="Open menu"
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: 240 },
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={RouterLink}
              to="/products"
              onClick={toggleDrawer}
            >
              <ListItemText primary="Products" />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="https://www.instagram.com/squirrel.badminton/"
              target="_blank"
              rel="noopener"
              onClick={toggleDrawer}
            >
                <InstagramIcon sx={{ mr: 2 }}/>
              <ListItemText primary="Instagram" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="https://www.facebook.com/squirrel.badminton/"
              target="_blank"
              rel="noopener"
              onClick={toggleDrawer}
            >
                <FacebookIcon sx={{ mr: 2 }} />
              <ListItemText primary="Facebook" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default MobileMenu;
