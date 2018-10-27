import React, { Component } from "react";
import { Col } from "react-materialize";

class Divider extends Component {
  render() {
    return (
      <Col s={12}>
        <hr
          style={{
            border: "solid " + this.props.thickness + " " + this.props.color
          }}
        />

        {this.props.editButtons}
      </Col>
    );
  }
}

export default Divider;
