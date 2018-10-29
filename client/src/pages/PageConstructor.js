import React, { Component, Fragment } from "react";
import { Icon, Row, Col, Button, Container, Input } from "react-materialize";
// import './Custom.css';
import NewRow from "../component-boxes/NewRow";
import TextMenu from "../construct-components/TextMenu";
import EditingContainer from "../construct-components/EditingContainer";
import Heading from "../construct-components/Heading";
import Textbox from "../construct-components/Textbox";
import Divider from "../construct-components/Divider";
import Image from "../construct-components/Image";
import ExtraComponentDropdown from "../construct-components/ExtraComponentDropdown";
import RowMenu from "../construct-components/RowMenu";
import API from "../utils/API";
import { setSeconds } from "date-fns";
import axios from "axios";

class PageConstructor extends Component {
  state = {
    rows: [],
    lastElement: {
      rowIndex: -1,
      componentIndex: -1,
      elementStatus: {}
    },
    editDisplay: "none",
    rowWidth: 0,
    selectedFile: ""
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

  prependRow = () => {
    let rows = this.state.rows;
    let newRow = {
      components: []
    };
    rows.unshift(newRow);
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

  setImageURL = event => {
    let rows = this.state.rows;
    let rowIndex = this.state.lastElement.rowIndex;
    let componentIndex = this.state.lastElement.componentIndex;
    let currentComponent = rows[rowIndex].components[componentIndex];
    let url = event.target.value;
    currentComponent.url = url;
    console.log(url);
    this.setState({
      rows: rows
    });
  };

  setThickness = event => {
    let rows = this.state.rows;
    let rowIndex = this.state.lastElement.rowIndex;
    let componentIndex = this.state.lastElement.componentIndex;
    let currentComponent = rows[rowIndex].components[componentIndex];
    let thickness = event.target.value;
    currentComponent.thickness = thickness + "px";
    this.setState({
      rows: rows
    });
  };

  setComponentWidth = event => {
    let rowWidth = 0;
    let rows = this.state.rows;
    let rowIndex = this.state.lastElement.rowIndex;
    let componentIndex = this.state.lastElement.componentIndex;
    let currentComponent = rows[rowIndex].components[componentIndex];
    let storedWidth = this.state.rowWidth;
    let width = parseInt(event.target.value);
    if (parseInt(storedWidth - currentComponent.width + width) <= 12) {
      currentComponent.width = width;
      for (let i = 0; i < rows[rowIndex].components.length; i++) {
        rowWidth += parseInt(rows[rowIndex].components[i].width);
      }
      this.setState({
        rows: rows,
        rowWidth: rowWidth
      });
    }
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

  addHeading = x => {
    let rows = this.state.rows;
    let rowComponents = rows[x].components;
    let newElement = {
      status: "heading",
      content: "This is a Heading",
      color: "#000000",
      size: "60px",
      font: "times",
      thickness: "",
      url: "",
      width: 12
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
      editDisplay: "block",
      rowWidth: 12
    });
  };

  addTextbox = x => {
    let newWidth = 0;
    if (this.state.rowWidth > 6 && this.state.rowWidth < 12) {
      newWidth = 12 - this.state.rowWidth;
    } else {
      newWidth = 6;
    }
    let rowWidth = 0;
    let rows = this.state.rows;
    let currentRow = rows[x];
    let rowComponents = currentRow.components;
    let newElement = {
      status: "textbox",
      content: "this is a textbox",
      color: "#000000",
      size: "18px",
      font: "times",
      thickness: "",
      url: "",
      width: newWidth
    };
    let lastElement = {
      rowIndex: x,
      componentIndex: rowComponents.length,
      elementStatus: newElement
    };
    rowComponents.push(newElement);
    for (let i = 0; i < rowComponents.length; i++) {
      rowWidth += parseInt(rowComponents[i].width);
    }
    console.log(rowWidth);
    this.setState({
      rows: rows,
      lastElement: lastElement,
      editDisplay: "block",
      rowWidth: rowWidth
    });
  };

  addDivider = x => {
    let rows = this.state.rows;
    let rowComponents = rows[x].components;
    let newElement = {
      status: "divider",
      content: "",
      color: "#808080",
      size: "",
      font: "",
      thickness: "2px",
      url: "",
      width: 12
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
      editDisplay: "block",
      rowWidth: 12
    });
  };

  addImage = x => {
    let newWidth = 0;
    if (this.state.rowWidth > 6 && this.state.rowWidth < 12) {
      newWidth = 12 - this.state.rowWidth;
    } else {
      newWidth = 6;
    }
    let rowWidth = 0;
    let rows = this.state.rows;
    let currentRow = rows[x];
    let rowComponents = currentRow.components;
    let newElement = {
      status: "image",
      content: "",
      color: "",
      size: "",
      font: "",
      thickness: "",
      url: "",
      width: newWidth
    };
    let lastElement = {
      rowIndex: x,
      componentIndex: rowComponents.length,
      elementStatus: newElement
    };
    rowComponents.push(newElement);
    for (let i = 0; i < rowComponents.length; i++) {
      rowWidth += parseInt(rowComponents[i].width);
    }
    console.log(rowWidth);
    this.setState({
      rows: rows,
      lastElement: lastElement,
      editDisplay: "block",
      rowWidth: rowWidth
    });
  };

  editElement = (x, y) => {
    let currentRow = this.state.rows[x].components;
    let currentComponent = this.state.rows[x].components[y];
    let currentRowWidth = 0;
    for (let i = 0; i < currentRow.length; i++) {
      currentRowWidth += parseInt(currentRow[i].width);
    }
    this.setState({
      lastElement: {
        rowIndex: x,
        componentIndex: y,
        elementStatus: currentComponent
      },
      editDisplay: "block",
      rowWidth: currentRowWidth
    });
  };

  deleteElement = (x, y) => {
    console.log("y: " + y);
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

  fileUploadHandler = () => {
    const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dtergnssx/upload";
    const CLOUDINARY_UPLOAD_PRESET = "xxsgqoid";

    const fd = new FormData();
    fd.append("file", this.state.selectedFile, this.state.selectedFile.name);
    fd.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    // const config = {
    //   headers: { 'X-Requested-With': 'XMLHttpRequest' }
    // };

    axios
      .post(CLOUDINARY_URL, fd)
      .then(res => {
        console.log(res);
        console.log(res.data.secure_url);
        let rows = this.state.rows;
        let currentRow = this.state.lastElement.rowIndex;
        let currentComponent = this.state.lastElement.componentIndex;
        rows[currentRow].components[currentComponent].url = res.data.secure_url;
        this.setState({
          rows: rows
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  fileSelectedHandler = event => {
    console.log(event.target.files[0]);
    this.setState(
      {
        selectedFile: event.target.files[0]
      },
      function() {
        console.log(this.state.selectedFile);
      }
    );
  };

  render() {
    let rows = this.state.rows;
    let lastElement = this.state.lastElement;

    let currentEditComponent;
    let currentEditRow;
    let rowMenu;

    let checkWidth = () => {
      if (this.state.rowWidth >= 12) {
        return true;
      } else {
        return false;
      }
    };
    let prependRow;
    if (rows.length > 0) {
      prependRow = (
        <Row style={{ textAlign: "center" }}>
          <Button onClick={this.prependRow}>new row</Button>
        </Row>
      );
    } else {
      prependRow = "";
    }

    return (
      <Container>
        {prependRow}
        {rows.map((row, index) => {
          if (index === lastElement.rowIndex) {
            currentEditRow = "solid 2px #B5B5B5";
            rowMenu = (
              <RowMenu
                addHeading={this.addHeading}
                addTextbox={this.addTextbox}
                addImage={this.addImage}
                id={index}
                currentRowWidth={this.state.rowWidth}
                disabled={checkWidth()}
              />
            );
          } else {
            currentEditRow = "none";
            rowMenu = "";
          }
          if (row.components[0] === undefined) {
            return (
              <NewRow
                addHeading={this.addHeading}
                addTextbox={this.addTextbox}
                addDivider={this.addDivider}
                addImage={this.addImage}
                id={index}
                key={index}
                deleteRow={this.deleteRow}
              />
            );
          } else {
            return (
              <Fragment key={index}>
                <Row
                  style={{
                    border: currentEditRow
                  }}
                  key={index}
                >
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
                        <Fragment key={i}>
                          <Heading
                            border={currentEditComponent}
                            headingContent={component.content}
                            headingColor={component.color}
                            headingSize={component.size}
                            headingFont={component.font}
                          />
                          <Button onClick={() => this.editElement(index, i)}>
                            <Icon children="edit" />
                          </Button>
                          <Button
                            onClick={() => this.deleteElement(index, i)}
                            className="red darken-1"
                          >
                            <Icon children="close" />
                          </Button>
                        </Fragment>
                      );
                    } else if (component.status === "textbox") {
                      return (
                        <Textbox
                          key={i}
                          border={currentEditComponent}
                          textContent={component.content}
                          textColor={component.color}
                          textSize={component.size}
                          textFont={component.font}
                          textboxWidth={component.width}
                          editButtons={
                            <Fragment>
                              <Button
                                onClick={() => this.editElement(index, i)}
                              >
                                <Icon children="edit" />
                              </Button>
                              <Button
                                onClick={() => this.deleteElement(index, i)}
                                className="red darken-1"
                              >
                                <Icon children="close" />
                              </Button>
                            </Fragment>
                          }
                        />
                      );
                    } else if (component.status === "divider") {
                      return (
                        <Divider
                          key={i}
                          color={component.color}
                          thickness={component.thickness}
                          editButtons={
                            <Fragment>
                              <Button
                                onClick={() => this.editElement(index, i)}
                              >
                                <Icon children="edit" />
                              </Button>
                              <Button
                                onClick={() => this.deleteElement(index, i)}
                                className="red darken-1"
                              >
                                <Icon children="close" />
                              </Button>
                            </Fragment>
                          }
                        />
                      );
                    } else if (component.status === "image") {
                      return (
                        <Image
                          imageWidth={component.width}
                          key={i}
                          border={currentEditComponent}
                          imageURL={component.url}
                          editButtons={
                            <Fragment>
                              <Button
                                onClick={() => this.editElement(index, i)}
                              >
                                <Icon children="edit" />
                              </Button>
                              <Button
                                onClick={() => this.deleteElement(index, i)}
                                className="red darken-1"
                              >
                                <Icon children="close" />
                              </Button>
                            </Fragment>
                          }
                        />
                      );
                    }
                  })}
                </Row>
                {rowMenu}
              </Fragment>
            );
          }
        })}
        <Row style={{ textAlign: "center" }}>
          <Button onClick={this.addRow}>new row</Button>
        </Row>

        {console.log(this.state.rows)}

        <EditingContainer
          display={this.state.editDisplay}
          closeMenu={this.closeMenu}
          textMenu={
            <TextMenu
              selectColor={lastElement.elementStatus.color}
              handleChangeComplete={this.handleChangeComplete}
              changeFont={this.setComponentFont}
              selectFont={lastElement.elementStatus.font}
              changeStyleS={this.setComponentSize}
              selectSize={parseInt(lastElement.elementStatus.size)}
              changeContent={this.setComponentContent}
              selectContent={lastElement.elementStatus.content}
              currentComponentStatus={lastElement.elementStatus.status}
              selectWidth={lastElement.elementStatus.width}
              changeWidth={this.setComponentWidth}
              setThickness={this.setThickness}
              selectThickness={parseInt(lastElement.elementStatus.thickness)}
              selectURL={lastElement.elementStatus.url}
              changeURL={this.setImageURL}
              fileSelectedHandler={this.fileSelectedHandler}
              fileUploadHandler={this.fileUploadHandler}
            />
          }
        />
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            height: "100px",
            width: "70%",
            padding: "20px",
            backgroundColor: "rgb(240, 240, 240, 0.75)",
            borderTop: "solid rgb(230, 230, 230)",
            borderRight: "solid rgb(230, 230, 230)",
            borderRadius: "0 10px 0 0"
          }}
        >
          <input
            s={12}
            type="textarea"
            label="Type text here"
            onChange={this.props.changeContent}
            value={this.props.selectContent}
            style={{ margin: "0 10px" }}
          />
          <button>post</button>
        </div>
        <div
          style={{
            backgroundColor: "white",
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: 0,
            left: 0,
            // marginTop: "-22px",
            zIndex: "-100"
          }}
        />
      </Container>
    );
  }
}

export default PageConstructor;
