import React from "react";
import PropTypes from "prop-types";
import Upvote from "../Upvote";
import { Button } from "semantic-ui-react"

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
      <div class="ui container">
        <div class="ui four column doubling stackable masonry grid">
        {confessions.map((confession, index) => {
          if (confession.user_id === id) {
            return (
              <div class="column">
                <div class="ui fluid card">
                  <div class="image">
                    <img src={confession.gif_url}/>
                  </div>
                  <div class="content">
                    <a class="header">{confession.name}</a>
                  </div>
                  <Button onClick={()=>this.handleDeleteConfession(confession)}>Delete</Button>
                </div>
              </div>
            )
          } else {
            console.log("This Post Belongs To Another User!");
          }
        })}
        </div>
      </div>
      </React.Fragment>
    );
  }

}

export default Confessions
