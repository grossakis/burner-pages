import React, { Component } from "react";
import { Button } from "react-materialize";

class EditButton extends Component {
  render() {
    return <Button onClick={this.props.editComponent}>Edit</Button>;
  }
}

export default EditButton;
