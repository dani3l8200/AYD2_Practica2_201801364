import React from "react";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from '@mui/material/IconButton';
import LogoutIcon from "@mui/icons-material/Logout";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

import "../styles/navigation.css";

const Navigation = () => {

  const logOut = (e) =>{
    window.localStorage.clear();
  }

  const goToGit = () => {
    window.open("https://gitlab.com/ChinJavier/practica3_4_grupo5");
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="navigation:app-bar">
          <Toolbar>
            <AccountBalanceIcon />
            <Typography
              variant="h5"
              noWrap
              component="div"
              padding="10px"
              sx={{ flexGrow: 1, display: { sm: "block" } }}
            >
              U-BANCA
            </Typography>

            <div className="navigation:icons-div">
            <IconButton
                  aria-label="account of current user"
                  aria-haspopup="true"
                  onClick={goToGit}
                  color="inherit"
                >
                  <GitHubIcon spacing="10" />
                </IconButton>

              <div className="navigation:icon">
              <Link to="/login">
                <IconButton
                  aria-label="account of current user"
                  aria-haspopup="true"
                  onClick={logOut}
                  color="inherit"
                >
                  <LogoutIcon />
                </IconButton>
              </Link>  
              </div>
              
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navigation;
