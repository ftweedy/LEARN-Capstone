import React from "react"
import PropTypes from "prop-types"
import { Button } from "semantic-ui-react"

const GifItem = ({gif, gifSelect, border}) => {
  return (
    <Button className="gif-item" onClick={() => gifSelect(gif)}>
      <img src={gif.media[0].tinygif.url} />
    </Button>
  )
};

export default GifItem
