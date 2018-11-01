
import React, { Component } from 'react';
import { Col, Row, Button, Container, Carousel, Parallax } from 'react-materialize';
import '../App.css';
import { Link } from 'react-router-dom';

class About extends Component {
  handleScroll = event => {
    event.preventDefault();
    console.log("scroll");
  };

  render() {
    return (
      <div>
      
       <div className = "row logo">
       <div className="logo-image"></div>
       </div>
      
     <Container className="center">
        
        <Col
          m={12}
        //   s={12}
          className="center"
          style={{
            color: "white",
            fontFamily: "Verdana"
          }}
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
  }
}

export default About;

      