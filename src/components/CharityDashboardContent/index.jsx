import React from 'react'
import { Route } from 'react-router'

import css from './CharityDashboardContent.scss'

import CharityDashboardBreadcrumbs from '../CharityDashboardBreadcrumbs'
import CharityDashboardCampaign from '../CharityDashboardCampaign'
import CharityDashboardMembers from '../CharityDashboardMembers'
import CharityDashboardCampaignNew from '../CharityDashboardCampaignNew'

class CharityDashboardContent extends React.Component {
  render() {
    return (
      <div className="charity-dashboard-content">
        <CharityDashboardBreadcrumbs />
        <Route path="/charity-dashboard/campaigns" component={CharityDashboardCampaign} />
        <Route path="/charity-dashboard/members" component={CharityDashboardMembers} />
      </div>
    )
  }
}

export default CharityDashboardContent