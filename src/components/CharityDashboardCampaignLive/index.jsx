import React from 'react'

import css from './CharityDashboardCampaignLive.scss'

import CharityDashboardMemberPreview from '../CharityDashboardMemberPreview'

class CharityDashboardCampaignLive extends React.Component {
	render() {
		return (
			<div className="cd-campaign-live">
				<CharityDashboardMemberPreview />
			</div>
		)
	}
}

export default CharityDashboardCampaignLive