import React from 'react'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import css from './FeaturedMemberSelector.scss'
import * as actionCreators from '../../../actions/charityDashBoardContentActionCreators'


class FeaturedMemberSelector extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			feat_member: true
		}
	}

	onChangeSelector(event) {
		this.addMember(event.target.value)
	}

	addMember(id) {
		const newFeatMember = {
			charity_id: this.props.charity_id,
			member_id: id,
			position: this.props.position
		}
		this.props.createFeaturedMember(newFeatMember)
	}

	onClickAddMember() {
		this.setState({
			feat_member: false
		})
	}

	renderMembers(){
		if(this.state.feat_member === true ){
			return(
				<button
				className="member-placeholder"
				onClick={this.onClickAddMember.bind(this)}>Click To Add Member
				</button>
			)} else {
		const maping = this.props.members.map(
				(member)=> {
					return (
						<option key={member.id} value={member.id}>{member.name}
						</option>
					)
				}
			)
			return (<select onChange={this.onChangeSelector.bind(this)}>{maping}</select>)
		}
	}
	//onChange needs to be changed to onSelect but ins't working for some reason

	render() {
		return (
			<div className="featured-member-selector">
				<div className="member-one">
					<div className="del-div">
					</div>
						{this.renderMembers()}
					<h3>member</h3>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state, routing) {
	return { ...state.helpSomeone, ...state.charityDashboardContent, ...routing }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedMemberSelector)
