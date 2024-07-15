import React from 'react'

import PropTypes from 'prop-types'

import './header1.css'

const Header1 = (props) => {
  return (
    <div className={`header1-container ${props.rootClassName} `}>
      <div className="header1-default-header">
        <img
          alt="LogosPortswigger7418"
          src="/external/logosportswigger7418-if36.svg"
          className="header1-logos-portswigger"
        />
        <div className="header1-navigation">
          <div id="Solutions" className="header1-container1">
            <span id="Products" className="header1-text BodyLarge">
              {props.link1}
            </span>
            <img
              alt="ChevronDown7418"
              src="/external/chevrondown7418-0l3m.svg"
              className="header1-chevron-down"
            />
          </div>
          <div id="Solutions" className="header1-container2">
            <span id="Solutions" className="header1-text1 BodyLarge">
              {props.link2}
            </span>
            <img
              alt="ChevronDown7418"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a39970b4-b90a-4fc2-9092-0f4a556662a2/f3903082-a44e-4b9b-b9dd-d3974ac36cfe?org_if_sml=1546&amp;force_format=original"
              className="header1-chevron-down1"
            />
          </div>
          <span id="Research" className="header1-text2 BodyLarge">
            {props.link3}
          </span>
          <span id="Academy" className="header1-text3 BodyLarge">
            {props.link4}
          </span>
          <div id="Solutions" className="header1-container3">
            <span id="Support" className="header1-text4 BodyLarge">
              {props.link5}
            </span>
            <img
              alt="ChevronDown7418"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a39970b4-b90a-4fc2-9092-0f4a556662a2/f3903082-a44e-4b9b-b9dd-d3974ac36cfe?org_if_sml=1546&amp;force_format=original"
              className="header1-chevron-down2"
            />
          </div>
          <div id="Solutions" className="header1-container4">
            <span id="Resources" className="header1-text5 BodyLarge">
              {props.link6}
            </span>
            <img
              alt="ChevronDown7418"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a39970b4-b90a-4fc2-9092-0f4a556662a2/f3903082-a44e-4b9b-b9dd-d3974ac36cfe?org_if_sml=1546&amp;force_format=original"
              className="header1-chevron-down3"
            />
          </div>
          <button className="header1-button">
            <span className="header1-text6 BodyLargeBold">{props.cTA}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Header1.defaultProps = {
  imageAlt: 'Portswigger',
  link6: 'Resources',
  link4: 'Academy',
  link5: 'Support',
  cTA: 'Login',
  imagesrc: '6051c3b5-69b0-4461-81d7-9dc363de7c81',
  link1: 'Products',
  link3: 'Research',
  link2: 'Solutions',
  rootClassName: '',
}

Header1.propTypes = {
  imageAlt: PropTypes.string,
  link6: PropTypes.string,
  link4: PropTypes.string,
  link5: PropTypes.string,
  cTA: PropTypes.string,
  imagesrc: PropTypes.string,
  link1: PropTypes.string,
  link3: PropTypes.string,
  link2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Header1
