import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../actions/howItWorksActionCreators'


import css from './HowItWorks.scss'

class HowItWorks extends React.Component {
	render() {
		return (
			<div className="how-it-works" id="how-it-works">
				<div className="button-wrapper">
					<button onClick={this.props.toggleHowItWorks}><i className="fa fa-times" aria-hidden="true"></i></button>
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

export default connect(mapStateToProps, mapDispatchToProps)(HowItWorks)