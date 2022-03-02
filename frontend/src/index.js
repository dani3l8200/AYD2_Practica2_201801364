import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './pages/Routes.component';
require('dotenv').config()


ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

