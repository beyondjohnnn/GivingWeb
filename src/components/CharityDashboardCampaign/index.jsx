import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router'

import css from './CharityDashboardCampaign.scss'

import CharityDashboardCampaignLive from '../../components/CharityDashboardCampaignLive'
import CharityDashboardCampaignDraft from '../../components/CharityDashboardCampaignDraft'
import CharityDashboardCampaignReview from '../../components/CharityDashboardCampaignReview'
import CharityDashboardCampaignSuccess from '../../components/CharityDashboardCampaignSuccess'

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
						<Link className="navtab-link" to="/charity-dashboard/campaigns/live"><li className="selected">Live (0)</li></Link>
						<Link className="navtab-link" to="/charity-dashboard/campaigns/draft"><li>Draft (0)</li></Link>
						<Link className="navtab-link" to="/charity-dashboard/campaigns/review"><li>Review (0)</li></Link>
						<Link className="navtab-link" to="/charity-dashboard/campaigns/success"><li>Success (0)</li></Link>
					</ul>
					<Route path={'/charity-dashboard/campaigns/live'} component={CharityDashboardCampaignLive} />
					<Route path={'/charity-dashboard/campaigns/draft'} component={CharityDashboardCampaignDraft} />
					<Route path={'/charity-dashboard/campaigns/review'} component={CharityDashboardCampaignReview} />
					<Route path={'/charity-dashboard/campaigns/success'} component={CharityDashboardCampaignSuccess} />
				</div>
			</div>
		)
	}
}

export default CharityDashboardCampaign