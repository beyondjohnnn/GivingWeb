import React from 'react'
import { Link } from 'react-router-dom'
import {connect}  from 'react-redux'
import { bindActionCreators } from 'redux'
import { scrollToWhen } from 'react-redux-scroll'

import * as actionCreators from '../../actions/howItWorksActionCreators'

import css from './NoAuthLandingPage.scss'

import Hero from '../../components/Hero'
import NoAuthSubNavigation from '../../components/NoAuthSubNavigation'
import BeAHero from '../../components/BeAHero'
import ForCharities from '../../components/ForCharities'
import HowItWorks from '../../components/HowItWorks'
import MemberPreview from '../../components/MemberPreview'
import WhatsHappening from '../../components/WhatsHappening'

const scrollOptions = { duration: 1000, transitionTimingFunction: 'LINEAR' }
const ScrollableHowItWorks = scrollToWhen('SCROLLTO_HOWITWORKS', null, scrollOptions)(HowItWorks)

class NoAuthLandingPage extends React.Component {

	renderHowItWorks() {
		if (this.props.howItWorksVisible) {
			return (<ScrollableHowItWorks />)
		}
	}

	renderSubNavigationSelection() {
		if (this.props.currentLandingPageComponent == "Whats Happening") {
			return <WhatsHappening />
		} else if (this.props.currentLandingPageComponent == "Be A Hero") {
			return <BeAHero />
		} else if (this.props.currentLandingPageComponent == "For Charities") {
			return <ForCharities />
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
