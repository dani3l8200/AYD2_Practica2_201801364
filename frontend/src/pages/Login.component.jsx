import React from "react";

import "../styles/login.css";
import LoginCard from "../components/LoginCard.component";
import Swal from "sweetalert2";

import userService from "../helpers/userService";
import { setValueLS } from '../utils/localStorage';

const Login = ({ isAuthLS }) => {
  const alertMsg = (icon, msg) => {
    Swal.fire({
      icon: icon,
      title: msg,
      showConfirmButton: false,
    });
  };

  const verifyLogin = async (accountNumber, password) => {
    try {
      const resLogin = await userService.loginUser({ accountNumber, password });
      alertMsg("success", `Bienvenido, ${resLogin.user.firstnames}`);
      isAuthLS(true);                        // auth = true
      setValueLS('user', JSON.stringify(resLogin.user));      // user = userLogged
      window.location.href = "./dashboard";  // redirect to dashboard 
    } catch (error) {
      alertMsg("error", error);
      isAuthLS(false);
    }
  };

  return (
    <div className="login:login-div">
      <div className="login:login-cards">
        <div className="login:div-card-info">
          <p>Bienvenido a AYD2 JENKINS</p>
          <img src="/img/banco.jpg" alt="" />
        </div>
        <div className="login:div-card-card" id="logincomp">
          <LoginCard verifyLogin={verifyLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
