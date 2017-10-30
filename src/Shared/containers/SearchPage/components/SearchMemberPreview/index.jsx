import React, {Component} from 'react'

import css from './SearchMemberPreview.scss'

class SearchMemberPreview extends Component {
	render() {
		const {member} = this.props
		return (
			<div className="search-member-show">
				<img src={member.url_image} alt=""/>
				{member.name}
			</div>
		)
	}
}

export default SearchMemberPreview
