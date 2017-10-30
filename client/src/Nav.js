import React, { Component } from "react";
import { Link } from "react-router-dom";
import router from "./router.js";
import "./index.css";

const Nav = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <Link to="/"> Home </Link>
    </div>
    <div className="top-bar-right">
      <Link to="/auth/steam">Log in</Link>
      <Link to="/account">Account</Link>
    </div>
  </div>
);

export default Nav;
