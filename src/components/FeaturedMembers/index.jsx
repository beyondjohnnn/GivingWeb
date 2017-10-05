import React from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import * as actionCreators from '../../actions/helpSomeoneActionCreator'

import css from './FeaturedMembers.scss'

import MemberPreview from '../MemberPreview'

class FeaturedMembers extends React.Component {

	componentDidMount(){
		this.props.getMembers()
	}

	render() {
		return (
			<div className="featured-members">
				<h2>Featured Members</h2>
				<div className="members-list">
					<MemberPreview member={this.props.members[0]} />
					<MemberPreview member={this.props.members[1]} />
					<MemberPreview member={this.props.members[4]} />
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
