import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

import css from './AboutUsPage.scss'

import Timeline from './Components/Timeline'

class AboutUsPage extends React.Component {


	render() {

		return (
			<div className="about-us-page">
        <div className="our-mission">
          <h2>Our Mission</h2>
          <p>GivingWeb is committed to using the power of technology and human relationships to fight urban poverty.  Our fundraising platform allows donors to directly connect with the most vulnerable people in their communities, while ensuring that our members are uplifted and empowered in an effective way. Through partnership and collaboration, we aim to revitalise and dignify the giving process.</p>
        </div>
        <div className="our-values">
          <h2>Our Values</h2>
          <ul>
            <li><mark>We believe</mark> that poverty is more than just a financial situation</li>
            <li><mark>We believe</mark> that belonging, love, and equality are inalienable human rights</li>
            <li><mark>We believe</mark> that people experiencing poverty are our peers, not our problem</li>
            <li><mark>We believe</mark> that defending dignity is at the root of effective social change</li>
            <li><mark>We believe</mark> that pursuing sustainable solutions is the key to long term development</li>
            <li><mark>We believe</mark> that transparency is an obligation not an option</li>
            <li><mark>We believe</mark> in empowering people on both sides of the giving process</li>
          </ul>
        </div>


				<Timeline />

			</div>
		)
	}
}

export default AboutUsPage
