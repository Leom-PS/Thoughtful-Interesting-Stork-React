import React from 'react'

import PropTypes from 'prop-types'

import './header-full-width-image.css'

const HeaderFullWidthImage = (props) => {
  return (
    <div
      className={`header-full-width-image-container ${props.rootClassName} `}
    >
      <h1 className="header-full-width-image-text Desktop-Heading1">
        {props.heading}
      </h1>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="header-full-width-image-image"
      />
    </div>
  )
}

HeaderFullWidthImage.defaultProps = {
  imageSrc: '/yt-thumbnail-700h.png',
  imageAlt: 'image',
  heading: 'Sample heading goes here',
  rootClassName: '',
}

HeaderFullWidthImage.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default HeaderFullWidthImage
