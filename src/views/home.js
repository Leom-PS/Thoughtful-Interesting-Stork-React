import React from 'react'

import { Helmet } from 'react-helmet'

import PSHeader from '../components/ps-header'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Thoughtful Interesting Stork</title>
        <meta property="og:title" content="Thoughtful Interesting Stork" />
      </Helmet>
      <PSHeader></PSHeader>
    </div>
  )
}

export default Home
