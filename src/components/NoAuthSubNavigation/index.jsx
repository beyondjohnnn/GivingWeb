import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../../actions/noAuthSubNavigationActionCreators'

import css from './NoAuthSubNavigation.scss'

class NoAuthSubNavigation extends React.Component {

  whatsHappeningStyling(expectedState) {
  	if (this.props.currentLandingPageComponent == expectedState) {
 			return "selected-tab"
 		}
  }

	render() {
		return (
			<div className="no-auth-sub-navigation">
				<div className="tabs-wrapper">
					<h3 className={this.whatsHappeningStyling("Whats Happening")} onClick={this.props.setCurrentLandingPageComponent.bind(this, "Whats Happening")}>Happening Now</h3> 
					<h3 className={this.whatsHappeningStyling("Be A Hero")} onClick={this.props.setCurrentLandingPageComponent.bind(this, "Be A Hero")}>Be a Hero</h3>  
					<h3 className={this.whatsHappeningStyling("For Charities")} onClick={this.props.setCurrentLandingPageComponent.bind(this, "For Charities")}>For Charities</h3> 
				</div>
			</div>
		)
	}
}


// this is taking the howItWorks portion of state and attaching it to the HowItWork's props
function mapStateToProps(state, routing) {
  return Object.assign({}, state.noAuthSubNavigation, routing)
}

// this is attaching our actions to the HowItWork's component
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NoAuthSubNavigation)