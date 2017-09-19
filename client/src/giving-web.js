import React from 'react'

import { render } from 'react-dom'

// import css
import css from './base-style.scss'

// import containers
import NoAuthLandingPage from './containers/NoAuthLandingPage'
import UserSignup from './containers/UserSignup'
import UserLogin from './containers/UserLogin'
import CharityPage from './containers/CharityPage'
import AuthLandingPage from './containers/AuthLandingPage'
import UserDashboard from './containers/UserDashboard'
import CharityLogin from './containers/CharityLogin'
import CharitySignup from './containers/CharitySignup'

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
				<Route path="/login" component={UserLogin} />
				<Route path="/charity-page" component={CharityPage} />
				<Route path="/auth-landing-page" component={AuthLandingPage} />
				<Route path="/user-dashboard" component={UserDashboard} />
				<Route path="/charity-signup" component={CharitySignup} />
			</div>
		</Router>
	</Provider>
)

render(router, document.getElementById('app'))