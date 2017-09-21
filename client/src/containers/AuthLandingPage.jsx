import React from 'react'
import { Link } from 'react-router-dom'

import css from './AuthLandingPage.scss'

class AuthLandingPage extends React.Component {
	render() {
		return (
			<div className="auth-landing-page">
				<div className="user-details">
					<div className="user-photo">
						<img src="http://via.placeholder.com/150x150" />
						<h2>Peter Peterson</h2>
					</div>
					<div className="user-fundraising">
						<h3>Your fundraising</h3><Link to="">See all</Link>
						<img src="http://via.placeholder.com/150x150" />
						<div>
							<p>
								Fundraiser name
							</p>
							<p>
								% achieved
							</p>
							<Link to="">View</Link><Link to="">Edit</Link>
						</div>
						<Link to="">Start fundraiser</Link>
					</div>
					<div className="">
						<h3>Recent Donations</h3><Link to="">See all</Link>
					</div>
				</div>
				<div className="right-container">
					<div className="authenticated-welcome"></div>
					<div className="popular-fundraisers"></div>
					<div className="homepage-fundraiser-example"></div>
				</div>
			</div>
		)
	}
}

export default AuthLandingPage