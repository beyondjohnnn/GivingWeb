import React from 'react'

import css from './Footer.scss'

class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<div className="sitemap">
					<div className="get-to-know-us">
						<ul>
							<li className="header">Get to know us</li>
							<li>About Us</li>
							<li>Read our blog</li>
							<li>Meet our team</li>
							<li>Terms & Privacy</li>
							<li>Cookies</li>
						</ul>
					</div>
					<div className="connect">
						<ul>
							<li>Donors & Fundraisers</li>
							<li>How it works</li>
							<li>Help Someone</li>
							<li>Campaigns</li>
							<li>Start Fundraising</li>
						</ul>
					</div>
					<div className="get-involved">
						<ul>
							<li>Get involved</li>
							<li>Become a partner</li>
						</ul>
					</div>
					<div className="donate-to-us">
						<ul>
							<li>Donate to us</li>
							<li>Help Someone</li>
							<li>The community fund</li>
						</ul>
					</div>
				</div>
				<div className="other-info">
					<div className="terms">
						<div className="copyright">© 2016 GivingWeb | All rights reserved.</div>
						<div className="made-with-love">Made with <i className="fa fa-heart"></i> in Edinburgh.</div>
						<div className="ts-n-cs">GivingWeb is a © 2017 StreetChange Platform</div>
					</div>
					<div className="social-media">
						<i className="fa fa-facebook"></i>
						<i className="fa fa-twitter"></i>
						<i className="fa fa-instagram"></i>
						<i className="fa fa-youtube"></i>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer