import React from "react";
import PropTypes from "prop-types";
import { Menu, Icon } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Confessions from "./pages/Confessions";
import Confess from "./pages/Confess";
import Home from "./pages/Home";
import Upvote from "./Upvote";

class AuthenticatedApp extends React.Component {
  constructor(props){
      super(props)
      this.state = {}
  }

  handleLogout = () => {
    const link = document.createElement('a');
    link.setAttribute('href', '/users/sign_out');
    link.setAttribute('rel', 'nofollow');
    link.setAttribute('data-method', 'delete');
    document.body.appendChild(link);
    link.click();
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
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
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleLogout}
            />
          </Menu>

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
    );
  }
}

export default AuthenticatedApp;
