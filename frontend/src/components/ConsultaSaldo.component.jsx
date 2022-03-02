import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import InputAdornment from "@mui/material/InputAdornment";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SearchIcon from "@mui/icons-material/Search";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import getBalanceUser from "../helpers/balanceService";

const ConsultaSaldo = ({ loggedUser }) => {
  const [totalCuenta, setTotalCuenta] = useState(0);

  const alertMsg = (icon, msg) => {
    Swal.fire({
      icon: icon,
      title: msg,
      timer: 2700,
      didOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
    });
  };

  const consultarSaldo = async () => {
    try {
      const resLogin = await getBalanceUser(loggedUser.accountNumber);
      alertMsg(
        "success",
        `Consultando saldo ... 
                           Account: ${loggedUser.accountNumber}`
      );
      setTotalCuenta(resLogin.balance);
    } catch (error) {
      alertMsg("error", error);
    }
  };

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
            Consulta tu Crédito
          </Typography>

          <TextField
            fullWidth={true}
            id="totalAmount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MonetizationOnIcon />
                </InputAdornment>
              ),
              readOnly: true,
            }}
            label="Total de la cuenta"
            margin="normal"
            type="number"
            value={totalCuenta}
            variant="filled"
          />
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            color="secondary"
            onClick={consultarSaldo}
            startIcon={<SearchIcon />}
            style={{ marginRight: "5px" }}
            variant="contained"
            id="consultasaldo"
          >
            Consultar Saldo
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ConsultaSaldo;
