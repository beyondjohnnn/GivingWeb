import React from 'react'

import css from './CharityDashboardSidebar.scss'
import CharityDashboardOrganisationDetails from '../../components/CharityDashboardOrganisationDetails'


class CharityDashboardSidebar extends React.Component {
	render() {
		return (
			<div className="charity-dashboard-sidebar">
				<CharityDashboardOrganisationDetails />
			</div>
		)
	}
}

export default CharityDashboardSidebar 