import React from 'react'

import { render } from 'react-dom'

// import css
import css from './base-style.scss'

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
			</div>
		</Router>
	</Provider>
)

render(router, document.getElementById('app'))