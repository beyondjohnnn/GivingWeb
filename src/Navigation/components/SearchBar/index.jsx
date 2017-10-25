import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actionCreators from '../../../actions/navActionCreators'

import css from './SearchBar.scss'

import SearchDropdown from '../SearchDropdown'

class SearchBar extends Component {

	constructor(props) {
		super(props)

		this.handleChange = this.handleChange.bind(this)
		this.createFuzzyDropdown = this.createFuzzyDropdown.bind(this)
	}

	handleChange(e) {
		e.preventDefault()
		const searchTerm = this.refs.search.value
		if (searchTerm == '') {
			this.props.clearSearch()
		} else {
			this.props.fuzzySearch(searchTerm)
		}
	}

	createFuzzyDropdown() {
		if (this.props.searchResultsVisible && this.props.searchResults) {
			const { members, charities } = this.props.searchResults
			return <SearchDropdown members={members} charities={charities} />
		}
	}

	render() {
		return (
			<form className="search-bar">
				<div className="searchbar-container">
			    <input
			    	ref="search"
			    	id="search" 
			    	onChange={this.handleChange}
			    	onFocus={this.props.toggleSearchResultsVisibility}
			    	onBlur={this.props.toggleSearchResultsVisibility}
			    	placeholder="Search for a city, friend, non-profit or cause..." />
			    <button className="search-icon"><i className="fa fa-search"></i></button>
				</div>
		    {this.createFuzzyDropdown()}
		  </form>
		)
	}
}

function mapStateToProps(state, routing) {
	return { ...state.navigation, ...routing }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)