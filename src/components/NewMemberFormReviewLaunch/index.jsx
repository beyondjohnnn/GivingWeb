import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actionCreators from '../../actions/newMemberProcess'

import css from './NewMemberFormReviewLaunch.scss'

class NewMemberFormReviewLaunch extends React.Component {

	onClickSubmit(){
		
	}

	render() {
		return (
			<div className="new-member-form-review-launch">
				<p>Please review the details below and when you're happy, click submit.</p>

				<img src={this.props.imagePreviewUrl} />

				<h3>Name</h3>
				<p>{this.props.memberName}</p>

				<h3>Fundraising Goal</h3>
				<p>£ {this.props.goal}</p>

				<h3>Location</h3>
				<p>{this.props.location}</p>

				<h3>Reason for use</h3>
				<p>{this.props.story.reasonForUse}</p>

				<h3>Story</h3>
				<p>{this.props.story.story}</p>

				<h3>Future goals</h3>
				<p>{this.props.story.futureGoals}</p>

				<button className="submit-button">Submit</button>
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
