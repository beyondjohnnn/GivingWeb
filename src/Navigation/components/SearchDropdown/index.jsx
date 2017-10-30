import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect}  from 'react-redux'

import css from './SearchDropdown.scss'

import * as actionCreators from '../../../actions/navActionCreators'

import SearchMemberPreview from '../SearchMemberPreview'
import SearchCharityPreview from '../SearchCharityPreview'

class SearchDropdown extends Component {

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
			return <SearchCharityPreview  logoUrl="https://res.cloudinary.com/givingweb/image/upload/v1508963429/streetwork_u5ry1v.jpg" key={id} charity={charity} />
		})
	}

	createStyling() {
		if (this.props.searchResultsVisible) {
			return "search-dropdown"
		} else {
			return "search-dropdown hidden"
		}
	}

	render() {
		return (
			<div className={this.createStyling()}>
				<div className="members-list">
					{this.createMembers()}
				</div>
				<div className="charities-list">
					{this.createCharities()}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state, routing) {
  return Object.assign({}, state.navigation, routing)
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchDropdown)
