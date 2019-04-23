import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Confessions from './pages/Confessions'
import Confess from './pages/Confess'
import Home from './pages/Home'
import {
  Col, Container, Row, FormControl, Form, Navbar, Nav, NavDropdown, Button
} from 'react-bootstrap'

class AuthenticatedApp extends React.Component {
  render () {
    return (
      <React.Fragment>
      <Router>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to='/home' className="nav-link"><font color="black">Home</font></Link>
            </li>
              <li className="nav-item">
                <Link to='/confessions' className="nav-link"><font color="black">My Confessions</font></Link>
              </li>
              <li className="nav-item">
                <Link to='/confess' className="nav-link"><font color="black">Confess</font></Link>
              </li>
            </ul>
          </div>
        </nav>

          <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/confess' component={Confess}/>
            <Route path='/confessions' render={(props) => <Confessions current_user={this.props.current_user} isAuthed={true}/>}/>
            <Route exact path='/' component={Home}/>
          </Switch>

      </Router>
      </React.Fragment>
    );
  }
}

export default AuthenticatedApp
