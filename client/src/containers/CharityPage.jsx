import React from 'react'
import { Link } from 'react-router-dom'

import css from './CharityPage.scss'

class CharityPage extends React.Component {
	render() {
		return (
			<div className="charity-page">
				<div className="charity-header">
					<img src="http://via.placeholder.com/350x350" />
					<div className="charity-summary">
						<h2 className="charity-name">Streetwork UK</h2>
						<p className="summary">We support people who are homeless or at risk of homelessness. We want people to find their own solutions: ‘your terms, your pace, your place’.</p>
					</div>
					<div className="charity-actions">
						<button>Fundraise</button>
						<button>Donate</button>
						<Link className="monthly-dontation-link" to="" ><span>Make a Monthly Donation</span></Link>
					</div>
				</div>
			</div>
		)
	}
}

export default CharityPage
