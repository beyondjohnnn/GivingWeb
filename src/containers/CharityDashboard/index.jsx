import React from 'react'

import css from './CharityDashboard.scss'

import CharityDashboardSidebar from '../../components/CharityDashboardSidebar'

class CharityDashboard extends React.Component {
	render() {
		return (
			<div className="charity-dashboard">
				<div className="main-section">
					<CharityDashboardSidebar />
					<div className="charity-dashboard-content">
						<div className="breadcrumbs">
							<i className="fa fa-home"></i> HOME
						</div>
					</div>
				</div>

			</div>
		)
	}
}


export default CharityDashboard