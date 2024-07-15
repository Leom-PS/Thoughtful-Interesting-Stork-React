import React from 'react'

import PropTypes from 'prop-types'

import './existing-ds-primary-button-light.css'

const ExistingDSPrimaryButtonLight = (props) => {
  return (
    <div
      className={`existing-ds-primary-button-light-container ${props.rootClassName} `}
    >
      <button className="existing-ds-primary-button-light-buttons button">
        <span className="existing-ds-primary-button-light-text">
          {props.buttontext}
        </span>
      </button>
    </div>
  )
}

ExistingDSPrimaryButtonLight.defaultProps = {
  rootClassName: '',
  buttontext: 'SOMETHING',
}

ExistingDSPrimaryButtonLight.propTypes = {
  rootClassName: PropTypes.string,
  buttontext: PropTypes.string,
}

export default ExistingDSPrimaryButtonLight
