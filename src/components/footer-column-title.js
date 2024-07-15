import React from 'react'

import PropTypes from 'prop-types'

import './footer-column-title.css'

const FooterColumnTitle = (props) => {
  return (
    <div className={`footer-column-title-container ${props.rootClassName} `}>
      <p className="footer-column-title-text">{props.text}</p>
    </div>
  )
}

FooterColumnTitle.defaultProps = {
  rootClassName: '',
  text: 'Header1',
}

FooterColumnTitle.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default FooterColumnTitle
