import React, { Fragment, Component } from "react";
// import PropTypes from 'prop-types';
// import classnames from 'classnames';
import { Autocomplete, Input, Row, Button, Col } from "react-materialize";
import { SketchPicker, SliderPicker, CirclePicker } from "react-color";
import SearchResultContainer from "./SearchResultContainer";
import axios from "axios";
import Select from "@material-ui/core/Select";

class TextMenu extends Component {
  state = {
    currentComponentStatus: null,
    selectedFile: null,
    downloadURL: ""
  };

  componentDidMount = () => {
    this.setState({
      currentComponentStatus: this.props.currentComponentStatus
    });
  };

  componentWillReceiveProps = nextProps => {
    this.setState({
      currentComponentStatus: nextProps.currentComponentStatus
    });
  };

  // fileUploadHandler = () => {
  //   const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dtergnssx/upload";
  //   const CLOUDINARY_UPLOAD_PRESET = "xxsgqoid";

  //   const fd = new FormData();
  //   fd.append("file", this.state.selectedFile, this.state.selectedFile.name);
  //   fd.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  //   // const config = {
  //   //   headers: { 'X-Requested-With': 'XMLHttpRequest' }
  //   // };

  //   axios
  //     .post(CLOUDINARY_URL, fd)
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data.secure_url);
  //       this.setState({
  //         downloadURL: res.data.secure_url
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // fileSelectedHandler = event => {
  //   // console.log(event.target.files[0]);
  //   this.setState(
  //     {
  //       selectedFile: event.target.files[0]
  //     },
  //     function() {
  //       console.log(this.state.selectedFile);
  //     }
  //   );
  // };

  render() {
    let colorSelect = () => (
      <Col s={12}>
        <SliderPicker
          // disableAlpha={true}
          width="auto"
          color={this.props.selectColor}
          onChangeComplete={this.props.handleChangeComplete}
        />
        <br />
        <CirclePicker
          width="auto"
          color={this.props.selectColor}
          onChangeComplete={this.props.handleChangeComplete}
          colors={[
            "#FFFFFF",
            "#E0E0E0",
            "#C0C0C0",
            "#A0A0A0",
            "#808080",
            "#606060",
            "#404040",
            "#202020",
            "#000000"
          ]}
        />
      </Col>
    );

    let BGcolorSelect = () => (
      <Col s={12}>
        <SliderPicker
          // disableAlpha={true}
          width="auto"
          color={this.props.BGselectColor}
          onChangeComplete={this.props.BGhandleChangeComplete}
        />
        <br />
        <CirclePicker
          width="auto"
          color={this.props.BGselectColor}
          onChangeComplete={this.props.BGhandleChangeComplete}
          colors={[
            "#FFFFFF",
            "#E0E0E0",
            "#C0C0C0",
            "#A0A0A0",
            "#808080",
            "#606060",
            "#404040",
            "#202020",
            "#000000"
          ]}
        />
      </Col>
    );

    let textInput = () => (
      <Input
        s={12}
        type="textarea"
        label="Type text here"
        onChange={this.props.changeContent}
        value={this.props.selectContent}
      />
    );
    let fontSizeSelect = () => (
      <Input
        s={12}
        type="number"
        label="Font size"
        onChange={this.props.changeStyleS}
        value={this.props.selectSize}
      />
    );
    let widthSelect = () => (
      <Col s={12}>
        <Select
          style={{
            width: "100%"
          }}
          type="select"
          label="Component width"
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
        </Select>
      </Col>
    );
    let imageSelect = () => (
      <Fragment>
        <Row>
          <Input
            s={12}
            type="file"
            label="Choose your image"
            // onChange={this.fileSelectedHandler}
            onChange={this.props.fileSelectedHandler}
            // value={this.props.selectURL}
          />
        </Row>
        <Row>
          {/* <Button onClick={this.fileUploadHandler}>Upload your image</Button> */}
          <Button onClick={this.props.fileUploadHandler}>
            Upload your image
          </Button>
        </Row>
      </Fragment>
    );
    let imageURL = () => (
      <Input
        s={12}
        type="textarea"
        label="Paste Image URL"
        onChange={this.props.changeURL}
        value={this.props.selectURL}
      />
    );
    let fontSelect = () => (
      <Col s={12}>
        <Select
          style={{
            width: "100%"
          }}
          type="select"
          label="Component width"
          onChange={this.props.changeFont}
          value={this.props.selectFont}
        >
          <option
            style={{ fontFamily: "American Typewriter" }}
            value={"American Typewriter"}
          >
            American Typewriter
          </option>
          <option style={{ fontFamily: "andale mono" }} value={"andale mono"}>
            Andale Mono
          </option>
          <option
            style={{ fontFamily: "Apple Chancery" }}
            value={"Apple Chancery"}
          >
            Apple Chancery
          </option>
          <option style={{ fontFamily: "arial" }} value={"arial"}>
            Arial
          </option>
          <option style={{ fontFamily: "Bradley Hand" }} value={"Bradley Hand"}>
            Bradley Hand
          </option>
          <option
            style={{ fontFamily: "Brush Script MT" }}
            value={"Brush Script MT"}
          >
            Brush Script MT
          </option>

          <option style={{ fontFamily: "Chalkduster" }} value={"Chalkduster"}>
            Chalkduster
          </option>
          <option
            style={{ fontFamily: "Comic Sans MS" }}
            value={"Comic Sans MS"}
          >
            Comic Sans MS
          </option>
          <option style={{ fontFamily: "courier" }} value={"courier"}>
            Courier
          </option>
          <option style={{ fontFamily: "Didot" }} value={"Didot"}>
            Didot
          </option>
          <option style={{ fontFamily: "georgia" }} value={"georgia"}>
            Georgia
          </option>
          <option style={{ fontFamily: "Gill Sans" }} value={"Gill Sans"}>
            Gill Sans
          </option>
          <option style={{ fontFamily: "helvetica" }} value={"helvetica"}>
            Helvetica
          </option>
          <option style={{ fontFamily: "Herculanum" }} value={"Herculanum"}>
            Herculanum
          </option>
          <option style={{ fontFamily: "Impact" }} value={"Impact"}>
            Impact
          </option>
          <option style={{ fontFamily: "Luminari" }} value={"Luminari"}>
            Luminari
          </option>
          <option style={{ fontFamily: "Marker Felt" }} value={"Marker Felt"}>
            Marker Felt
          </option>
          <option style={{ fontFamily: "Optima" }} value={"Optima"}>
            Optima
          </option>
          <option style={{ fontFamily: "palatino" }} value={"palatino"}>
            Palatino
          </option>
          <option style={{ fontFamily: "Papyrus" }} value={"Papyrus"}>
            Papyrus
          </option>
          <option style={{ fontFamily: "roboto" }} value={"roboto"}>
            Roboto
          </option>
          <option style={{ fontFamily: "times" }} value={"times"}>
            Times
          </option>
          <option style={{ fontFamily: "Trattatello" }} value={"Trattatello"}>
            Trattatello
          </option>
          <option style={{ fontFamily: "Trebuchet MS" }} value={"Trebuchet MS"}>
            Trebuchet MS
          </option>
          <option style={{ fontFamily: "verdana" }} value={"verdana"}>
            Verdana
          </option>
        </Select>
      </Col>
    );
    let thicknessSelect = () => (
      <Input
        s={12}
        type="number"
        label="Divider thickness"
        onChange={this.props.setThickness}
        value={this.props.selectThickness}
      />
    );
    let gifSelect = () => (
      <SearchResultContainer gifSelect={this.props.gifSelect} />
    );
    let currentComponentStatus = this.state.currentComponentStatus;
    let editOptions = "";
    if (currentComponentStatus === "divider") {
      editOptions = (
        <Fragment>
          <br />
          {colorSelect()}
          {thicknessSelect()}
        </Fragment>
      );
    }
    if (currentComponentStatus === "heading") {
      editOptions = (
        <Fragment>
          <br />
          {colorSelect()}
          {fontSelect()}
          {textInput()}
          {fontSizeSelect()}
          {BGcolorSelect()}
        </Fragment>
      );
    }

    if (currentComponentStatus === "textbox") {
      editOptions = (
        <Fragment>
          <br />
          {colorSelect()}
          {fontSelect()}
          {textInput()}
          {fontSizeSelect()}
          {widthSelect()}
          {BGcolorSelect()}
          {/* {fontSelect()} */}
        </Fragment>
      );
    }

    if (currentComponentStatus === "image") {
      editOptions = (
        <Fragment>
          <br />
          {imageSelect()}
          {imageURL()}
          {widthSelect()}
        </Fragment>
      );
    }

    if (currentComponentStatus === "gif") {
      editOptions = (
        <Fragment>
          <br />
          {widthSelect()}
          {gifSelect()}
        </Fragment>
      );
    }
    return <Fragment>{editOptions}</Fragment>;
  }
}

export default TextMenu;