import React from 'react'

import css from './NewMemberFormCoverPhoto.scss'

class NewMemberFormCoverPhoto extends React.Component {
	render() {
		return (
			<div className="new-member-form-cover-photo">
				<img src="http://via.placeholder.com/300x300" alt=""/>
				<div className="controls">
					<p>Please pick a nice photo. This will be the photo that potential doners will see.</p>
				</div>
			</div>
		)
	}
}

export default NewMemberFormCoverPhoto