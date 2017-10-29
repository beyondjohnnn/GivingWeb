import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

import css from './PartnersPage.scss'

class PartnersPage extends React.Component {

	componentDidMount() {
	}

	createComments() {
	}

	render() {

		return (
			<div className="partners-page">
				<div className="partners">
					<div className="header">
						<h1>PARTNERS</h1>
					</div>
					<div className="content">
						<h3>STREETWORK</h3>
						<p>For the last 25 years, <a herf="https://www.streetwork.org.uk/">Streetwork</a> has been supporting Edinburgh’s most vulnerable and disadvantaged communities, with a particular emphasis on those with multiple complex needs who have experienced, or are at risk of homelessness. They recognise that people who have faced adversity throughout their lives often find it hard to build and maintain healthy relationships, resulting in their exclusion from relationships with people and services. This isolation frequently results in long term substance use, mental ill health and job instability. Streetwork therefore delivers, and continues to develop, relationship-focused services that aim to work in partnership with individuals in need — basing their efforts on respect and trust. Streetwork helps people find their own solution, with a ‘your terms, your pace, your place’ mindset.</p>
						<p>In addition, to building based services, free phone line support, group work and individual support sessions, Streetwork also takes its services to the streets with daily, walking community outreach. In this way, Streetwork is committed to supporting people in making sustainable, positive, informed decisions to help them achieve a life off the streets.</p>

						<h3>Interested in a Partnership?</h3>
						<p>StreetChange is dedicated to continuing to maximise impact by partnering with other like organisations across the UK. We urge you to <a href="https://givingweb.local/contact-us/">contact us</a> if you are interested in becoming a StreetChange partner. Our purpose is to serve as a tool that allows grassroots organisations to reach new audiences, tap in local community crowdfunding, and financially empower their beneficiaries. So if you think you could benefit from our services, <a href="https://givingweb.local/contact-us/"> get in touch TODAY</a>!</p>
					</div>
				</div>
			</div>
		)
	}
}

export default PartnersPage
