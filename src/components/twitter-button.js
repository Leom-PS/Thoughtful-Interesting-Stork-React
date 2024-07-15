import React from 'react'

import PropTypes from 'prop-types'

import './twitter-button.css'

const TwitterButton = (props) => {
  return (
    <div className={`twitter-button-container ${props.rootClassName} `}>
      <div
        href="https://twitter.com/Burp_Suite"
        className="twitter-button-frame5622"
      >
        <div className="twitter-button-frame5626">
          <img
            alt="TwitterandXlogossvg14713"
            src="/external/twitterandxlogossvg14713-0pok-200h.png"
            className="twitter-button-twitterand-xlogossvg1"
          />
          <span className="twitter-button-text">{props.text}</span>
        </div>
      </div>
    </div>
  )
}

TwitterButton.defaultProps = {
  rootClassName: '',
  text: 'Follow us',
}

TwitterButton.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default TwitterButton
