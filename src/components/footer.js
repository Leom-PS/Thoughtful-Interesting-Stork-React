import React from 'react'

import PropTypes from 'prop-types'

import FooterColumnTitle from './footer-column-title'
import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-container ${props.rootClassName} `}>
      <div className="footer-main">
        <div className="footer-container1">
          <div className="footer-container2">
            <FooterColumnTitle
              text="Burp Suite"
              className=""
            ></FooterColumnTitle>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              className="Footer"
            >
              {props.text1}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              className="Footer"
            >
              {props.text2}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              className="Footer"
            >
              {props.text3}
            </span>
          </div>
          <div className="footer-container3">
            <FooterColumnTitle
              text="Vulnerabilities"
              className=""
            ></FooterColumnTitle>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              className="Footer"
            >
              {props.text5}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              className="Footer"
            >
              {props.text6}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              className="Footer"
            >
              {props.text7}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              className="Footer"
            >
              {props.text8}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              className="Footer"
            >
              {props.text9}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              className="Footer"
            >
              {props.text10}
            </span>
          </div>
          <div className="footer-container4">
            <FooterColumnTitle
              text="Customers"
              className=""
            ></FooterColumnTitle>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              className="Footer"
            >
              {props.text12}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              className="Footer"
            >
              {props.text13}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              className="Footer"
            >
              {props.text14}
            </span>
          </div>
          <div className="footer-container5">
            <FooterColumnTitle text="Company" className=""></FooterColumnTitle>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              className="Footer"
            >
              {props.text16}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              className="Footer"
            >
              {props.text17}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              className="Footer"
            >
              {props.text18}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              className="Footer"
            >
              {props.text19}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              className="Footer"
            >
              {props.text20}
            </span>
          </div>
          <div className="footer-container6">
            <FooterColumnTitle text="Insights" className=""></FooterColumnTitle>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              className="Footer"
            >
              {props.text22}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              className="Footer"
            >
              {props.text23}
            </span>
            <span
              href="https://play.teleporthq.io/static/svg/default-img.svg"
              className="Footer"
            >
              {props.text24}
            </span>
          </div>
          <div className="footer-container7">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="footer-image"
            />
            <span
              rel="noreferrer"
              href="https://twitter.com/Burp_Suite"
              className="footer-text20"
            >
              <span className=""></span>
              <span className=""> Follow us</span>
            </span>
            <p className="Footer footer-text23">{props.text25}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  text14: 'Developers',
  text19: 'Legal',
  text1: 'Web vulnerability scanner',
  text12: 'Organizations',
  text2: 'Burp Suite Editions',
  text9: 'Directory traversal',
  text10: 'Server-side request forgery',
  text23: 'Blog',
  text7: 'Cross-site request forgery',
  text22: 'Web Security Academy',
  text18: 'Contact',
  text21: 'Insights',
  text13: 'Testers',
  text3: 'Release Notes',
  rootClassName: '',
  imageSrc: '/external/portswigger-logo.svg',
  text8: 'XML external entity injection',
  text24: 'Research',
  text16: 'About',
  imageSrc1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a39970b4-b90a-4fc2-9092-0f4a556662a2/9b88ca70-2644-4979-803f-52cc8a0afae7?org_if_sml=13256&force_format=original',
  text20: 'Privacy Notice',
  text25: '© 2024 PortSwigger Ltd.',
  text6: 'SQL injection',
  text5: 'Cross-site scripting (XSS)',
  imageAlt: 'image',
  linkImage: '',
  text15: 'Company',
  imageAlt1: 'image',
  text11: 'Customers',
  text17: 'Careers',
  text4: 'Vulnerabilities',
}

Footer.propTypes = {
  text14: PropTypes.string,
  text19: PropTypes.string,
  text1: PropTypes.string,
  text12: PropTypes.string,
  text2: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
  text23: PropTypes.string,
  text7: PropTypes.string,
  text22: PropTypes.string,
  text18: PropTypes.string,
  text21: PropTypes.string,
  text13: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  text8: PropTypes.string,
  text24: PropTypes.string,
  text16: PropTypes.string,
  imageSrc1: PropTypes.string,
  text20: PropTypes.string,
  text25: PropTypes.string,
  text6: PropTypes.string,
  text5: PropTypes.string,
  imageAlt: PropTypes.string,
  linkImage: PropTypes.string,
  text15: PropTypes.string,
  imageAlt1: PropTypes.string,
  text11: PropTypes.string,
  text17: PropTypes.string,
  text4: PropTypes.string,
}

export default Footer
