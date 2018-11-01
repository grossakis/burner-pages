import React, { Component } from "react";
import { Col, Row, Button, Container } from "react-materialize";
import "../App.css";
import { Link } from "react-router-dom";

class About extends Component {
  handleScroll = event => {
    event.preventDefault();
    console.log("scroll");
  };

  render() {
    return (
      <Container className="left">
        <div id="logo">
          <div id="logo-image" />
        </div>
        <Col
          m={6}
          s={12}
          className="center"
          style={{
            color: "white",
            fontFamily: "Verdana"
          }}
        >
          <h4>Build Single-Page Websites For Just About Anything.</h4>
          <p>
            Whether it's for your personal portfolio, branding, or just for fun,
            we have you covered.
          </p>
        </Col>

        <Row className="center">
          <Link to="/construction" style={{ color: "white" }}>
            <Button id="creating-button">Start Creating </Button>
          </Link>
        </Row>
      </Container>
    );
  }
}

export default About;
