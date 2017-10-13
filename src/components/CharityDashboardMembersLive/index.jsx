import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {calcDonationPercentage} from '../../utils/donations'

import * as actionCreators from '../../actions/helpSomeoneActionCreators'

import css from './CharityDashboardMembersLive.scss'

import CharityDashboardMemberPreview from '../CharityDashboardMemberPreview'

class CharityDashboardMembersLive extends React.Component {

	constructor(props) {
		super(props)
		this.createMemberPreviews = this.createMemberPreviews.bind(this)
	}

	componentDidMount() {
		if (this.props.members.length == 0) {
			this.props.getMembers()
		}
	}

	createMemberPreviews() {
		return this.props.members.map((member, id) => {
			if (calcDonationPercentage(member) < 100){
				return <CharityDashboardMemberPreview key={id} member={member} />
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

export default connect(mapStateToProps, mapDispatchToProps)(CharityDashboardMembersLive)