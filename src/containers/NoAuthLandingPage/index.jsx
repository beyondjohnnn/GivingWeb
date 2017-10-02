import React from 'react'
import { Link } from 'react-router-dom'
import {connect}  from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionCreators from '../../actions/howItWorksActionCreators'


import css from './NoAuthLandingPage.scss'

import Hero from '../../components/Hero'
import NoAuthSubNavigation from '../../components/NoAuthSubNavigation'
import HowItWorks from '../../components/HowItWorks'
import MemberPreview from '../../components/MemberPreview'
import WhatsHappening from '../../components/WhatsHappening'

class NoAuthLandingPage extends React.Component {

	renderHowItWorks() {
		if (this.props.howItWorksVisible) {
			return <HowItWorks />
		}
	}

	renderSubNavigationSelection() {
		if (this.props.currentLandingPageComponent == "Whats Happening") {
			return <WhatsHappening />
		}
	}
	

	render() {
		return (
			<div>
				<Hero />
				{this.renderHowItWorks()}
				<NoAuthSubNavigation />
				{this.renderSubNavigationSelection()}
			</div>
		)
	}
}

// this is taking the howItWorks portion of state and attaching it to the NoAuthLandingPage props
function mapStateToProps(state, routing) {
  return Object.assign({}, state.howItWorks, state.noAuthSubNavigation, routing)
}

// this is attaching our actions to the NoAuthLandingPage component
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NoAuthLandingPage)