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

	renderResults() {
		if (this.props.searchResults) {
			const { members, charities } = this.props.searchResults
			return <SearchShow members={members} charities={charities} />
		}
	}

	render() {
		return (
			<div>
			hello world
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
