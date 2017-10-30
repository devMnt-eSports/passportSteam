import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
// import { connect } from "react-redux";
import router from "./router.js";
import LoginControl from './LoginControl';

/* -------------------<   AccountPage   >-------------------- */

const AccountPage = () => (

<div>
  <div>
    <h1> This is the AccountPage component ʕ·ᴥ·ʔ </h1>
  </div>

  <div>
    <Link to="/"> 
      <h3>Back to: Home</h3> 
    </Link>
  </div>
</div>


);

export default AccountPage;