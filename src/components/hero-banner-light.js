import React from 'react'

import PropTypes from 'prop-types'

import PrimaryButtonLight from './primary-button-light'
import './hero-banner-light.css'

const HeroBannerLight = (props) => {
  return (
    <div className="hero-banner-light-container">
      <div className="hero-banner-light-container1">
        <div className="hero-banner-light-container2">
          <h1 className="hero-banner-light-text Desktop-Display1">
            {props.heading1}
          </h1>
          <span className="hero-banner-light-text1 Desktop-Heading4Light">
            {props.copy}
          </span>
          <PrimaryButtonLight
            buttontext={props.buttontext}
            rootClassName="primary-button-light-root-class-name8"
          ></PrimaryButtonLight>
        </div>
        <img
          alt="Tasksubmenu25003"
          src={props.image}
          className="hero-banner-light-tasksubmenu2"
        />
      </div>
    </div>
  )
}

HeroBannerLight.defaultProps = {
  copy: 'Teasadsdad fsdfsfxt',
  rootClassName: '',
  heading1: 'Sample heading goes here',
  buttontext: 'Button link',
  image: '/external/tasksubmenu25003-fqk8-500w-500w.png',
}

HeroBannerLight.propTypes = {
  copy: PropTypes.string,
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
  buttontext: PropTypes.string,
  image: PropTypes.string,
}

export default HeroBannerLight
