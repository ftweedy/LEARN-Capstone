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
        <Navbar.Brand href="/home">Confessr</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/confess">Confess</Nav.Link>
            <Nav.Link href="/confessions">My Confessions</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

          <Switch>
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
