import React from 'react'

import css from './CharityDashboardMemberPreview.scss'

class CharityDashboardMemberPreview extends React.Component {

	render() {
		const donationBarStyles = {
			"width": '75%',
			"backgroundColor": '#444'
		}
		return (
			<div className="cd-member-preview">
				<img src="http://via.placeholder.com/300x300" alt=""/>
				<h2>Snippet of text</h2>
				<div className="donation-details">
					<h4 className="no-of-donors">9 donors</h4>
					<div className="member-progress-bar">
						<div className="bar-fill" style={donationBarStyles}></div>
					</div>
					<div className="donation-ratio">£150 of £200 raised</div>
				</div>
				<div className="percentage-container">
					<p className="donation-percentage">75%</p>
				</div>
			</div>
		)
	}
}

export default CharityDashboardMemberPreview