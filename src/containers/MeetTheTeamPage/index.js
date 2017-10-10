import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'


import MeetTheTeam from '../../components/MeetTheTeam'

import css from './MeetTheTeamPage.scss'

class MeetTheTeamPage extends React.Component {

	componentDidMount() {
	}

	createComments() {
	}

	render() {

		return (
			<div className="meet-the-team-page">
        <MeetTheTeam />
			</div>
		)
	}
}

export default MeetTheTeamPage
