import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

import css from './AboutUsPage.scss'

class AboutUsPage extends React.Component {

	componentDidMount() {
	}

	createComments() {
	}

	render() {

		return (
			<div className="about-us-page">

				Welcome

			</div>
		)
	}
}

export default AboutUsPage
