import React from 'react'
import { Link } from 'react-router-dom'

import css from './NoAuthLandingPage.scss'

import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import MemberPreview from '../components/MemberPreview'

class NoAuthLandingPage extends React.Component {
	render() {
		return (
			<div>
				<Hero />
				<HowItWorks />
				<div className="featured-members">
					<h2>Members</h2>
					<div className="members-list">
						<MemberPreview />
						<MemberPreview />
						<MemberPreview />
					</div>
				</div>
			</div>
		)
	}
}

export default NoAuthLandingPage