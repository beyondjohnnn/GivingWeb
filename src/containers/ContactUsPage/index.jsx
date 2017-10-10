import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import { calcDonationPercentage, getDonationBarColour, calcTotalDonations } from '../../utils/donations'

// import * as actionCreators from '../../actions/helpSomeoneActionCreators'

import css from './ContactUsPage.scss'

import ContactUs from '../../components/ContactUs'

class ContactUsPage extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	}

	createComments() {
	}


	render() {

		return (
			<div className="contact-us-page">
				<ContactUs />
				<GoogleMap />
			</div>
		)
	}
}

function mapStateToProps(state, routing) {
	return Object.assign({}, state.helpSomeone, routing)
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberShowPage)
