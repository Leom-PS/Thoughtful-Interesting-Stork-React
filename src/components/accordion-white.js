import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './accordion-white.css'

const AccordionWhite = (props) => {
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq5Visible, setFaq5Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  return (
    <div
      className={`accordion-white-faq8 thq-section-padding ${props.rootClassName} `}
    >
      <div className="accordion-white-max-width thq-section-max-width">
        <div className="accordion-white-container thq-flex-column">
          <div className="accordion-white-list thq-flex-column">
            <div className="accordion-white-faq1">
              <div
                onClick={() => setFaq1Visible(!faq1Visible)}
                className="accordion-white-trigger"
              >
                <p className="accordion-white-faq1-question BodyLarge thq-body-large">
                  {props.accordiontitle}
                </p>
                <div className="accordion-white-icons-container">
                  {!faq1Visible && (
                    <div className="">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="accordion-white-icon"
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
                        className="accordion-white-icon2"
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
                <div className="accordion-white-container3">
                  <span
                    id="sfdfsdfsf assay asasfa as asf af"
                    className="accordion-white-text"
                  >
                    {props.accordioncontent}
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

AccordionWhite.defaultProps = {
  rootClassName: '',
  accordiontitle: 'Accordion title',
  accordioncontent: 'test here',
}

AccordionWhite.propTypes = {
  rootClassName: PropTypes.string,
  accordiontitle: PropTypes.string,
  accordioncontent: PropTypes.string,
}

export default AccordionWhite
