import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../../actions/careButtonActionCreators'

import Tooltip from '../Tooltip'
import css from './CareButton.scss'

class CareButton extends React.Component {

	renderTooltip() {
		console.log({ tooltipVisible: this.props.tooltipVisible})
		if (this.props.tooltipVisible) {
			return <Tooltip style="tooltip care-button-tooltip" text="Click here to follow the charities progress" /> 
		} else {
			return <Tooltip style="tooltip care-button-tooltip hidden" text="Click here to follow the charities progress"/>
		}
	}

	render() {
		return (
			<div className="care-button">
				<button onMouseEnter={this.props.showTooltip}>
					{this.renderTooltip()}
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
  return Object.assign({}, state.careButton, routing)
}

// this is attaching our actions to the Navigation component
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CareButton)