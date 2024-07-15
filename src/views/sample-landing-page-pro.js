import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderDark from '../components/header-dark'
import HeroBannerDark from '../components/hero-banner-dark'
import StarRatingWhite from '../components/star-rating-white'
import IconCallout from '../components/icon-callout'
import HeaderFullWidthImage from '../components/header-full-width-image'
import AccordionBlue from '../components/accordion-blue'
import AccordionWhite from '../components/accordion-white'
import './sample-landing-page-pro.css'

const SampleLandingPagePro = (props) => {
  return (
    <div className="sample-landing-page-pro-container">
      <Helmet>
        <title>Sample-Landing-page-Pro - Thoughtful Interesting Stork</title>
        <meta
          property="og:title"
          content="Sample-Landing-page-Pro - Thoughtful Interesting Stork"
        />
      </Helmet>
      <div className="sample-landing-page-pro-container01">
        <HeaderDark rootClassName="header-dark-root-class-name"></HeaderDark>
        <HeroBannerDark
          copy="Hands-on security testers need the best tools for the job.\u2028Tools you have faith in, and enjoy using all day long. The tools that other professionals trust."
          heading1="Test like a Pro."
          buttontext="Try for free"
          rootClassName="hero-banner-dark-root-class-name"
        ></HeroBannerDark>
        <div className="sample-landing-page-pro-container02">
          <StarRatingWhite
            quote="“Burp Suite turns our web security testing into a comprehensive, seamless process”"
            rootClassName="star-rating-white-root-class-name18"
          ></StarRatingWhite>
          <StarRatingWhite
            quote="“SaaS model and AI integration mark a thrilling evolution for our security”"
            rootClassName="star-rating-white-root-class-name20"
          ></StarRatingWhite>
          <StarRatingWhite
            quote="“Burp's automated scanning gives us confidence in our app's security posture”"
            rootClassName="star-rating-white-root-class-name19"
          ></StarRatingWhite>
        </div>
      </div>
      <div className="sample-landing-page-pro-container03">
        <IconCallout
          heading="Find more vulnerabilities faster"
          linktext="Read more"
          rootClassName="icon-callout-root-class-name"
        ></IconCallout>
        <IconCallout
          icon="/professional%20app.svg"
          heading="Test like a pro - with the industry's trusted toolkit"
          linktext="Read more"
          rootClassName="icon-callout-root-class-name2"
        ></IconCallout>
        <IconCallout
          icon="/rocket.svg"
          heading="Extend your capabilities"
          linktext="Read more"
          rootClassName="icon-callout-root-class-name1"
        ></IconCallout>
      </div>
      <HeaderFullWidthImage
        heading="Take a tour of Burp Suite Professional"
        rootClassName="header-full-width-image-root-class-name"
      ></HeaderFullWidthImage>
      <h1 className="sample-landing-page-pro-text Desktop-Heading1">
        Find more vulnerabilities, faster
      </h1>
      <div className="sample-landing-page-pro-container04">
        <div className="sample-landing-page-pro-container05">
          <AccordionBlue
            content="Smart automation works in concert with expert-designed manual tools, to save you time. Optimize your workflow, and do more of what you do best."
            titletext="Automate and save time"
            rootClassName="accordion-blue-root-class-name9"
          ></AccordionBlue>
          <AccordionBlue
            content="Smart automation works in concert with expert-designed manual tools, to save you time. Optimize your workflow, and do more of what you do best."
            titletext="Scan the modern web"
            rootClassName="accordion-blue-root-class-name10"
          ></AccordionBlue>
          <AccordionBlue
            titletext="Minimise false positives"
            rootClassName="accordion-blue-root-class-name11"
          ></AccordionBlue>
        </div>
        <img
          alt="image"
          src="/product-eg-img2-500h.png"
          className="sample-landing-page-pro-image"
        />
      </div>
      <div className="sample-landing-page-pro-container06">
        <h1 className="sample-landing-page-pro-text1 Desktop-Heading1">
          Test like a pro - with the industry&apos;s trusted toolkit
        </h1>
        <div className="sample-landing-page-pro-container07">
          <img
            alt="image"
            src="/product-eg-img-400h.png"
            className="sample-landing-page-pro-image1"
          />
          <div className="sample-landing-page-pro-container08">
            <AccordionWhite
              rootClassName="accordion-white-root-class-name3"
              accordiontitle="Find vulnerabilities others can't"
            ></AccordionWhite>
            <AccordionWhite
              rootClassName="accordion-white-root-class-name5"
              accordiontitle="Be more productive"
            ></AccordionWhite>
            <AccordionWhite
              rootClassName="accordion-white-root-class-name4"
              accordiontitle="Share your findings more easily"
            ></AccordionWhite>
          </div>
        </div>
      </div>
      <h1 className="sample-landing-page-pro-text2 Desktop-Heading1">
        Extend your capabilities
      </h1>
      <div className="sample-landing-page-pro-container09">
        <div className="sample-landing-page-pro-container10">
          <AccordionBlue
            titletext="Adapt your toolkit to suit your needs"
            rootClassName="accordion-blue-root-class-name12"
          ></AccordionBlue>
          <AccordionBlue
            titletext="Create your own functionality"
            rootClassName="accordion-blue-root-class-name13"
          ></AccordionBlue>
          <AccordionBlue
            titletext="Customize the way you work"
            rootClassName="accordion-blue-root-class-name14"
          ></AccordionBlue>
        </div>
        <img
          alt="image"
          src="/capabilities-600w.png"
          className="sample-landing-page-pro-image2"
        />
      </div>
    </div>
  )
}

export default SampleLandingPagePro
