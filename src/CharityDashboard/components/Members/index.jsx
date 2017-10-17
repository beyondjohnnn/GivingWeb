import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {calcDonationPercentage} from '../../../Shared/utils/donations'

import * as helpSomeoneActionCreators from '../../../actions/helpSomeoneActionCreators'
import * as dashboardActionCreators from '../../../actions/dashboard'

import css from './Members.scss'

import MembersLive from '../MembersLive'
import MembersDraft from '../MembersDraft'
import MembersReview from '../MembersReview'
import MembersSuccess from '../MembersSuccess'

class Members extends React.Component {

	constructor(props) {
		super(props)
		this.getNumberOfLiveMembers = this.getNumberOfLiveMembers.bind(this)
		this.getNumberOfSuccessMembers = this.getNumberOfSuccessMembers.bind(this)
		this.getNavTabStyling = this.getNavTabStyling.bind(this)
	}

	componentDidMount() {
		if (this.props.members.length == 0) {
			this.props.helpSomeoneActions.getMembers()
		}
	}

	getNumberOfLiveMembers() {
		return this.props.members.filter((member) => {
			return calcDonationPercentage(member) < 100
		}).length
	}

	getNumberOfSuccessMembers() {
		return this.props.members.filter((member) => {
			return calcDonationPercentage(member) >= 100
		}).length
	}

	handleClick(tab) {
		this.props.dashboardActions.setDashboardTab(tab)
	}

	getNavTabStyling(navtab) {
		if (this.props.tab == navtab) {
			return "selected"
		} else {
			return ""
		}
	}

	render() {
		const {members} = this.props
		return (
			<div className="cd-members">
				<div className="header">
					<h2>Members</h2>
					<Link to="/charity-dashboard/members/new" className="create-member-link">Create a new member</Link>
				</div>
				<div className="cd-current-members">
					<ul className="members-nav-tabs">
						<Link className="navtab-link" to="/charity-dashboard/members/live">
							<li className={this.getNavTabStyling('live')} onClick={this.handleClick.bind(this, 'live')}>
								Live ({this.getNumberOfLiveMembers()})
							</li>
						</Link>
						<Link className="navtab-link" to="/charity-dashboard/members/draft">
							<li className={this.getNavTabStyling('draft')} onClick={this.handleClick.bind(this, 'draft')}>
								Draft (0)
							</li>
						</Link>
						<Link className="navtab-link" to="/charity-dashboard/members/review">
							<li className={this.getNavTabStyling('review')} onClick={this.handleClick.bind(this, 'review')}>
								Review (0)
							</li>
						</Link>
						<Link className="navtab-link" to="/charity-dashboard/members/success">
							<li className={this.getNavTabStyling('success')} onClick={this.handleClick.bind(this, 'success')}>
								Success ({this.getNumberOfSuccessMembers()})
							</li>
						</Link>
					</ul>
					<Route exact path="/charity-dashboard" component={MembersLive} />
					<Route exact path="/charity-dashboard/members" component={MembersLive} />
					<Route path="/charity-dashboard/members/live" component={MembersLive} />
					<Route path="/charity-dashboard/members/draft" component={MembersDraft} />
					<Route path="/charity-dashboard/members/review" component={MembersReview} />
					<Route path="/charity-dashboard/members/success" component={MembersSuccess} />
				</div>
			</div>
		)
	}
}

function mapStateToProps(state, routing) {
	return { ...state.helpSomeone, ...state.dashboard, ...routing }
}

function mapDispatchToProps(dispatch) {
	return {
		helpSomeoneActions: bindActionCreators(helpSomeoneActionCreators, dispatch),
		dashboardActions: bindActionCreators(dashboardActionCreators, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Members)
