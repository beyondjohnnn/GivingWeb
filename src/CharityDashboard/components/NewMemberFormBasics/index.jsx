import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actionCreators from '../../../actions/newMemberProcess'

import css from './NewMemberFormBasics.scss'

class NewMemberFormBasics extends React.Component {

	constructor(props){
		super(props)
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
		this.onEditName = this.onEditName.bind(this)
		this.onEditGoal = this.onEditGoal.bind(this)
		this.onEditLocation = this.onEditLocation.bind(this)
	}

	onEditName(event){
		this.props.editNewMemberName(event.target.value)
	}

	onEditGoal(event){
		this.props.editNewMemberGoal(event.target.value)
	}

	onEditLocation(event){
		this.props.editNewMemberLocation(event.target.value)
	}

	handleFormSubmit(event){
		event.preventDefault()
		this.props.moveToStoryTab()
	}

	render() {
		return (
			<div className="new-member-form-basics">
				<form className="basics-form" action="/" method="post" onSubmit={this.handleFormSubmit}>
					<div className="form-field">
						<label htmlFor="member_name">Name</label>
						<input id="member_name" ref="member_name" type="text"
							className="member-name" name="member_name"
							onChange={this.onEditName} value={this.props.name}
						/>
					</div>
					<div className="form-field">
						<label htmlFor="goal">Fundraising Goal (£)</label>
						<input id="goal" ref="goal" type="number" min="0" step="1" className="goal" name="goal"
							onChange={this.onEditGoal} value={this.props.goal}
					 	/>
					</div>
					<div className="form-field">
						<label htmlFor="location">Location</label>
						<input id="location" ref="location" type="text" className="location" name="location"
							onChange={this.onEditLocation} value={this.props.location}
						/>
					</div>
					<input type="submit" value="Next"/>
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
