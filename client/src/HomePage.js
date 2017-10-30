import React, { Component } from 'react';
import './App.css';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;

    if (!user) {
      button = <LoginButton onClick={this.handleLoginClick} />;
    } else {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    }

    return (
      <div>
      {Auth.isUserAuthenticated() == false ? (
        <p><a href="auth/steam">Sign On with Steam</a></p>
      ) : (
        <p><a href="account">See Account Information</a> - 
        <a href='logout'>Logout</a></p>
      )}
    </div>
    );
  }
}

export default HomePage;

