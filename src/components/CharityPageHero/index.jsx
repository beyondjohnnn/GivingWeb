import React from 'react'
import { Link } from 'react-router-dom'
import {connect}  from 'react-redux'
import { bindActionCreators } from 'redux'
import ModalVideo from 'react-modal-video'

import * as actionCreators from '../../actions/charityPageActionCreators'

import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import css from './CharityPageHero.scss'

import CareButton from '../CareButton'

class CharityPageHero extends React.Component {

 

  render() {
    return (
    <div className="charity-page-hero">
      <ModalVideo channel='youtube' isOpen={this.props.videoVisible} videoId='xrCJa7iWnWY' />
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
    <button className="watch-a-video" onClick={this.props.toggleVideo}>Watch a Video<i class="fa fa-play-circle-o" aria-hidden="true"></i></button> 
    <CareButton />
    </div>
		)
	}
}

function mapStateToProps(state, routing) {
  return Object.assign({}, state.howItWorks, state.charityPage, routing)
}

// this is attaching our actions to the NoAuthLandingPage component
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CharityPageHero)