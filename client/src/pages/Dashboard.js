import React, { Component, Fragment } from 'react';
import '../App.css';
import {
  Row,
  Col,
  Card,
  CardTitle,
  Button,
  Container,
  SideNav,
  SideNavItem
} from 'react-materialize';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      // <Row>
      //   <Col l={2}>
      //     {/* <SideNav
      //       style={{
      //         backgroundColor: '#1A237E',
      //         paddingTop: '50px',
      //         paddingRight: '-50px',
      //         paddingLeft: '0px'
      //       }}
      //     > */}
      //     <SideNavItem waves icon="person">
      //       <Link to="/dashboard" style={{ color: 'white' }}>
      //         Your Profile
      //       </Link>
      //     </SideNavItem>
      //     <SideNavItem waves icon="pages">
      //       <Link to="/dashboard/pages" style={{ color: 'white' }}>
      //         Your Pages
      //       </Link>
      //     </SideNavItem>
      //     <SideNavItem divider />
      //     <SideNavItem waves icon="power_settings_new">
      //       <Link to="/dashboard/logout" style={{ color: 'white' }}>
      //         Logout
      //       </Link>
      //     </SideNavItem>
      //     {/* </SideNav> */}
      //   </Col>
      // </Row>
      <SideNav
        trigger={<Button>SIDE NAV DEMO</Button>}
        options={{ closeOnClick: true }}
      >
        <SideNavItem
          userView
          style={{ color: 'red' }}
          user={{
            background: '/images/airplane-logo.png',
            image: '/images/airplane-logo.png',
            name: 'John Doe',
            email: 'jdandturk@gmail.com'
          }}
        />
        <SideNavItem href="#!icon" icon="cloud">
          First Link With Icon
        </SideNavItem>
        <SideNavItem href="#!second">Second Link</SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Subheader</SideNavItem>
        <SideNavItem waves href="#!third">
          Third Link With Waves
        </SideNavItem>
      </SideNav>
    );
  }
}

export default Dashboard;
