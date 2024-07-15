import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './accordion-blue.css'

const AccordionBlue = (props) => {
  const [faq1Visible, setFaq1Visible] = useState(false)
  return (
    <div
      className={`accordion-blue-faq8 thq-section-padding ${props.rootClassName} `}
    >
      <div className="accordion-blue-max-width thq-section-max-width">
        <div className="accordion-blue-container thq-flex-column">
          <div className="accordion-blue-list thq-flex-column">
            <div className="accordion-blue-faq1">
              <div
                onClick={() => setFaq1Visible(!faq1Visible)}
                className="accordion-blue-trigger"
              >
                <p className="accordion-blue-faq1-question BodyLarge thq-body-large">
                  {props.titletext}
                </p>
                <div className="accordion-blue-icons-container">
                  {!faq1Visible && (
                    <div className="">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="accordion-blue-icon"
                      >
                        <path
                          d="M316 366l196 196 196-196 60 60-256 256-256-256z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                  )}
                  {faq1Visible && (
                    <div className="">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="accordion-blue-icon2"
                      >
                        <path
                          d="M316 658l-60-60 256-256 256 256-60 60-196-196z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq1Visible && (
                <div className="accordion-blue-container3">
                  <span
                    id="zxcz as dasdjkahsjafb as dajshdg ajasbdajshdgaj kjashdj"
                    className="accordion-blue-text BodyLarge"
                  >
                    {props.content}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

AccordionBlue.defaultProps = {
  rootClassName: '',
  titletext: 'Here is the title',
  content: 'Here is the new text',
}

AccordionBlue.propTypes = {
  rootClassName: PropTypes.string,
  titletext: PropTypes.string,
  content: PropTypes.string,
}

export default AccordionBlue
