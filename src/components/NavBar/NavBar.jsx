import React from "react";
import { AppBar, Typography, Toolbar, Tabs, Tab, Button } from "@mui/material";
import WatchIcon from '@mui/icons-material/Watch';
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <React.Fragment>
      <AppBar sx={{ backgroundColor: '#202020' }}>
        <Toolbar>
          <WatchIcon fontSize="large" color="white" />
          <Typography fontSize="large" color="secondary">SMARTWATCH</Typography>
          <Tabs textColor="white"  sx={{marginLeft:"auto"}}>
            <Tab label="PRODUCTS 1" />
            <Tab label="PRODUCTS 2" />
            <Tab label="PRODUCTS 3" />
            <Tab label="PRODUCTS 4" />
          </Tabs>
            <Button sx={{marginLeft:"auto"}} variant="outlined" color="secondary">Login</Button>
            <Button sx={{margin:"10px"}} variant="outlined" color="secondary">Register</Button>
            <CartWidget />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default NavBar;




