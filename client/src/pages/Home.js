import React, { Component, Fragment } from "react";
import "../App.css";
import { Input, Row, Col, Button, Container } from "react-materialize";
import { Link } from "react-router-dom";

class Home extends Component {
  handleScroll = event => {
    event.preventDefault();
    console.log("scroll");
  };

  render() {
    return (
      <Fragment>
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
          <p
            style={{
              color: "#164E87",
              fontFamily: "Courier New",
              fontWeight: "bold"
            }}
          >
            Create your free, fully responsive site here for just about
            anything.
          </p>
        </Col>
        <Row className="center">
          <Link to="/about" style={{ color: "white" }}>
            <Button id="creating-button">Why us</Button>
          </Link>
        </Row>
        <Row className="center">
          <Link to="/construction" style={{ color: "white" }}>
            <Button id="creating-button">Start Creating </Button>
          </Link>
        </Row>
        <Row className="center">
          <a href="/auth/google">Login</a>
        </Row>
      </Fragment>
    );
  }
}

export default Home;
