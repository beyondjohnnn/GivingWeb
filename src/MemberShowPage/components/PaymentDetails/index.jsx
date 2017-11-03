import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
	injectStripe,
	CardNumberElement,
	CardExpiryElement,
	CardCVCElement,
	PostalCodeElement 
} from 'react-stripe-elements'

import * as actionCreators from '../../../actions/donations'

import css from './PaymentDetails.scss'

class PaymentDetails extends Component {

	constructor(props) {
		super(props)

		this.onSubmit = this.onSubmit.bind(this)
	}

	onSubmit(e) {
		e.preventDefault()
		console.log('submitted')
		const {user} = this.props.user
		this.props.stripe.createToken({
			name: 'user'
		}).then(({token}) => {
      console.log('Received Stripe token:', token);
      this.props.payWithToken(token, user.email, this.calculateTotalPayment())
    });
	}

	calculateTotalPayment() {
		const {donationAmount, supportChecked} = this.props
		return supportChecked ? donationAmount + 3 : donationAmount
	}

	render() {
		const member = this.props.currentMember
		const {donationAmount} = this.props

		return (
			<div className="payment-details">
				<h2><i className="fa fa-lock"></i> Payment Method</h2>
				<form className="payment-form" action="https://localhost:3000/charges" method="post" onSubmit={this.onSubmit}>
					<div className="form-row">
						<label htmlFor="card_number">Card Number</label>
						<CardNumberElement className="text-input" />
						{/*<input className="text-input" id="card_number" type="text" placeholder="0000 0000 0000 0000" data-stripe="number" autoComplete="cc-number"/>*/}
					</div>
          <div className="form-row">
						<label htmlFor="expiration">Expiration</label>
						<CardExpiryElement className="small-text-input" />
						{/*<input className="extra-small-text-input" id="card_number" type="number" placeholder="MM" data-stripe="exp_month" autoComplete="cc-number"/>
						<span>/</span>
						<input className="extra-small-text-input" type="number" placeholder="YY" data-stripe="exp_year" autoComplete="cc-number"/>*/}
					</div> 
          <div className="form-row">
						<label htmlFor="cvc">CVC</label>
						<CardCVCElement className="small-text-input" />
						{/*<input className="small-text-input" id="cvc" type="text" placeholder="000" data-stripe="cvc" autoComplete="cc-cvc"/>*/}
					</div>
          <div className="form-row">
						<label htmlFor="billing_postcode">Billing Postcode</label>
						<PostalCodeElement className="small-text-input" />
						{/*<input className="small-text-input" id="billing_postcode" type="text" placeholder="" data-stripe="address_zip" autoComplete="cc-cvc"/>*/	}
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
		)
	}
}

function mapStateToProps(state, routing) {
	return { ...state.donations, ...state.helpSomeone, ...state.auth, ...routing }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default injectStripe(connect(mapStateToProps, mapDispatchToProps)(PaymentDetails))