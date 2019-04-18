import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Confessions from './pages/Confessions'
import Confess from './pages/Confess'

class AuthenticatedApp extends React.Component {
  render () {
    return (
      <Router>
        <React.Fragment>
        <Link to='/confess'>Confess</Link>
        <Link to='/confessions'> My Confessions</Link>
          <Switch>
            <Route path='/confess' component={Confess}/>
            <Route path='/confessions' component={Confessions}/>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default AuthenticatedApp
