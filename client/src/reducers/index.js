import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import navigation from './navigation'
import auth from './auth'
import howItWorks from './howItWorks'

const rootReducer = combineReducers({
	auth,
	navigation,
  howItWorks,
	routing: routerReducer
})

export default rootReducer