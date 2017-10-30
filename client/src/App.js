
/* -------------------<  App.JS   >-------------------- */

import React, { Component } from 'react';
import './App.css';
import router from "./router.js";
import Nav from './Nav';
import LoginControl from './LoginControl';



  const App = () => 
  <div className="App">
    <Nav />
      <div id="App__routerContainer">
          { router }
          <p>ʕ·ᴥ·ʔ This is a message from const App (client/src/app.js)</p>
      </div>
  </div>;


export default App;

