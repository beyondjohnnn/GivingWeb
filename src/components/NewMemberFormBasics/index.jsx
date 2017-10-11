import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actionCreators from '../../actions/newMemberProcess'

import css from './NewMemberFormBasics.scss'

class NewMemberFormBasics extends React.Component {

	handleFormSubmit(e) {
		e.preventDefault()

		const newMemberDetailsBasics = {
			member_name: this.refs.member_name.value,
			goal: this.refs.goal.value,
			location: this.refs.location.value
		}

		this.props.submitNewMemberBasics(newMemberDetailsBasics)
	}

	render() {
		return (
			<div className="new-member-form-basics">
				<form className="basics-form" action="/" method="post" onSubmit={this.handleFormSubmit.bind(this)}>
					<div className="form-field">
						<label htmlFor="member_name">Name</label>
						<input id="member_name" ref="member_name" type="text" className="member-name" name="member_name" />
					</div>
					<div className="form-field">
						<label htmlFor="goal">Fundraising Goal</label>
						<input id="goal" ref="goal" type="text" className="goal" name="goal" />
					</div>
					<div className="form-field">
						<label htmlFor="location">Location</label>
						<input id="location" ref="location" type="text" className="location" name="location" />
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

export default connect(mapStateToProps, mapDispatchToProps)(NewMemberFormBasics)