import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {calcDonationPercentage} from '../../../Shared/utils/donations'

import * as helpSomeoneActionCreators from '../../../actions/helpSomeoneActionCreators'
import * as dashboardActionCreators from '../../../actions/dashboard'

import css from './MyOrganisation.scss'

import MembersLive from '../MembersLive'
import MembersDraft from '../MembersDraft'
import MembersReview from '../MembersReview'
import MembersSuccess from '../MembersSuccess'

class MyOrganisation extends React.Component {

	render() {
		return (
			<div className="dashboard-container">
				<div className="header">
					<h2>My Organisation</h2>
				</div>
			</div>
		)
	}
}

export default MyOrganisation
