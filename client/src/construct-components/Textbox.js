import React, { Component } from "react";
import { Col } from "react-materialize";

class Textbox extends Component {
  render() {
    return (
      <Col
        s={this.props.textboxWidth}
        style={{
          textAlign: "left",
          color: this.props.textColor,
          fontSize: this.props.textSize,
          fontFamily: this.props.textFont,
          border: this.props.border,
          wordBreak: "break-word",
          backgroundColor: this.props.backgroundColor
        }}
      >
        <p>{this.props.textContent}</p>
        {this.props.editButtons}
      </Col>
    );
  }
}

export default Textbox;
