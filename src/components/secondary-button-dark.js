import React from 'react'

import PropTypes from 'prop-types'

import './secondary-button-dark.css'

const SecondaryButtonDark = (props) => {
  return (
    <div className={`secondary-button-dark-container ${props.rootClassName} `}>
      <button className="secondary-button-dark-button button">
        <span className="secondary-button-dark-text BodyLarge">
          {props.cTAtext}
        </span>
      </button>
    </div>
  )
}

SecondaryButtonDark.defaultProps = {
  cTAtext: 'Button text',
  rootClassName: '',
}

SecondaryButtonDark.propTypes = {
  cTAtext: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SecondaryButtonDark
