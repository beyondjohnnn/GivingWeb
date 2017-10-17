import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {calcDonationPercentage} from '../../../Shared/utils/donations'

import * as actionCreators from '../../../actions/dashboard'

import css from './MembersSuccess.scss'

import MemberPreview from '../MemberPreview'

class MembersSuccess extends React.Component {

	constructor(props) {
		super(props)
		this.createMemberPreviews = this.createMemberPreviews.bind(this)
	}

	componentDidMount() {
		this.props.setDashboardTab('success')
		if (this.props.members.length == 0) {
			// this.props.getMembers()
		}
	}

	createMemberPreviews() {
		return this.props.members.filter((member) => {
			return calcDonationPercentage(member) >= 100
		}).map((member, id) => {
			return <MemberPreview key={id} member={member} />
		})
	}

	render() {
		return (
			<div className="cd-members-success">
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

export default connect(mapStateToProps, mapDispatchToProps)(MembersSuccess)
