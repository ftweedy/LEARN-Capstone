import React from "react";
import PropTypes from "prop-types";
import { Menu, Icon, Segment, Modal, Header, Button, Form } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Confessions from "./pages/Confessions";
import Confess from "./pages/Confess";
import Home from "./pages/Home";
import LoginModal from "./LoginModal";

class UnauthenticatedApp extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        show: false
      }
  }

  handleClose = () => this.setState({ show: false })

  handleShow = () => this.setState({ show: true })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleUserLogin = (user) => {
    console.log(user);
    const BASE = "http://localhost:3000"
    return fetch(BASE + "/users/sign_in", {
      body: JSON.stringify(user),
      headers: {'Content-Type': 'application/json'},
      method: "POST"
    }).then((resp)=>{
      console.log(resp);
    })
  }

  render() {
    const { activeItem } = this.state
    return(
      <React.Fragment>
        <Router>
          <Menu widths={4} fixed='top'>
            <Menu.Item
              name='Home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              as={Link} to='/home'
            />
            <Menu.Item
              name='confess'
              active={activeItem === 'confess'}
              onClick={this.handleItemClick}
              as={Link} to='/confess'
            />
            <Menu.Item
              name='my confessions'
              active={activeItem === 'my confessions'}
              onClick={this.handleItemClick}
              as={Link} to='/myconfessions'
            />
            <Menu.Item
              name='login'
              active={activeItem === 'login'}
              onClick={this.handleShow}
            />
          </Menu>

          <LoginModal
            open={this.state.show}
            onClose={this.handleClose}
            handleUserLogin={this.handleUserLogin}
          />

          <Switch>
            <Route path="/protected" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/confess" component={Confess} />
            <Route
              path="/myconfessions"
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
    )
  }
}

export default UnauthenticatedApp;
