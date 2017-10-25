import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actionCreators from '../../../actions/navActionCreators'

import css from './SearchPage.scss'

// import SearchDropdown from '../SearchDropdown'

class SearchPage extends Component {

	constructor(props) {
		super(props)
		// this.handleChange = this.handleChange.bind(this)
		// this.createFuzzyDropdown = this.createFuzzyDropdown.bind(this)
	}

	// handleChange(e) {
	// 	e.preventDefault()
	// 	const searchTerm = this.refs.search.value
	// 	if (searchTerm == '') {
	// 		this.props.clearSearch()
	// 	} else {
	// 		this.props.fuzzySearch(searchTerm)
	// 	}
	// }

	// handleSubmit(e) {
	// 	e.preventDefault()
	// 	const searchTerm = this.refs.search.value
	// 	// encodeURI(searchTerm)
	// 	// this.props.history.push(`/search?search_term=${searchTerm}`)
	// 	this.props.history.push({
	// 		pathname: '/search',
	// 		state: {searchTerm}
 // 		})
	// }

	// createFuzzyDropdown() {
	// 	if (this.props.searchResultsVisible && this.props.searchResults) {
	// 		const { members, charities } = this.props.searchResults
	// 		return <SearchDropdown members={members} charities={charities} />
	// 	}
	// }

	render() {
		return (
			<div>
			hello world
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
