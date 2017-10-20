import React from 'react'

import { render } from 'react-dom'

// import css
import css from './base-style.scss'

// import containers
import NoAuthLandingPage from './NoAuthLandingPage'
import UserSignup from './Shared/containers/UserSignup'
import UserLogin from './Shared/containers/UserLogin'
import CharityPage from './CharityPage'
import AuthLandingPage from './Shared/containers/AuthLandingPage'
import UserDashboard from './Shared/containers/UserDashboard'
import CharityLogin from './Shared/containers/CharityLogin'
import CharitySignup from './Shared/containers/CharitySignup'
import HelpSomeone from './HelpSomeone'
import ForCharities from './ForCharities'
import CharityDashboard from './CharityDashboard'
import MemberShowPage from './MemberShowPage'
import CookieInfoPage from './Shared/containers/CookieInfoPage'
import MeetTheTeamPage from './Shared/containers/MeetTheTeamPage'
import TermsAndPrivacyPage from './Shared/containers/TermsAndPrivacyPage'
import ContactUs from './ContactUs'
import PartnersPage from './Shared/containers/PartnersPage'
import AboutUsPage from './Shared/containers/AboutUsPage'
import StripePayment from './Shared/containers/StripePayment'

// import components
import Navigation from './Navigation'
import FeaturedMembers from './Shared/components/FeaturedMembers'
import Footer from './Shared/components/Footer'

// import react router dependencies
import { Router, Route } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'
import setAuthToken from './Shared/utils/setAuthToken'


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
				<Route path="/charity-login" component={CharityLogin} />
				<Route path="/featured-members" component={FeaturedMembers} />
				<Route path="/help-someone" component={HelpSomeone} />
				<Route path="/charities" component={ForCharities} />
				<Route path="/charity-dashboard" component={CharityDashboard} />
				<Route path="/member" component={MemberShowPage} />
				<Route path="/terms" component={TermsAndPrivacyPage} />
				<Route path="/cookie-info" component={CookieInfoPage} />
				<Route path="/meet-the-team" component={MeetTheTeamPage} />
				<Route path="/contact-us" component={ContactUs} />
				<Route path="/partners" component={PartnersPage} />
				<Route path="/about-us" component={AboutUsPage} />
				<Route path="/stripe-payment" component={StripePayment} />
				<Footer />
			</div>
		</Router>
	</Provider>
)

render(router, document.getElementById('app'))
