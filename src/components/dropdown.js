import React from 'react'

import PropTypes from 'prop-types'

import './dropdown.css'

const Dropdown = (props) => {
  return (
    <div className={`dropdown-container ${props.rootClassName} `}>
      <div className="dropdown-dropdown">
        <span className="dropdown-text BodyLargeBold">{props.label}</span>
        <div className="dropdown-input">
          <span id={props.placeholder} className="dropdown-text1 BodyLarge">
            Placeholder
          </span>
          <img
            alt="ChevronDownI121"
            src="/external/chevrondowni121-klbq.svg"
            className="dropdown-chevron-down"
          />
        </div>
      </div>
    </div>
  )
}

Dropdown.defaultProps = {
  placeholder: 'Placeholder',
  rootClassName: '',
  label: 'Industry',
}

Dropdown.propTypes = {
  placeholder: PropTypes.string,
  rootClassName: PropTypes.string,
  label: PropTypes.string,
}

export default Dropdown
