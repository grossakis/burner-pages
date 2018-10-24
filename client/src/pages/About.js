import React, { Component } from "react";
import {Input, Row, Col, Button, Container } from "react-materialize";
import { Link } from "react-router-dom";

// import './Custom.css';

class About extends Component {
  render() {
    // return <p>Home</p>
    return (
      <div>
      
      <div className="container">
     
       
       <div className = "row logo">
       <div className = "col-md-12 logo-image">
       </div>
       </div> 

    
        <div className="row why-us">
        

          <div className="col-md-12 description">
            Build One Page Websites For Just About Anything.
          </div>
         
         
          <div className="col-md-8 caption">
            Whether it's for your personal portfolio, branding, or just for fun,
            we have you covered.{" "}
          </div>

          <Row></Row>
          <Row></Row>
          <Row></Row>
          <Row></Row>
          
          <Button>
              <Link to="/create">Start Creating</Link>
            </Button>

            
          
          </div>
      </div>
      </div>
 
    );
  }
}

export default About;
