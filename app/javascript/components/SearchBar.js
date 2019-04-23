import React from "react"
import PropTypes from "prop-types"
import { Form } from "react-bootstrap"

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }

  onInputChange = (term) => {
    const { onTermChange } = this.props
    this.setState({term})
    onTermChange(term)
  }

  render () {
    return (
      <React.Fragment>
        <Form>
            <Form.Control
              className="form"
              type="text"
              placeholder="Enter a keyword to find a GIF!"
              onChange={event => this.onInputChange(event.target.value)}
            />
        </Form>
      </React.Fragment>
    );
  }
}

export default SearchBar
