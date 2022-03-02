import React, { useState } from "react";

import AccountCircle from "@mui/icons-material/AccountCircle";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import InputAdornment from "@mui/material/InputAdornment";
import SendIcon from '@mui/icons-material/Send';
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import reportService from "../helpers/reportService";

const Transferencia = ({ loggedUser }) => {
  const [noAccountTo, setnoAccountTo] = useState("");
  const [amountTransfer, setAmountTransfer] = useState("");

  const alertMsg = (icon, msg) => {
    Swal.fire({
      icon: icon,
      title: msg,
      showConfirmButton: false
    });
  };

  const handleNoAccountTo = (e) => {
    setnoAccountTo(e.target.value);
  };

  const handleAmountTransfer = (e) => {
    setAmountTransfer(e.target.value);
  };

  const transferMoney = async () => {
    if (noAccountTo === '' || amountTransfer === '') {
      return alertMsg("error", "Campos incompletos, ingrese todos los datos.");
    }

    console.log('oyeeeeeee', typeof amountTransfer);

    try {
      const resTransfer = await reportService.transfer( {
        AccountOrigin: loggedUser.accountNumber,
        AccountDestination: noAccountTo,
        montoTransferir: parseInt(amountTransfer, 10) 
      } );
      alertMsg('success', `${resTransfer.description}, tu cuenta quedó con un saldo de ${resTransfer.balance}`)
    } catch (error) {
      alertMsg("error", error);
    }

    
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Card variant="outlined">
        <CardContent>
          <Typography
            align="center"
            color="navy"
            component="div"
            paddingBottom="10px"
            variant="h5"
          >
            Transferencia Monetaria
          </Typography>

          <TextField
            fullWidth={true}
            id="noCuentaDestino"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            label="No. Cuenta Destino"
            margin="normal"   
            onChange={handleNoAccountTo}
            type="number"
            variant="outlined"
          />

          <TextField
            fullWidth={true}
            id="totalAmount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AttachMoneyIcon />
                </InputAdornment>
              ),
            }}
            label="Ingresa la cantidad a transferir"
            margin="normal"
            onChange={handleAmountTransfer}
            type="number"
            variant="outlined"
          />
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          
            <Button
              color="secondary"
              id="buttomsendmoney"
              onClick={transferMoney}
              startIcon={<SendIcon />}
              style={{ marginRight: "5px" }}
              variant="contained"
            >
              TRANSFERIR
            </Button>
          

        </CardActions>
      </Card>
    </Box>
  );
};

export default Transferencia;
