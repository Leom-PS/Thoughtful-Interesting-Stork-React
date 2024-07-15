import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderDark from '../components/header-dark'
import StarRatingWhite from '../components/star-rating-white'
import PrimaryButtonLight from '../components/primary-button-light'
import './sample-enterprise-pricing.css'

const SampleEnterprisePricing = (props) => {
  return (
    <div className="sample-enterprise-pricing-container">
      <Helmet>
        <title>SampleEnterprise-pricing - Thoughtful Interesting Stork</title>
        <meta
          property="og:title"
          content="SampleEnterprise-pricing - Thoughtful Interesting Stork"
        />
      </Helmet>
      <div className="sample-enterprise-pricing-container1">
        <HeaderDark rootClassName="header-dark-root-class-name2"></HeaderDark>
        <div className="sample-enterprise-pricing-container2">
          <StarRatingWhite
            quote="“Burp Suite turns our web security testing into a comprehensive, seamless process”"
            rootClassName="star-rating-white-root-class-name27"
          ></StarRatingWhite>
          <StarRatingWhite
            quote="“SaaS model and AI integration mark a thrilling evolution for our security”"
            rootClassName="star-rating-white-root-class-name28"
          ></StarRatingWhite>
          <StarRatingWhite
            quote="“Burp's automated scanning gives us confidence in our app's security posture”"
            rootClassName="star-rating-white-root-class-name29"
          ></StarRatingWhite>
        </div>
        <h1 className="sample-enterprise-pricing-text Desktop-Display1">
          Burp Suite Enterprise Edition plans
        </h1>
        <div className="sample-enterprise-pricing-container3">
          <PrimaryButtonLight
            buttontext="Get in touch"
            rootClassName="primary-button-light-root-class-name9"
          ></PrimaryButtonLight>
        </div>
      </div>
    </div>
  )
}

export default SampleEnterprisePricing
