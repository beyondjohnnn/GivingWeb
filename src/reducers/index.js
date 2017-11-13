import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import navigation from './navigation'
import auth from './auth'
import howItWorks from './howItWorks'
import noAuthSubNavigation from './noAuthSubNavigation'
import charityDashboardSidebar from './charityDashboardSidebar'
import helpSomeone from './helpSomeone'
import featuredMembers from './featuredMembers'
import careButton from './careButton'
import pricing from './pricing'
import newMemberProcess from './newMemberProcess'
import charityPage from './charityPage'
import dashboard from './dashboard'
import donations from './donations'
import charityDashboardContent from './charityDashboardContent'
import comments from './comments'
import fundraisingModal from './fundraisingModal'
import memberPreview from './memberPreview'

const rootReducer = combineReducers({
	auth,
	navigation,
  howItWorks,
  noAuthSubNavigation,
  charityDashboardSidebar,
  helpSomeone,
	featuredMembers,
	careButton,
  pricing,
  newMemberProcess,
	charityPage,
	dashboard,
	donations,
	charityDashboardContent,
	comments,
  fundraisingModal,
  memberPreview,
	routing: routerReducer
})

export default rootReducer
