import React, {Component} from 'react'

import { calcDonationPercentage, getDonationBarColour, calcTotalDonations } from '../../../Shared/utils/donations'

import css from './DonationSection.scss'

import SelectInput from '../SelectInput'
import DonationProgressBar from './../../../Shared/components/DonationProgressBar'

class DonationSection extends Component {
	render() {
		const { current_member } = this.props
		const hasSponsor = current_member.sponsors.length > 0
		let totalDonations = calcTotalDonations(current_member)
		if(hasSponsor) totalDonations *= 2
		const donationPercentage = calcDonationPercentage(current_member)

		return (
			<div className="donation-section">
				<h4>£{totalDonations}</h4>
				<h2>raised of £{current_member.goal} goal</h2>
				<DonationProgressBar member={current_member} percentage={donationPercentage}/>
				<div className="progress-summary">
					<p>£{current_member.goal - totalDonations} still needed</p>
					<p className="supporters-text">{current_member.donations.length} supporters</p>
				</div>
				<div className="donation-controls">
					<h3>
						Select Donation amount
					</h3>
					<SelectInput goalRemaining={current_member.goal - totalDonations} memberName={current_member.name} />
					<div className="support-checkbox">
						<input id="checkbox" type="checkbox" checked/>
						<label htmlFor="checkbox">Add £3 to help support GivingWeb</label>
					</div>
				</div>
				<div className="message-controls">
					<label htmlFor="message">Send a message</label>
					<textarea rows="3" name="form-message" placeholder={`Your kind words of support will be sent to ${current_member.name} and posted on this campaign for others to see`} className="message-text" />
					<div className="name-hide">
						<input id="checkbox-hidename" type="checkbox" />
						<label htmlFor="checkbox-hidename">Hide my name</label>
					</div>
				</div>
				<button className="donate-button">DONATE NOW</button>
			</div>
		)
	}
}

export default DonationSection
