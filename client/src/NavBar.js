import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
// import './Custom.css';

class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <h1>Pupster (email : {this.props.email})</h1>
          <ul>
            <li>
              <Link to="/" className="navlink">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="navlink">
                About
              </Link>
            </li>
            <li>
              <Link to="/signup" className="navlink">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/login" className="navlink">
                Login
              </Link>
            </li>
            <li>
              <Link to="/search" className="navlink">
                Search
              </Link>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default NavBar;
