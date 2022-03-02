import React, { useEffect, useState } from "react";

import "../styles/dashboard.css";
import Grid from "@mui/material/Grid";
import ConsultaSaldo from "../components/ConsultaSaldo.component";
import ProfileCard from "../components/ProfileCard.component";
import Reporte from "../components/Reporte.component";
import Transferencia from "../components/Transferencia.component";

import { getValueLS } from "../utils/localStorage";

const Dashboard = () => {
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(getValueLS("user"));
    user && setLoggedUser(user);
  }, []);

  return (
    <>
      {loggedUser ? (
        <div className="dashboard:dashboard-div">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <div className="dashboard:transactions-div">
                <div className="dashboard:dashboard-component" >
                  <ConsultaSaldo loggedUser={loggedUser}/>
                </div>

                <div className="dashboard:dashboard-component">
                  <Transferencia loggedUser={loggedUser} />
                </div>

                <div className="dashboard:dashboard-component">
                  <Reporte loggedUser={loggedUser}/>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="dashboard:profile-div" id="cardprofile">
                <ProfileCard loggedUser={loggedUser} />
              </div>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div id="faildash">CARGANDO...</div>
      )}
    </>
  );
};

export default Dashboard;
