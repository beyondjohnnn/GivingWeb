import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'


import CookieInfo from '../../components/CookieInfo'

import css from './CookieInfoPage.scss'

class CookieInfoPage extends React.Component {

	componentDidMount() {
	}

	createComments() {
	}

	render() {

		return (
			<div className="cookie-page">
        <CookieInfo />
			</div>
		)
	}
}

export default CookieInfoPage
