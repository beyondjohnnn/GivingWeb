import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import * as actionCreators from '../../actions/charityDashboardSidebarActionCreators'

import css from './CareButton.scss'

class CareButton extends React.Component {

	render() {
		return (
			<div className="care-button">
				<button><i className="fa fa-heart-o"></i>Care</button>
				<div className="care-count-wrapper">
					<div className="care-count-square"></div>
					<p>222</p>
				</div>
			</div>
		)
	}
}

export default CareButton