import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actionCreators from '../../actions/newMemberProcess'

import css from './NewMemberFormStory.scss'

class NewMemberFormStory extends React.Component {

	handleFormSubmit(e) {
		e.preventDefault()

		const newMemberDetailsStory = {
			reasonForUse: this.refs.reason_for_use.value,
			story: this.refs.story.value,
			futureGoals: this.refs.future_goals.value
		}

		this.props.submitNewMemberStory({ story: newMemberDetailsStory })
	}

	render() {
		return (
			<div className="new-member-form-story">
				<form className="story-form" action="/" method="post" onSubmit={this.handleFormSubmit.bind(this)}>
					<div className="form-field">
						<label htmlFor="reason_for_use">Reason For Using GivingWeb</label>
						<textarea id="reason_for_use" ref="reason_for_use" className="reason-for-use" name="reason_for_use"	 />
					</div>
					<div className="form-field">
						<label htmlFor="story">Member Story</label>
						<textarea id="story" ref="story" className="story" name="story" />
					</div>
					<div className="form-field">
						<label htmlFor="future_goals">Future Goals</label>
						<textarea id="future_goals" ref="future_goals" className="future-goals" name="future_goals" />
					</div>
					<input type="submit" value="Next" />
				</form>
			</div>
		)
	}
}

function mapStateToProps(state, routing) {
	return { ...state.newMemberProcess, ...routing}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMemberFormStory)
