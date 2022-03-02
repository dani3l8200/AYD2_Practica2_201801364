import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import React, { useState, useEffect } from "react";

import { getAuthLS, setAuthLS } from "../utils/localStorage";
import Dashboard from "./Dashboard.component";
import ErrorPath from "./ErrorPath.component";
import Login from "./Login.component";
import Navigation from "../components/Navigation.component";
import Register from "./Register.component";


const Routes = () => {
  const [isAuth, setIsAuth] = useState(null);

  // change isAuth state and save in LS
  const isAuthLS = (value) => {
    setIsAuth(value);
    setAuthLS("isAuthenticated", value);
  };

  // if LS have value take and put in isAuth
  useEffect(() => {
    const isAuthenticated = getAuthLS("isAuthenticated");
    isAuthenticated
      ? setIsAuth(isAuthenticated.toLowerCase() === "true")
      : setIsAuth(false);
  }, [isAuth]);

  return (
    <>
      {isAuth != null && (
        <Router>
          <Switch>

            <Route exact path="/login">
              <Navigation setIsAuth={setIsAuth} />
              <Login isAuthLS={isAuthLS} />
            </Route>

            <Route exact path="/register">
              <Navigation setIsAuth={setIsAuth} />
              <Register />
            </Route>

            <Route exact path="/dashboard">
              <Navigation setIsAuth={setIsAuth}/>
              {isAuth ? <Dashboard /> : <Redirect to="/login" />} 
            </Route>

            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            
            <Route>
              <ErrorPath />
            </Route>

          </Switch>
        </Router>
      )}
    </>
  );
};

export default Routes;
