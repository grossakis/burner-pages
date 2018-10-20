import React, { Component } from 'react';
import { Row, Col, Button } from 'react-materialize';
class NewRow extends Component {
  render() {
    return (
      <Row
        style={{
          border: 'dashed 1px lightgray',
          textAlign: 'center',
          // height: "100px",
          padding: '50px 0'
        }}
      >
        <Col s={12}>
          <Button onClick={() => this.props.addElement(this.props.id)}>
            add element
          </Button>
        </Col>
      </Row>
    );
  }
}
export default NewRow;
