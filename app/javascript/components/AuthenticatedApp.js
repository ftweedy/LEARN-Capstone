import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Confessions from './pages/Confessions'
import Confess from './pages/Confess'
import Home from './pages/Home'


class AuthenticatedApp extends React.Component {
  render () {
    return (
      <Router>
        <React.Fragment>
        <Link to='/home'>Home</Link>
        <Link to='/confess'>Confess</Link>
        <Link to='/confessions'>My Confessions</Link>
          <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/confess' component={Confess}/>
            <Route path='/confessions' component={Confessions}/>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default AuthenticatedApp
