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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const NavItems = ["About", "Services", "Projects", "Contacts"];
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <>
      <AppBar
        elevation={0}
        position="static"
        sx={{ backgroundColor: "white", color: "black" , borderBottom:"1px solid #fafafa"}}
      >

        <Toolbar>

          {isMobile ? (
            <div>
              <IconButton onClick={() => setOpen(true)} color="inherit">
                <MenuIcon />
              </IconButton>
            </div>

          ) : (
            <>
              <Typography className="NavbarItems" sx={{flexGrow:1}}>
                <img src="/logo.png" alt="logo" />

               <div>
               {NavItems.map((item)=>(
                  <Button key={item} color="inherit">{item}</Button>
                ))}
               
                
               <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: "#2AB6911A",
                    color: "#2AB691",
                    borderRadius:'10px',
                    border:'none',
                    "&:hover": { 
                      backgroundColor: "#2AB666",
                      color:'white'
                 }}}
                >
                  Sign Up
                </Button>
                </div> 
              </Typography>
            </>
          )}
        </Toolbar>

        {/* Mobile menu */}
        <Drawer
         open={open}
         onClose={()=>setOpen(false)}
         anchor="left"
        >

          <List >
            {NavItems.map((item)=>(
              <ListItem button key={item} onClick={()=> setOpen(false)}>
                <ListItemText primary={item}/>
              </ListItem>
            ))}

            <ListItem button><ListItemText primary="Sign Up"/></ListItem>
          </List>
          
      </Drawer> 
      {/* Mobile menu */}

      </AppBar>
    </>
  );
};
