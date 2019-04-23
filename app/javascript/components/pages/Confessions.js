import React from "react"
import PropTypes from "prop-types"
import { Card , Button } from "react-bootstrap"

class Confessions extends React.Component {
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

    render() {
    const { confessions } = this.state;
    const { id } = this.props.current_user;
    return (
      <React.Fragment>
        {confessions.map((confession, index) => {
          if (confession.user_id === id) {
            return (
              <Card style={{ width: "18rem" }} key={index}>
                <Upvote />
                <Card.Img variant="top" src={confession.gif_url} />
                <Card.Body>
                  <Card.Text>{confession.name}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            );
          } else {
            console.log("Nothing to Display");
          }
        })}
      </React.Fragment>
    );
  }

  render() {
    const { confessions } = this.state;
    return (
      <React.Fragment>
        {confessions.map((confession, index) => (
          <Card style={{ width: "18rem" }} key={index}>
            <Upvote id="updown" />
            <Card.Img id="card" variant="top" src={confession.gif_url} />
            <Card.Body>
              <Card.Text>{confession.name}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </React.Fragment>
    );
  }

}

export default Confessions
