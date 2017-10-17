import React from 'react'
import { Route, Switch } from 'react-router'

import css from './CharityDashboardContent.scss'

import CharityDashboardBreadcrumbs from '../CharityDashboardBreadcrumbs'
import CharityDashboardCampaign from '../CharityDashboardCampaign'
import CharityDashboardMembers from '../CharityDashboardMembers'
import CharityDashboardMembersNew from '../CharityDashboardMembersNew'
import CharityDashboardMemberShow from '../CharityDashboardMemberShow'
import CharityDashboardCampaignNew from '../CharityDashboardCampaignNew'

class CharityDashboardContent extends React.Component {
  render() {
    return (
      <div className="charity-dashboard-content">
        <CharityDashboardBreadcrumbs />
        <Switch>
          <Route exact path="/charity-dashboard" component={CharityDashboardMembers} />
          <Route path="/charity-dashboard/campaigns" component={CharityDashboardCampaign} />
	        <Route path="/charity-dashboard/member" component={CharityDashboardMemberShow} />
	        <Route path="/charity-dashboard/members/new" component={CharityDashboardMembersNew} />
	        <Route path="/charity-dashboard/members" component={CharityDashboardMembers} />
        </Switch>
      </div>
    )
  }
}

export default CharityDashboardContent