import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import navigation from './navigation'
import auth from './auth'
import howItWorks from './howItWorks'
import noAuthSubNavigation from './noAuthSubNavigation'

const rootReducer = combineReducers({
	auth,
	navigation,
  howItWorks,
  noAuthSubNavigation,
	routing: routerReducer
})

export default rootReducer