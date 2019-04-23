import React from "react"
import PropTypes from "prop-types"

const GifItem = ({gif, gifSelect}) => {
  return (
    <div className="gif-item" onClick={() => gifSelect(gif)}>
      <img src={gif.media[0].tinygif.url} />
    </div>
  )
};

export default GifItem
