import React from 'react'

import { Helmet } from 'react-helmet'

import StarRatingWhite from '../components/star-rating-white'
import InputField from '../components/input-field'
import PrimaryButtonLight from '../components/primary-button-light'
import './trial-request-template-2.css'

const TrialRequestTemplate2 = (props) => {
  return (
    <div className="trial-request-template2-container">
      <Helmet>
        <title>Trial-Request-template-2 - Thoughtful Interesting Stork</title>
        <meta
          property="og:title"
          content="Trial-Request-template-2 - Thoughtful Interesting Stork"
        />
      </Helmet>
      <div className="trial-request-template2-container1">
        <StarRatingWhite
          quote="“Dramatically streamlined our security testing process”"
          rootClassName="star-rating-white-root-class-name6"
        ></StarRatingWhite>
        <StarRatingWhite
          quote="“Provides consistent and reliable security scans that our devs trust”"
          rootClassName="star-rating-white-root-class-name7"
        ></StarRatingWhite>
        <StarRatingWhite
          quote=" Transformed our overall security posture with automated testing"
          rootClassName="star-rating-white-root-class-name8"
        ></StarRatingWhite>
      </div>
      <div className="trial-request-template2-container2">
        <span className="trial-request-template2-text Desktop-Heading4">
          Burp Suite Enterprise Edition
        </span>
        <h2 className="trial-request-template2-text1">
          <span className="Desktop-Heading3">The </span>
          <span className="Desktop-Heading1">
            automated vulnerability scanner that 
          </span>
          <span className="Desktop-Heading1">
            scales across your enterprise.
          </span>
        </h2>
      </div>
      <div className="trial-request-template2-container3">
        <img
          alt="image"
          src="/enterprise-db-500h.png"
          className="trial-request-template2-image"
        />
        <div className="trial-request-template2-container4">
          <span className="trial-request-template2-text5 Desktop-Heading4Light">
            Request a fully-featured free trial
          </span>
          <InputField
            placeholder1="Placeholder"
            rootClassName="input-field-root-class-name4"
          ></InputField>
          <InputField
            placeholder="Email"
            rootClassName="input-field-root-class-name21"
          ></InputField>
          <span className="trial-request-template2-text6 BodyLargeBold">
            Industry
          </span>
          <select className="trial-request-template2-select">
            <option value="Advertising">Option 1</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 3">Option 3</option>
          </select>
          <PrimaryButtonLight rootClassName="primary-button-light-root-class-name7"></PrimaryButtonLight>
        </div>
      </div>
    </div>
  )
}

export default TrialRequestTemplate2
