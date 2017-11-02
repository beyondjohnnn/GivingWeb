import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actionCreators from '../../../actions/donations'

import css from './PaymentPage.scss'

class PaymentPage extends Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	calculateTotalPayment() {
		const {donationAmount, supportChecked} = this.props
		return supportChecked ? donationAmount + 3 : donationAmount
	}

	createSupportDonation() {
		if (this.props.supportChecked) {
			return (
				<div className="givingweb-donation donation-item">
					<img src="/images/favicon.png" alt=""/>
					<h3>GivingWeb Support</h3>
					<span>£3</span>
				</div>
			)
		}
	}

	render() {
		const member = this.props.currentMember
		const {donationAmount} = this.props

		return (
			<div className="payment-page">
				<div className="main-wrapper">
					<div className="left-section">
						<div className="payment-details">
							<h2><i className="fa fa-lock"></i> Payment Method</h2>
							<form className="payment-form" action="https://localhost:3000/charges" method="post">
								<div className="form-row">
									<label htmlFor="card_number">Card Number</label>
									<input className="text-input" id="card_number" type="text" placeholder="0000 0000 0000 0000" data-stripe="number" autoComplete="cc-number"/>
								</div>
                <div className="form-row">
									<label htmlFor="expiration">Expiration</label>
									<input className="extra-small-text-input" id="card_number" type="number" placeholder="MM" data-stripe="exp_month" autoComplete="cc-number"/>
									<span>/</span>
									<input className="extra-small-text-input" type="number" placeholder="YY" data-stripe="exp_year" autoComplete="cc-number"/>
								</div> 
                <div className="form-row">
									<label htmlFor="cvc">CVC</label>
									<input className="small-text-input" id="cvc" type="text" placeholder="000" data-stripe="cvc" autoComplete="cc-cvc"/>
								</div>
                <div className="form-row">
									<label htmlFor="billing_postcode">Billing Postcode</label>
									<input className="small-text-input" id="billing_postcode" type="text" placeholder="" data-stripe="address_zip" autoComplete="cc-cvc"/>
								</div>
								<div className="message-container">
									<h3>Message to {member.name}</h3>
									<p>
										An encouraging message is as valuable as your donation. Your words of support will be sent to them and posted for others to see.
									</p>
									<textarea name="message" ref="message" id="message" maxLength="300" className="message" placeholder="Write message here..." />
									<div className="anonymous-container">
										<input id="donate-anonymously" ref="donate-anonymously" type="checkbox" className="donate-anonymously" />
										<label htmlFor="donate-anonymously">Donate anonymously</label>
									</div>
									<div className="submit">
										<input type="submit" value="Confirm Donation" />
										<p className="button-message">Your kind donation will go directly to {member.name} through Streetwork.</p>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="right-section">
						<div className="charge-details">
							<div className="main-donation donation-item">
								<img src={member.url_image} alt=""/>
								<h3>One-time donation to {member.name}</h3>
								<span>£{donationAmount}</span>
							</div>
							{this.createSupportDonation()}
							<div className="total">
								<h2 className="title">Your Total Payment</h2>
								<span>£{this.calculateTotalPayment()}</span>
							</div>
						</div>
					</div>
				</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage)
