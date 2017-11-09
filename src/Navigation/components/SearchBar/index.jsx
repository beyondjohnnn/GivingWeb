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
		this.handleSubmit = this.handleSubmit.bind(this)
		this.createFuzzyDropdown = this.createFuzzyDropdown.bind(this)
	  this.hideDropdownOnClick = this.hideDropdownOnClick.bind(this)
	  this.toggleSearchResultsVisibility = this.toggleSearchResultsVisibility.bind(this)
	}


	componentDidMount() {
	  window.addEventListener('click', this.hideDropdownOnClick)
	}

	hideDropdownOnClick(e) {
		if (this.props.searchResultsVisible && this.props.searchResults) {
		  const inputBoundaries = this.refs.search.getBoundingClientRect()
		  const dropdownBoundaries = document.querySelector('.search-dropdown').getBoundingClientRect()
		  const outsideInput = (e.x < inputBoundaries.left || e.x > inputBoundaries.right || e.y < inputBoundaries.top || e.y > inputBoundaries.bottom)
		  const outsideDropdown = (e.x < dropdownBoundaries.left || e.x > dropdownBoundaries.right || e.y < dropdownBoundaries.top || e.y > dropdownBoundaries.bottom)

		  if (outsideInput && outsideDropdown) {
		    this.props.toggleSearchResultsVisibility()
		  }
		}
	}

	componentWillUnmount() {
	  window.removeEventListener('click', this.hideDropdownOnClick)
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

	handleSubmit(e) {
		e.preventDefault()
		const searchTerm = this.refs.search.value
		this.props.history.push(`/search?search_term=${searchTerm}`)
	}

	createFuzzyDropdown() {
		if (this.props.searchResults) {
			const { members, charities } = this.props.searchResults
			return <SearchDropdown ref="dropdown" members={members} charities={charities} />
		}
	}

	toggleSearchResultsVisibility() {
		if (!this.props.searchResultsVisible) {
			this.props.toggleSearchResultsVisibility()
		}
	}

	render() {
		return (
			<form className="search-bar" onSubmit={this.handleSubmit}>
				<div className="searchbar-container">
			    <input
			    	ref="search"
			    	id="search"
			    	onChange={this.handleChange}
			    	onFocus={this.toggleSearchResultsVisibility}
			    	placeholder="Search for a city, friend, non-profit or cause..."
			    	autoComplete="off" />
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
