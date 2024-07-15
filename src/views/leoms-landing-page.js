import React from 'react'

import { Helmet } from 'react-helmet'

import PSHeader from '../components/ps-header'
import HeroBannerDark from '../components/hero-banner-dark'
import StarRatingWhite from '../components/star-rating-white'
import IconCallout from '../components/icon-callout'
import HeaderFullWidthImage from '../components/header-full-width-image'
import AccordionBlue from '../components/accordion-blue'
import AccordionWhite from '../components/accordion-white'
import './leoms-landing-page.css'

const LeomsLandingPage = (props) => {
  return (
    <div className="leoms-landing-page-container">
      <Helmet>
        <title>leoms-landing-page - Thoughtful Interesting Stork</title>
        <meta
          property="og:title"
          content="leoms-landing-page - Thoughtful Interesting Stork"
        />
      </Helmet>
      <PSHeader rootClassName="ps-header-root-class-name"></PSHeader>
      <div className="leoms-landing-page-container01">
        <HeroBannerDark
          copy="Hands-on security testers need the best tools for the job.\u2028Tools you have faith in, and enjoy using all day long. The tools that other professionals trust."
          heading1="Test like a Pro."
          buttontext="Try for free"
          rootClassName="hero-banner-dark-root-class-name1"
        ></HeroBannerDark>
        <div className="leoms-landing-page-container02">
          <StarRatingWhite
            quote="“Burp Suite turns our web security testing into a comprehensive, seamless process”"
            rootClassName="star-rating-white-root-class-name24"
          ></StarRatingWhite>
          <StarRatingWhite
            quote="“SaaS model and AI integration mark a thrilling evolution for our security”"
            rootClassName="star-rating-white-root-class-name25"
          ></StarRatingWhite>
          <StarRatingWhite
            quote="“Burp's automated scanning gives us confidence in our app's security posture”"
            rootClassName="star-rating-white-root-class-name26"
          ></StarRatingWhite>
        </div>
      </div>
      <div className="leoms-landing-page-container03">
        <IconCallout
          heading="Find more vulnerabilities faster"
          linktext="Read more"
          rootClassName="icon-callout-root-class-name3"
        ></IconCallout>
        <IconCallout
          icon="/professional%20app.svg"
          heading="Test like a pro - with the industry's trusted toolkit"
          linktext="Read more"
          rootClassName="icon-callout-root-class-name4"
        ></IconCallout>
        <IconCallout
          icon="/rocket.svg"
          heading="Extend your capabilities"
          linktext="Read more"
          rootClassName="icon-callout-root-class-name5"
        ></IconCallout>
      </div>
      <HeaderFullWidthImage
        heading="Take a tour of Burp Suite Professional"
        rootClassName="header-full-width-image-root-class-name1"
      ></HeaderFullWidthImage>
      <h1 className="leoms-landing-page-text Desktop-Heading1">
        Find more vulnerabilities, faster
      </h1>
      <div className="leoms-landing-page-container04">
        <div className="leoms-landing-page-container05">
          <AccordionBlue
            content="Smart automation works in concert with expert-designed manual tools, to save you time. Optimize your workflow, and do more of what you do best."
            titletext="Automate and save time"
            rootClassName="accordion-blue-root-class-name15"
          ></AccordionBlue>
          <AccordionBlue
            content="Smart automation works in concert with expert-designed manual tools, to save you time. Optimize your workflow, and do more of what you do best."
            titletext="Scan the modern web"
            rootClassName="accordion-blue-root-class-name16"
          ></AccordionBlue>
          <AccordionBlue
            titletext="Minimise false positives"
            rootClassName="accordion-blue-root-class-name17"
          ></AccordionBlue>
        </div>
        <img
          alt="image"
          src="/product-eg-img2-500h.png"
          className="leoms-landing-page-image"
        />
      </div>
      <div className="leoms-landing-page-container06">
        <h1 className="leoms-landing-page-text1 Desktop-Heading1">
          Test like a pro - with the industry&apos;s trusted toolkit
        </h1>
        <div className="leoms-landing-page-container07">
          <img
            alt="image"
            src="/product-eg-img-400h.png"
            className="leoms-landing-page-image1"
          />
          <div className="leoms-landing-page-container08">
            <AccordionWhite
              rootClassName="accordion-white-root-class-name6"
              accordiontitle="Find vulnerabilities others can't"
            ></AccordionWhite>
            <AccordionWhite
              rootClassName="accordion-white-root-class-name7"
              accordiontitle="Be more productive"
            ></AccordionWhite>
            <AccordionWhite
              rootClassName="accordion-white-root-class-name8"
              accordiontitle="Share your findings more easily"
            ></AccordionWhite>
          </div>
        </div>
      </div>
      <h1 className="leoms-landing-page-text2 Desktop-Heading1">
        Extend your capabilities
      </h1>
      <div className="leoms-landing-page-container09">
        <div className="leoms-landing-page-container10">
          <AccordionBlue
            titletext="Adapt your toolkit to suit your needs"
            rootClassName="accordion-blue-root-class-name18"
          ></AccordionBlue>
          <AccordionBlue
            titletext="Create your own functionality"
            rootClassName="accordion-blue-root-class-name19"
          ></AccordionBlue>
          <AccordionBlue
            titletext="Customize the way you work"
            rootClassName="accordion-blue-root-class-name20"
          ></AccordionBlue>
        </div>
        <img
          alt="image"
          src="/capabilities-600w.png"
          className="leoms-landing-page-image2"
        />
      </div>
    </div>
  )
}

export default LeomsLandingPage
