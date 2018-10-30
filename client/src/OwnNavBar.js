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
          style={{
            fontFamily:"Brush Script MT",
          }}
          email={this.props.email}
          className="indigo darken-4"
          right
        >
          <NavItem onClick={() => console.log('test click')}>
            <Link to="/" className="navlink" id="navLink">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about" className="navlink" id="navLink">
              About
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/signup" className="navlink" id="navLink">
              Sign Up
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/login" className="navlink" id="navLink">
              Login
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/create" className="navlink" id="navLink">
              Create
            </Link>
          </NavItem>
        </Navbar>
      </Fragment>
    );
  }
}

export default OwnNavBar;
