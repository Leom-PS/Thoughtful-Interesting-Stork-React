import React from 'react'

import PropTypes from 'prop-types'

import './list-item-with-icon-dark.css'

const ListItemWithIconDark = (props) => {
  return (
    <div
      className={`list-item-with-icon-dark-container ${props.rootClassName} `}
    >
      <div className="list-item-with-icon-dark-frame1">
        <img
          alt="CheckInCircleOutlined1216"
          src="/external/checkincircleoutlined1216-agf.svg"
          className="list-item-with-icon-dark-check-in-circle-outlined"
        />
        <span className="list-item-with-icon-dark-text BodyLarge">
          {props.text}
        </span>
      </div>
    </div>
  )
}

ListItemWithIconDark.defaultProps = {
  text: 'Secure your whole web portfolio',
  rootClassName: '',
}

ListItemWithIconDark.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ListItemWithIconDark
