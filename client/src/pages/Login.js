import React, { Component } from 'react';
import API from '../utils/API';
// import './Custom.css';

class Login extends Component {
  handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    API.loginUser(event.target.email.value, event.target.password.value)
    .then( response => {
      console.log(response.data);
      window.location = "/";
      //window.location = "/thank-you";
    } )
    .catch( error => {
      console.log(error);
    });
    console.log("submitted");
  }
  render() {
    return (
      <div className="login-wrapper">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
          <br />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;