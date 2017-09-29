import React from 'react'
import CategoryList from './../components/CategoryList'
import MemberPreview from './../components/MemberPreview'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../actions/helpSomeoneActionCreator'

import css from './HelpSomeonePage.scss'

class HelpSomeonePage extends React.Component {

	buildCategoryList(){
		let categories = ["All", "Art Supplies", "Education",
		"Employment", "other", "other", "other", "other", "other", "other", "other"];

		let categoryElements = [];
		for(let index in categories){
			categoryElements.push(<li key={index}><button>{categories[index]}</button></li>);
		}

		return <ul>{categoryElements}</ul>
	}

	buildMemberPreviews(members){

		console.log(members)
		let memberPreviews = [];
		let previewsPerLine = 3;

		let row = [];
		for(let index in members){
			row.push(<MemberPreview className="member-preview" key={index}  member={members[index]} />);

			if(row.length === previewsPerLine){
				memberPreviews.push(
					<div className="member-preview-row" key={index}>{row}</div>
				);
				row = [];
			}
		}

		if(row.length !== 0){
			memberPreviews.push(
				<div className="member-preview-row" key="last-row">{row}</div>
			);
		}

		return memberPreviews;
	}

	componentDidMount(){
		this.props.getMembers()
	}

	render() {
		return (
			<div className="charity-page">

				<section>

					<h2>Find someone to help</h2>
					<p>
						Support individuals and families who are experiencing poverty or
						homelessness in raising money for basic needs and goals. You can
						see first hand the positive impact of your donation when we send
						you updates from our member once they have reach their target!
					</p>
					<p>
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
					{this.buildMemberPreviews(this.props.members)}
				</section>

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
