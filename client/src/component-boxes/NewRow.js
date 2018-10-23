import React, { Component } from "react";
import { Dropdown, NavItem, Row, Col, Button, Icon } from "react-materialize";

class NewRow extends Component {
  render() {
    return (
      <Row
        style={{
          border: "dashed 1px lightgray",
          textAlign: "center",
          // height: "100px",
          padding: "50px 0",
          position: "relative"
        }}
      >
        <Col s={12}>
          <Dropdown trigger={<Button>add element</Button>}>
            <NavItem onClick={() => this.props.addHeading(this.props.id)}>
              add heading
            </NavItem>
            <NavItem onClick={() => this.props.addTextbox(this.props.id)}>
              add textbox
            </NavItem>
            <NavItem onClick={() => this.props.addHeading(this.props.id)}>
              add image
            </NavItem>
          </Dropdown>

          <Button
            className="red darken-1"
            onClick={() => this.props.deleteRow(this.props.id)}
            style={{
              position: "absolute",
              top: 0,
              left: 0
            }}
          >
            <Icon children="close" />
          </Button>
        </Col>
      </Row>
    );
  }
}
export default NewRow;
