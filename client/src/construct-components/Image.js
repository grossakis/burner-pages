import React, { Component } from "react";
import { Col } from "react-materialize";

class Image extends Component {
  render() {
    return (
      <Col
        // s={this.props.imageWidth}
        s={6}
        style={{
          border: this.props.border,
          width: "100%",
          height: "auto"
        }}
      >
        {/* <img src={"'" + this.props.imageURL + "'"} /> */}
        <img src={this.props.imageURL} />
        {/* <img src={"http://web.mit.edu/manoli/mood/www/mood04.jpg"} /> */}

        {this.props.editButtons}
      </Col>
    );
  }
}

export default Image;
