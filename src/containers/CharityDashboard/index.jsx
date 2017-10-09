import React from 'react'
import { Route } from 'react-router'

import css from './CharityDashboard.scss'

import CharityDashboardSidebar from '../../components/CharityDashboardSidebar'
import CharityDashboardContent from '../../components/CharityDashboardContent'
import CharityDashboardCampaignLive from '../../components/CharityDashboardCampaignLive'
import CharityDashboardCampaignDraft from '../../components/CharityDashboardCampaignDraft'
import CharityDashboardCampaignReview from '../../components/CharityDashboardCampaignReview'
import CharityDashboardCampaignSuccess from '../../components/CharityDashboardCampaignSuccess'


class CharityDashboard extends React.Component {
	render() {
		console.log(this.props.match)
		return (
			<div className="charity-dashboard">
				<div className="main-section">
					<CharityDashboardSidebar />
					<CharityDashboardContent>
						<Route path={this.props.match.url + '/live'} component={CharityDashboardCampaignLive} />
						<Route path={this.props.match.url + '/draft'} component={CharityDashboardCampaignDraft} />
						<Route path={this.props.match.url + '/review'} component={CharityDashboardCampaignReview} />
						<Route path={this.props.match.url + '/success'} component={CharityDashboardCampaignSuccess} />
					</CharityDashboardContent>
				</div>

			</div>
		)
	}
}


export default CharityDashboard