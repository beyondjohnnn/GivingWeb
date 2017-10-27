import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actionCreators from '../../../actions/navActionCreators'
import SearchShow from './components/SearchShow'
import css from './SearchPage.scss'


class SearchPage extends Component {

	constructor(props) {
		super(props)
		this.onClickMore = this.onClickMore.bind(this)
	}

	textSearchResults() {
		const searchInput = this.props.location.search.split('=')[1]
		let htmlText = <h3>Search Results of "{searchInput}"</h3>
		let NoHtml = <h3>No input was given</h3>

		if (!searchInput) {
			htmlText = NoHtml
		}
		return(
			<div>
				{htmlText}
			</div>
		)
	}

	onClickMore() {
		const searchInput = this.props.location.search.split('=')[1]
		const limitMore = 9
		this.props.fuzzySearch(searchInput, limitMore)
	}

	renderLoadMoreButton(){
		return (
			<section className="load-more-button-container">
				<button onClick={this.onClickMore}>+ Load More</button>
			</section>
		)
	}//TODO: redesign this to provide a expaince on the search limit


	renderResults() {
		if (this.props.searchResults) {
			const { members, charities } = this.props.searchResults
			return <SearchShow members={members} charities={charities} />
		}
	}

	render() {
		return (
			<div>
				<div className="search-header">
					{this.textSearchResults()}
				</div>
				{this.renderResults()}
				{this.renderLoadMoreButton()}
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
