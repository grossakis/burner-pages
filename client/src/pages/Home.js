import React, { Component } from 'react';
import '../App.css';
import { Input, Row, Col, Button, Container, Parallax } from 'react-materialize';
import { Link } from 'react-router-dom';

class Home extends Component {
  handleScroll = event => {
    event.preventDefault();
    console.log('scroll');
  };

  

  render() {
    return (
        
  <div className = "bg">
        <div id="logo"></div>
        <div className="home-caption">
        <p id="home-description">Web Design Made Simple</p> 
        {/* <Container> */}
        {/* <Row className="center">
          <Link to="auth/google" style={{ color: 'white' }}> */}
            <Button id="home-signin-button" > 
            <a href = "auth/google" id = "googleAuth">Sign In</a> 
            </Button>
            </div>
           
{/*             
          </Link>
        </Row>
      </Container> */}
        {/* <div id="customBtn" onclick="playGame()" class="customGPlusSignIn">
                    <span class="icon"></span>
                    <span class="buttonText">Sign in with Google</span>
                </div> */}
            
        {/* <Link to="/about" style={{ color: 'white' }}> */}
          
     {/* <div className="row container">
     <h2 className="header">Simple</h2>
     <p className="grey-text text-darken-3 lighten-3">Start with your template of choice and make it your own.</p>
      </div> */}
          {/* <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg" className="parallax-home"
         />  */}
         
      
     
        </div>
       
     
        
       
 
       
        
    
         );
  }
}

export default Home;