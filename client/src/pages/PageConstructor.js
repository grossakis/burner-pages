import React, { Component, Fragment } from "react";
import { Input, Row, Col, Button, Container } from "react-materialize";
// import './Custom.css';
import NewRow from "../component-boxes/NewRow";
import Menu from "../pages/Create";
import Heading from "../construct-components/Heading";
import API from "../utils/API";

class PageConstructor extends Component {
  state = {
    rows: [],
    lastElement: 0
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

  addRow = () => {
    let rows = this.state.rows;
    let newRow = {
      components: []
    };
    rows.push(newRow);
    this.setState({
      // test: "test"
      rows: rows
    });
  };

  // addElement = x => {
  //   let rows = this.state.rows;
  //   let rowComponents = this.state.rows[x].components;
  //   // let rows = this.state.rows;
  //   let newElement = {
  //     status: "heading",
  //     content: "This is a Heading",
  //     color: "",
  //     size: "",
  //     font: ""
  //   };
  //   rowComponents.push(newElement);
  //   rows.push(rowComponents);
  //   // currentRow.push(newElement);

  //   this.setState({
  //     // test: "test"
  //     rows: rows
  //   });
  // };
  addElement = x => {
    console.log("------start--------");
    console.log(x);
    console.log(this.state.rows);
    let rows = this.state.rows;
    let lastElement = this.state.lastElement + 1;
    let rowComponents = rows[x].components;
    let newElement = {
      status: "heading",
      content: "This is a Heading",
      color: "",
      size: "",
      font: ""
    };
    rowComponents.push(newElement);
    this.setState({
      rows: rows,
      lastElement: lastElement
    });
    console.log("final:");
    console.log(rows);

    console.log("------end--------");
  };

  render() {
    let rows = this.state.rows;
    // console.log(rows);
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
      <Container>
        {rows.map((row, index) => {
          // console.log("render");
          // console.log(row);
          if (row.components[0] === undefined) {
            return (
              <NewRow addElement={this.addElement} id={index} key={index} />
            );
          } else {
            return (
              <Row key={index}>
                {row.components.map((component, i) => {
                  return (
                    <Heading
                      key={i}
                      headingContent={component.content}
                      headingColor={component.color}
                      headingSize={component.size}
                      headingFont={component.font}
                    />
                  );
                })}
              </Row>
            );
          }
        })}
        <Row style={{ textAlign: "center" }}>
          <Button onClick={this.addRow}>new row</Button>
        </Row>
      </Container>
      // <Row>
      //   <Col s={9}>
      //     <div className="container" style={{ textAlign: "center" }}>
      //       {rows.map((type, index) => {
      //         if (type.status === "heading") {
      //           return (
      //             <Row key={index}>
      //               <Heading
      //                 headingContent={type.content}
      //                 headingColor={type.color}
      //                 headingSize={type.size}
      //                 headingFont={type.font}
      //               />
      //             </Row>
      //           );
      //         }
      //       })}
      //       <Button onClick={this.addElement}>add element</Button>
      //     </div>
      //   </Col>
      //   <Col s={3}>
      //     <Menu />
      //   </Col>
      // </Row>
    );
  }
}

export default PageConstructor;
