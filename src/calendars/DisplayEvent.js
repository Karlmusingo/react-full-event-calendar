import React from 'react'
import PropTypes from 'prop-types'

const DisplayEvent = ({ text, ttitle, title, name, style = {} }) => (
  <span style={style}>
    <ul>
      <a>
        {ttitle}
        {text}
        &nbsp;&nbsp;
        {name}
        {title}
      </a>
    </ul>
  </span>
)

DisplayEvent.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  ttitle: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object
}

DisplayEvent.defaultProps = {
  style: {},
  ttitle: '',
  title: ''
}

export default DisplayEvent
