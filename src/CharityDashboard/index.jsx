import React from 'react'
import { Route } from 'react-router'

import css from './CharityDashboard.scss'

import Sidebar from './components/Sidebar'
import Content from './components/Content'
import CampaignsLive from './components/CampaignsLive'
import CampaignsDraft from './components/CampaignsDraft'
import CampaignsReview from './components/CampaignsReview'
import CampaignsSuccess from './components/CampaignsSuccess'


class CharityDashboard extends React.Component {
	render() {
		return (
			<div className="charity-dashboard">
				<div className="main-section">
					<Sidebar />
					<Content />
				</div>
			</div>
		)
	}
}

			

export default CharityDashboard