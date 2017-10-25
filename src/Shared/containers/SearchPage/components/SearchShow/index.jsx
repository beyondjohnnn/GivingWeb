import React, {Component} from 'react'

import css from './SearchDropdown.scss'

import SearchCharityPreview from '../SearchCharityPreview'
import SearchMemberPreview from '../SearchMemberPreview'

class SearchShow extends Component {

	constructor(props) {
		super(props)
		this.createMembers = this.createMembers.bind(this)
	}

	createMembers() {
		const {members} = this.props
		return members.map((member, id) => {
			return <SearchMemberPreview key={id} member={member} />
		})
	}

	createCharities() {
		const {charities} = this.props
		return charities.map((charity, id) => {
			return <SearchCharityPreview key={id} charity={charity} />
		})
	}


	render() {
		return (
			<div className="search-dropdown">
				<div className="members-list">
					<h4>Members</h4>
					{this.createMembers()}
				</div>
				<div className="charities-list">
					<h4>Charities</h4>
					{this.createCharities()}
				</div>
			</div>
		)
	}
}

export default SearchShow
