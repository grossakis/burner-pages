import React, { Component } from "react";
import { Col } from "react-materialize";

class Heading extends Component {
  render() {
    return (
      <Col
        s={12}
        style={{
          textAlign: "center",
          color: this.props.headingColor,
          fontSize: this.props.headingSize,
          fontFamily: this.props.headingFont,
          border: this.props.border,
          wordBreak: "break-word",
          backgroundColor: this.props.backgroundColor
        }}
      >
        <span>{this.props.headingContent}</span>
      </Col>
    );
  }
}

export default Heading;
