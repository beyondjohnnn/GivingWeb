import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionCreators from '../../actions/newMemberProcess'

import css from './CharityDashboardMembersNew.scss'

import NewMemberFormBasics from '../NewMemberFormBasics'
import NewMemberFormStory from '../NewMemberFormStory'
import NewMemberFormCoverPhoto from '../NewMemberFormCoverPhoto'
import NewMemberFormReviewLaunch from '../NewMemberFormReviewLaunch'

class CharityDashboardMembersNew extends React.Component {

	selectedNavTabStyling(expectedState) {
	 	if (this.props.tab == expectedState) {
				return "nav-button selected"
			} else {
				return "nav-button"
			}
	}

	createNewMemberForm() {
		switch(this.props.tab) {
			case 'basics':
				return <NewMemberFormBasics />
			case 'story':
				return <NewMemberFormStory />
			case 'cover-photo':
				return <NewMemberFormCoverPhoto />
			case 'review-launch':
				return <NewMemberFormReviewLaunch />
			default:
				return <NewMemberFormBasics />
		}
	}

	render() {
		return (
			<div className="cd-members-new">
				<div className="header">
					<h2>New Member</h2>
					<span className="draft-tab">DRAFT</span>
				</div>
				<div className="new-member-nav">
					<div className={this.selectedNavTabStyling('basics')} onClick={this.props.setCurrentTab.bind(null, 'basics')}><span>Basics</span></div>
					<div className={this.selectedNavTabStyling('story')} onClick={this.props.setCurrentTab.bind(null, 'story')}><span>Story</span></div>
					<div className={this.selectedNavTabStyling('cover-photo')} onClick={this.props.setCurrentTab.bind(null, 'cover-photo')}><span>Cover Photo</span></div>
					<div className={this.selectedNavTabStyling('review-launch')} onClick={this.props.setCurrentTab.bind(null, 'review-launch')}><span>Review & Launch</span></div>
				</div>
				{this.createNewMemberForm()}
			</div>
		)
	}
}

function mapStateToProps(state, routing) {
	return { ...state.newMemberProcess, ...routing }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CharityDashboardMembersNew)