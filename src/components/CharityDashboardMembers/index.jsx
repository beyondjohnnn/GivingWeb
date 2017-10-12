import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router'

import css from './CharityDashboardMembers.scss'

import CharityDashboardMembersLive from '../CharityDashboardMembersLive'
import CharityDashboardMembersDraft from '../CharityDashboardMembersDraft'
import CharityDashboardMembersReview from '../CharityDashboardMembersReview'
import CharityDashboardMembersSuccess from '../CharityDashboardMembersSuccess'

class CharityDashboardMembers extends React.Component {
	render() {
		return (
			<div className="cd-members">
				<div className="header">
					<h2>Members</h2>
					<Link to="/charity-dashboard/members/new" className="create-member-link">Create a new member</Link>
				</div>
				<div className="cd-current-members">
					<ul className="members-nav-tabs">
						<Link className="navtab-link" to="/charity-dashboard/members/live"><li className="selected">Live (0)</li></Link>
						<Link className="navtab-link" to="/charity-dashboard/members/draft"><li>Draft (0)</li></Link>
						<Link className="navtab-link" to="/charity-dashboard/members/review"><li>Review (0)</li></Link>
						<Link className="navtab-link" to="/charity-dashboard/members/success"><li>Success (0)</li></Link>
					</ul>
					<Route exact path="/charity-dashboard" component={CharityDashboardMembersLive} />
					<Route exact path="/charity-dashboard/members" component={CharityDashboardMembersLive} />
					<Route path="/charity-dashboard/members/live" component={CharityDashboardMembersLive} />
					<Route path="/charity-dashboard/members/draft" component={CharityDashboardMembersDraft} />
					<Route path="/charity-dashboard/members/review" component={CharityDashboardMembersReview} />
					<Route path="/charity-dashboard/members/success" component={CharityDashboardMembersSuccess} />
				</div>
			</div>
		)
	}
}

export default CharityDashboardMembers
