import React from 'react'

import css from './CharityDashboard.scss'

import CharityDashboardSidebar from '../../components/CharityDashboardSidebar'
import CharityDashboardContent from '../../components/CharityDashboardContent'

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