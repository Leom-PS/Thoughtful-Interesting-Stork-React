import React from 'react'

import PropTypes from 'prop-types'

import './secondary-button-light.css'

const SecondaryButtonLight = (props) => {
  return (
    <div className={`secondary-button-light-container ${props.rootClassName} `}>
      <button className="secondary-button-light-button button">
        <span className="secondary-button-light-text BodyLargeBold">
          {props.buttontext1}
        </span>
        <img
          alt={props.chevronRightAlt}
          src={props.iconsrc}
          className="secondary-button-light-chevron-right"
        />
      </button>
    </div>
  )
}

SecondaryButtonLight.defaultProps = {
  buttontext1: 'Buy - $399',
  chevronRightAlt: 'Icon Alt text',
  iconsrc: '/external/chevronrighti315-gel.svg',
  rootClassName: '',
}

SecondaryButtonLight.propTypes = {
  buttontext1: PropTypes.string,
  chevronRightAlt: PropTypes.string,
  iconsrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SecondaryButtonLight
