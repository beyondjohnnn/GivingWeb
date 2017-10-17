import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import * as actionCreators from '../../../actions/howItWorksActionCreators'

import css from './HowItWorks.scss'

class HowItWorks extends React.Component {

	transitionClassName() {
		if (this.props.howItWorksVisible) {
			return "how-it-works visible"
		} else {
			return "how-it-works"
		}
	}

	render() {
		return (
			<div className={this.transitionClassName()} id="how-it-works">
				<div className="button-wrapper">
					<button onClick={this.props.toggleHowItWorks}><i className="fa fa-times" aria-hidden="true"></i></button>
				</div>
				<div className="how-it-works-main-container">
					<h3 className="how-it-works-header">How GivingWeb Works</h3>
					<div className="all-steps-wrapper">
						<div className="step-container">
							<i className="fa fa-address-card-o" aria-hidden="true"></i>
							<p className="step-description">Charity Partners Create Campaigns</p>
						</div>
						<i className="fa fa-arrow-right" aria-hidden="true"></i>
						<div className="step-container">
							<i className="fa fa-handshake-o" aria-hidden="true"></i>
							<p className="step-description">You Fundraise or Donate to Campaigns</p>
						</div>
						<i className="fa fa-arrow-right" aria-hidden="true"></i>
						<div className="step-container">
							<i className="fa fa-universal-access" aria-hidden="true"></i>
							<p className="step-description">Charities Use Donations</p>
						</div>
					</div>
					<div className="learn-more-container">
						<p>Still have questions?</p>
						<Link to="" className="learn-more-link">Learn more.</Link>
					</div>

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

export default connect(mapStateToProps, mapDispatchToProps)(HowItWorks)
