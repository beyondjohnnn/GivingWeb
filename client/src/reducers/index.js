import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import navigation from './navigation'
import auth from './auth'

const rootReducer = combineReducers({
	auth,
	navigation,
	routing: routerReducer
})

export default rootReducer