import React, { useEffect, useState } from "react";

import "../styles/dashboard.css";

import AssessmentIcon from "@mui/icons-material/Assessment";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import GenerateReport from "../utils/generateReport.component";
import Swal from "sweetalert2";
import Typography from "@mui/material/Typography";

import reportService from "../helpers/reportService";
import { PDFDownloadLink } from "@react-pdf/renderer";

const Reporte = ({ loggedUser }) => {
  const [transferi, setTransferi] = useState(null);
  const [meTransfirieron, setMeTransfirieron] = useState(null);

  const alertMsg = (icon, msg) => {
    Swal.fire({
      icon: icon,
      title: msg,
      showConfirmButton: false,
    });
  };

  useEffect(() => {
    try {
      const fetchReport = async () => {
        const resReport = await reportService.getReport(loggedUser.accountNumber);
        setTransferi(resReport.transferi);
        setMeTransfirieron(resReport.meTransfirieron);
      };

      fetchReport();
    } catch (error) {
      alertMsg("error", error);
    }
  }, [loggedUser.accountNumber]);

  const makeReport = async () => {
    alertMsg("success", `Su reporte ha sido generado`);
  };

  return (
    <>
      {transferi && meTransfirieron ? (
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
                Reportes
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
              <PDFDownloadLink
                document={
                  <GenerateReport
                  transacEmitidas={transferi}
                  transacRecibidas={meTransfirieron}
                  loggedUser={loggedUser}
                  />
                }
                fileName="reporteBanca.pdf"
                className="dashboard:reporte-nonStyleLink"
              >
                {({ blob, url, loading, error }) =>
                  loading ? (
                    "Cargando documento..."
                  ) : (
                    <Button
                      color="secondary"
                      onClick={makeReport}
                      startIcon={<AssessmentIcon />}
                      style={{ marginRight: "5px" }}
                      variant="contained"
                      id="buttondownload"
                    >
                      Generar Reporte
                    </Button>
                  )
                }
              </PDFDownloadLink>

              <div></div>
            </CardActions>
          </Card>
        </Box>
      ) : (
        <div className="dashboard:reporte-div-loading">
          <h3>CARGANDO...</h3>
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default Reporte;
