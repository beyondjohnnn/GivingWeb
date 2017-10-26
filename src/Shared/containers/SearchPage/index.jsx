import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actionCreators from '../../../actions/navActionCreators'
import SearchShow from './components/SearchShow'
import css from './SearchPage.scss'


class SearchPage extends Component {

	constructor(props) {
		super(props)
	}

	countSearchResults() {
		if(this.props.searchResults != null) {
			const { members, charities } = this.props.searchResults
			const count = members.concat(charities).length
			return count
		} else {
			return 0
		}
	}

	renderResults() {
		if (this.props.searchResults) {
			const { members, charities } = this.props.searchResults
			return <SearchShow members={members} charities={charities} />
		}
	}

	render() {
		return (
			<div>
			<h3>There are {this.countSearchResults()} Search Results</h3>
			{this.renderResults()}
			</div>
		)
	}
}

function mapStateToProps(state, routing) {
	return { ...state.navigation, ...routing }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
