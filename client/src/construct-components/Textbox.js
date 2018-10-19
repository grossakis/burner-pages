import React, { Component } from "react";

class Textbox extends Component {
  render() {
    return (
      <div
        style={{
          textAlign: "left",
          color: this.props.textColor,
          size: this.props.textSize,
          font: this.props.textFont
        }}
        className="col s12"
      >
        <p>{this.props.textContent}</p>
      </div>
    );
  }
}

export default Textbox;
