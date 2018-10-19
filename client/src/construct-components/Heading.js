import React, { Component } from "react";

class Heading extends Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          color: this.props.headingColor,
          size: this.props.headingSize,
          font: this.props.headingFont
        }}
        className="col s12"
      >
        <h1>{this.props.headingContent}</h1>
      </div>
    );
  }
}

export default Heading;
