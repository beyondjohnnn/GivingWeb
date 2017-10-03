import React from 'react'

import css from './CharityDashboardContent.scss'

import CharityDashboardCampaign from '../CharityDashboardCampaign'
import CharityDashboardBreadcrumbs from '../CharityDashboardBreadcrumbs'

class CharityDashboardContent extends React.Component {
  render() {
    return (
      <div className="charity-dashboard-content">
        <CharityDashboardBreadcrumbs />
        <CharityDashboardCampaign />
      </div>
    )
  }
}

export default CharityDashboardContent