import React from 'react'

import PropTypes from 'prop-types'

import './quaternary-link.css'

const QuaternaryLink = (props) => {
  return (
    <div className="quaternary-link-container">
      <h1 className="quaternary-link-text BodyLargeBold">{props.linktext}</h1>
      <img
        alt="ChevronDownI542"
        src={props.icon}
        className="quaternary-link-chevron-down"
      />
    </div>
  )
}

QuaternaryLink.defaultProps = {
  icon: '/external/chevrondowni542-vuzo.svg',
  linktext: 'This is a quaternary link',
}

QuaternaryLink.propTypes = {
  icon: PropTypes.string,
  linktext: PropTypes.string,
}

export default QuaternaryLink
