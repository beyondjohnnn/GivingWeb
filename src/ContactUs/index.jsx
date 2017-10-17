import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// import * as actionCreators from '../../actions/contactUsActionCreators'

import css from './ContactUsPage.scss'

import ContactUs from './components/ContactUs'
import GoogleMapComponent from './components/GoogleMapComponent'

class ContactUsPage extends React.Component {


	componentDidMount() {
	}

	createComments() {
	}


	render() {

		return (
			<div className="contact-us-page">
				<ContactUs />
				<div className="map">
					<GoogleMapComponent />
				</div>
			</div>
		)
	}
}

export default ContactUsPage
