import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import promiseMiddleware from 'redux-promise-middleware'
import createHistory from 'history/createBrowserHistory'


import rootReducer from './reducers/index'
const history = createHistory()
const routerStuff = routerMiddleware(history)

export { history }

const defaultState = {
	auth: {},
  navigation: {
    dropdownVisible: false
  }
}

const middleware = applyMiddleware(routerStuff, promiseMiddleware())

const store = createStore(rootReducer, defaultState, compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store