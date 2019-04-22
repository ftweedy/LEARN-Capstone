import React from "react";
import PropTypes from "prop-types";
import Tenor from "react-tenor";
import Upvote from "../Upvote";

class Confess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: ""
      }
    };
  }

  render() {
    return (
      <div>
        <form>
          <label>Confession Box</label>
          <input type="text" name="name" />
          <input type="submit" value="Submit" />
        </form>
        <Tenor
          token="98ZLNV4AZJG0"
          onSelect={result => console.log(result.url)}
        />

        <Upvote />
      </div>
    );
  }
}

export default Confess;
