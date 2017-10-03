import React from 'react'

import css from './CharityDashboard.scss'

import CharitySidebarNav from '../../components/CharitySidebarNav'

class CharityDashboard extends React.Component {
	render() {
		return (
			<div className="charity-dashboard">
				<div className="main-section">
					<CharitySidebarNav />
					<div className="dashboard-current-page">
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