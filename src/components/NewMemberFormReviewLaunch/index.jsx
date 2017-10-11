import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actionCreators from '../../actions/newMemberProcess'

import css from './NewMemberFormReviewLaunch.scss'

class NewMemberFormReviewLaunch extends React.Component {
	render() {
		return (
			<div className="new-member-form-review-launch">
				<img src={this.props.imagePreviewUrl} />

				<h3>Name</h3>
				<p>{this.props.member_name}</p>

				<h3>Fundraising Goal</h3>
				<p>£ {this.props.goal}</p>

				<h3>Location</h3>
				<p>{this.props.location}</p>

				<h3>Reason for use</h3>
				<p>{this.props.story.reason_for_use}</p>

				<h3>Story</h3>
				<p>{this.props.story.story}</p>

				<h3>Future goals</h3>
				<p>{this.props.story.future_goals}</p>
			</div>
		)
	}
}

function mapStateToProps(state, routing) {
	return { ...state.newMemberProcess, ...routing }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMemberFormReviewLaunch)