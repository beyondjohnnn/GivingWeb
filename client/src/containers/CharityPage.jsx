import React from 'react'
import { Link } from 'react-router-dom'
import CharityTile from './../components/CharityTile'

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

				<section className="charity-container">

					<div className="column">

						<article className="title-tile">
							<h3>Join the Cancer Research UK community</h3>
							<p>
								Cancer Research UK is the world's leading charity dedicated to
								beating cancer through research. We are fighting cancer on all
								fronts, finding new ways to prevent, diagnose and treat it to
								save more lives. We are entirely funded by the public. With your
								help, we can ensure more people beat cancer.
							</p>
							
							<a href="#">www.cancerresearchuk.org</a>
							<a href="#">supporter.services@cancer.org.uk</a>
						</article>

						<section className="inner-column">
							<section className="column-section">
								<CharityTile />
							</section>
							<section className="column-section">
								<CharityTile />
							</section>
						</section>

					</div>
					<div className="column">

						<section className="inner-column">
							<section className="column-section">
								<CharityTile />
								<CharityTile />
							</section>
							<section className="column-section">
								<CharityTile />
							</section>
						</section>

					</div>

				</section>

			</div>
		)
	}
}

export default CharityPage
