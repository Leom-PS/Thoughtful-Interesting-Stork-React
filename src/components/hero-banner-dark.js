import React from 'react'

import PropTypes from 'prop-types'

import SecondaryButtonLight from './secondary-button-light'
import './hero-banner-dark.css'

const HeroBannerDark = (props) => {
  return (
    <div className={`hero-banner-dark-container ${props.rootClassName} `}>
      <div className="hero-banner-dark-container1">
        <div className="hero-banner-dark-container2">
          <h1 className="hero-banner-dark-text Desktop-Display1">
            {props.heading1}
          </h1>
          <span className="hero-banner-dark-text1 Desktop-Heading4Light">
            {props.copy}
          </span>
          <SecondaryButtonLight
            rootClassName="secondary-button-light-root-class-name"
            className=""
          ></SecondaryButtonLight>
        </div>
        <img
          alt="Tasksubmenu25003"
          src={props.image}
          className="hero-banner-dark-tasksubmenu2"
        />
      </div>
    </div>
  )
}

HeroBannerDark.defaultProps = {
  rootClassName: '',
  image: '/external/tasksubmenu25003-fqk8-500w-500w.png',
  heading1: 'Sample heading goes here',
  buttontext: 'Button link',
  copy: 'Teasadsdad fsdfsfxt',
}

HeroBannerDark.propTypes = {
  rootClassName: PropTypes.string,
  image: PropTypes.string,
  heading1: PropTypes.string,
  buttontext: PropTypes.string,
  copy: PropTypes.string,
}

export default HeroBannerDark
