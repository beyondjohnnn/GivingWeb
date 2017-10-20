import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import navigation from './navigation'
import auth from './auth'
import howItWorks from './howItWorks'
import noAuthSubNavigation from './noAuthSubNavigation'
import charityDashboardSidebar from './charityDashboardSidebar'
import helpSomeone from './helpSomeone'
import careButton from './careButton'
import newMemberProcess from './newMemberProcess'
import charityPage from './charityPage'
import dashboard from './dashboard'
import stripe from './stripe'
import donations from './donations'
import charityDashboardContent from './charityDashboardContent'

const rootReducer = combineReducers({
	auth,
	navigation,
  howItWorks,
  noAuthSubNavigation,
  charityDashboardSidebar,
  helpSomeone,
	careButton,
  newMemberProcess,
	charityPage,
	dashboard,
	stripe,
	donations,
	charityDashboardContent,
	routing: routerReducer
})

export default rootReducer
