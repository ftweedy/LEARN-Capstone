import React from "react"
import PropTypes from "prop-types"
import { Card, Image, Grid, Button, Menu } from 'semantic-ui-react'
import Upvote from "../Upvote";

class Home extends React.Component {
  constructor(props){
      super(props)
      this.state = {
          confessions: [],
      }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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
    const { confessions, activeItem } = this.state
    return(
    <React.Fragment>
    <div className="ui container">
      <div className="ui four column doubling stackable masonry grid">
      {confessions.map((confession, index) => {
          return (
            <div className="column" key={confession.id}>
              <div className="ui fluid card">
                <div className="image">
                  <img src={confession.gif_url}/>
                </div>
                <div className="content">
                  <p className="header">{confession.name}</p>
                </div>
              </div>
            </div>
          )
      })}
      </div>
    </div>
    </React.Fragment>
    )
  }
}
export default Home
