import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {calcDonationPercentage} from '../../../utils/donations'

import * as actionCreators from '../../../actions/helpSomeoneActionCreators'

import css from './CampaignsSuccess.scss'

import MemberPreview from '../MemberPreview'

class CampaignsSuccess extends React.Component {


	render() {
		return (
			<div className="cd-campaign-success">
				Campaigns success
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

export default CampaignsSuccess