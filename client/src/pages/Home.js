import React, { Component } from "react";
import "../App.css";
import {
  Input,
  Row,
  Col,
  Button,
  Container,
  Parallax
} from "react-materialize";
import { Link } from "react-router-dom";

class Home extends Component {
  handleScroll = event => {
    event.preventDefault();
    console.log("scroll");
  };

  render() {
    return (
      <div className="bg">
        <div id="logo" />
        
        <div className="home-caption">
          <p id="home-description">Web Design Made Simple</p>
          

          {/* <Button id="home-signin-button" > 
            <a href = "auth/google" id = "googleAuth">Sign In</a> 
            </Button> */}
          <Link to="/_auth/google">
          <Row>
            <a>
              <div id="customBtn" class="customGPlusSignIn">
                <span class="icon" />
                <span class="buttonText">Sign in with Google</span>
              </div>
            </a>
            </Row>
          </Link>

          {/* <Link to="/about" style={{ color: 'white' }}> */}

          {/* <div className="row container">
     <h2 className="header">Simple</h2>
     <p className="grey-text text-darken-3 lighten-3">Start with your template of choice and make it your own.</p>
      </div> */}
          {/* <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg" className="parallax-home"
         />  */}
        </div>

        {/* <div id="logo-image" /> */}

        {/* </Link> */}

        {/* </div>      */}
        {/* <div>
<div> */}

        {/* <div className="section white">
    <div className="row container">
      <h2 className="header">Parallax</h2>
      <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
    </div>
  </div>
  <Parallax imageSrc="http://materializecss.com/images/parallax2.jpg"/> */}
      </div>
    );
  }
}

export default Home;
