import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actionCreators from '../../actions/newMemberProcess'

import css from './NewMemberFormStory.scss'

class NewMemberFormStory extends React.Component {

	constructor(props){
		super(props)
		this.onEditReasonForUse = this.onEditReasonForUse.bind(this)
		this.onEditStory = this.onEditStory.bind(this)
		this.onEditFutureGoals = this.onEditFutureGoals.bind(this)
	}

	onEditReasonForUse(event){
		this.props.editNewMemberReasonForUse(event.target.value)
	}

	onEditStory(event){
		this.props.editNewMemberStory(event.target.value)
	}

	onEditFutureGoals(event){
		this.props.editNewMemberFutureGoals(event.target.value)
	}

	render() {
		return (
			<div className="new-member-form-story">
				<section className="story-form">
					<div className="form-field">
						<label htmlFor="reason_for_use">Reason For Using GivingWeb</label>
						<textarea id="reason_for_use" ref="reason_for_use" className="reason-for-use" name="reason_for_use"
							onChange={this.onEditReasonForUse} value={this.props.story.reasonForUse}
						/>
					</div>
					<div className="form-field">
						<label htmlFor="story">Member Story</label>
						<textarea id="story" ref="story" className="story" name="story"
							onChange={this.onEditStory} value={this.props.story.story}
						/>
					</div>
					<div className="form-field">
						<label htmlFor="future_goals">Future Goals</label>
						<textarea id="future_goals" ref="future_goals" className="future-goals" name="future_goals"
							onChange={this.onEditFutureGoals} value={this.props.story.futureGoals}
						/>
					</div>
					<input type="submit" value="Next" />
				</section>
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
