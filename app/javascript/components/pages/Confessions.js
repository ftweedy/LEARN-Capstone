import React from "react";
import PropTypes from "prop-types";
import { Card, Icon, Image, Grid, Button } from 'semantic-ui-react'
import Upvote from "../Upvote";

class Confessions extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            confessions: []
        }
    }

  handleDeleteConfession = (confession) => {
    const BASE = "http://localhost:3000";
    return fetch(BASE + `/confessions/${confession.id}`, {
      method: "DELETE"
    })
      .then((resp) => {
        let json = resp.json()

        return json
      })
      .then(json => {
        this.setState({confessions:json})
      })
  }

  componentDidMount() {
    fetch("/confessions.json")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({ confessions: json });
      })
      .catch(e => {
        console.log("Error", e);
      });
  }

    render() {
    const { confessions } = this.state;
    const { id } = this.props.current_user;
    return (
      <React.Fragment>
      <div className="grid">
      <Grid relaxed columns={5}>
        {confessions.map((confession, index) => {
          if (confession.user_id === id) {
            return (
              <Grid.Column key={confession.id}>
                <Card>
                  <Card.Content>
                  <Image src={confession.gif_url} />
                    <Card.Header>{confession.name}</Card.Header>
                    <Button onClick={()=>this.handleDeleteConfession(confession)}>Delete</Button>
                  </Card.Content>
                </Card>
              </Grid.Column>
            )
          } else {
            console.log("Nothing to Display");
          }
        })}
      </Grid>
      </div>
      </React.Fragment>
    );
  }

}

export default Confessions
