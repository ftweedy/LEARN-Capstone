import React from "react";
import PropTypes from "prop-types";
import GifList from "../GifList";
import SearchBar from "../SearchBar";
import { Button, Checkbox, Form, Input } from 'semantic-ui-react'
import request from "superagent";

class Confess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        gif_url: ""
      },
      gifs: []
    };
  }

  handleNewConfession = confessionForm => {
    const BASE = "http://localhost:3000";
    return fetch(BASE + "/confessions", {
      body: JSON.stringify(confessionForm),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    }).then(resp => {
      let json = resp.json();
      return json;
    });
  };

  handleFormChange = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form: form });
  };

  handleGifSelect = event => {
    const { form } = this.state;
    form.gif_url = event.media[0].gif.url;
    this.setState({ form: form });
    alert("Image selected");
  };

  handleTermChange = term => {
    const url = `https://api.tenor.com/v1/search?tag=${term.replace(/\s/g,"+")}&key=5N8TMAMBVVDJ&limit=13`;

    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.results });
    });
  };

  render() {
    const { name, gif_url } = this.state.form;
    return (
      <React.Fragment>
      <div className='grid'>
        <Form action={'/home'}>
          <Form.Field
            control={Input}
            name="name"
            placeholder="Enter Your Confession"
            onChange={this.handleFormChange}
            value={name}
          />
          <Button type="submit" animated="fade" onClick={()=>this.handleNewConfession(this.state.form)}>
            <Button.Content visible>Submit Your Confession</Button.Content>
            <Button.Content hidden>There's No Turning Back!</Button.Content>
          </Button>
        </Form>
      <SearchBar onTermChange={term => this.handleTermChange(term)} />
      <GifList gifs={this.state.gifs} gifSelect={this.handleGifSelect} />
      </div>
      </React.Fragment>
    );
  }
}

export default Confess;
