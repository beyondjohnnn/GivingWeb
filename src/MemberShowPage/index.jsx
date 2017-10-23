import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../actions/helpSomeoneActionCreators'

import css from './MemberShowPage.scss'

import Header from './components/Header'
import CommentSection from './components/CommentSection'
import MemberDetails from './components/MemberDetails'
import DonationSection from './components/DonationSection'
import MatchedCompanySection from './components/MatchedCompanySection'

class MemberShowPage extends Component {

	constructor(props){
		super(props)
	}

	componentDidMount() {
		const member_id = parseInt(this.props.location.search.split('=')[1])
		const { members } = this.props
		console.log(members.length);
		if (members.length === 0) {
			this.props.getSingleMember(member_id)
		} else {
			const current_member = members.find((member) => {
				return member.id == member_id
			})
			console.log(current_member);
			this.props.setCurrentMember(current_member)
		}
	}

	renderMatchedCompany(member){
		if(member.sponsors.length > 0){
    	return <MatchedCompanySection sponsor={member.sponsors[0]}/>
		}
  }

	render() {
		const { current_member } = this.props
		return (
			<div className="member-show-page">
				<div className="main-wrapper">
					<Header snippet={current_member.snippet} />
					<div className="left-section">
						<MemberDetails current_member={current_member} />
						<CommentSection comments={current_member.comments} />
					</div>
					<div className="right-section">
						{this.renderMatchedCompany(current_member)}
						<DonationSection current_member={current_member} />
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state, routing) {
	return Object.assign({}, state.helpSomeone, routing)
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberShowPage)
