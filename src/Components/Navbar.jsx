import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useMediaQuery,
  Button,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const NavItems = ["About", "Services", "Projects", "Contacts"];
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar
        elevation={0}
        position="static"
        sx={{
           backgroundColor: "white",
           color: "black", 
           borderBottom: "1px solid #fafafa",
           padding: { xs: "10px 0", md: "15px 0" },
        }}
      >
        <Toolbar>
          {isMobile ? (
            <div>
              <IconButton onClick={() => setOpen(true)} color="inherit">
                <MenuIcon />
              </IconButton>
            </div>
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              {/* Logo Section */}
              <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                <img src="/logo.png" alt="logo" style={{ height: '40px' }} />
              </Typography>

              {/* Navigation Items Section */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                {NavItems.map((item) => (
                  <Button
                    key={item}
                    color="inherit"
                    sx={{
                      fontSize: "16px",
                      fontWeight: 500,
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                        borderRadius: "8px",
                      },
                    }}
                  >
                    {item}
                  </Button>
                ))}

                {/* Sign Up Button */}
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: "#2AB6911A",
                    color: "#2AB691",
                    borderRadius: "10px",
                    border: "none",
                    "&:hover": {
                      backgroundColor: "#2AB666",
                      color: "white",
                    },
                  }}
                >
                  Sign Up
                </Button>
              </Box>
            </Box>
          )}
        </Toolbar>

        {/* Mobile menu */}
        <Drawer open={open} onClose={() => setOpen(false)} anchor="left">
          <List>
            {NavItems.map((item) => (
              <ListItem button key={item} onClick={() => setOpen(false)}>
                <ListItemText primary={item} />
              </ListItem>
            ))}

            <ListItem button>
              <ListItemText primary="Sign Up" />
            </ListItem>
          </List>
        </Drawer>
        {/* Mobile menu */}
      </AppBar>
    </>
  );
};
