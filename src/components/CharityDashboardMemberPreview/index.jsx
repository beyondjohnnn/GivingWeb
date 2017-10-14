import React from 'react'
import { calcDonationPercentage, getDonationBarColour, calcTotalDonations } from '../../utils/donations'

import css from './CharityDashboardMemberPreview.scss'

class CharityDashboardMemberPreview extends React.Component {

	renderMembersImage() {
		if (this.props.member.url_image == undefined) {
			return `images/${this.props.member.name}.png`
		} else {
			return this.props.member.url_image
		}
	}

	render() {
		let previewStyle = this.props.style || {}
		const {member} = this.props
		const percentage = calcDonationPercentage(member)
		const textPercentage = percentage.toString() + "%"
		const donationBarStyles = {
			"width": textPercentage,
			"backgroundColor": getDonationBarColour(percentage)
		}
		return (
			<div className="cd-member-preview">
				<img src={this.renderMembersImage()} alt=""/>
				<h2>{member.snippet}</h2>
				<div className="donation-details">
					<h4 className="no-of-donors">{member.donations.length} donors</h4>
					<div className="member-progress-bar">
						<div className="bar-fill" style={donationBarStyles}></div>
					</div>
					<div className="donation-ratio">£{calcTotalDonations(member)} of £{member.goal} raised</div>
				</div>
				<div className="percentage-container">
					<p className="donation-percentage">{textPercentage}</p>
				</div>
			</div>
		)
	}
}

export default CharityDashboardMemberPreview
