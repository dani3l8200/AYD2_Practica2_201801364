import React from "react";

import "../styles/dashboard.css";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const ProfileCard = ({ loggedUser }) => {
  
  
  return (
    <Box sx={{ width: "70%" }}>
      <Card
        variant="outlined"
        style={{ boxShadow: "rgba(0, 0, 0, 1) 0px 5px 15px" }}
      >
        <CardContent>
          <Typography
            align="center"
            color="steelblue"
            component="div"
            paddingBottom="10px"
            variant="h5"
          >
            Hola, {loggedUser.firstnames}
          </Typography>

          <div className="dashboard:profile-card-icon">
            <Avatar
              alt=""
              src="/profile.png"
              sx={{ width: 100, height: 100 }}
            />
          </div>

          <TextField
            fullWidth={true}
            id="nameUser"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmojiPeopleIcon />
                </InputAdornment>
              ),
              readOnly: true,
            }}
            label="Nombres: "
            margin="normal"
            value={loggedUser.firstnames}
            variant="filled"
          />

          <TextField
            fullWidth={true}
            id="lastNameUser"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
              readOnly: true,
            }}
            label="Apellidos:"
            margin="normal"
            value={loggedUser.lastnames}
            variant="filled"
          />

          <TextField
            fullWidth={true}
            id="dpiUser"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BrandingWatermarkIcon />
                </InputAdornment>
              ),
              readOnly: true,
            }}
            label="DPI: "
            margin="normal"
            type="number"
            value={loggedUser.dpi}
            variant="filled"
          />

          <TextField
            fullWidth={true}
            id="noAccount"          
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBalanceWalletIcon />
                </InputAdornment>
              ),
              readOnly: true,
            }}
            label="No. Cuenta"
            margin="normal"
            type="number"
            value={loggedUser.accountNumber}
            variant="filled"
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfileCard;
