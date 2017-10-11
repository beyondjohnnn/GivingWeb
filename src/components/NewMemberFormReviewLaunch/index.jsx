import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actionCreators from '../../actions/newMemberProcess'

import css from './NewMemberFormReviewLaunch.scss'

import { isStringValid, isMonetaryValueValid } from "./../../utils/validator"

class NewMemberFormReviewLaunch extends React.Component {

	constructor(props){
		super(props)
		this.onClickSubmit = this.onClickSubmit.bind(this)
	}

	onClickSubmit(){

		if(isStringValid(this.props.memberName) &&
			isMonetaryValueValid(this.props.goal) &&
			isStringValid(this.props.location) &&
			isStringValid(this.props.story.reasonForUse) &&
			isStringValid(this.props.story.story) &&
			isStringValid(this.props.story.futureGoals)
		){
			this.props.submitNewMember(this.props)
		}else{
			console.log("invalid input");
		}

	}

	makeMemberStory(why, story, future_goal) {
	  temp_obj = [
	    "<h3> Why I'am Using GivingWeb </h3>",
	    "<p>", why, "</p>",
	    "<h3> My Story </h3>",
	    "<p>", story, "</p>",
	    "<h3> My Future Goals </h3>",
	    "<p>", future_goal, "</p>"
	  ]

	  html_string = temp_obj.join("")
	  return html_string
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

				<button className="submit-button" onClick={this.onClickSubmit}>Submit</button>
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
