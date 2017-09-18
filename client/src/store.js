import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import promiseMiddleware from 'redux-promise-middleware'
import createHistory from 'history/createBrowserHistory'


import rootReducer from './reducers/index'
const history = createHistory()
const routerStuff = routerMiddleware(history)

export { history }

const defaultState = {

}

const middleware = applyMiddleware(routerStuff, promiseMiddleware(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(rootReducer, defaultState, middleware)

export default store