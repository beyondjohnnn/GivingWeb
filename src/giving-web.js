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
import HelpSomeonePage from './containers/HelpSomeonePage'
import CharityLandingPage from './containers/CharityLandingPage'
import CharityDashboard from './containers/CharityDashboard'
import MemberShowPage from './containers/MemberShowPage'

// import components
import Navigation from './components/Navigation'
import FeaturedMembers from './components/FeaturedMembers'
import Footer from './components/Footer'
import Comment from './components/Comment'
import TermsAndPrivacy from './components/TermsAndPrivacy'
import CookieInfo from './components/CookieInfo'
import MeetTheTeam from './components/MeetTheTeam'

// import react router dependencies
import { Router, Route } from 'react-router'

import { Provider } from 'react-redux'
import store, { history } from './store'
import setAuthToken from './utils/setAuthToken'


setAuthToken(localStorage.getItem('token'))

const router = (
	<Provider store={store}>
		<Router onUpdate={() => {window.scrollTo(0, 0)}} history={history}>
			<div>
				<Route path="/" component={Navigation} />
				<Route exact path="/" component={NoAuthLandingPage} />
				<Route path="/signup" component={UserSignup} />
				<Route path="/login" component={UserLogin} />
				<Route path="/charity-page" component={CharityPage} />
				<Route path="/auth-landing-page" component={AuthLandingPage} />
				<Route path="/user-dashboard" component={UserDashboard} />
				<Route path="/charity-signup" component={CharitySignup} />
				<Route path="/featured-members" component={FeaturedMembers} />
				<Route path="/help-someone" component={HelpSomeonePage} />
				<Route path="/charities" component={CharityLandingPage} />
				<Route path="/charity-dashboard" component={CharityDashboard} />
				<Route path="/member" component={MemberShowPage} />
				<Route path="/comment" component={Comment} />
				<Route path="/terms" component={TermsAndPrivacy} />
				<Route path="/cookie-info" component={CookieInfo} />
				<Route path="/meet-the-team" component={MeetTheTeam} />
				<Footer />
			</div>
		</Router>
	</Provider>
)

render(router, document.getElementById('app'))
