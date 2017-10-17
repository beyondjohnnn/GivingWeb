import React from 'react'
import { Link } from 'react-router-dom'
import {connect}  from 'react-redux'
import { bindActionCreators } from 'redux'
import { goToTop, goToAnchor, configureAnchors } from 'react-scrollable-anchor'

import * as actionCreators from '../actions/howItWorksActionCreators'

import css from './NoAuthLandingPage.scss'

import Hero from './components/Hero'
import NoAuthSubNavigation from './components/NoAuthSubNavigation'
import BeAHero from './components/BeAHero'
import ForCharities from './components/ForCharities'
import HowItWorks from './components/HowItWorks'
import MemberPreview from '../components/MemberPreview'
import WhatsHappening from './components/WhatsHappening'
import ExtendedScrollAnchor from './components/ExtendedScrollAnchor'
import DonateMonthly from './components/DonateMonthly'

configureAnchors({offset: 0, scrollDuration: 600})

class NoAuthLandingPage extends React.Component {

	constructor(props){
		super(props)
		this.scrollToHowItWorks = this.scrollToHowItWorks.bind(this)

		/*
		* If how it works is open and the page is reloaded the hash will remain
		* 	in the url and the page will jump down.
		* location.hash = "" clears the current hash on page reload to ensure this
		* 	does not happen.
		*/
		location.hash = ''
	}

	renderHowItWorks() {
		if (this.props.howItWorksVisible) {
			return (<HowItWorks />)
		}
	}

	renderSubNavigationSelection() {
		switch (this.props.currentLandingPageComponent) {
			case 'Whats Happening':
				return <WhatsHappening />
			case 'Be A Hero':
				return <BeAHero />
			case 'For Charities':
				return <ForCharities />
			default:
		}
	}

	scrollToHowItWorks(){
		this.props.toggleHowItWorks()
		if(!this.props.howItWorksVisible){
			goToAnchor('howItWorksAnchor')
		}
	}

	render() {
		return (
			<div>
				<Hero scroll={this.scrollToHowItWorks}/>
				<ExtendedScrollAnchor anchor={'howItWorksAnchor'}>
					<HowItWorks />
				</ExtendedScrollAnchor>
				<NoAuthSubNavigation />
				{this.renderSubNavigationSelection()}
				<DonateMonthly />
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
