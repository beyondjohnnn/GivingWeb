import React, {Component} from 'react'

import css from './PaymentPage.scss'

class PaymentPage extends Component {
	render() {
		return (
			<div className="payment-page">
				<div className="main-wrapper">
					<div className="left-section">
						<div className="payment-details">
							<h2><i className="fa fa-lock"></i> Payment Method</h2>
							<form action="https://localhost:3000/charges" method="post">
								<div className="payment-form">
									<div className="form-row">
										<label htmlFor="card_number">Card Number</label>
										<input type="text" placeholder="0000 0000 0000 0000" data-stripe="number" autoComplete="cc-number"/>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="right-section">
						<div className="charge-details">
							right section
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default PaymentPage