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

          <Modal open={this.state.show} onClose={this.handleClose} basic size='small'>
            <Header content='Ready To Confess?' />
            <Modal.Content>
              <Form inverted>
                <Form.Field required={true}>
                  <label>E-Mail Address</label>
                  <input placeholder='Enter Your E-Mail Address' />
                </Form.Field>
                <Form.Field required={true}>
                  <label>Password</label>
                  <input type='password' placeholder='Enter Your Password' />
                </Form.Field>
              </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button basic color='blue' inverted>
                Log-In
              </Button>
              <Button basic color='green' inverted>
                Sign-Up
              </Button>
            </Modal.Actions>
          </Modal>

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
