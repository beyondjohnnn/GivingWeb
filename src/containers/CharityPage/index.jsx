import React from 'react'
import { Link } from 'react-router-dom'

import css from './CharityPage.scss'

import CharityTile from '../../components/CharityTile'
import CareButton from '../../components/CareButton'

import FeaturedMembers from '../../components/FeaturedMembers'
import CharityPageInformation from '../../components/CharityPageInformation'
import CharityPageHero from '../../components/CharityPageHero'





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


				{/*
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
		      <button className="about-us-scroller">About Us<i class="fa fa-angle-double-down" aria-hidden="true"></i></button>
=======
>>>>>>> development
				<div className="giving-levels-container">
					<div className="giving-card">
						<p className="giving-card-description">A £5 pays for someone to have a hot shower and access to our laundry.</p>
						<p className="giving-card-support"><i className="fa fa-heart"></i>Be the first supporter!</p>
						<h3 className="giving-card-support">£5</h3>
					</div>
					<div className="giving-card">
						<p className="giving-card-description">A £5 pays for someone to have a hot shower and access to our laundry.</p>
						<p className="giving-card-support"><i className="fa fa-heart"></i>Be the first supporter!</p>
						<h3 className="giving-card-support">£5</h3>
					</div>
					<div className="giving-card">
						<p className="giving-card-description">A £5 pays for someone to have a hot shower and access to our laundry.</p>
						<p className="giving-card-support"><i className="fa fa-heart"></i>Be the first supporter!</p>
						<h3 className="giving-card-support">£5</h3>
					</div>
					<div className="giving-card">
						<p className="giving-card-description">A £5 pays for someone to have a hot shower and access to our laundry.</p>
						<p className="giving-card-support"><i className="fa fa-heart"></i>Be the first supporter!</p>
						<h3 className="giving-card-support">£5</h3>
					</div>

				</div>
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> development
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

			<section className="charity-container">
			</div>

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
			*/}
