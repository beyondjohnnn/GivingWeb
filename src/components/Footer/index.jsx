import React from 'react'

import css from './Footer.scss'

class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<div className="sitemap">
					<div className="get-to-know-us">
						<ul>
							<li><h4>Get to know us</h4></li>
							<li>Read our blog</li>
							<li>Meet our team</li>
						</ul>
					</div>
					<div className="connect">
						<ul>
							<li><h4>Connect</h4></li>
							<li>Contact us</li>
						</ul>
					</div>
					<div className="get-involved">
						<ul>
							<li><h4>Get involved</h4></li>
							<li>Become a partner</li>
						</ul>
					</div>
					<div className="donate-to-us">
						<ul>
							<li><h4>Donate to us</h4></li>
							<li>Help Someone</li>
							<li>The community fund</li>
						</ul>
					</div>
				</div>
				<div className="other-info">
					<div className="terms">
						<div className="copyright">© 2016 StreetChange | All rights reserved.</div>
						<div className="made-with-love">Made with <i className="fa fa-heart"></i> in Edinburgh.</div>
						<div className="ts-n-cs">Terms and Privacy | Cookie Policy</div>
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