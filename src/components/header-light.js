import React from 'react'

import PropTypes from 'prop-types'

import './header-light.css'

const HeaderLight = (props) => {
  return (
    <div className={`header-light-container ${props.rootClassName} `}>
      <div className="header-light-default-header">
        <img
          alt="LogosPortswigger7418"
          src="/external/LogosPortswigger7418-if361.svg"
          className="header-light-logos-portswigger"
        />
        <div className="header-light-navigation">
          <div id="Solutions" className="header-light-container1">
            <span id="Products" className="header-light-text BodyLarge">
              {props.link1}
            </span>
            <img
              alt="ChevronDown7418"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a39970b4-b90a-4fc2-9092-0f4a556662a2/a4eed5fa-7658-4310-bc5d-2cd8fda82d42?org_if_sml=1546&amp;force_format=original"
              className="header-light-chevron-down"
            />
          </div>
          <div id="Solutions" className="header-light-container2">
            <span id="Solutions" className="header-light-text1 BodyLarge">
              {props.link2}
            </span>
            <img
              alt="ChevronDown7418"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a39970b4-b90a-4fc2-9092-0f4a556662a2/f3903082-a44e-4b9b-b9dd-d3974ac36cfe?org_if_sml=1546&amp;force_format=original"
              className="header-light-chevron-down1"
            />
          </div>
          <span id="Research" className="header-light-text2 BodyLarge">
            {props.link3}
          </span>
          <span id="Academy" className="header-light-text3 BodyLarge">
            {props.link4}
          </span>
          <div id="Solutions" className="header-light-container3">
            <span id="Support" className="header-light-text4 BodyLarge">
              {props.link5}
            </span>
            <img
              alt="ChevronDown7418"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a39970b4-b90a-4fc2-9092-0f4a556662a2/f3903082-a44e-4b9b-b9dd-d3974ac36cfe?org_if_sml=1546&amp;force_format=original"
              className="header-light-chevron-down2"
            />
          </div>
          <div id="Solutions" className="header-light-container4">
            <span id="Resources" className="header-light-text5 BodyLarge">
              {props.link6}
            </span>
            <img
              alt="ChevronDown7418"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a39970b4-b90a-4fc2-9092-0f4a556662a2/f3903082-a44e-4b9b-b9dd-d3974ac36cfe?org_if_sml=1546&amp;force_format=original"
              className="header-light-chevron-down3"
            />
          </div>
          <button className="header-light-button">
            <span className="header-light-text6 BodyLargeBold">
              {props.cTA}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

HeaderLight.defaultProps = {
  cTA: 'Login',
  link6: 'Resources',
  link1: 'Products',
  link4: 'Academy',
  link2: 'Solutions',
  link3: 'Research',
  rootClassName: '',
  link5: 'Support',
}

HeaderLight.propTypes = {
  cTA: PropTypes.string,
  link6: PropTypes.string,
  link1: PropTypes.string,
  link4: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  rootClassName: PropTypes.string,
  link5: PropTypes.string,
}

export default HeaderLight
