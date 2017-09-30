import React from 'react'
import { Link } from 'react-router-dom'

import css from './MemberPreview.scss'

class MemberPreview extends React.Component {
	render() {
		return (
			<div className="member-preview">
				<img className="member-photo" src="http://via.placeholder.com/350x350" />
				<h3 className="member-name">Graham</h3>
				<h4 className="member-location"><i className="fa fa-map-marker"></i> Edinburgh, Scotland</h4>
				<p className="member-description">Small description of the person and their plight. This description is made longer to see how it copes with text exceeding container size.</p>
				<h4 className="member-verification">
					<i className="fa fa-check-circle-o"></i>
					Verified by <Link className="charity-link" to="charity-page">Streetwork</Link>
				</h4>
				<div className="donation-details">
					<div className="member-progress-bar">
						<div className="bar-fill"></div>
					</div>
					<div className="progress-details">
						<div className="member-progress">
							<p className="progress-percentage">50%</p>
							<p className="progress-label">RAISED</p>
						</div>
						<div className="member-goal">
							<p className="goal-amount">£500</p>
							<p className="goal-label">GOAL</p>
						</div>
					</div>
					<button className="donate-button">Donate</button>
				</div>
				<div className="member-donations">Donations</div>
			</div>
		)
	}
} 

export default MemberPreview