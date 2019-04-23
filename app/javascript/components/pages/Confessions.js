import React from "react";
import PropTypes from "prop-types";
import { Card, Container, Button } from "react-bootstrap";
import Upvote from "../Upvote";

class Confessions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confessions: []
    };
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
      <div id="all" className="d-flex flex-wrap">
        {confessions.map((confession, index) => {
          if (confession.user_id === id) {
            return (
              <Card style={{ width: "18rem" }} key={index}>
                <Card.Img variant="top" src={confession.gif_url} />
                <Card.Body>
                <Upvote />
                  <Card.Text>{confession.name}</Card.Text>
                  <Button onClick={()=>this.handleDeleteConfession(confession)}>Delete</Button>
                </Card.Body>
              </Card>
            );
          } else {
            console.log("Nothing to Display");
          }
        })}
      </div>
      </React.Fragment>
    );
  }
}

export default Confessions;
