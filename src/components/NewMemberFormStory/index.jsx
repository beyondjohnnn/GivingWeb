import React from 'react'

import css from './NewMemberFormStory.scss'

class NewMemberFormStory extends React.Component {

	handleFormSubmit(e) {
		e.preventDefault()

		const newMemberDetailsStory = {
			member_name: this.refs.member_name.value,
			goal: this.refs.goal.value,
			location: this.refs.location.value
		}

		this.props.submitNewMemberStory(newMemberDetailsStory)
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

export default NewMemberFormStory