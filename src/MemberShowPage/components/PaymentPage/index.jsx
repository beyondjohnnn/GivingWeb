import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Elements} from 'react-stripe-elements';

import * as actionCreators from '../../../actions/donations'

import css from './PaymentPage.scss'

import PaymentDetails from '../PaymentDetails'

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
			<Elements locale="auto" >
				<div className="payment-page">
					<div className="main-wrapper">
						<div className="left-section">
							<PaymentDetails />
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
			</Elements>
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
