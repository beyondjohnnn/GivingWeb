import React from 'react'

import css from './CampaignsLive.scss'

import MemberPreview from '../MemberPreview'

class CampaignsLive extends React.Component {
	render() {
		return (
			<div className="cd-campaign-live">
				<MemberPreview />
			</div>
		)
	}
}

export default CampaignsLive