import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

import * as actionCreators from '../../actions/helpSomeoneActionCreators'

import css from './CharityDashboardMemberShow.scss'

class CharityDashboardMemberShow extends React.Component {

	componentDidMount() {
		this.getMember()
	}

	getMember() {
		const member_id = parseInt(this.props.location.search.split('=')[1])
		const { members } = this.props
		if (members.length == 0) {
			this.props.getSingleMember(member_id)
		} else {
			const current_member = members.find((member) => {
				return member.id == member_id
			})
			this.props.setCurrentMember(current_member)
		}
	}

	render() {
		const {current_member} = this.props
		return (
			<div className="cd-member-show">
				<p>Please review the details below and when you're happy, click submit.</p>

				<img src={current_member.url_image} />

				<h3>Name</h3>
				<p>{current_member.name}</p>

				<h3>Fundraising Goal</h3>
				<p>£ {current_member.goal}</p>

				<h3>Location</h3>
				<p>{current_member.location}</p>

				<div className="info">
					{ReactHtmlParser(current_member.info.replace('&#039;', '\''))}
				</div>

				<button className="submit-button" onClick={this.onClickSubmit}>Submit</button>
			</div>
		)
	}
}

function mapStateToProps(state, routing) {
	return { ...state.helpSomeone, ...routing }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CharityDashboardMemberShow)