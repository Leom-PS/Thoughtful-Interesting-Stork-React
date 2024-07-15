import React from 'react'

import PropTypes from 'prop-types'

import './full-header.css'

const FullHeader = (props) => {
  return (
    <div className="full-header-container">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="full-header-image"
      />
      <img
        alt={props.imageAlt1}
        src={props.imageSrc1}
        className="full-header-image1"
      />
      <img
        alt={props.imageAlt2}
        src={props.imageSrc2}
        className="full-header-image2"
      />
      <img
        alt={props.imageAlt3}
        src={props.imageSrc3}
        className="full-header-image3"
      />
      <img
        alt={props.imageAlt4}
        src={props.imageSrc4}
        className="full-header-image4"
      />
      <img
        alt={props.imageAlt5}
        src={props.imageSrc5}
        className="full-header-image5"
      />
      <img
        alt={props.imageAlt6}
        src={props.imageSrc6}
        className="full-header-image6"
      />
    </div>
  )
}

FullHeader.defaultProps = {
  imageSrc1: '/mega-nav/images/dastardly.svg',
  imageAlt6: 'image',
  imageAlt4: 'image',
  imageSrc3: '/content/images/svg/icons/professional.svg',
  imageAlt2: 'image',
  imageAlt: 'image',
  imageSrc6: '/mega-nav/images/latest-burp-suite-software-download-200h.jpg',
  imageSrc: '/content/images/svg/icons/community.svg',
  imageSrc5: '/mega-nav/images/burp-suite-200h.jpg',
  imageSrc4: '/mega-nav/images/burp-suite-scanner-200w.jpg',
  imageAlt5: 'image',
  imageAlt3: 'image',
  imageAlt1: 'image',
  imageSrc2: '/content/images/svg/icons/enterprise.svg',
}

FullHeader.propTypes = {
  imageSrc1: PropTypes.string,
  imageAlt6: PropTypes.string,
  imageAlt4: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc6: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc5: PropTypes.string,
  imageSrc4: PropTypes.string,
  imageAlt5: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc2: PropTypes.string,
}

export default FullHeader
