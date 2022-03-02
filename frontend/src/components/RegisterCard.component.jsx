import React, { useState } from "react";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Box from "@mui/material/Box";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import InputAdornment from "@mui/material/InputAdornment";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

import registerService from "../helpers/registerService";

const RegisterCard = () => {
  const [names, setNames] = useState("");
  const [lastNames, setLastNames] = useState("");
  const [dpi, setDPI] = useState("");
  const [initialAmount, setInitialAmount] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [noAccount, setNoAccount] = useState("");

  const alertMsg = (icon, msg) => {
    Swal.fire({
      icon: icon,
      title: msg,
      showConfirmButton: false,
    });
  };

  const handleNames = (e) => {
    setNames(e.target.value);
  };

  const handleLastNames = (e) => {
    setLastNames(e.target.value);
  };

  const handleDPI = (e) => {
    setDPI(e.target.value);
  };

  const handleInitialAmount = (e) => {
    setInitialAmount(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleNoAccount = (value) => {
    setNoAccount(value);
  };

  const registerValidate = async () => {
    if (
      names === "" ||
      lastNames === "" ||
      dpi === "" ||
      initialAmount === "" ||
      email === "" ||
      password === ""
    ) return alertMsg("error", "Campos incompletos, ingrese todos los datos.");
    

    try {
      const resLogin = await registerService.registerUser({
        firstnames: names,
        lastnames: lastNames,
        dpi,
        balance: initialAmount,
        email,
        password,
      });
      alertMsg("success", `Registro exitoso, guarda el No. Cuenta ${resLogin.NoAccount}`);
      handleNoAccount(resLogin.NoAccount);
    } catch (error) {
      alertMsg("error", error);
    }
  };

  return (
    <Box sx={{ width: "70%" }}>
      <Card
        style={{ boxShadow: "rgba(0, 0, 0, 1) 0px 5px 15px" }}
        variant="outlined"
      >
        <CardContent>
          <Typography
            align="center"
            color="steelblue"
            component="div"
            paddingBottom="10px"
            variant="h5"
          >
            Ingresa tus datos para registrarte
          </Typography>

          <TextField
            fullWidth={true}
            id="nameUser"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmojiPeopleIcon />
                </InputAdornment>
              ),
            }}
            label="Ingrese sus nombres"
            margin="normal"
            onChange={handleNames}
            variant="standard"
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
            }}
            label="Ingrese sus apellidos"
            margin="normal"
            onChange={handleLastNames}
            variant="standard"
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
            }}
            label="Ingrese sus DPI"
            margin="normal"
            onChange={handleDPI}
            type="number"
            variant="standard"
          />

          <TextField
            fullWidth={true}
            id="initialAmount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MonetizationOnIcon />
                </InputAdornment>
              ),
            }}
            label="Ingrese el saldo inicial de la cuenta"
            margin="normal"
            onChange={handleInitialAmount}
            type="number"
            variant="standard"
          />

          <TextField
            fullWidth={true}
            id="email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AlternateEmailIcon />
                </InputAdornment>
              ),
            }}
            label="Ingresa tu correo"
            margin="normal"
            onChange={handleEmail}
            type="email"
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
            type="password"
            variant="standard"
          />

          <TextField
            fullWidth={true}
            id="noAccount2"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKeyIcon />
                </InputAdornment>
              ),
            }}
            margin="normal"
            style={{display: "none"}}
            onChange={handleNoAccount}
            type="number"
            variant="standard"
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
            value={noAccount}
            variant="standard"
          />
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            color="info"
            id="buttomregister"
            onClick={registerValidate}
            style={{ marginRight: "5px" }}
            variant="contained"
          >
            REGISTRARSE
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default RegisterCard;
