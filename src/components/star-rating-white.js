import React from 'react'

import PropTypes from 'prop-types'

import './star-rating-white.css'

const StarRatingWhite = (props) => {
  return (
    <div className={`star-rating-white-container ${props.rootClassName} `}>
      <div className="star-rating-white-frame5148">
        <img
          alt="Frame51478119"
          src="/external/frame51478119-imwa.svg"
          className="star-rating-white-frame5147"
        />
        <span className="star-rating-white-text BodyRegular">
          {props.quote}
        </span>
      </div>
    </div>
  )
}

StarRatingWhite.defaultProps = {
  rootClassName: '',
  quote:
    '“Burp Suite turns our web security testing into a comprehensive, seamless process”',
}

StarRatingWhite.propTypes = {
  rootClassName: PropTypes.string,
  quote: PropTypes.string,
}

export default StarRatingWhite
