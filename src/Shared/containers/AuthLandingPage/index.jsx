import React from 'react'
import { Link } from 'react-router-dom'

import css from './AuthLandingPage.scss'

class AuthLandingPage extends React.Component {
	render() {
		return (
			<div className="auth-landing-page">
				<div className="user-details">
					<div className="user-photo">
						<img src="https://via.placeholder.com/150x150" />
						<h2>Peter Peterson</h2>
					</div>

					<div className="user-fundraising">
						<div className="fundraising-title">
							<h3>Your fundraising</h3>
							<Link to="">See all</Link>
						</div>
						<div className="example-fundraiser">
							<img src="https://via.placeholder.com/150x150" />
							<div className="fundraiser-details">
								<h4>
									Fundraiser name
								</h4>
								<p>
									% achieved
								</p>
								<div className="fundraiser-links">
									<Link to="">View</Link>
									<Link to="">Edit</Link>
								</div>
							</div>
						</div>
						<Link to="">Start fundraiser</Link>
					</div>

					<div className="recent-donations">
						<div className="recent-donations-title">
							<h3>Recent Donations</h3><Link to="">See all</Link>
						</div>
						<div className="donations-list">
							You have no recent donations
						</div>
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