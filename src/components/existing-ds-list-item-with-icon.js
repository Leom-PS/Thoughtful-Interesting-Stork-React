import React from 'react'

import PropTypes from 'prop-types'

import './existing-ds-list-item-with-icon.css'

const ExistingDSListItemWithIcon = (props) => {
  return (
    <div
      className={`existing-ds-list-item-with-icon-container ${props.rootClassName} `}
    >
      <div className="existing-ds-list-item-with-icon-container1">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="existing-ds-list-item-with-icon-image"
        />
        <span className="existing-ds-list-item-with-icon-text">
          <span className="existing-ds-list-item-with-icon-text1">
            {props.bold}
          </span>
          <span className="">{props.regular}</span>
        </span>
      </div>
    </div>
  )
}

ExistingDSListItemWithIcon.defaultProps = {
  rootClassName: '',
  imageSrc: '/check%20in%20circle%20outlined.svg',
  regular:
    ' All subscriptions come with no limits on the number of applications (FQDNs) or users.',
  bold: 'Unlimited Applications and Users:',
  imageAlt: 'image',
}

ExistingDSListItemWithIcon.propTypes = {
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  regular: PropTypes.string,
  bold: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default ExistingDSListItemWithIcon
