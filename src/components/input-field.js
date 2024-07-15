import React from 'react'

import PropTypes from 'prop-types'

import './input-field.css'

const InputField = (props) => {
  return (
    <div className={`input-field-container ${props.rootClassName} `}>
      <div className="input-field-field">
        <span className="BodyLargeBold">{props.placeholder}</span>
        <input
          type="text"
          placeholder={props.placeholder1}
          className="input-field-input"
        />
      </div>
    </div>
  )
}

InputField.defaultProps = {
  placeholder1: 'Placeholder',
  rootClassName: '',
  placeholder: 'Name',
}

InputField.propTypes = {
  placeholder1: PropTypes.string,
  rootClassName: PropTypes.string,
  placeholder: PropTypes.string,
}

export default InputField
