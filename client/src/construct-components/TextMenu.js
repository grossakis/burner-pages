import React, { Fragment, Component } from "react";
// import PropTypes from 'prop-types';
// import classnames from 'classnames';
import { Input, Row, SideNav, Button, SideNavItem } from "react-materialize";
import { SketchPicker } from "react-color";
import SearchResultContainer from "./SearchResultContainer";

class TextMenu extends Component {
  state = {};
  render() {
    let currentComponentStatus = this.props.currentComponentStatus;
    let widthSelect;
    if (currentComponentStatus === "heading") {
      widthSelect = "none";
    } else if (currentComponentStatus === "textbox") {
      widthSelect = "block";
    }
    return (
      <Fragment>
        <br />
        <SketchPicker
          disableAlpha={true}
          width="auto"
          color={this.props.selectColor}
          onChangeComplete={this.props.handleChangeComplete}
        />
        <Input
          s={12}
          type="select"
          label="Choose your heading font"
          onChange={this.props.changeStyleF}
          value={this.props.selectFont}
        >
          <option style={{ fontFamily: "helvetica" }} value="helvetica">
            Helvetica
          </option>
          <option style={{ fontFamily: "times" }} value="times">
            Times
          </option>
          <option style={{ fontFamily: "arial" }} value="arial">
            Arial
          </option>
          <option style={{ fontFamily: "courier" }} value="courier">
            Courier
          </option>
          <option style={{ fontFamily: "verdana" }} value="verdana">
            Verdana
          </option>
        </Input>
        <Input
          s={12}
          type="textarea"
          label="Type text here"
          onChange={this.props.changeContent}
          value={this.props.selectContent}
        />
        <Input
          s={12}
          type="number"
          label="Font size"
          defaultValue={0}
          onChange={this.props.changeStyleS}
          value={this.props.selectSize}
        />
        <div
          style={{
            display: widthSelect
          }}
        >
          <Input
            type="select"
            label="Component width"
            s={12}
            onChange={this.props.changeWidth}
            value={this.props.selectWidth}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
          </Input>
        </div>
      </Fragment>
    );
  }
}

export default TextMenu;
