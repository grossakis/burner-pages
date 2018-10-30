import React, { Component } from "react";
import { Dropdown, NavItem, Button, Icon } from "react-materialize";

class RowMenu extends Component {
  render() {
    return (
      <div
        style={{
          height: "38px",
          backgroundColor: "rgba(246, 246, 246, 0.712)",
          border: "solid 2px #B5B5B5",
          borderTop: "0",
          borderRadius: "0 0 10px 10px",
          width: "100%",
          // overflow: "hidden",
          position: "relative",
          top: "-20px"
        }}
      >
        <Dropdown
          trigger={
            <Button
              style={{ padding: "0 1rem" }}
              disabled={this.props.disabled}
            >
              <Icon children="add" />
            </Button>
          }
        >
          <NavItem onClick={() => this.props.addTextbox(this.props.id)}>
            add textbox
          </NavItem>
          <NavItem onClick={() => this.props.addImage(this.props.id)}>
            add image
          </NavItem>
          <NavItem onClick={() => this.props.addGif(this.props.id)}>
            add GIF
          </NavItem>
        </Dropdown>
        <span style={{ padding: "0 10px", color: "#B5B5B5" }}>
          row space used:
          {this.props.currentRowWidth}
          /12
        </span>
      </div>
    );
  }
}

export default RowMenu;
