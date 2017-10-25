import React, {Component} from 'react'

import css from './SearchCharityPreview.scss'

class SearchCharityPreview extends Component {
	render() {
		return (
			<div className="search-charity-preview">
				{this.props.charity.name}
			</div>
		)
	}
}

export default SearchCharityPreview