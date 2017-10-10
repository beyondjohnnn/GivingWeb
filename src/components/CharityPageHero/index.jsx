import React from 'react'

import css from './CharityPageHero.scss'

import CareButton from '../CareButton'

class CharityPageHero extends React.Component {
	render() {
		return (
    <div className="charity-page-hero">
      <div className="charity-banner-wrapper">
        <img className="charity-banner" src="images/streetworkbanner.jpg" />
        <div className="linear-gradient"></div> 
      </div>
      <img className="charity-logo" src="images/streetwork.jpg" />
      <h2>Streetwork</h2>
      <h3><i className="fa fa-map-marker"></i>Edinburgh</h3>
      <div className="social-media-container">
        <a href="https://www.facebook.com/StreetChange1/" target="_blank"><i className="fa fa-facebook"></i></a>
        <a href="https://www.facebook.com/StreetChange1/" target="_blank"><i className="fa fa-twitter"></i></a>
        <a href="https://www.facebook.com/StreetChange1/" target="_blank"><i className="fa fa-globe"></i></a>
      </div>
    <CareButton />
    </div>
		)
	}
}

export default CharityPageHero