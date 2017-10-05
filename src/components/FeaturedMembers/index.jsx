import React from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import * as actionCreators from '../../actions/helpSomeoneActionCreator'

import css from './FeaturedMembers.scss'

import MemberPreview from '../MemberPreview'

class FeaturedMembers extends React.Component {

	constructor(props){
		super(props);
	}

	componentWillMount(){
		this.props.getMembers();
	}

	prepareMembers(){
		let members = [this.props.members[0], this.props.members[1], this.props.members[4]];
		let memberElements = [];

		for(let index in members){
			if(!members[index]) members[index] = {donations: []};
			memberElements.push(<MemberPreview key={index} member={members[index]} />)
		}

		return memberElements
	}

	render() {

		return (
			<div className="featured-members">
				<h2>Members</h2>
				<div className="members-list">
					{this.prepareMembers()}
				</div>
			</div>
		)
	}
}

// this is taking the helpSomeone portion of state and attaching it to the NoAuthLandingPage props
function mapStateToProps(state, routing) {
  return Object.assign({}, state.helpSomeone, routing)
}

// this is attaching our actions to the NoAuthLandingPage component
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedMembers)
