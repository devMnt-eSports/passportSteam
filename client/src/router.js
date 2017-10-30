import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginControl from './LoginControl.js';
import HomePage from './HomePage';
import AccountPage from './AccountPage';

/* -------------------<   Router   >-------------------- */


export default (
  <Switch>
    <Route exact path='/' component={ HomePage } />
    <Route path='/auth/steam' />
    <Route path='/account' component={ AccountPage } />
  </Switch>
)