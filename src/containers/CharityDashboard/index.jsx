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
		return (
			<div className="charity-dashboard">
				<div className="main-section">
					<CharityDashboardSidebar />
					<CharityDashboardContent />
				</div>

			</div>
		)
	}
}

			

export default CharityDashboard