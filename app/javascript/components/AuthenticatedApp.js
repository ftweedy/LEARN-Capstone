import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Confessions from "./pages/Confessions";
import Confess from "./pages/Confess";
import Home from "./pages/Home";

import {
  Col,
  Container,
  Row,
  FormControl,
  Form,
  Navbar,
  Nav,
  NavDropdown,
  Button
} from "react-bootstrap";
import Upvote from "./Upvote";

class AuthenticatedApp extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand><Link to="/home">Confessr</Link></Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav" class="navbar-collapse-lg">
              <Nav >
                <Navbar.Brand><Link to="/home" className="btn btn-outline-success">Home</Link></Navbar.Brand>
                <Navbar.Brand><Link to="/confess" className="btn btn-outline-success">Confess</Link></Navbar.Brand>
                <Navbar.Brand><Link to="/confessions" className="btn btn-outline-success">My Confessions</Link></Navbar.Brand>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/protected" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/confess" component={Confess} />
          <Route
            path="/confessions"
            render={props => (
              <Confessions
                current_user={this.props.current_user}
                isAuthed={true}
              />
            )}
          />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      </React.Fragment>
    );
  }
}

export default AuthenticatedApp;
