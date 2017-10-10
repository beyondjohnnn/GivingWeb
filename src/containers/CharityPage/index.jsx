import React from 'react'
import { Link } from 'react-router-dom'

import css from './CharityPage.scss'

import CharityTile from '../../components/CharityTile'
import CareButton from '../../components/CareButton'

import FeaturedMembers from '../../components/FeaturedMembers'


	     


class CharityPage extends React.Component {

	render() {
		return (
			<div className="charity-page">
				<div className="main-charity-wrapper">
					<div className="charity-hero">
	        	<div className="charity-banner-wrapper">
	        		<img className="charity-banner" src="images/streetworkbanner.jpg" />
	        		<div className="linear-gradient"></div> 
	        	</div>
	        	<img className="charity-logo" src="images/streetwork.jpg" />
	        	<h2>Streetwork</h2>
	        	<h3><i className="fa fa-map-marker"></i>Edinburgh</h3>
	        	<div className="social-media-container">
	        		<a href="https://www.facebook.com/StreetChange1/" target="_blank"><i className="fa fa-facebook"></i></a>
	        		<a href="https://www.facebook.com/StreetChange1/" target="_blank"><i className="fa fa-twitter"></i></a>
	        		<a href="https://www.facebook.com/StreetChange1/" target="_blank"><i className="fa fa-globe"></i></a>
	        	</div>
	        	 
		      <CareButton />
		      <button className="about-us-scroller">About Us<i class="fa fa-angle-double-down" aria-hidden="true"></i></button> 
		      </div>
				</div>



	     
				<div className="charity-info-container">
					<div className="charity-image-total-wrapper">
		        
						<div className="banner-image"></div>
		        <h3>Streetwork</h3>
						<p className="charity-number">Registered charity number SC017802</p>
		        <p className="amount-raised">£3,300</p>
						<p className="amount-raised-text">Total Raised</p>
						<button className="donate-button">Make a Donation</button>
						<button className="fundraise-button">Fundraise for Us</button>
					</div> 
					<div className="charity-description-wrapper">
						<h3>About the Charity</h3>
						<p>Streetwork is about enabling a life off the streets. We focus on where people are most in need and at risk - on the streets.</p>
						<p>We don't wait for people to find us; we find them, with outreach teams spending at least 84hrs each week on the streets of Edinburgh helping the most vulnerable people.</p>
					</div> 
				</div> 

				<FeaturedMembers />
				<FeaturedMembers />

			</div>

		)
	}
}

export default CharityPage


				{/* 
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
