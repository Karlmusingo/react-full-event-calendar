/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import DisplayText from './DisplayText'

const Event = ({ ttitle, title, style }) => (
  <div className='event' style={style}>
    <DisplayText text={ttitle} name={title} />
  </div>
)

Event.propTypes = {
  ttitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  style: PropTypes.object
}

Event.defaultProps = {
  style: {}
}

export default Event
