import React from 'react'
import { Link } from 'react-router-dom'
import {connect}  from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionCreators from '../../actions/charityPageActionCreators'

import css from './CharityPageInformation.scss'


class CharityPageInformation extends React.Component {
  
  createDescriptionStyle() {
    return this.props.aboutUsVisible ? "charity-description open" : "charity-description"
  } 

  createLinearGradientStyle() {
    return this.props.aboutUsVisible ? "linear-gradient-fade removed" : "linear-gradient-fade"
  } 

  renderButtonText() {
    return this.props.aboutUsVisible ? "Hide" : "Read More" 
  }

  render() {
    return (

      <div className="charity-info-container">
        <div className="charity-image-total-wrapper">
          <div className="banner-image"></div>
          <h3>Streetwork</h3>
          <p className="charity-number">Registered charity number SC017802</p>
          <p className="amount-raised">£3,300</p>
          <p className="amount-raised-text">Total Raised</p>
          <button className="donate-button">Make a Donation</button>
          <button className="fundraise-button">Fundraise for Us</button>
        </div>

        <div className="charity-description-wrapper">
          <div className={this.createDescriptionStyle()}>
            <h3>About the Charity</h3>
            <p>Streetwork is about enabling a life off the streets. We focus on where people are most in need and at risk - on the streets.</p>
            <p>We don't wait for people to find us; we find them, with outreach teams spending at least 84hrs each week on the streets of Edinburgh helping the most vulnerable people.</p>
            <p>We don't wait for people to find us; we find them, with outreach teams spending at least 84hrs each week on the streets of Edinburgh helping the most vulnerable people.</p>
            <div className={this.createLinearGradientStyle()}></div> 
          </div> 
          <button className="read-more-button" onClick={this.props.toggleAboutUsSection}>{this.renderButtonText()}</button>
        </div>
        
        <div className="giving-level-tile">
          <h3 className="giving-levels-text">Giving Levels</h3> 
          <div className="arrows-card-wrapper"> 
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
            <div className="giving-card">
              <p className="giving-card-description">A £5 donation pays for someone to have a hot shower and access to our laundry.</p>
              <p className="giving-card-support"><i className="fa fa-heart"></i>Be the first supporter!</p>
              <h3 className="giving-card-support">£5</h3>
            </div>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
          <div className="circle-wrapper">
            <i class="fa fa-circle selected-circle" aria-hidden="true"></i>
            <i class="fa fa-circle" aria-hidden="true"></i>
            <i class="fa fa-circle" aria-hidden="true"></i>
            <i class="fa fa-circle" aria-hidden="true"></i>
            <i class="fa fa-circle" aria-hidden="true"></i>
          </div>
        </div>  

           

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

export default connect(mapStateToProps, mapDispatchToProps)(CharityPageInformation)