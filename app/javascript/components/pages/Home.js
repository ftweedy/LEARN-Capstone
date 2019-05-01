import React from "react"
import PropTypes from "prop-types"
import { Card, Image, Grid, Button, Menu } from 'semantic-ui-react'
import Upvote from "../Upvote";
import DropdownSort from "../DropdownSort"

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

  sortingOldest = () => {
    const { confessions } = this.state
    confessions.sort(function(a,b){
      let dateA = new Date(a.created_at), dateB = new Date(b.created_at)
      return dateA - dateB
    })
    this.setState({confessions: confessions})
  }

  sortingNewest = () => {
    const { confessions } = this.state
    confessions.sort(function(a,b){
      let dateA = new Date(a.created_at), dateB = new Date(b.created_at)
      return dateB - dateA
    })
    this.setState({confessions: confessions})
  }

  render () {
    const { confessions, activeItem } = this.state
    return(
    <React.Fragment>
    <div className="ui container">
      <div className="ui four column doubling stackable masonry grid">
        <DropdownSort sortingNewest={this.sortingNewest} sortingOldest={this.sortingOldest}/>
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
