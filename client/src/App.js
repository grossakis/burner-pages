import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Rover.scss";
import Home from "./pages/Home"; //???
import About from "./pages/About"; //???
import Error from "./pages/Error"; //???
import SignUp from "./pages/SignUp"; //???
import Login from "./pages/Login"; //???
import API from "./utils/API"; //???
import Dashboard from "./pages/Dashboard"; //???
import ThankYouForRegistering from "./pages/ThankYouForRegistering";
import PageConstructor from "./pages/PageConstructor";
import Userpage from "./pages/Userpage";
import OwnNavBar from "./OwnNavBar";

class App extends Component {
  state = {
    email: ""
  };
  componentDidMount = () => {
    API.getEmail().then(response => {
      // console.log(response.data.email);
      this.setState({
        email: response.data.email
      });
    });

    // NEW CODE START
    // API.routeEmails().then(response => {
    //   console.log(response.data);
    // });
    // NEW CODE END
  };
  render() {
    return (
      <Router>
        <Fragment>
          <OwnNavBar />
          {/* email={this.state.email} */}
          {/* <br /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/thank-you" component={ThankYouForRegistering} />
            <Route exact path="/construction" component={PageConstructor} />
            <Route exact path="/pages" component={Dashboard} />
            {/* <Route exact path="/:user" component={Userpage} /> */}
            <Route exact path="/:userID/:pageName" component={Userpage} />
            <Route component={Error} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
