import React from 'react'
import { Link } from 'react-router-dom'
import {connect}  from 'react-redux'
import { bindActionCreators } from 'redux'
import ScrollableAnchor from 'react-scrollable-anchor'
import { goToAnchor } from 'react-scrollable-anchor'

import * as actionCreators from '../../actions/howItWorksActionCreators'

import css from './NoAuthLandingPage.scss'

import Hero from '../../components/Hero'
import NoAuthSubNavigation from '../../components/NoAuthSubNavigation'
import BeAHero from '../../components/BeAHero'
import ForCharities from '../../components/ForCharities'
import HowItWorks from '../../components/HowItWorks'
import MemberPreview from '../../components/MemberPreview'
import WhatsHappening from '../../components/WhatsHappening'

class NoAuthLandingPage extends React.Component {

	constructor(props){
		super(props)
		this.scrollToHowItWorks = this.scrollToHowItWorks.bind(this)
	}

	renderHowItWorks() {
		if (this.props.howItWorksVisible) {
			return (<HowItWorks />)
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

	scrollToHowItWorks(){
		this.props.toggleHowItWorks()
		if(!this.props.howItWorksVisible){
			goToAnchor("howItWorksAnchor")
		}
	}

	render() {
		return (
			<div>
				<Hero scroll={this.scrollToHowItWorks}/>
				<ScrollableAnchor id={'howItWorksAnchor'}>
					<div>{this.renderHowItWorks()}</div>
				</ScrollableAnchor>
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
