import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from "../src/assets/navbar/navBar";   
import Login from '../src/assets/login/login'
import navbar from './assets/navbar/navBar';
import Home from './home';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
