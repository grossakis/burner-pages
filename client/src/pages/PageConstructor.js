import React, { Component, Fragment } from "react";
import { Icon, Row, Col, Button, Container, SideNav } from "react-materialize";
// import './Custom.css';
import NewRow from "../component-boxes/NewRow";
import TextMenu from "../construct-components/TextMenu";
import EditingContainer from "../construct-components/EditingContainer";
import Heading from "../construct-components/Heading";
import Textbox from "../construct-components/Textbox";
import API from "../utils/API";

class PageConstructor extends Component {
  state = {
    rows: [],
    lastElement: {
      rowIndex: -1,
      componentIndex: -1,
      elementStatus: {}
    },
    editDisplay: "none"
  };
  addRow = () => {
    let rows = this.state.rows;
    let newRow = {
      components: []
    };
    rows.push(newRow);
    this.setState({
      rows: rows
    });
  };

  handleChangeComplete = color => {
    let rows = this.state.rows;
    let lastElement = this.state.lastElement;
    let rowIndex = lastElement.rowIndex;
    let componentIndex = lastElement.componentIndex;
    let currentComponent = rows[rowIndex].components[componentIndex];
    currentComponent.color = color.hex;
    this.setState({
      rows
    });
  };

  setComponentFont = event => {
    let rows = this.state.rows;
    let rowIndex = this.state.lastElement.rowIndex;
    let componentIndex = this.state.lastElement.componentIndex;
    let currentComponent = rows[rowIndex].components[componentIndex];
    let font = event.target.value;
    currentComponent.font = font;
    this.setState({
      rows: rows
    });
  };

  setComponentSize = event => {
    let rows = this.state.rows;
    let rowIndex = this.state.lastElement.rowIndex;
    let componentIndex = this.state.lastElement.componentIndex;
    let currentComponent = rows[rowIndex].components[componentIndex];
    let size = event.target.value;
    currentComponent.size = size + "px";
    this.setState({
      rows: rows
    });
  };

  setComponentContent = event => {
    let rows = this.state.rows;
    let rowIndex = this.state.lastElement.rowIndex;
    let componentIndex = this.state.lastElement.componentIndex;
    let currentComponent = rows[rowIndex].components[componentIndex];
    let content = event.target.value;
    currentComponent.content = content;
    this.setState({
      rows: rows
    });
  };

  setComponentWidth = event => {
    let rows = this.state.rows;
    let rowIndex = this.state.lastElement.rowIndex;
    let componentIndex = this.state.lastElement.componentIndex;
    let currentComponent = rows[rowIndex].components[componentIndex];
    let width = event.target.value;
    currentComponent.width = width;
    this.setState({
      rows: rows
    });
  };

  addHeading = x => {
    let rows = this.state.rows;
    let rowComponents = rows[x].components;
    let newElement = {
      status: "heading",
      content: "This is a Heading",
      color: "22194D",
      size: "60px",
      font: "times"
    };
    let lastElement = {
      rowIndex: x,
      componentIndex: rowComponents.length,
      elementStatus: newElement
    };
    rowComponents.push(newElement);
    this.setState({
      rows: rows,
      lastElement: lastElement,
      editDisplay: "block"
    });
  };

  addTextbox = x => {
    let rows = this.state.rows;
    let rowComponents = rows[x].components;
    let newElement = {
      status: "textbox",
      content: "this is a textbox",
      color: "22194D",
      size: "18px",
      font: "times",
      width: 6
    };
    let lastElement = {
      rowIndex: x,
      componentIndex: rowComponents.length,
      elementStatus: newElement
    };
    rowComponents.push(newElement);
    this.setState({
      rows: rows,
      lastElement: lastElement,
      editDisplay: "block"
    });
  };

  editElement = (x, y) => {
    let currentComponent = this.state.rows[x].components[y];
    this.setState({
      lastElement: {
        rowIndex: x,
        componentIndex: y,
        elementStatus: currentComponent
      },
      editDisplay: "block"
    });
  };

  deleteElement = (x, y) => {
    let rows = this.state.rows;
    let components = rows[x].components;
    components.splice(y, 1);
    this.setState({
      rows,
      lastElement: {
        rowIndex: -1,
        componentIndex: -1,
        elementStatus: {}
      },
      editDisplay: "none"
    });
  };

  deleteRow = x => {
    let rows = this.state.rows;
    rows.splice(x, 1);
    this.setState({
      rows,
      lastElement: {
        rowIndex: -1,
        componentIndex: -1,
        elementStatus: {}
      }
    });
  };

  closeMenu = () => {
    this.setState({
      editDisplay: "none"
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
    let lastElement = this.state.lastElement;

    let currentEditComponent;

    return (
      <Container>
        <Row>
          <Col s={12}>
            {rows.map((row, index) => {
              if (row.components[0] === undefined) {
                return (
                  <NewRow
                    addHeading={this.addHeading}
                    addTextbox={this.addTextbox}
                    onClick={() =>
                      this.editElement(
                        lastElement.rowIndex,
                        lastElement.componentIndex
                      )
                    }
                    id={index}
                    key={index}
                    deleteRow={this.deleteRow}
                  />
                );
              } else {
                return (
                  <Row key={index}>
                    {row.components.map((component, i) => {
                      if (
                        i === lastElement.componentIndex &&
                        index === lastElement.rowIndex
                      ) {
                        currentEditComponent = "dashed 2px lightgray";
                      } else {
                        currentEditComponent = "none";
                      }
                      if (component.status === "heading") {
                        return (
                          <Fragment>
                            <Col
                              // style={{ border: currentEditComponent }}
                              s={12}
                              key={i}
                            >
                              <Heading
                                border={currentEditComponent}
                                headingContent={component.content}
                                headingColor={component.color}
                                headingSize={component.size}
                                headingFont={component.font}
                              />
                            </Col>
                            <Button onClick={() => this.editElement(index, i)}>
                              <Icon children="edit" />
                            </Button>
                            <Button
                              onClick={() => this.deleteElement(index)}
                              className="red darken-1"
                            >
                              <Icon children="close" />
                            </Button>
                          </Fragment>
                        );
                      } else if (component.status === "textbox") {
                        return (
                          <Fragment>
                            <Col
                              // style={{ border: currentEditComponent }}
                              s={12}
                              key={i}
                            >
                              <Textbox
                                border={currentEditComponent}
                                textContent={component.content}
                                textColor={component.color}
                                textSize={component.size}
                                textFont={component.font}
                                textboxWidth={component.width}
                              />
                            </Col>
                            <Button onClick={() => this.editElement(index, i)}>
                              <Icon children="edit" />
                            </Button>
                            <Button
                              onClick={() => this.deleteElement(index)}
                              className="red darken-1"
                            >
                              <Icon children="close" />
                            </Button>
                          </Fragment>
                        );
                      } else if (component.status === "image") {
                      }
                    })}
                  </Row>
                );
              }
            })}
            <Row style={{ textAlign: "center" }}>
              <Button onClick={this.addRow}>new row</Button>
            </Row>
          </Col>
          <EditingContainer
            display={this.state.editDisplay}
            closeMenu={this.closeMenu}
            textMenu={
              <TextMenu
                selectColor={lastElement.elementStatus.color}
                handleChangeComplete={this.handleChangeComplete}
                changeStyleF={this.setComponentFont}
                selectFont={lastElement.elementStatus.font}
                changeStyleS={this.setComponentSize}
                selectSize={parseInt(lastElement.elementStatus.size)}
                changeContent={this.setComponentContent}
                selectContent={lastElement.elementStatus.content}
                currentComponentStatus={lastElement.elementStatus.status}
                selectWidth={lastElement.elementStatus.width}
                changeWidth={this.setComponentWidth}
              />
            }
          />
        </Row>
      </Container>
    );
  }
}

export default PageConstructor;
