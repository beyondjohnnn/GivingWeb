import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actionCreators from '../../../actions/navActionCreators'

import css from './SearchBar.scss'

class SearchBar extends Component {

	constructor(props) {
		super(props)

		this.handleChange = this.handleChange.bind(this)
		
	}

	handleChange(e) {
		e.preventDefault()

		const searchTerm = this.refs.search.value
		console.log(searchTerm)
	}

	createFuzzyDropdown() {
		const { members, charities } = this.props.searchResults
	}

	render() {
		const blah = this.createFuzzyDropdown()
		return (
			<form className="search-bar">
		    <input ref="search" id="search" onChange={this.handleChange} placeholder="Search for a city, friend, non-profit or cause..." />
		    <button className="search-icon"><i className="fa fa-search"></i></button>
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

export default SearchBar