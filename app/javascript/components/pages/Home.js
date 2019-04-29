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
      <div id="all" className="d-flex flex-wrap">
        {confessions.map((confession, index) => {
            return (
              <Card style={{ width: "18rem" }} key={index}>
                <Card.Img variant="top" src={confession.gif_url} />
                <Card.Body>
                <table><tbody><tr>
                <td>
                  <Card.Text>{confession.name}</Card.Text>
                </td>
                <td>
                  <Upvote />
                </td>
                </tr></tbody></table>
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
