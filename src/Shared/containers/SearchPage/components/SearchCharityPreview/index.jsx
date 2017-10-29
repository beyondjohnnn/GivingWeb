import React, {Component} from 'react'

import css from './SearchCharityPreview.scss'

class SearchCharityPreview extends Component {
	render() {
		return (
			<div className="search-charity-show">
				<img src="https://res.cloudinary.com/givingweb/image/upload/v1508963429/streetwork_u5ry1v.jpg" />
				{this.props.charity.name}
			</div>
		)
	}
}
//TODO: change charity image url to be dynamic
export default SearchCharityPreview
