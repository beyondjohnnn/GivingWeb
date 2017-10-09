import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import navigation from './navigation'
import auth from './auth'
import howItWorks from './howItWorks'
import noAuthSubNavigation from './noAuthSubNavigation'
import charityDashboardSidebar from './charityDashboardSidebar'
import helpSomeone from './helpSomeone'
import careButton from './careButton'

const rootReducer = combineReducers({
	auth,
	navigation,
  howItWorks,
  noAuthSubNavigation,
  charityDashboardSidebar,
  helpSomeone,
	careButton,
	routing: routerReducer
})

export default rootReducer
