import React from 'react'
import { Link } from 'react-router-dom'

import css from './CharityDashboardSidebar.scss'

import CharityDashboardOrganisationDetails from '../../components/CharityDashboardOrganisationDetails'


class CharityDashboardSidebar extends React.Component {
	render() {
		return (
			<div className="charity-dashboard-sidebar">
				<CharityDashboardOrganisationDetails />
				<div className="charity-sidebar-navigation">
					<Link	className="charity-sidebar-link" to="">
						<i className="fa fa-rocket" /> Campaigns
					</Link>
					<Link	className="charity-sidebar-link"	to="">
						<i className="fa fa-users" /> Members
					</Link>
					<Link	className="charity-sidebar-link"	to="">
						<i className="fa fa-bank" /> Main Fund
					</Link>
					<Link	className="charity-sidebar-link"	to="">
						<i className="fa fa-sitemap" /> My Organisation
					</Link>
					<Link	className="charity-sidebar-link"	to="">
						<i className="fa fa-question" /> Help
					</Link>
					<Link	className="charity-sidebar-link"	to="">
						<i className="fa fa-line-chart" /> Reporting
					</Link>
				</div>
			</div>
		)
	}
}

export default CharityDashboardSidebar 