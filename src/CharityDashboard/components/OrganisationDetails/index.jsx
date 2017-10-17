import React from 'react'

import css from './OrganisationDetails.scss'

class OrganisationDetails extends React.Component {
	render() {
		return (
			<div className="cd-organisation-details">
        <img src="images/streetwork.jpg" />
				<div className="banner-image"></div>
        <h3>Streetwork</h3>
        <p className="amount-raised">£3,300</p>
				<p className="amount-raised-text">Total Raised</p>
			</div>
		)
	}
}

export default OrganisationDetails 