import React, { Component, Fragment } from "react";
// import './Custom.css';
import FullBox from "../component-boxes/FullBox";
import Heading from "../construct-components/Heading";
import API from "../utils/API";

class PageConstructor extends Component {
  state = {
    rows: []
  };

  // componentDidMount = () => {
  //   this.setState({
  //     rows: {
  //       row1: {
  //         status: "empty"
  //       }
  //     }
  //   });
  // };

  componentWillMount = () => {
    // let rows = this.state.rows;
    // let newElement = {
    //   status: "heading",
    //   content: "This is a Heading",
    //   color: "",
    //   size: "",
    //   font: ""
    // };
    // rows.push(newElement);
    // this.setState({
    //   // test: "test"
    //   rows: rows
    // });
  };

  addElement = () => {
    let rows = this.state.rows;
    let newElement = {
      status: "heading",
      content: "This is a Heading",
      color: "",
      size: "",
      font: ""
    };
    rows.push(newElement);
    this.setState({
      // test: "test"
      rows: rows
    });
  };

  render() {
    let rows = this.state.rows;
    // let element1;
    // if (this.state.rows === []) {
    //   element1 = <FullBox addElement={this.addElement} />;
    // } else if (this.rows[0].status === "heading") {
    //   element1 = (
    //     <Heading
    //       headingColor={this.state.box1.color}
    //       headingSize={this.state.box1.size}
    //       headingFont={this.state.box1.font}
    //       headingContent={this.state.box1.status}
    //     />
    //   );
    // }

    return (
      <div className="container" style={{ textAlign: "center" }}>
        {rows.map((type, index) => {
          if (type.status === "heading") {
            return (
              <div className="row" key={index}>
                <Heading
                  headingContent={type.content}
                  headingColor={type.color}
                  headingSize={type.size}
                  headingFont={type.font}
                />
              </div>
            );
          }
        })}
        <button onClick={this.addElement}>add element</button>
      </div>
    );
  }
}

export default PageConstructor;
