import React from 'react'

import PropTypes from 'prop-types'

import FooterColumnTitle from './footer-column-title'
import TwitterButton from './twitter-button'
import './footer1.css'

const Footer1 = (props) => {
  return (
    <footer className={`footer1-container ${props.rootClassName} `}>
      <div className="footer1-main">
        <div className="footer1-container1">
          <div className="footer1-container2">
            <div className="footer1-container3">
              <FooterColumnTitle
                text="Burp Suite"
                rootClassName="footer-column-title-root-class-name"
                className=""
              ></FooterColumnTitle>
              <span
                href="https://play.teleporthq.io/static/svg/default-img.svg"
                className="footer1-text Footer"
              >
                {props.text1}
              </span>
              <span
                href="https://play.teleporthq.io/static/svg/default-img.svg"
                className="footer1-text01 Footer"
              >
                {props.text2}
              </span>
              <span
                href="https://play.teleporthq.io/static/svg/default-img.svg"
                className="footer1-text02 Footer"
              >
                {props.text3}
              </span>
            </div>
            <div className="footer1-container4">
              <FooterColumnTitle
                text="Vulnerabilities"
                rootClassName="footer-column-title-root-class-name1"
                className=""
              ></FooterColumnTitle>
              <span
                href="https://play.teleporthq.io/static/svg/default-img.svg"
                className="footer1-text03 Footer"
              >
                {props.text5}
              </span>
              <span
                href="https://play.teleporthq.io/static/svg/default-img.svg"
                className="footer1-text04 Footer"
              >
                {props.text6}
              </span>
              <span
                href="https://play.teleporthq.io/static/svg/default-img.svg"
                className="footer1-text05 Footer"
              >
                {props.text7}
              </span>
              <span
                href="https://play.teleporthq.io/static/svg/default-img.svg"
                className="footer1-text06 Footer"
              >
                {props.text8}
              </span>
              <span
                href="https://play.teleporthq.io/static/svg/default-img.svg"
                className="footer1-text07 Footer"
              >
                {props.text9}
              </span>
              <span
                href="https://play.teleporthq.io/static/svg/default-img.svg"
                className="footer1-text08 Footer"
              >
                {props.text10}
              </span>
            </div>
            <div className="footer1-container5">
              <FooterColumnTitle
                text="Customers"
                rootClassName="footer-column-title-root-class-name2"
                className=""
              ></FooterColumnTitle>
              <span
                href="https://play.teleporthq.io/static/svg/default-img.svg"
                className="footer1-text09 Footer"
              >
                {props.text12}
              </span>
              <span
                href="https://play.teleporthq.io/static/svg/default-img.svg"
                className="footer1-text10 Footer"
              >
                {props.text13}
              </span>
              <span
                href="https://play.teleporthq.io/static/svg/default-img.svg"
                className="footer1-text11 Footer"
              >
                {props.text14}
              </span>
            </div>
            <div className="footer1-container6">
              <FooterColumnTitle
                text="Company"
                rootClassName="footer-column-title-root-class-name3"
                className=""
              ></FooterColumnTitle>
              <span
                href="https://play.teleporthq.io/static/svg/default-img.svg"
                className="footer1-text12 Footer"
              >
                {props.text16}
              </span>
              <span
                href="https://play.teleporthq.io/static/svg/default-img.svg"
                className="footer1-text13 Footer"
              >
                {props.text17}
              </span>
              <span
                href="https://play.teleporthq.io/static/svg/default-img.svg"
                className="footer1-text14 Footer"
              >
                {props.text18}
              </span>
              <span
                href="https://play.teleporthq.io/static/svg/default-img.svg"
                className="footer1-text15 Footer"
              >
                {props.text19}
              </span>
              <span
                href="https://play.teleporthq.io/static/svg/default-img.svg"
                className="footer1-text16 Footer"
              >
                {props.text20}
              </span>
            </div>
            <div className="footer1-container7">
              <FooterColumnTitle
                text="Insights"
                rootClassName="footer-column-title-root-class-name4"
                className=""
              ></FooterColumnTitle>
              <span
                href="https://play.teleporthq.io/static/svg/default-img.svg"
                className="footer1-text17 Footer"
              >
                {props.text22}
              </span>
              <span
                href="https://play.teleporthq.io/static/svg/default-img.svg"
                className="footer1-text18 Footer"
              >
                {props.text23}
              </span>
              <span
                href="https://play.teleporthq.io/static/svg/default-img.svg"
                className="footer1-text19 Footer"
              >
                {props.text24}
              </span>
            </div>
            <div className="footer1-container8">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="footer1-image"
              />
              <TwitterButton
                text={props.componentText}
                rootClassName="twitter-button-root-class-name"
                className=""
              ></TwitterButton>
              <p className="footer1-text20 Footer">{props.text25}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer1.defaultProps = {
  text7: 'Cross-site request forgery',
  text2: 'Burp Suite Editions',
  text8: 'XML external entity injection',
  twitterandXlogossvg1Alt: 'TwitterandXlogossvg14713',
  imageAlt: 'image',
  text12: 'Organizations',
  text20: 'Privacy Notice',
  text23: 'Blog',
  text25: '© 2024 PortSwigger Ltd.',
  text19: 'Legal',
  text10: 'Server-side request forgery',
  text18: 'Contact',
  text16: 'About',
  text14: 'Developers',
  twitterandXlogossvg1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a39970b4-b90a-4fc2-9092-0f4a556662a2/e9c7bded-0a3d-4a16-8ef0-54b26340f18f?org_if_sml=1305&force_format=original',
  text9: 'Directory traversal',
  text17: 'Careers',
  text24: 'Research',
  text3: 'Release Notes',
  rootClassName: '',
  text5: 'Cross-site scripting (XSS)',
  text1: 'Web vulnerability scanner',
  componentText: '',
  text6: 'SQL injection',
  imageSrc: '/external/portswigger-logo.svg',
  text13: 'Testers',
  text22: 'Web Security Academy',
}

Footer1.propTypes = {
  text7: PropTypes.string,
  text2: PropTypes.string,
  text8: PropTypes.string,
  twitterandXlogossvg1Alt: PropTypes.string,
  imageAlt: PropTypes.string,
  text12: PropTypes.string,
  text20: PropTypes.string,
  text23: PropTypes.string,
  text25: PropTypes.string,
  text19: PropTypes.string,
  text10: PropTypes.string,
  text18: PropTypes.string,
  text16: PropTypes.string,
  text14: PropTypes.string,
  twitterandXlogossvg1Src: PropTypes.string,
  text9: PropTypes.string,
  text17: PropTypes.string,
  text24: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text5: PropTypes.string,
  text1: PropTypes.string,
  componentText: PropTypes.string,
  text6: PropTypes.string,
  imageSrc: PropTypes.string,
  text13: PropTypes.string,
  text22: PropTypes.string,
}

export default Footer1
