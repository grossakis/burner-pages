import React, { Fragment } from "react";
// import PropTypes from 'prop-types';
// import classnames from 'classnames';
import { Input, Row, SideNav, Button, SideNavItem } from "react-materialize";
import SearchResultContainer from "./SearchResultContainer";

const Create = () => {
  return (
    <Fragment>
      <SideNav
        trigger={<Button>SIDE NAV DEMO</Button>}
        options={{ closeOnClick: false, edge: "right" }}
      >
        <Input label="Heading" />
        <Input type="select" label="Choose your heading style">
          <option value="h1">h1</option>
          <option value="h2">h2</option>
          <option value="h3">h3</option>
          <option value="h4">h4</option>
          <option value="h5">h5</option>
        </Input>
        <Input type="select" label="Choose your heading color">
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="black">Black</option>
        </Input>
        <Input type="number" label="Choose your heading size" />
        <Input type="select" label="Choose your heading font">
          <option value="helvetica">Helvetica</option>
          <option value="times">Times</option>
          <option value="arial">Arial</option>
          <option value="courier">Courier</option>
          <option value="verdana">Verdana</option>
        </Input>
        <Input label="Body" type="textarea" />
        <Input s={12} m={6} l={3} type="select" label="Choose your body style">
          <option value="h1">h1</option>
          <option value="h2">h2</option>
          <option value="h3">h3</option>
          <option value="h4">h4</option>
          <option value="h5">h5</option>
          <option value="p">p</option>
        </Input>
        <Input s={12} m={6} l={3} type="select" label="Choose your body color">
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="black">Black</option>
        </Input>
        <Input s={12} m={6} l={3} type="number" label="Choose your body size" />
        <Input s={12} m={6} l={3} type="select" label="Choose your body font">
          <option value="helvetica">Helvetica</option>
          <option value="times">Times</option>
          <option value="arial">Arial</option>
          <option value="courier">Courier</option>
          <option value="verdana">Verdana</option>
        </Input>
        <Input type="file" label="Upload" />
        <SearchResultContainer />
      </SideNav>

      <Row>
        <Input s={12} label="Heading" />
      </Row>
      <Row>
        <Input
          s={12}
          m={6}
          l={3}
          type="select"
          label="Choose your heading style"
        >
          <option value="h1">h1</option>
          <option value="h2">h2</option>
          <option value="h3">h3</option>
          <option value="h4">h4</option>
          <option value="h5">h5</option>
        </Input>
        <Input
          s={12}
          m={6}
          l={3}
          type="select"
          label="Choose your heading color"
        >
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="black">Black</option>
        </Input>
        <Input
          s={12}
          m={6}
          l={3}
          type="number"
          label="Choose your heading size"
        />
        <Input
          s={12}
          m={6}
          l={3}
          type="select"
          label="Choose your heading font"
        >
          <option value="helvetica">Helvetica</option>
          <option value="times">Times</option>
          <option value="arial">Arial</option>
          <option value="courier">Courier</option>
          <option value="verdana">Verdana</option>
        </Input>
      </Row>
      <Row>
        <Input s={12} label="Body" type="textarea" />
      </Row>
      <Row>
        <Input s={12} m={6} l={3} type="select" label="Choose your body style">
          <option value="h1">h1</option>
          <option value="h2">h2</option>
          <option value="h3">h3</option>
          <option value="h4">h4</option>
          <option value="h5">h5</option>
          <option value="p">p</option>
        </Input>
        <Input s={12} m={6} l={3} type="select" label="Choose your body color">
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="black">Black</option>
        </Input>
        <Input s={12} m={6} l={3} type="number" label="Choose your body size" />
        <Input s={12} m={6} l={3} type="select" label="Choose your body font">
          <option value="helvetica">Helvetica</option>
          <option value="times">Times</option>
          <option value="arial">Arial</option>
          <option value="courier">Courier</option>
          <option value="verdana">Verdana</option>
        </Input>
      </Row>
      <Row>
        <Input type="file" label="Upload Your Image" s={12} />
      </Row>
      <Row>
        <SearchResultContainer />
      </Row>
    </Fragment>
  );
};

export default Create;
