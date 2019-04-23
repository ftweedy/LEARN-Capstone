import React from "react"
import PropTypes from "prop-types"
import Confessions from "./Confessions"
import { Card, Button } from "react-bootstrap";
import Upvote from "../Upvote";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confessions: []
    };
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

  render () {
    const { confessions } = this.state;
    return (
      <React.Fragment>
      <div id="all" class="d-flex flex-wrap">
        <h1>Anything you want to Confess?</h1>
        {confessions.map((confession, index) => {
            return (
              <Card style={{ width: "18rem" }} key={index}>
                <Upvote />
                <Card.Img variant="top" src={confession.gif_url} />
                <Card.Body>
                  <Card.Text>{confession.name}</Card.Text>
                </Card.Body>
              </Card>
            )})
        }
        </div>
      </React.Fragment>
    )
  }
}

export default Home
