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
    return fetch(`/confessions/${confession.id}`, {
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
      <div className="ui container">
        <div className="ui four column doubling stackable masonry grid">
        {confessions.map((confession, index) => {
          if (confession.user_id === id) {
            return (
              <div className="column" key={confession.id}>
                <div className="ui fluid card">
                  <div className="image">
                    <img src={confession.gif_url}/>
                  </div>
                  <div className="content">
                    <p className="header">{confession.name}</p>
                  </div>
                  <Button onClick={()=>this.handleDeleteConfession(confession)}>Delete</Button>
                </div>
              </div>
            )
          } else {
            console.log("This Post Belongs To Another User!");
          }
        })}
          <div className="form">
            <h1>You Need To Confess!</h1>
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }

}

export default Confessions
