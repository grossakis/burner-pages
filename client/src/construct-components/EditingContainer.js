import React, { Component } from "react";
import { Row, Icon, Col, Button } from "react-materialize";

class EditingContainer extends Component {
  render() {
    return (
      <div
        style={{
          position: "fixed",
          top: "65px",
          right: 0,
          width: "25%",
          display: this.props.display,
          height: "85%",
          overflow: "scroll",
          backgroundColor: "rgb(240, 240, 240, 0.75)",
          border: "solid rgb(230, 230, 230)",
          borderRadius: "10px",
          zIndex: 10
        }}
      >
        <Row>
          <Button onClick={this.props.closeMenu} className="red darken-1">
            <Icon children="close" />
          </Button>
          <Col s={12} style={{}}>
            {this.props.textMenu}
          </Col>
        </Row>
      </div>
    );
  }
}

export default EditingContainer;
