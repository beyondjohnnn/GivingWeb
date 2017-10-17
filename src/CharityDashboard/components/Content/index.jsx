import React from 'react'
import { Route, Switch } from 'react-router'

import css from './Content.scss'

import Breadcrumbs from '../Breadcrumbs'
import Campaign from '../Campaigns'
import Members from '../Members'
import MembersNew from '../MembersNew'
import MemberShow from '../MemberShow'
import CampaignNew from '../CampaignsNew'

class Content extends React.Component {
  render() {
    return (
      <div className="charity-dashboard-content">
        <Breadcrumbs />
        <Switch>
          <Route path="/charity-dashboard/campaigns" component={Campaign} />
          <Route path="/charity-dashboard/member" component={MemberShow} />
          <Route path="/charity-dashboard/members/new" component={MembersNew} />
          <Route path="/charity-dashboard/members" component={Members} />
          <Route path="/charity-dashboard" component={Members} />
        </Switch>
      </div>
    )
  }
}

export default Content