import React from 'react'
import { Link } from 'react-router-dom'

import css from './CharityPage.scss'

import CharityTile from '../../components/CharityTile'

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
	        	<div className="support-wrapper">
	        		<button><i className="fa fa-heart-o"></i>Care</button>
	        		<div className="care-count-wrapper">
	        			<div className="care-count-square"></div>
	        			<p>222</p>
	        		</div>
	        	</div> 
		      </div>


					</div>
	     
			</div>

		)
	}
}

export default CharityPage


				{/* 
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
