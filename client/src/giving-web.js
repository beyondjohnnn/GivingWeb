import React from 'react'

import { render } from 'react-dom'

// import css
import css from './base-style.scss'

// import containers
import NoAuthLandingPage from './containers/NoAuthLandingPage'
import UserSignup from './containers/UserSignup'

// import components
import Navigation from './components/Navigation'

// import react router dependencies
import { Router, Route } from 'react-router'

import { Provider } from 'react-redux'
import store, { history } from './store'


const router = (
	<Provider store={store}>
		<Router history={history}>
			<div>
				<Route path="/" component={Navigation} />
				<Route exact path="/" component={NoAuthLandingPage} />
				<Route path="/signup" component={UserSignup} />
			</div>
		</Router>
	</Provider>
)

render(router, document.getElementById('app'))