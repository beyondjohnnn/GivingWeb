import React from 'react'

import css from './MemberPreview.scss'

class MemberPreview extends React.Component {
	render() {
		return (
			<div className="member-preview">
				<img src="http://via.placeholder.com/350x350" />
				<h3>Name</h3>
				<h4>Location</h4>
				<p>Small description of the person and their plight.</p>
				<h4>Verification</h4>
				<div className="donation-details">
					<div className="member-progress">
						<p>50%</p>
						<p>RAISED</p>
					</div>
					<div className="percent-raised">
						<p>£500</p>
						<p>GOAL</p>
					</div>
					<div className="member-goal"></div>
					<button>Donate</button>
				</div>
				<div>Donations</div>
			</div>
		)
	}
}

export default MemberPreview