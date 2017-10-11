import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actionCreators from '../../actions/newMemberProcess'

import css from './NewMemberFormBasics.scss'

class NewMemberFormBasics extends React.Component {

	constructor(props){
		super(props)
		this.onEditName = this.onEditName.bind(this)
		this.onEditGoal = this.onEditGoal.bind(this)
	}

	handleFormSubmit(e) {
		e.preventDefault()
		console.log("click");
		const newMemberDetailsBasics = {
			goal: this.refs.goal.value,
			location: this.refs.location.value
		}

		this.props.submitNewMemberBasics(newMemberDetailsBasics)
	}

	onEditName(event){
		this.props.editNewMemberName(event.target.value)
	}

	onEditGoal(event){
		this.props.editNewMemberGoal(event.target.value)
	}

	render() {
		return (
			<div className="new-member-form-basics">
				<section className="basics-form">
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
						<input id="location" ref="location" type="text" className="location" name="location" />
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

export default connect(mapStateToProps, mapDispatchToProps)(NewMemberFormBasics)
