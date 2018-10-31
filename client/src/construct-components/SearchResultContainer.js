import React, { Fragment, Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import GiphyAPI from "../utils/GiphyAPI";
import { Row, Col, Button, Container, Input } from "react-materialize";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchGiphy("");
  }

  searchGiphy = query => {
    GiphyAPI.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGiphy(this.state.search);
  };

  render() {
    return (
      <Fragment>
        <Col s={12}>
          <Input
            s={12}
            // m={6}
            // l={6}
            label="Choose a gif to insert"
            onChange={this.handleInputChange}
            value={this.state.search}
            name="search"
            type="text"
            placeholder="Search for a gif"
            id="search"
          />
          <br />
          <Button onClick={this.handleFormSubmit}>Search</Button>
        </Col>
        {this.state.results.map(result => (
          <Col s={12} key={result.id}>
            <img
              style={{ width: "100%" }}
              onClick={() => this.props.gifSelect(result.images.original.url)}
              alt={result.title}
              className="img-fluid"
              src={result.images.original.url}
            />
          </Col>
        ))}
      </Fragment>
    );
  }
}

export default SearchResultContainer;
