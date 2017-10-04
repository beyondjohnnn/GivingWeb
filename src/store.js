import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import promiseMiddleware from 'redux-promise-middleware'
import createHistory from 'history/createBrowserHistory'
import { createScrollMiddleware } from 'react-redux-scroll'

import rootReducer from './reducers/index'
const history = createHistory()
const routerStuff = routerMiddleware(history)

export { history }

const defaultState = {
	auth: {},
  navigation: {
    dropdownVisible: false
  },
  howItWorks: {
    howItWorksVisible: false
  },
  noAuthSubNavigation: {
    currentLandingPageComponent: "Whats Happening"
  },
	helpSomeone: {
		members: []
	}
}

const middleware = applyMiddleware(routerStuff, promiseMiddleware(), createScrollMiddleware())

const enhancers = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(rootReducer, defaultState, enhancers)

export default store
