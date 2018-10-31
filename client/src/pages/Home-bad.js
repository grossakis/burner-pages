import React, { Component } from 'react';
import '../App.css';
import { Input, Row, Col, Button, Container } from 'react-materialize';
import { Parallax, Background } from 'react-parallax';
import { Link } from 'react-router-dom';


// class Home extends Component {
//     handleScroll = event => {
//       event.preventDefault();
//       console.log('scroll');
//     };

    const MyComponent = () => (
        <div>
          <Parallax
            blur={10}
            bgImage={require('path/to/image.jpg')}
            bgImageAlt="the cat"
            strength={200}
          >
            Put some text content here
            or even an empty div with fixed dimensions
            to have a height for the parallax.
            <div style={{ height: '200px' }} />
          </Parallax>
          <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('path/to/another/image.jpg')}
            bgImageAlt="the dog"
            strength={200}
          >
            Blur transition from min to max
            <div style={{ height: '200px' }} />
          </Parallax>
          <Parallax strength={300}>
            <div>Use the background component for custom elements</div>
            <Background className="custom-bg">
              <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
            </Background>
          </Parallax>
        </div>
      );








 



export default Home;