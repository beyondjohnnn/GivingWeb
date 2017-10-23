import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actionCreators from '../../../actions/donations'

import css from './SelectInput.scss'

class SelectInput extends Component {

	constructor(props) {
		super(props)
		this.handleSelectToggle = this.handleSelectToggle.bind(this)
		this.getOptionsStyling = this.getOptionsStyling.bind(this)
		this.createPlaceholder = this.createPlaceholder.bind(this)
		this.getArrowStyling = this.getArrowStyling.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
	}

	createPlaceholder() {
		if (this.props.customAmount) {
			return <input type="number" defaultValue={this.props.donationAmount} onChange={this.handleInputChange} />
		} else {
			return this.props.donationAmount
		}
	}

	handleInputChange(e) {
		this.props.setCustomAmount(e.value)
	}

	handleSelectToggle(e) {
		console.log(e.target)
		if (!this.props.customAmount) {
			this.props.toggleSelect()
		}
	}

	handleOptionSelect(value) {
		switch (value) {
			case 10:
			case 20:
			case 50:
				this.props.setDonationAmount(value)
				break
			case 'custom':
				this.props.customDonation()
				break
			case 'complete':
				this.props.setDonationAmount(this.props.goalRemaining)
			default:

		}
	}

	getOptionsStyling() {
		if (this.props.selectOpen) {
			return { opacity: 1, visibility: 'visible' }
		} else {
			return { opacity: 0, visibility: 'hidden' }
		}
	}

	getArrowStyling() {
		if (this.props.selectOpen) {
			return 'fa-arrow-up'
		} else {
			return 'fa-arrow-down'
		}
	}

	renderCompleteText(remainingValue, memberName) {
		if (remainingValue == 0) {
			return `£0 - ${memberName}'s goal is complete!` 
		} else {
			return `£${remainingValue} - Complete ${memberName}'s goal!`
		}
	}

	render() {
		return (
			<div className="donation-select">
				<span className="placeholder" onClick={this.handleSelectToggle}>
					£{this.createPlaceholder()} <i onClick={this.props.toggleSelect} className={`fa ${this.getArrowStyling()}`}></i>
				</span>
				<ul className="options" style={this.getOptionsStyling()}>
					<li className="option" onClick={this.handleOptionSelect.bind(this, 10)}>£10</li>
					<li className="option" onClick={this.handleOptionSelect.bind(this, 20)}>£20</li>
					<li className="option" onClick={this.handleOptionSelect.bind(this, 50)}>£50</li>
					<li className="option" onClick={this.handleOptionSelect.bind(this, 'complete')}>{this.renderCompleteText(this.props.goalRemaining, this.props.memberName)}</li>
					<li className="option" onClick={this.handleOptionSelect.bind(this, 'custom')}>Custom Amount</li>
				</ul>
				<select name="" id="" className="real-select"></select>
			</div>
		)
	}
}

function mapStateToProps(state, routing) {
	return { ...state.donations, ...routing }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectInput)