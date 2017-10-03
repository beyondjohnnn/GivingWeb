import React from 'react'

import css from './CharitySidebarNav.scss'

class CharitySidebarNav extends React.Component {
	render() {
		return (
			<div className="charity-sidebar-nav">
				<div className="charity-details">
					<img src="http://placehold.it/200x200" />
					<h3>Charity Name</h3>
				</div>
			</div>
		)
	}
}

export default CharitySidebarNav 