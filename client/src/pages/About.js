import React, { Component } from "react";
import {Input, Row, Col, Button, Container } from "react-materialize";
import {Link} from "react-router-dom";

// import './Custom.css';

class About extends Component {
  render() {
    // return <p>Home</p>
    return (
      <div class="container">
        {/* <br />
        <br />
        <br />
        <br />
        <br />
        <br /> */}
       
       <div class = "row logo">
       <div class = "col-md-12 logo-image">
       </div>
       </div> 

        

        {/* <h1>Why Us?</h1> */}

        <div class="row why-us">
        

          <div class="col-md-12 description">
            Build One Page Websites For Just About Anything.
          </div>
         
         
          <div class="col-md-8 caption">
            Whether it's for your personal portfolio, branding, or just for fun,
            we have you covered.{" "}
          </div>
          
          
          <div class="col-md-4" />
          
          <Button>
          <Link to="/create" class="btn btn-primary creating">
              Start Creating
            </Link>
            </Button>
          {/* <div class="col-md-4"> */}
            
          {/* </div> */}
          
        </div>

        {/* <br />
        <br />
        <br />

        <br />
        <br />
        <br />
        <br /> */}
      </div>
    );
  }
}

export default About;
