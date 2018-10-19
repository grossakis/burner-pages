import React, { Component, Fragment } from 'react';
// import './Custom.css';
import API from '../utils/API';

class Search extends Component {
  /* state= {
    breeds: [],
    breed: "",
    results: []
  }

  componentDidMount = () => {
    const breedList = API.getBaseBreedsList();
    breedList.then( 
      result => {
        let list = result.data.message;
        console.log(list);
        this.setState({
          breeds: list
        });
      }
    );
  }

  handleInput = event => {
    
    let name = event.target.name;
    let value = event.target.value;
    console.log(value);
    this.setState({
      [name]: value
    });
  }

  searchForBreed = breed => {
    if(breed.length > 0){
      // assume we will get data
      API.getDogsOfBreed(breed).then(
        results => {
          this.setState({
            results: results.data.message
          })
        }
      );
    }
    
  }

  handleSearch = event => {
    event.preventDefault();
    console.log(event);
    this.searchForBreed(this.state.breed);
  }*/
  render() {
    return (
      <div className="Search">
        Search Page
      </div>
    );
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