import React from 'react'

import PropTypes from 'prop-types'

import SecondaryButtonLight from './secondary-button-light'
import './header-dark.css'

const HeaderDark = (props) => {
  return (
    <div className={`header-dark-container ${props.rootClassName} `}>
      <div className="header-dark-default-header">
        <img
          alt="LogosPortswigger7418"
          src="/ps-logo-dark.svg"
          className="header-dark-logos-portswigger"
        />
        <div className="header-dark-navigation">
          <div id="Solutions" className="header-dark-container1">
            <span id="Products" className="header-dark-text BodyLarge">
              {props.link1}
            </span>
            <img
              alt="ChevronDown7418"
              src="/chevron%20down.svg"
              className="header-dark-chevron-down"
            />
          </div>
          <div id="Solutions" className="header-dark-container2">
            <span id="Solutions" className="header-dark-text1 BodyLarge">
              {props.link2}
            </span>
            <img
              alt="ChevronDown7418"
              src="/chevron%20down.svg"
              className="header-dark-chevron-down1"
            />
          </div>
          <span id="Research" className="header-dark-text2 BodyLarge">
            {props.link3}
          </span>
          <span id="Academy" className="header-dark-text3 BodyLarge">
            {props.link4}
          </span>
          <div id="Solutions" className="header-dark-container3">
            <span id="Support" className="header-dark-text4 BodyLarge">
              {props.link5}
            </span>
            <img
              alt="ChevronDown7418"
              src="/chevron%20down.svg"
              className="header-dark-chevron-down2"
            />
          </div>
          <div id="Solutions" className="header-dark-container4">
            <span id="Resources" className="header-dark-text5 BodyLarge">
              {props.link6}
            </span>
            <img
              alt="ChevronDown7418"
              src="/chevron%20down.svg"
              className="header-dark-chevron-down3"
            />
          </div>
          <SecondaryButtonLight
            buttontext1="Login"
            rootClassName="secondary-button-light-root-class-name1"
            className=""
          ></SecondaryButtonLight>
        </div>
      </div>
    </div>
  )
}

HeaderDark.defaultProps = {
  cTA: 'Login',
  link4: 'Academy',
  link6: 'Resources',
  link3: 'Research',
  imagesrc: '6051c3b5-69b0-4461-81d7-9dc363de7c81',
  imageAlt: 'Portswigger',
  link1: 'Products',
  link5: 'Support',
  rootClassName: '',
  link2: 'Solutions',
}

HeaderDark.propTypes = {
  cTA: PropTypes.string,
  link4: PropTypes.string,
  link6: PropTypes.string,
  link3: PropTypes.string,
  imagesrc: PropTypes.string,
  imageAlt: PropTypes.string,
  link1: PropTypes.string,
  link5: PropTypes.string,
  rootClassName: PropTypes.string,
  link2: PropTypes.string,
}

export default HeaderDark
