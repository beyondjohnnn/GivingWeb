import React from 'react'

import css from './CharityDashboardOrganisationDetails.scss'

class CharityDashboardOrganisationDetails extends React.Component {
	render() {
		return (
			<div className="charity-dashboard-organisation-details">
        <img src="images/streetwork.jpg" />
				<div className="banner-image"></div>
        <h3>Streetwork</h3>
        <p className="amount-raised">£3,300</p>
				<p className="amount-raised-text">Total Raised</p>
			</div>
		)
	}
}

export default CharityDashboardOrganisationDetails 