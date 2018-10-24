import React, { Component } from 'react';
import '../App.css';
// import './Custom.css';
import {Input, Row, Col, Button, Container } from "react-materialize";
import { Link } from "react-router-dom";


class Home extends Component {
  handleScroll = event => {
    event.preventDefault();
    console.log("scroll");
  };
  render() {
    return(
      // <div className = "container">
      <div>
        {/* <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br> */}
        {/* <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row></Row> */}
        
        <div>
        <div className = "row logo">
        <div className="logo-image"></div>
        </div>
        </div>
        
       <Row> 
        <h1 className="burner-pages">Burner Pages</h1>
      </Row>
      
      <Row>
        <h4 className="create">Create your free, fully responsive site here for just about anything.</h4>
      </Row>
      {/* <br></br>
      <br></br>
      <br></br> */}
      
    
     
     
        <Row>
       
        <Button className="creating-button"> <Link to="/about">Why us?</Link></Button>
        {/* <Col l={2}></Col> */}
        </Row>
        
     
      {/* <br></br>
      <br></br>
      <br></br> */}
      
      <Row>
      <Col l={5}></Col>
      <Button className="creating-button"> <Link to="/construction">Start Creating</Link></Button>
      {/* <Col m={3}></Col> */}
      </Row>
     </div>
    
    );
  }
}

export default Home;
