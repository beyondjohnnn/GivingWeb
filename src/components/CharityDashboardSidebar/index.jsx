import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../../actions/charityDashboardSidebarActionCreators'

import css from './CharityDashboardSidebar.scss'

import CharityDashboardOrganisationDetails from '../../components/CharityDashboardOrganisationDetails'


class CharityDashboardSidebar extends React.Component {

	 selectedSidebarTabStyling(expectedState) {
	 	if (this.props.currentCharityDashboardSidebarTab == expectedState) {
				return "charity-sidebar-link selected-tab"
			} else {
				return "charity-sidebar-link"
			}
	 }

	render() {
		return (
			<div className="charity-dashboard-sidebar">
				<CharityDashboardOrganisationDetails />
				<div className="charity-sidebar-navigation">
					<Link	className={this.selectedSidebarTabStyling("Campaigns")} onClick={this.props.setCurrentCharityDashboardSidebarTab.bind(this, "Campaigns")} to="charity-dashboard">
						<i className="fa fa-rocket" /> Campaigns
					</Link>
					<Link	className={this.selectedSidebarTabStyling("Members")} onClick={this.props.setCurrentCharityDashboardSidebarTab.bind(this, "Members")}	to="charity-dashboard">
						<i className="fa fa-users" /> Members
					</Link>
					<Link	className={this.selectedSidebarTabStyling("Main Fund")} onClick={this.props.setCurrentCharityDashboardSidebarTab.bind(this, "Main Fund")}	to="charity-dashboard">
						<i className="fa fa-bank" /> Main Fund
					</Link>
					<Link	className={this.selectedSidebarTabStyling("My Organisation")} onClick={this.props.setCurrentCharityDashboardSidebarTab.bind(this, "My Organisation")}	to="charity-dashboard">
						<i className="fa fa-sitemap" /> My Organisation
					</Link>
					<Link	className={this.selectedSidebarTabStyling("Help")} onClick={this.props.setCurrentCharityDashboardSidebarTab.bind(this, "Help")}	to="charity-dashboard">
						<i className="fa fa-question" /> Help
					</Link>
					<Link	className={this.selectedSidebarTabStyling("Reporting")} onClick={this.props.setCurrentCharityDashboardSidebarTab.bind(this, "Reporting")}	to="charity-dashboard">
						<i className="fa fa-line-chart" /> Reporting
					</Link>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state, routing) {
  return Object.assign({}, state.charityDashboardSidebar, routing)
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CharityDashboardSidebar)