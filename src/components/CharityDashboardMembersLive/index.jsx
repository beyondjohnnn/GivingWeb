import React from 'react'

import css from './CharityDashboardMembersLive.scss'

import CharityDashboardMemberPreview from '../CharityDashboardMemberPreview'

class CharityDashboardMembersLive extends React.Component {
	render() {
		return (
			<div className="cd-members-live">
				<CharityDashboardMemberPreview />
			</div>
		)
	}
}

export default CharityDashboardMembersLive