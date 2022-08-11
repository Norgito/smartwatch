import React from "react";
import { AppBar, Toolbar, Tabs } from "@mui/material";
import WatchIcon from "@mui/icons-material/Watch";
import CartWidget from "../components/CartWidget";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function NavBar() {
  return (
    <React.Fragment>
      <AnimatePresence>
        <AppBar sx={{ backgroundColor: "#2c2c2c" }}>
          <Toolbar>
            <WatchIcon fontSize="large" color="white" />
            <motion.div whileTap={{ scale: 0.7 }}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  fontWeight: "light",
                  color: "#ffffff",
                }}
              >
                SMARTWATCH
              </Link>
            </motion.div>

            <div className="navbar">
              <ul className="nav-links">
                <li>
                  <motion.div whileTap={{ scale: 0.7 }}>
                    <Link to="/category/Samsung">
                      <a href="*" className="nav-link">
                        SAMSUNG
                      </a>
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileTap={{ scale: 0.7 }}>
                    <Link to="/category/Apple">
                      <a href="*" className="nav-link">
                        APPLE
                      </a>
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileTap={{ scale: 0.7 }}>
                    <Link to="/category/Garmin">
                      <a href="*" className="nav-link">
                        GARMIN
                      </a>
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileTap={{ scale: 0.7 }}>
                    <Link to="/category/Colmi">
                      <a href="*" className="nav-link">
                        COLMI
                      </a>
                    </Link>
                  </motion.div>
                </li>
              </ul>
            </div>
            <Tabs
              sx={{ marginLeft: "auto" }}
              variant="outlined"
              color="secondary"
            ></Tabs>

            <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
              <motion.div whileTap={{ scale: 0.7 }}>
                <CartWidget />
              </motion.div>
            </Link>
          </Toolbar>
        </AppBar>
      </AnimatePresence>
    </React.Fragment>
  );
}

export default NavBar;
