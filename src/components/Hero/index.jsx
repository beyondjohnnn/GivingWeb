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
					<button className="call-to-action" onClick={this.props.scroll}>
						SEE HOW IT WORKS
						<i className={this.renderArrowDirection()} aria-hidden="true"></i>
					</button>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state, routing) {
  return { ...state.howItWorks, ...routing }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero)
