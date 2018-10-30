import React, { Component, Fragment } from 'react';
import '../App.css';
<<<<<<< HEAD
import { Input, Row, Col, Button, Container, Parallax } from 'react-materialize';
=======
import { Input, Row, Col, Button, Container } from 'react-materialize';
>>>>>>> 783b4b6a6ecb54fe1611dce67cb09d01cf4136a8
import { Link } from 'react-router-dom';

class Home extends Component {
  handleScroll = event => {
    event.preventDefault();
    console.log('scroll');
  };

  

  render() {
    return (
<<<<<<< HEAD
        
  <div className = "bg">
        <div id="logo"></div>
        <div className="home-caption">
        <p id="home-description">Web Design Made Simple</p> 
            
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
=======
      <Fragment>
        <div id="logo">
          <div id="logo-image" />
        </div>
        <Col
          m={6}
          s={12}
          className="center"
          style={{
            color: 'white',
            fontFamily: 'Verdana'
          }}
        >
          <p
            style={{
              color: '#164E87',
              fontFamily: 'Courier New',
              fontWeight: 'bold'
            }}
          >
            Create your free, fully responsive site here for just about
            anything.
          </p>
        </Col>
        <Row className="center">
          <Link to="/about" style={{ color: 'white' }}>
            <Button id="creating-button">Why us</Button>
          </Link>
        </Row>
        <Row className="center">
          <Link to="/construction" style={{ color: 'white' }}>
            <Button id="creating-button">Start Creating </Button>
          </Link>
        </Row>
      </Fragment>
    );
>>>>>>> 783b4b6a6ecb54fe1611dce67cb09d01cf4136a8
  }
}

export default Home;