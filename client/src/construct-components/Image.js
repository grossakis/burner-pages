import React, { Component } from 'react';
import { Col } from 'react-materialize';

class Image extends Component {
  render() {
    return (
      <Col
        // s={this.props.imageWidth}
        s={this.props.imageWidth}
        style={{
          border: this.props.border
        }}
      >
        {/* <img src={"'" + this.props.imageURL + "'"} /> */}
        <img
          style={{
            width: '100%',
            height: 'auto'
          }}
          src={this.props.imageURL}
          alt="image"
        />
        {/* <img src={"http://web.mit.edu/manoli/mood/www/mood04.jpg"} /> */}

        {this.props.editButtons}
      </Col>
    );
  }
}

export default Image;
