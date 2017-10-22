import React from 'react'

import css from './MyOrganisation.scss'

import FeaturedMemberController from './../FeaturedMemberController'

class MyOrganisation extends React.Component {

	render() {
		return (
			<div className="dashboard-container">
				<div className="header">
					<h2>My Organisation</h2>
				</div>
				<FeaturedMemberController />
			</div>
		)
	}
}

export default MyOrganisation
