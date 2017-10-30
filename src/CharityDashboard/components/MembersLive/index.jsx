import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {calcDonationPercentage} from '../../../Shared/utils/donations'

import * as actionCreators from '../../../actions/helpSomeoneActionCreators'

import css from './MembersLive.scss'

import MemberPreview from '../MemberPreview'

class MembersLive extends React.Component {

	constructor(props) {
		super(props)
		this.createMemberPreviews = this.createMemberPreviews.bind(this)
	}

	componentDidMount() {
		if (this.props.members.length === 0) {
			this.props.getMembers()
		}
	}

	createMemberPreviews() {
		return this.props.members.map((member, id) => {
			if (calcDonationPercentage(member) < 100){
				return <MemberPreview key={id} member={member} />
			}
		})
	}

	render() {
		return (
			<div className="cd-members-live">
				{this.createMemberPreviews()}
			</div>
		)
	}
}

function mapStateToProps(state, routing) {
	return { ...state.helpSomeone, ...routing}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MembersLive)
