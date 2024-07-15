import React from 'react'

import PropTypes from 'prop-types'

import './icon-callout.css'

const IconCallout = (props) => {
  return (
    <div className={`icon-callout-container ${props.rootClassName} `}>
      <div className="icon-callout-magnifyingglass">
        <div className="icon-callout-frame4836">
          <div className="icon-callout-group4832">
            <img
              alt="VectorI542"
              src="/external/vectori542-i5z5.svg"
              className="icon-callout-vector"
            />
          </div>
        </div>
        <div className="icon-callout-magnifyingglass1">
          <div className="icon-callout-group4842">
            <img
              alt="magnifyingglass2I542"
              src={props.icon}
              className="icon-callout-magnifyingglass2"
            />
          </div>
        </div>
      </div>
      <h1 className="icon-callout-text Desktop-Heading5">{props.heading}</h1>
      <div className="icon-callout-container1">
        <h1 className="icon-callout-text1 BodyLargeBold">{props.linktext}</h1>
        <img
          alt="ChevronDownI542"
          src={props.icon1}
          className="icon-callout-chevron-down"
        />
      </div>
    </div>
  )
}

IconCallout.defaultProps = {
  icon: '/external/magnifyingglass2i542-u2eu.svg',
  linktext: 'This is a quaternary link',
  icon1: '/external/chevrondowni542-vuzo.svg',
  rootClassName: '',
  heading: 'Heading goes here',
}

IconCallout.propTypes = {
  icon: PropTypes.string,
  linktext: PropTypes.string,
  icon1: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
}

export default IconCallout
