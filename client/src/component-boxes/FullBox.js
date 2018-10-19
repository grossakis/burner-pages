import React, { Component } from "react";

class FullBox extends Component {
  render() {
    this.addElement = () => {
      this.props.addElement();
    };
    return (
      <div
        className="col s12"
        style={{
          border: "dashed 1px lightgray",
          textAlign: "center",
          // height: "100px",
          padding: "50px 0"
        }}
      >
        <button onClick={this.addElement}>+</button>
      </div>
    );
  }
}

export default FullBox;
