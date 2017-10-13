import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {calcDonationPercentage} from '../../utils/donations'

import * as actionCreators from '../../actions/dashboard'

import css from './CharityDashboardMembersSuccess.scss'

import CharityDashboardMemberPreview from '../CharityDashboardMemberPreview'

class CharityDashboardMembersSuccess extends React.Component {

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
			return <CharityDashboardMemberPreview key={id} member={member} />
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

export default connect(mapStateToProps, mapDispatchToProps)(CharityDashboardMembersSuccess)