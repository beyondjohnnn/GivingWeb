import React from 'react'

import css from './FeaturedMembers.scss'

import MemberPreview from '../MemberPreview'


class FeaturedMembers extends React.Component {
	render() {
		return (
			<div className="featured-members">
				<h2>Members</h2>
				<div className="members-list">
					<MemberPreview />
					<MemberPreview />
					<MemberPreview />
				</div>
			</div>
		)
	}
}

export default FeaturedMembers
