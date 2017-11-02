import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actionCreators from '../../../actions/donations'

import { calcDonationPercentage, getDonationBarColour, calcTotalDonations } from '../../../Shared/utils/donations'

import css from './DonationSection.scss'

import SelectInput from '../SelectInput'

class DonationSection extends Component {
	constructor(props) {
		super(props)

		this.onSupportCheckboxChange = this.onSupportCheckboxChange.bind(this)
		this.onAnonymousCheckboxChange = this.onAnonymousCheckboxChange.bind(this)
		this.onButtonClick = this.onButtonClick.bind(this)
	}

	onSupportCheckboxChange(e) {
		this.props.toggleSupport()
	}

	onAnonymousCheckboxChange(e) {
		this.props.toggleAnonymous()
	}

	onButtonClick(e) {
		e.preventDefault()

		this.props.history.push('/payment')
	}

	render() {
		const { currentMember } = this.props
		const hasSponsor = currentMember.sponsors.length > 0
		let totalDonations = calcTotalDonations(currentMember)
		if(hasSponsor) totalDonations *= 2
		const donationPercentage = calcDonationPercentage(currentMember)

		return (
			<div className="donation-section">
				<h4>£{totalDonations}</h4>
				<h2>raised of £{currentMember.goal} goal</h2>
				{this.props.donationProgressBar.render(hasSponsor)}
				<div className="progress-summary">
					<p>£{currentMember.goal - totalDonations} still needed</p>
					<p className="supporters-text">{currentMember.donations.length} supporters</p>
				</div>
				<div className="donation-controls">
					<h3>
						Select Donation amount
					</h3>
					<SelectInput goalRemaining={currentMember.goal - totalDonations} memberName={currentMember.name} />
					<div className="support-checkbox">
						<input id="checkbox" type="checkbox" defaultChecked onChange={this.onSupportCheckboxChange}/>
						<label htmlFor="checkbox">Add £3 to help support GivingWeb</label>
					</div>
				</div>
				<div className="message-controls">
					<label htmlFor="message">Send a message</label>
					<textarea rows="3" name="form-message" placeholder={`Your kind words of support will be sent to ${currentMember.name} and posted on this campaign for others to see`} className="message-text" />
					<div className="name-hide">
						<input id="checkbox-hidename" type="checkbox" onChange={this.onAnonymousCheckboxChange}/>
						<label htmlFor="checkbox-hidename">Hide my name</label>
					</div>
				</div>
				<button className="donate-button" onClick={this.onButtonClick}>DONATE NOW</button>
			</div>
		)
	}
}

function mapStateToProps(state, routing) {
	return { ...state.donations, ...state.helpSomeone, ...routing }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DonationSection)
