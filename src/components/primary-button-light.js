import React from 'react'

import PropTypes from 'prop-types'

import './primary-button-light.css'

const PrimaryButtonLight = (props) => {
  return (
    <div className={`primary-button-light-container ${props.rootClassName} `}>
      <button className="primary-button-light-button button">
        <span className="primary-button-light-text BodyLargeBold">
          {props.buttontext}
        </span>
        <img
          alt="ChevronRightI121"
          src="/external/chevronrighti121-blkr.svg"
          className="primary-button-light-chevron-right"
        />
      </button>
    </div>
  )
}

PrimaryButtonLight.defaultProps = {
  rootClassName: '',
  buttontext: 'Book a demo',
}

PrimaryButtonLight.propTypes = {
  rootClassName: PropTypes.string,
  buttontext: PropTypes.string,
}

export default PrimaryButtonLight
