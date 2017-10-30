import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import router from "./router.js";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


/* -------------------<   index.js / <App />   >-------------------- */



ReactDOM.render((
  <BrowserRouter>
  <App />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
