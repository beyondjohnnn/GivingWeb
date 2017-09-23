import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../actions/howItWorksActionCreators'


import css from './NoAuthSubNavigation.scss'

class NoAuthSubNavigation extends React.Component {
	render() {
		return (
			<div className="no-auth-sub-navigation">
				<div className="tabs-wrapper">
					<h3>Happening Now</h3> 
					<h3>Become a Hero</h3>  
					<h3>For Charities</h3> 
				</div>
			</div>
		)
	}
}


// this is taking the howItWorks portion of state and attaching it to the HowItWork's props
function mapStateToProps(state, routing) {
  return Object.assign({}, state.howItWorks, routing)
}

// this is attaching our actions to the HowItWork's component
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NoAuthSubNavigation)