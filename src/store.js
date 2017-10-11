import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import promiseMiddleware from 'redux-promise-middleware'
import createHistory from 'history/createBrowserHistory'
import { createScrollMiddleware } from 'react-redux-scroll'

import rootReducer from './reducers/index'
const history = createHistory()

let prevLocation = {};
history.listen(location => {
  const pathChanged = prevLocation.pathname !== location.pathname;
  const hashChanged = prevLocation.hash !== location.hash;
  if (pathChanged || hashChanged) window.scrollTo(0, 0);
  prevLocation = location;
});

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
  charityDashboardSidebar: {
    currentCharityDashboardSidebarTab: "Members"
  },
	helpSomeone: {
		members: [],
    current_member: {
      donations: [],
      comments: [],
      info: '',
      name: 'Charlie',
      goal: 0
    }
	},
  careButton: {
    tooltipVisible: false
  },
  newMemberProcess: {
    tab: 'basics',
    file: '',
    imagePreviewUrl: ''
  }
}

const middleware = applyMiddleware(routerStuff, promiseMiddleware(), createScrollMiddleware())

const enhancers = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(rootReducer, defaultState, enhancers)

export default store
