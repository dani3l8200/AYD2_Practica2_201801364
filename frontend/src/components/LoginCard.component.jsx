import React, { useState } from "react";

import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import InputAdornment from "@mui/material/InputAdornment";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

import { Link } from "react-router-dom";

const LoginCard = ({ verifyLogin }) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [password, setPassword] = useState("");

  const alertMsg = (icon, msg) => {
    Swal.fire({
      icon: icon,
      title: msg,
      showConfirmButton: false,
    });
  };

  const handleAccountNumber = (e) => {
    setAccountNumber(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const signInBtn = () => {
    
    if (accountNumber === '' || password === '') {
      return alertMsg("error", "Campos incompletos, ingrese todos los datos.");
    }

    verifyLogin(accountNumber, password);
  };

  return (
    <Box sx={{ width: "70%" }}>
      <Card variant="outlined">
        <CardContent>
          <Typography
            align="center"
            color="Highlight"
            component="div"
            paddingBottom="10px"
            variant="h5"
          >
            Ingresa tus credenciales
          </Typography>

          <TextField
            fullWidth={true}
            id="noAccount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            label="No. Cuenta"
            margin="normal"
            onChange={handleAccountNumber}
            required
            type="number"
            variant="standard"
          />

          <TextField
            fullWidth={true}
            id="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKeyIcon />
                </InputAdornment>
              ),
            }}
            label="Ingresa tu contraseña"
            margin="normal"
            onChange={handlePassword}
            required
            type="password"
            variant="standard"
          />
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            id="buttomLogin"
            color="success"
            onClick={signInBtn}
            style={{ marginRight: "5px" }}
            variant="contained"
          >
            SIGNIN
          </Button>

          <Link to="/register" style={{ textDecoration: "none" }}>
            <Button
              color="info"
              style={{ marginLeft: "5px" }}
              variant="contained"
            >
              SIGNUP
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};

export default LoginCard;
