import React, { Component } from "react";

class Heading extends Component {
  render() {
    return (
      <div
        style={{ textAlign: "center", color: this.props.color }}
        className="col s12"
      >
        <h1>{this.props.headingText}</h1>
      </div>
    );
  }
}

export default Heading;
