import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'

import * as actionCreators from '../../../actions/stripe'

import css from './StripePayment.scss'

class StripePayment extends React.Component {

	constructor(props) {
		super(props)
		this.onToken = this.onToken.bind(this)
	}

  onToken(token) {
  	console.log(token)
    this.props.payWithToken(token)
  }
 
 
  render() {
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_8Pt9n0qHDnKZSYrFlWpGWqSW"
        amount={3000}
        name="GivingWeb"
        description="A test payment"
        currency="GBP"
        locale="auto"
      />
    )
  }
}

function mapStateToProps(state, routing) {
	return { ...state.stripe, ...routing }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StripePayment)