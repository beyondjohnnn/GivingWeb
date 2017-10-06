import React from 'react'
import {Link} from 'react-router-dom'

import css from './Footer.scss'



class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<div className="sitemap">
					<div className="footer-text-column">
						<p>Get to know us</p>
						<Link to="/" className="footer-link">About Us</Link>
						<Link to="/" className="footer-link">Read our blog</Link>
						<Link to="/" className="footer-link">Meet our team</Link>
						<Link to="/" className="footer-link">Terms & Privacy</Link>
						<Link to="/" className="footer-link">Cookies</Link>
					</div>
					<div className="footer-text-column">
						<p>Donors & Fundraisers</p>
						<Link to="/" className="footer-link">How it works</Link>
						<Link to="/" className="footer-link">Help Someone</Link>
						<Link to="/" className="footer-link">Campaigns</Link>
						<Link to="/" className="footer-link">Start Fundraising</Link>
						<Link to="/" className="footer-link">Donate to GivingWeb</Link>
					</div>
					<div className="footer-text-column">
						<p>Help</p>
						<Link to="/" className="footer-link">FAQ</Link>
						<Link to="/" className="footer-link">Developer Tools</Link>
						<Link to="/" className="footer-link">Contact Us</Link>
					</div>
					<div className="footer-text-column">
						<p>Charities</p>
						<Link to="/" className="footer-link">Sign up to GivingWeb</Link>
						<Link to="/" className="footer-link">Log in to Dashboard</Link>
					</div>
				</div>
				<div className="other-info">
					<div className="terms">
						<div className="terms-text">© 2017 GivingWeb | All rights reserved</div>
						<div className="terms-text">Made with <i className="fa fa-heart"></i> in Edinburgh</div>
						<div className="terms-text">GivingWeb is a © 2017 StreetChange Platform</div>
					</div>
					<div className="social-media">
						<a href="https://www.facebook.com/StreetChange1/" target="_blank"><i className="fa fa-facebook"></i></a>
						<a href="https://twitter.com/StreetChangeUK" target="_blank"><i className="fa fa-twitter"></i></a>
						<a href="https://www.instagram.com/streetchangeuk/" target="_blank"><i className="fa fa-instagram"></i></a>
						<a href="https://www.youtube.com/channel/UCt6GV2-HVPzhysqnHQVNYdA" target="_blank"><i className="fa fa-youtube"></i></a>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer