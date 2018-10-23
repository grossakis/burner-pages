import React, { Component } from "react";

class Heading extends Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          color: this.props.headingColor,
          fontSize: this.props.headingSize,
          fontFamily: this.props.headingFont,
          border: this.props.border
        }}
        className="col s12"
      >
        <span>{this.props.headingContent}</span>
      </div>
    );
  }
}

export default Heading;
