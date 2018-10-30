import React, { Component } from 'react';
<<<<<<< HEAD
import { Col, Row, Button, Container, Carousel, Parallax } from 'react-materialize';
=======
import { Col, Row, Button, Container } from 'react-materialize';
>>>>>>> 783b4b6a6ecb54fe1611dce67cb09d01cf4136a8
import '../App.css';
import { Link } from 'react-router-dom';

class About extends Component {
  handleScroll = event => {
    event.preventDefault();
    console.log('scroll');
  };

  render() {
    return (
<<<<<<< HEAD
      <div>
      
       <div className = "row logo">
       <div className="logo-image"></div>
       </div>
      
     <Container className="center">
        
        <Col
          m={12}
        //   s={12}
=======
      <Container className="left">
        <div id="logo">
          <div id="logo-image" />
        </div>
        <Col
          m={6}
          s={12}
>>>>>>> 783b4b6a6ecb54fe1611dce67cb09d01cf4136a8
          className="center"
          style={{
            color: 'white',
            fontFamily: 'Verdana'
          }}
<<<<<<< HEAD
          />
          

  
          
          
        <div className = "about-wrapper">
       
        
          <h4 className = "about-header">Build Single-Page Websites For Just About Anything.</h4>
          <p className = "about-caption">
         
            Whether it's for your personal portfolio, branding, or just for fun,
            we have you covered.
            
          </p>
          
          
          
          
          </div>
          
          

        

        <Row className="center">
          <Link to="/construction" style={{ color: 'white' }}>
            <Button id="creating-about-button">Start Creating </Button>
            
          </Link>
        </Row>
      </Container>
      
    <div>
    <Parallax imageSrc="https://truetech.by/files/by/content/2018/072_joostina.jpg" className="parallax-one"/>
    <div className="section-white">
      <div className="row container">
        <h2 className="header">Simple</h2>
        <p className="grey-text text-darken-3 lighten-3">Start with your template of choice and make it your own.</p>
      </div>
      
    </div>
    <Parallax imageSrc="http://uploads.webflow.com/59cb7d52899ef100010591ab/59d3aec6752d0f000168e740_hero-layouts-2.jpg" className="parallax-two"/>
    <div className="section-white">
      <div className="row container">
        <h2 className="header">Responsive</h2>
        <p className="grey-text text-darken-3 lighten-3">Looks great on every screen size, from phones to tablets to desktops.</p>
      </div>
      
    </div>
  </div>

      </div>



       );
=======
        >
          <h4>Build Single-Page Websites For Just About Anything.</h4>
          <p>
            Whether it's for your personal portfolio, branding, or just for fun,
            we have you covered.
          </p>
        </Col>

        <Row className="center">
          <Link to="/construction" style={{ color: 'white' }}>
            <Button id="creating-button">Start Creating </Button>
          </Link>
        </Row>
      </Container>
    );
>>>>>>> 783b4b6a6ecb54fe1611dce67cb09d01cf4136a8
  }
}

export default About;

      