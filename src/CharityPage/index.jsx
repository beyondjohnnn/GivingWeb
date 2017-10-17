import React from 'react'
import { Link } from 'react-router-dom'

import css from './CharityPage.scss'

import CharityTile from './components/CharityTile'
import CareButton from './components/CareButton'

import CharityFeaturedMembers from './components/CharityFeaturedMembers'
import CharityPageInformation from './components/CharityPageInformation'
import CharityPageHero from './components/CharityPageHero'





class CharityPage extends React.Component {

	render() {
		return (
			<div className="charity-page">
				<div className="main-charity-wrapper">
					<CharityPageHero />
					<CharityPageInformation />
					<CharityFeaturedMembers />
				</div>
			</div>

		)
	}
}

export default CharityPage
