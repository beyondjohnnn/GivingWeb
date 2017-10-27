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

				<Timeline />

			</div>
		)
	}
}

export default AboutUsPage
