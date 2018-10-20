import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// import './Custom.css';
import { Navbar, NavItem } from 'react-materialize';

class OwnNavBar extends Component {
  render() {
    return (
      <Fragment>
        <Navbar
          brand="Burner Pages"
          email={this.props.email}
          className="indigo darken-4"
          right
        >
          <NavItem onClick={() => console.log('test click')}>
            <Link to="/" className="navlink">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about" className="navlink">
              About
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/signup" className="navlink">
              Sign Up
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/login" className="navlink">
              Login
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/create" className="navlink">
              Create
            </Link>
          </NavItem>
        </Navbar>
      </Fragment>
    );
  }
}

export default OwnNavBar;
