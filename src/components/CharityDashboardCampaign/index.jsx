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
			</div>
		)
	}
}

export default CharityDashboardCampaign