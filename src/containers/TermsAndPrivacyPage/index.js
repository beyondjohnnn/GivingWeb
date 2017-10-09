import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'


import TermsAndPrivacy from '../../components/TermsAndPrivacy'

import css from './TermsAndPrivacyPage.scss'

class TermsAndPrivacyPage extends React.Component {

	componentDidMount() {
	}

	createComments() {
	}

	render() {

		return (
			<div className="terms-and-privacy-page">
        {TermsAndPrivacy}
			</div>
		)
	}
}

export default
