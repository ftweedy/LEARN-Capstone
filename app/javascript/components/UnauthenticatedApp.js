import React from "react";
import PropTypes from "prop-types";
import { Menu, Icon, Segment, Modal, Header, Button, Form } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Confessions from "./pages/Confessions";
import Confess from "./pages/Confess";
import Home from "./pages/Home";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal"

class UnauthenticatedApp extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        show: false,
        signupModalShow: false
      }
  }

  handleClose = () => this.setState({ show: false, signupModalShow: false })

  handleShow = () => this.setState({ show: true })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleSignUp = () => {
    this.setState({ show: false, signupModalShow: true})
  }

  render() {
    const { activeItem } = this.state
    return(
      <React.Fragment>
        <Router>
          <Menu widths={4} fixed='top'>
            <Menu.Item
              name='Home'
              color='red'
              active={activeItem === 'home'}
              onClick={this.handleShow}
            />
            <Menu.Item
              name='confess'
              active={activeItem === 'confess'}
              onClick={this.handleShow}
            />
            <Menu.Item
              name='my confessions'
              active={activeItem === 'my confessions'}
              onClick={this.handleShow}
            />
            <Menu.Item
              name='login'
              active={activeItem === 'login'}
              onClick={this.handleShow}
            />
          </Menu>

          <LoginModal open={this.state.show} handleSignUp={this.handleSignUp} onClose={this.handleClose}/>
          <SignupModal open={this.state.signupModalShow} onClose={this.handleClose}/>

          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default UnauthenticatedApp;
