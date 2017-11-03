import React, {Component} from 'react'
import {StripeProvider} from 'react-stripe-elements';

import css from './StripeDonation.scss'

import PaymentPage from '../PaymentPage'

class StripeDonation extends Component {
	render() {
		return (
			<StripeProvider apiKey="pk_test_8Pt9n0qHDnKZSYrFlWpGWqSW">
	      <PaymentPage />
	    </StripeProvider>
		)
	}
}

export default StripeDonation