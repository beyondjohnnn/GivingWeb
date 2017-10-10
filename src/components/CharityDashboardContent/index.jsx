import React from 'react'
import { Route } from 'react-router'

import css from './CharityDashboardContent.scss'

import CharityDashboardBreadcrumbs from '../CharityDashboardBreadcrumbs'
import CharityDashboardCampaign from '../CharityDashboardCampaign'
import CharityDashboardCampaignNew from '../CharityDashboardCampaignNew'

class CharityDashboardContent extends React.Component {
  render() {
    return (
      <div className="charity-dashboard-content">
        <CharityDashboardBreadcrumbs />
        <Route path="/charity-dashboard/campaigns" component={CharityDashboardCampaign} />
      </div>
    )
  }
}

export default CharityDashboardContent