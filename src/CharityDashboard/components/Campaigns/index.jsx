import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router'

import css from './Campaigns.scss'

import CampaignsLive from '../CampaignsLive'
import CampaignsDraft from '../CampaignsDraft'
import CampaignsReview from '../CampaignsReview'
import CampaignsSuccess from '../CampaignsSuccess'

class Campaigns extends React.Component {
	render() {
		return (
			<div className="cd-campaigns">
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
					<Route path={'/charity-dashboard/campaigns/live'} component={CampaignsLive} />
					<Route path={'/charity-dashboard/campaigns/draft'} component={CampaignsDraft} />
					<Route path={'/charity-dashboard/campaigns/review'} component={CampaignsReview} />
					<Route path={'/charity-dashboard/campaigns/success'} component={CampaignsSuccess} />
				</div>
			</div>
		)
	}
}

export default Campaigns
