import React from 'react'

import css from './MemberShowPage.scss'

class MemberShowPage extends React.Component {
	render() {
		return (
			<div className="member-show-page">
				<div className="header">
					<h2>I'm raising money for a laptop</h2>
					<h3><i className="fa fa-check-square-o square-o" />Verified by Streetwork</h3>
				</div>
				<div className="left-section">
					<div className="member-details">
						<img src="http://placehold.it/350x350" />
						<div className="social-media">
							<button>share</button>
							<button>tweet</button>
							<button>share</button>
						</div>
						<div className="loaded-story">
							<h3>Why I’m using StreetChange for a Laptop</h3>

							<p>Having a laptop at home will allow me to continue my course work and give me more opportunities with further training. It will also allow me to keep in touch with people and build up relationships.</p>

							<h3>My Story</h3>

							<p>I was drinking 7 days a week and my relationships with friends and family broke down. I got a wake up call from my Doctor when I was told that I wouldn’t see my next birthday, and realised that I needed to stop drinking. I went and got help and have now been sober for 17 months. I am now doing a peer-to peer course on addiction to help me improve my confidence and skills, and work with others.</p>

							<h3>My goals moving forward</h3>

							<p>I would like to move into volunteering with addiction support and help others who are going through what I went through.</p>
						</div>
					</div>
					<div className="make-comment">
						<h3>Post a comment</h3>
						<label for="comment-box">Send a message</label>
						<textarea id="comment-box" ref="comment-box" className="comment-box" />
						<button className="post-button">Post</button>
					</div>
				</div>
				<div className="right-section">
					<div className="donation-section">
						<h4>£0</h4>
						<p>raised of £300 goal</p>
						<div className="member-progress-bar">
							<div className="bar-fill"></div>
						</div>
						<div className="progress-summary">
							<p>£300 still needed</p>
							<p>0 supporters</p>
						</div>
						<div className="donation-controls">
							<h4>
								Select Donation amount
							</h4>
							<select>
								<option value="25">£25</option>
								<option value="50">£50</option>
								<option value="75">£75</option>
								<option value="custom">Custom amount</option>
							</select>
							<div className="support-checkbox">
								<input id="checkbox" type="checkbox" />
								<label for="checkbox">Add £3 to help support GivingWeb</label>
							</div>
						</div>
						<div className="message-controls">
							<label for="message">Send a message</label>
							<textarea className="message-text" />
							<div className="name-hide">
								<input id="checkbox-hidename" type="checkbox" />
								<label for="checkbox-hidename">Hide my name</label>
							</div>
						</div>
						<button className="donate-button">DONATE NOW</button>
					</div>
				</div>
			</div>
		)
	}
}

export default MemberShowPage