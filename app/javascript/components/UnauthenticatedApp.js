import React from "react";
import PropTypes from "prop-types";
import { Menu, Icon, Segment, Modal, Header, Button, Form } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Confessions from "./pages/Confessions";
import Confess from "./pages/Confess";
import Home from "./pages/Home";
import About from "./pages/About";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import Confessor from "./images/confessor.png";

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


  handleUserLogin = (user) => {
    return fetch("/users/sign_in", {
      body: JSON.stringify(user),
      headers: {'Content-Type': 'application/json'},
      method: "POST"
    }).then((resp)=>{
      if (resp.redirected === true){
        window.location.replace("/protected");
      } else {
        alert("Sign in information incorrect")
      }
    })
  }

  handleSignUp = () => {
    this.setState({ show: false, signupModalShow: true})
  }

  handleSignUpCreate = (user) => {
    return fetch("/users", {
      body: JSON.stringify(user),
      headers: {'Content-Type': 'application/json'},
      method: "POST"
    }).then((resp)=>{
      if (resp.redirected === true){
        window.location.replace("/protected");
      } else {
        alert("Signup information incorrect")
      }
    })
  }

  render() {
    const { activeItem } = this.state
    return(
      <React.Fragment>
        <Router>
          <Menu widths={5} fixed='top'>
            <Menu.Item
              name='Home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              as={Link} to="/"
            >
              <img id="logo" src={Confessor}/>
            </Menu.Item>
            <Menu.Item
              className="menuItem"
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
              as={Link} to="/about"
            />
            <Menu.Item
              className="menuItem"
              name='confess'
              active={activeItem === 'confess'}
              onClick={this.handleShow}
            />
            <Menu.Item
              className="menuItem"
              name='my confessions'
              active={activeItem === 'my confessions'}
              onClick={this.handleShow}
            />
            <Menu.Item
              className="menuItem"
              name='login'
              active={activeItem === 'login'}
              onClick={this.handleShow}
            />
          </Menu>

          <LoginModal
            open={this.state.show}
            onClose={this.handleClose}
            handleUserLogin={this.handleUserLogin}
            handleSignUp={this.handleSignUp}
          />

          <SignupModal
            open={this.state.signupModalShow}
            onClose={this.handleClose}
            signUp={this.handleSignUpCreate}
          />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default UnauthenticatedApp;
