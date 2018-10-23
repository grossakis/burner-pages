import React, { Component } from "react";
import { Icon, Col, Button } from "react-materialize";

class EditingContainer extends Component {
  render() {
    return (
      <Col
        s={4}
        style={{
          height: "85%",
          overflow: "scroll",
          display: this.props.display,
          backgroundColor: "rgb(240, 240, 240, 0.75)",
          border: "solid rgb(230, 230, 230)",
          borderRadius: "10px",
          position: "fixed",
          //   top: 0,
          right: 0
        }}
      >
        <Button
          s={1}
          style={{
            position: "absolute",
            top: 0,
            left: 0
          }}
          onClick={this.props.closeMenu}
          className="red darken-1"
        >
          <Icon children="close" />
        </Button>
        <br />
        {this.props.textMenu}
        {this.props.imageMenu}
      </Col>
    );
  }
}

export default EditingContainer;
