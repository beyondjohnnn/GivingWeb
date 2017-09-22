import React from 'react'
import { Link } from 'react-router-dom'

import css from './NoAuthLandingPage.scss'

import Hero from '../components/Hero'
import FeaturedMembers from '../components/FeaturedMembers'

class NoAuthLandingPage extends React.Component {
	render() {
		return (
			<div>
				<Hero />
				<FeaturedMembers />
			</div>
		)
	}
}

export default NoAuthLandingPage