import React, { Component, Fragment } from "react";
// import './Custom.css';
import API from "../utils/API";

class Search extends Component {
  state = {
    // breeds: [],
    // breed: "",
    // results: []
    selectedUser: "",
    foundUser: false,
    headMessage: "No Page Found"
  };

  componentDidMount = () => {
    const userList = API.routeEmails();
    userList.then(result => {
      // console.log(result.data);
      result.data.map(user => {
        // console.log(user.email);
        if (user.email === this.props.match.params.user) {
          this.setState({
            selectedUser: user.email,
            foundUser: true,
            headMessage: "Welcome to " + user.email + "'s page"
          });
        }
      });
    });
    // breedList.then(result => {
    //   let list = result.data.message;
    //   console.log(list);
    //   this.setState({
    //     breeds: list
    //   });
    // });
  };

  render() {
    return <div className="container">{this.state.headMessage}</div>;
    /*const getResults = () => {
      console.log(this.state.results);
      return this.state.results.map(
        (dogImage, index) => {
          return <p key={index}><img src={dogImage} /></p>
        }
      );
    }
    return (
      <Fragment>
        <div className="form-group">
          <form
            onSubmit={this.handleSearch}>
          <input 
            type="text" 
            name="breed" 
            list="breeds" 
            className="form-control" 
            placeholder="Type in a dog breed to begin" 
            id="breed" 
            onChange={this.handleInput}/>
          <datalist id="breeds">
            {
              (() => {
                return this.state.breeds.map(
                  (breed, index) => {
                    return <option key={index} value={breed}>{breed}</option>
                  }
                )
              })()
            }
          </datalist>
          <button type="submit">Search</button>
          </form>
        </div>
        <p>Searching: {this.props.match.params.term}</p>

        {getResults()}
      </Fragment>
    );*/
  }
}

export default Search;
