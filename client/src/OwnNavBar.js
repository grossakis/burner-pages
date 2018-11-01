import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
// import './Custom.css';
import { Navbar, NavItem } from "react-materialize";

class OwnNavBar extends Component {
  render() {
    return (
      <Fragment>
        <Navbar
          brand="Burner Pages"
          style={{
            fontFamily: "Brush Script MT"
          }}
          email={this.props.email}
          className="indigo darken-4"
          right
        >
          {/* <NavItem onClick={() => console.log('test click')}>
            <Link to="/auth/google" className="navlink">
              Google
            </Link>
          </NavItem> */}
          <NavItem onClick={() => console.log("test click")}>
            <Link to="/" className="navlink" id="navLink">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about" className="navlink" id="navLink">
              About
            </Link>
          </NavItem>
          {/* <NavItem>
            <Link to="/signup" className="navlink">
              Sign Up
            </Link>
          </NavItem> */}
          <NavItem>
            <a href="/_auth/google" className="navlink">
              Login
            </a>
          </NavItem>
          <NavItem>
            <Link to="/construction" className="navlink">
              Create
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/logout" className="navlink">
              Sign Out
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/pages" className="navlink">
              Dashboard
            </Link>
          </NavItem>
        </Navbar>
      </Fragment>
    );
  }
}

export default OwnNavBar;

// import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import DashboardIcon from '@material-ui/icons/Dashboard';
// import PagesIcon from '@material-ui/icons/Pages';
// import EjectIcon from '@material-ui/icons/Eject';
// import CreateIcon from '@material-ui/icons/Create';
// import { Link } from 'react-router-dom';

// const drawerWidth = 200;

// const styles = theme => ({
//   root: {
//     display: 'flex'
//   },
//   toolbar: {
//     paddingRight: 24 // keep right padding when drawer closed
//   },
//   toolbarIcon: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: '0 8px',
//     ...theme.mixins.toolbar,
//     backgroundColor: '#1A237E'
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen
//     })
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen
//     })
//   },
//   menuButton: {
//     marginLeft: 12,
//     marginRight: 36
//   },
//   menuButtonHidden: {
//     display: 'none'
//   },
//   title: {
//     flexGrow: 1
//   },
//   drawerPaper: {
//     position: 'relative',
//     whiteSpace: 'nowrap',
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen
//     })
//   },
//   drawerPaperClose: {
//     overflowX: 'hidden',
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen
//     }),
//     width: theme.spacing.unit * 7,
//     [theme.breakpoints.up('sm')]: {
//       width: theme.spacing.unit * 9
//     }
//   },
//   appBarSpacer: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing.unit * 3,
//     height: '100vh',
//     overflow: 'auto'
//   },
//   chartContainer: {
//     marginLeft: -22
//   },
//   tableContainer: {
//     height: 320
//   },
//   h5: {
//     marginBottom: theme.spacing.unit * 2
//   }
// });

// class OwnNavBar extends Component {
//   state = {
//     open: false
//   };

//   handleDrawerOpen = () => {
//     this.setState({ open: true });
//   };

//   handleDrawerClose = () => {
//     this.setState({ open: false });
//   };

//   render() {
//     const { classes } = this.props;

//     return (
//       <Fragment>
//         <CssBaseline />
//         <div className={classes.root}>
//           <AppBar
//             position="absolute"
//             className={classNames(
//               classes.appBar,
//               this.state.open && classes.appBarShift
//             )}
//           >
//             <Toolbar
//               disableGutters={!this.state.open}
//               className={classes.toolbar}
//               style={{ backgroundColor: '#1A237E' }}
//             >
//               <IconButton
//                 color="inherit"
//                 aria-label="Open drawer"
//                 onClick={this.handleDrawerOpen}
//                 className={classNames(
//                   classes.menuButton,
//                   this.state.open && classes.menuButtonHidden
//                 )}
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Typography
//                 component="h1"
//                 variant="h6"
//                 color="inherit"
//                 noWrap
//                 className={classes.title}
//               >
//                 Burner Pages
//               </Typography>
//             </Toolbar>
//           </AppBar>
//           <Drawer
//             variant="permanent"
//             classes={{
//               paper: classNames(
//                 classes.drawerPaper,
//                 !this.state.open && classes.drawerPaperClose
//               )
//             }}
//             open={this.state.open}
//           >
//             <div className={classes.toolbarIcon}>
//               <IconButton onClick={this.handleDrawerClose}>
//                 <ChevronLeftIcon />
//               </IconButton>
//             </div>
//             <Divider />
//             <div style={{ backgroundColor: '#1A237E' }}>
//               <Link to="/">
//                 <ListItem button>
//                   <ListItemIcon>
//                     <DashboardIcon style={{ color: 'white' }} />
//                   </ListItemIcon>
//                   <ListItemText
//                     primary="Dashboard"
//                     disableTypography="true"
//                     style={{ color: 'white' }}
//                   />
//                 </ListItem>
//               </Link>
//               <Link to="/pages">
//                 <ListItem button>
//                   <ListItemIcon>
//                     <PagesIcon style={{ color: 'white' }} />
//                   </ListItemIcon>
//                   <ListItemText
//                     disableTypography="true"
//                     primary="Pages"
//                     style={{ color: 'white' }}
//                   />
//                 </ListItem>
//               </Link>
//               <Link to="/construction">
//                 <ListItem button>
//                   <ListItemIcon>
//                     <CreateIcon style={{ color: 'white' }} />
//                   </ListItemIcon>
//                   <ListItemText
//                     disableTypography="true"
//                     primary="Create"
//                     style={{ color: 'white' }}
//                   />
//                 </ListItem>
//               </Link>
//               <Divider />
//               <Link to="/logout">
//                 <ListItem button>
//                   <ListItemIcon>
//                     <EjectIcon style={{ color: 'white' }} />
//                   </ListItemIcon>
//                   <ListItemText
//                     disableTypography="true"
//                     primary="Logout"
//                     style={{ color: 'white' }}
//                   />
//                 </ListItem>
//               </Link>
//             </div>
//           </Drawer>
//         </div>

//         {/* <main className={classes.content}> */}
//         {/* <div className={classes.appBarSpacer} /> */}
//         {/* <Typography variant="h4" gutterBottom component="h2">
//             Pages
//           </Typography> */}
//         {/* <Typography component="div" className={classes.chartContainer}> */}
//         {/* <SimpleLineChart /> */}
//         {/* </Typography>
//           <Typography variant="h4" gutterBottom component="h2">
//             Edit
//           </Typography>
//           <div className={classes.tableContainer}>{/* <SimpleTable /> }</div> */}
//         {/* </main> */}
//         {/* </div> */}
//         {/* <div
//           style={{
//             backgroundColor: 'white',
//             height: '100vh',
//             width: '100vw',
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             // marginTop: "-22px",
//             zIndex: '-100'
//           }}
//         /> */}
//       </Fragment>
//     );
//   }
// }

// OwnNavBar.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(OwnNavBar);
