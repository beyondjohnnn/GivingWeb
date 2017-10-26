import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'

import * as actionCreators from '../../../actions/stripe'

import css from './UnderConstruction.scss'

class UnderConstruction extends React.Component {

	constructor(props){
		super(props)
		this.onTypeEmailBox = this.onTypeEmailBox.bind(this)
		this.onClickNotifyMe = this.onClickNotifyMe.bind(this)
		this.state = {
			email: ""
		}
	}

	onTypeEmailBox(event){
		this.setState({
			email: event.target.value
		})
	}

	onClickNotifyMe(){
		console.log(this.state.email);
		this.setState({
			email: ""
		})
	}

	render(){
		return (
			<div className="under-construction-container">
				<section>
					<h2>Under construction</h2>
					<p>
						Lorem ipsum dolor sit amet, stet veritus ex sed. Idque assueverit
						at eos, error nonumes legendos vel ad. Cu sint molestiae sea, sonet
						volumus vel cu, nam ut iudico delicata. Te quo nibh fastidii
						deleniti. Quo tamquam ancillae ad.
					</p>
					<input type="email" placeholder="Enter your email address"
						onChange={this.onTypeEmailBox} value={this.state.email}/>
					<button onClick={this.onClickNotifyMe}>Notify me when this is ready</button>
				</section>
			</div>
		)
	}
}

export default UnderConstruction
