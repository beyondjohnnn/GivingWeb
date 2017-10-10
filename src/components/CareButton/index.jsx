import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../../actions/careButtonActionCreators'

import Tooltip from '../Tooltip'
import css from './CareButton.scss'

class CareButton extends React.Component {

	createTooltipStyle() {
		return this.props.tooltipVisible ? "tooltip-component care-button-tooltip" : "tooltip-component care-button-tooltip hidden"
	}

	render() {
		return (
			<div className="care-button">
				<button onMouseEnter={this.props.toggleTooltip} onMouseLeave={this.props.toggleTooltip}>
					<Tooltip style={this.createTooltipStyle()} text="Click here to follow the charities progress" />
					<i className="fa fa-heart-o"></i>
					Care
				</button>	
				<div className="care-count-wrapper">
					<div className="care-count-square"></div>
					<p>222</p>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state, routing) {
  return { ...state.careButton, ...routing }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CareButton)