import React from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import * as actionCreators from '../actions/helpSomeoneActionCreators'

import css from './HelpSomeone.scss'

import CategoryList from './components/CategoryList'
import MemberPreview from '../Shared/components/MemberPreview'
import MemberPreviewBuilder from '../Shared/components/MemberPreviewBuilder'

class HelpSomeonePage extends React.Component {

	constructor(props){
		super(props)
		this.onClickLoadMore = this.onClickLoadMore.bind(this)
	}

	componentDidMount(){
		this.props.getMembers()
	}

	renderLoadMoreButton(){
		if(this.props.membersToShow < this.props.members.length){
			return (
				<section className="load-members-button-container">
					<button onClick={this.onClickLoadMore}>+ Load More</button>
				</section>
			)
		}
	}

	getMembersToDisplay(){
		const allMembers = this.props.members
		const membersToShow = this.props.membersToShow
		return allMembers.slice(0, membersToShow)
	}

	onClickLoadMore(){
		let membersToShow = this.props.membersToShow + 6
		this.props.setMembersShown(membersToShow)
	}

	render() {
		return (
			<div className="help-someone-page">

				<section>

					<h2>Find someone to help</h2>
					<p className="intro-paragraph">
						Support individuals and families who are experiencing poverty or
						homelessness in raising money for basic needs and goals. You can
						see first hand the positive impact of your donation when we send
						you updates from our member once they have reach their target!
					</p>
					<p className="intro-paragraph">
						*Each member is verified by our trusted partner organisations and
						is receiving assistance towards long term stability.
					</p>

				</section>

				<section>

					<div className="location-filter-container">
						<span>
							All Areas
						</span>
						<i className="fa fa-long-arrow-down custom-arrow" aria-hidden="true"></i>
					</div>

				</section>

				<CategoryList />

				<section>
					<MemberPreviewBuilder members={this.getMembersToDisplay()} previewsPerLine={3}/>
				</section>

				{this.renderLoadMoreButton()}

			</div>
		)
	}
}

// this is taking the howItWorks portion of state and attaching it to the HowItWork's props
function mapStateToProps(state, routing) {
  return Object.assign({}, state.helpSomeone, routing)
}

// this is attaching our actions to the HowItWork's component
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HelpSomeonePage)
