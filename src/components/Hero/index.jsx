import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import * as actionCreators from '../../actions/howItWorksActionCreators'

import css from './Hero.scss'

class Hero extends React.Component {

	renderArrowDirection() {
		if (this.props.howItWorksVisible){
			return "fa fa-chevron-up"
		} else {
			return "fa fa-chevron-down"
		}
	}

	smoothScrollToHowItWorks() {
		this.props.toggleHowItWorks()
	}

	render() {
		return (
			<div className="hero">
				<div className="captions">
					<h2>
						Make Change Happen
					</h2>
					<p>
						Directly support amazing people and charities today
					</p>
					<button className="call-to-action" onClick={this.smoothScrollToHowItWorks.bind(this)}>
						SEE HOW IT WORKS
						<i className={this.renderArrowDirection()} aria-hidden="true"></i>
					</button>
				</div>
			</div>
		)
	}
}

// this is taking the howItWorks portion of state and attaching it to the Hero's props
function mapStateToProps(state, routing) {
  return Object.assign({}, state.howItWorks, routing)
}

// this is attaching our actions to the Hero's component
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero)