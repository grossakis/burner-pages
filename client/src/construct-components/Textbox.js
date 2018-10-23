import React, { Component } from "react";

class Textbox extends Component {
  render() {
    return (
      <div
        style={{
          textAlign: "left",
          color: this.props.textColor,
          fontSize: this.props.textSize,
          fontFamily: this.props.textFont,
          border: this.props.border
        }}
        className={"col s" + this.props.textboxWidth}
      >
        <p>{this.props.textContent}</p>
      </div>
    );
  }
}

export default Textbox;
