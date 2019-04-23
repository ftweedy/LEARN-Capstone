import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './pages/Home'
import { Navbar, Nav, Button, Card } from 'react-bootstrap'

class UnauthenticatedApp extends React.Component {
  constructor(props){
      super(props)
      this.state = {
          confessions: []
      }
  }

  componentDidMount(){
      fetch('/confessions.json')
      .then((response) => {
          return response.json()
      })
      .then((json) => {
          this.setState({confessions: json})
      })
      .catch((e) => {
          console.log("Error", e)
      })
  }

  render () {
    const { confessions } = this.state
    return(
    <React.Fragment>
    <div id="all" class="d-flex flex-wrap">
      {confessions.map((confession, index) => {
        return (
          <Card style={{ width: '18rem' }} key={index}>
            <Card.Img variant="top" src={confession.gif_url} />
            <Card.Body>
              <Card.Text>
                {confession.name}
              </Card.Text>
            </Card.Body>
          </Card>
        )
      })}
      </div>
      </React.Fragment>
    )
  }
}

export default UnauthenticatedApp;
