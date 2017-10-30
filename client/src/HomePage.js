import React, { Component } from 'react';
import './App.css';
// import { connect } from "react-redux";
import router from "./router.js";
import LoginControl from './LoginControl';

/* -------------------<   HomePage   >-------------------- */

const HomePage = () => (
  <div>
    <LoginControl />
  </div>
);

export default HomePage;