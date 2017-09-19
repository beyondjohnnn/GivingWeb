import React from 'react'
import { Link } from 'react-router-dom'

import css from './NoAuthLandingPage.scss'

class NoAuthLandingPage extends React.Component {
	render() {
		return (
			<div>
				<div className="hero">
					<div className="captions">
						<h2>
							A Hero Title
						</h2>
						<p>
							Some brief but somewhat inspiring text.
						</p>
						<Link className="call-to-action" to="/">
							Get Started
						</Link>
					</div>
				</div>
				<div className="featured-members">
					<h2>Members</h2>
					<div className="members-list">
						<div className="member-preview">
							<img src="" />
							<h3>Name</h3>
							<h4>Location</h4>
							<p>Small description of the person and their plight.</p>
							<h4>Verification</h4>
							<div className="member-progress">
								<p>50%</p>
								<p>RAISED</p>
							</div>
							<div className="percent-raised">
								<p>£500</p>
								<p>GOAL</p>
							</div>
							<div className="member-goal"></div>
							<button>Donate</button>
							<div>Donations</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default NoAuthLandingPage