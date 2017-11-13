import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../actions/helpSomeoneActionCreators'

import css from './MemberShowPage.scss'

import { calcDonationPercentage } from './../Shared/utils/donations'
import Header from './components/Header'
import CommentSection from './components/CommentSection'
import MemberDetails from './components/MemberDetails'
import DonationSection from './components/DonationSection'
import MatchedCompanySection from './components/MatchedCompanySection'
import DonationProgressBar from './../Shared/components/DonationProgressBar'

class MemberShowPage extends Component {

	constructor(props){
		super(props)
		this.donationProgressBar = new DonationProgressBar()
	}

	componentDidMount() {
		this.getCurrentMember()
		.then((member) => {
			this.donationProgressBar.animateBar(calcDonationPercentage(member))
		}).catch((err) =>{console.log(err)})
	}

	// componentWillReceiveProps(nextProps) {
	// 	this.getCurrentMember()
	// 	.then((member) => {
	// 		this.donationProgressBar.animateBar(calcDonationPercentage(member))
	// 	}).catch((err) =>{console.log(err)})	
	// }

	getCurrentMember(){
		const memberId = parseInt(this.props.location.search.split('=')[1])
		const { members } = this.props

		return new Promise((resolve, reject) => {
			if (members.length === 0) {
				this.props.getSingleMember(memberId)
					.then((payload) => {
						const member = payload.value.data
						resolve(member)
					}).catch((err) => {reject(err)})
			} else {
				const member = this.findMember(memberId, members)
				resolve(member)
			}
	  })
	}

	findMember(memberId, members){
		const currentMember = members.find((member) => {
			return member.id === memberId
		})
		this.props.setCurrentMember(currentMember)
		return currentMember
	}

	renderMatchedCompany(member){
		if(member.sponsors.length > 0){
    	return <MatchedCompanySection sponsor={member.sponsors[0]}/>
		}
  }

	render() {
		const { currentMember } = this.props
		return (
			<div className="member-show-page">
				<div className="main-wrapper">
					<Header snippet={currentMember.snippet} />
					<div className="left-section">
						<MemberDetails currentMember={currentMember} />
						<CommentSection comments={currentMember.comments} />
					</div>
					<div className="right-section">
						{this.renderMatchedCompany(currentMember)}
						<DonationSection
							history={this.props.history}
							donationProgressBar={this.donationProgressBar}
							currentMember={currentMember} />
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
