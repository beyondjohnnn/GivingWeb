import React from 'react'
import { Link } from 'react-router-dom'
import { calcDonationPercentage, getDonationBarColour } from '../../utils/donations'

import css from './MemberPreview.scss'

class MemberPreview extends React.Component {

	createCompletedBanner(percentage) {
		if (percentage >= 100) {
			return <div className="completed-banner">Completed!</div>
		}
	}

	createDonateButton(percentage) {
		if (percentage < 100) {
			return <button className="donate-button">Donate</button>
		}
	}

	render() {
		let previewStyle = this.props.style
		if(!previewStyle) previewStyle = {}
		const {member} = this.props
		const percentage = calcDonationPercentage(member)
		const textPercentage = percentage.toString() + "%"
		const donationBarColour = getDonationBarColour(percentage)
		const donationBarStyles = {
			"width": textPercentage,
			"backgroundColor": donationBarColour
		}

		return (
			<div className="member-preview" style={previewStyle}>
				<div className="member-photo-container">
					{this.createCompletedBanner(percentage)}
					<Link className="member-link" to={`/member?member_id=${member.id}`}><img className="member-photo" src={`images/${member.name}.png`} /></Link>
					}
				</div>
				<div className="member-information">
					<Link className="member-link" to={`/member?member_id=${member.id}`}><h3 className="member-name">{member.name}</h3></Link>
					<h4 className="member-location"><i className="fa fa-map-marker"></i>{member.location}</h4>
					<p className="member-description">{member.snippet}</p>
					<h4 className="member-verification">
						<i className="fa fa-check-circle-o" />
						Verified by <Link className="charity-link" to="charity-page">Streetwork</Link>
					</h4>
					<div className="donation-details">
						<div className="member-progress-bar">
							<div className="bar-fill" style={donationBarStyles}></div>
						</div>
						<div className="progress-details">
							<div className="member-progress">
								<p className="progress-percentage">{textPercentage}</p>
								<p className="progress-label">RAISED</p>
							</div>
							<div className="member-goal">
								<p className="goal-amount">£{member.goal}</p>
								<p className="goal-label">GOAL</p>
							</div>
						</div>
						{this.createDonateButton(percentage)}
					</div>
					<div className="member-donations">Donations</div>
				</div>
			</div>	
		)
	}
}

export default MemberPreview
