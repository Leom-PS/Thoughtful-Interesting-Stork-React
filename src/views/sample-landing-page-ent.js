import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderDark from '../components/header-dark'
import StarRatingWhite from '../components/star-rating-white'
import SecondaryButtonDark from '../components/secondary-button-dark'
import PrimaryButtonLight from '../components/primary-button-light'
import './sample-landing-page-ent.css'

const SampleLandingPageEnt = (props) => {
  return (
    <div className="sample-landing-page-ent-container">
      <Helmet>
        <title>Sample-Landing-page-Ent - Thoughtful Interesting Stork</title>
        <meta
          property="og:title"
          content="Sample-Landing-page-Ent - Thoughtful Interesting Stork"
        />
      </Helmet>
      <div className="sample-landing-page-ent-container1">
        <HeaderDark rootClassName="header-dark-root-class-name1"></HeaderDark>
        <div className="sample-landing-page-ent-container2">
          <StarRatingWhite
            quote="“Burp Suite turns our web security testing into a comprehensive, seamless process”"
            rootClassName="star-rating-white-root-class-name21"
          ></StarRatingWhite>
          <StarRatingWhite
            quote="“SaaS model and AI integration mark a thrilling evolution for our security”"
            rootClassName="star-rating-white-root-class-name22"
          ></StarRatingWhite>
          <StarRatingWhite
            quote="“Burp's automated scanning gives us confidence in our app's security posture”"
            rootClassName="star-rating-white-root-class-name23"
          ></StarRatingWhite>
        </div>
        <h1 className="sample-landing-page-ent-text Desktop-Heading4">
          Burp Suite Enterprise Edition
        </h1>
        <h1 className="sample-landing-page-ent-text1 Desktop-Display1">
          Unburden your security team, empower your developers
        </h1>
        <div className="sample-landing-page-ent-container3">
          <SecondaryButtonDark
            cTAtext="Pricing and plans"
            rootClassName="secondary-button-dark-root-class-name"
          ></SecondaryButtonDark>
          <PrimaryButtonLight rootClassName="primary-button-light-root-class-name5"></PrimaryButtonLight>
        </div>
        <img
          alt="image"
          src="/enterprise-fw-screen.svg"
          className="sample-landing-page-ent-image"
        />
      </div>
    </div>
  )
}

export default SampleLandingPageEnt
