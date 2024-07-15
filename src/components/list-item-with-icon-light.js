import React from 'react'

import PropTypes from 'prop-types'

import './list-item-with-icon-light.css'

const ListItemWithIconLight = (props) => {
  return (
    <div
      className={`list-item-with-icon-light-container ${props.rootClassName} `}
    >
      <div className="list-item-with-icon-light-frame1">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="list-item-with-icon-light-image"
        />
        <span className="list-item-with-icon-light-text BodyLarge">
          {props.text}
        </span>
      </div>
    </div>
  )
}

ListItemWithIconLight.defaultProps = {
  text: 'Secure your whole web portfolio',
  rootClassName: '',
  imageSrc: '/check%20in%20circle%20outlined-light.svg',
  imageAlt: 'image',
}

ListItemWithIconLight.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default ListItemWithIconLight
