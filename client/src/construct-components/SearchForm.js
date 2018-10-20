import React, { Fragment } from 'react';
import { Row, Button, Input } from 'react-materialize';

const SearchForm = props => (
  <Fragment>
    <Row>
      <Input
        s={6}
        m={6}
        l={6}
        label="Choose a gif to insert"
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        placeholder="Search for a gif"
        id="search"
      />
      <br />
      <Button onClick={props.handleFormSubmit}>Search</Button>
    </Row>
  </Fragment>
);

export default SearchForm;
