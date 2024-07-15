import React from 'react'

import PropTypes from 'prop-types'

import './existing-ds-header-and-intro.css'

const ExistingDSHeaderAndIntro = (props) => {
  return (
    <div
      className={`existing-ds-header-and-intro-container ${props.rootClassName} `}
    >
      <div className="existing-ds-header-and-intro-container1">
        <h1 className="existing-ds-header-and-intro-text">{props.heading}</h1>
        <span className="existing-ds-header-and-intro-text1">
          {props.intro}
        </span>
      </div>
    </div>
  )
}

ExistingDSHeaderAndIntro.defaultProps = {
  rootClassName: '',
  intro:
    "Whetther you're a small pentesting team or a mature AppSec division responsible for safeguarding thousands of web applications, we have a tailored solution for you.",
  heading: 'Burp Suite Enterprise Edition plans',
}

ExistingDSHeaderAndIntro.propTypes = {
  rootClassName: PropTypes.string,
  intro: PropTypes.string,
  heading: PropTypes.string,
}

export default ExistingDSHeaderAndIntro
