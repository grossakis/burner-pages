import React, { Component, Fragment } from "react";
// import './Custom.css';
import FullBox from "../component-boxes/FullBox";
import Heading from "../construct-components/Heading";
import API from "../utils/API";

class PageConstructor extends Component {
  state = {
    box1: {
      status: "empty"
    }
  };

  addElement = () => {
    this.setState({
      box1: {
        status: "heading"
      }
    });
  };

  render() {
    let element1;
    if (this.state.box1.status === "empty") {
      element1 = <FullBox addElement={this.addElement} />;
    } else if (this.state.box1.status === "heading") {
      element1 = <Heading headingText={this.state.box1.status} />;
    }
    return (
      <div className="container">
        <div className="row">{element1}</div>
      </div>
    );
  }
}

export default PageConstructor;
