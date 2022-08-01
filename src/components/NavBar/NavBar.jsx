import React from "react";
import { AppBar, Toolbar, Tabs, Tab, Button } from "@mui/material";
import WatchIcon from '@mui/icons-material/Watch';
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <React.Fragment>
      <AppBar sx={{ backgroundColor: '#2c2c2c' }}>
        <Toolbar>
          <WatchIcon fontSize="large" color="white" />
          <Link to="/" style={{textDecoration: "none", fontWeight:"bold", color: "#7600A8"}}>SMARTWATCH</Link>
          <Tabs textColor="white"  sx={{marginLeft:"auto"}}>
            <Link to="/category/Samsung" style={{textDecoration: "none", color: "white"}}><Tab label="SAMSUNG" /></Link>
            <Link to="/category/Apple" style={{textDecoration: "none", color: "white"}}><Tab label="APPLE" /></Link>
            <Link to="/category/Garmin" style={{textDecoration: "none", color: "white"}}><Tab label="GARMIN" /></Link>
          </Tabs>
            <Button sx={{marginLeft:"auto"}} variant="outlined" color="secondary">Login</Button>
            <Button sx={{margin:"10px"}} variant="outlined" color="secondary">Register</Button>
            <Link to="/cart" style={{textDecoration: "none", color: "white"}}>
            <CartWidget />
            </Link>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default NavBar;




