import React, { Component } from "react";
import { Dropdown, NavItem, Button, Icon } from "react-materialize";

class ExtraComponentDropdown extends Component {
  render() {
    return (
      <div style={{ position: "relative", top: 0 }}>
        <Dropdown
          trigger={
            <Button>
              <Icon children="add" />
            </Button>
          }
        >
          <NavItem onClick={() => this.props.addTextbox(this.props.id)}>
            add textbox
          </NavItem>
          <NavItem onClick={() => this.props.addHeading(this.props.id)}>
            add image
          </NavItem>
        </Dropdown>
      </div>
    );
  }
}

export default ExtraComponentDropdown;
