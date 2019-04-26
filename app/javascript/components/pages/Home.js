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
    <div className='grid'>
    <Grid relaxed columns={5}>
      {confessions.map((confession, index) => {
        return (
          <Grid.Column key={confession.id}>
            <Card>
              <Card.Content>
              <Image src={confession.gif_url} />
                <Card.Header>{confession.name}</Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
        )
      })}
    </Grid>
    </div>
    </React.Fragment>
    )
  }
}
export default Home
