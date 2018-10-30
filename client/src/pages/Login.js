import React, { Component } from 'react';
import API from '../utils/API';
import {Input, Row, Col, Button, Container } from "react-materialize";
import { Link } from "react-router-dom";
// import './Custom.css';

class Login extends Component {
  handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    API.loginUser(event.target.email.value, event.target.password.value)
      .then(response => {
        console.log(response.data);
        window.location = '/';
        //window.location = "/thank-you";
      })
      .catch(error => {
        console.log(error);
      });
    console.log('submitted');
  };
  render() {
    return (

      <div className="container">

       <Row> 
        <h1 className="login-header">Log In</h1>
      </Row>
     
       
       {/* <div className = "row logo"> */}
       <div className = "col-md-12 logo-image">
       </div>
       {/* </div>  */}
       
      <div className="login-wrapper">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email" >Email</label>
          <div className= "email-wrapper">
          <input type="email" name="email" class="email" />
          </div>
          
          <br />
          <label htmlFor="password">Password</label>
          <div className= "password-wrapper">
         
          <input type="password" name="password" />
          </div>
          <Row></Row>
          <Row></Row>
          <Row></Row>
          <Row></Row>
          <button type="submit" className = "submit-button">Login</button>
        </form>
      </div>
      </div>
     
      
    );
  }
}

export default Login;
