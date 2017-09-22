import React from 'react'
import { Link } from 'react-router-dom'
import {connect}  from 'react-redux'
import { bindActionCreators } from 'redux'


import css from './NoAuthLandingPage.scss'

import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import MemberPreview from '../components/MemberPreview'

import * as actionCreators from '../actions/howItWorksActionCreators'




class NoAuthLandingPage extends React.Component {

	renderHowItWorks() {
		if (this.props.howItWorksVisible) {
			return <HowItWorks />
		}
	}

	render() {
		return (
			<div>
				<Hero />
				{this.renderHowItWorks()}
				<div className="featured-members">
					<h2>Members</h2>
					<div className="members-list">
						<MemberPreview />
						<MemberPreview />
						<MemberPreview />
					</div>
				</div>
			</div>
		)
	}
}

// this is taking the howItWorks portion of state and attaching it to the NoAuthLandingPage props
function mapStateToProps(state, routing) {
  return Object.assign({}, state.howItWorks, routing)
}

// this is attaching our actions to the NoAuthLandingPage component
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NoAuthLandingPage)