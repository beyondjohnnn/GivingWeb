import React from 'react'
import { Link } from 'react-router-dom'

import css from './CharityDashboardCampaign.scss'

class CharityDashboardCampaign extends React.Component {
	render() {
		return (
			<div className="cd-campaign">
				<div className="header">
					<h2>Campaigns</h2>
					<Link to="" className="create-campaign-link">Create a new campaign</Link>
				</div>
				<div className="cd-current-campaigns">
					<ul className="campaign-nav-tabs">
						<li className="selected">Live (0)</li>
						<li>Draft (0)</li>
						<li>Review (0)</li>
						<li>Success (0)</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default CharityDashboardCampaign