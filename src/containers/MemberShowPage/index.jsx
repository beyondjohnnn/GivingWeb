import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../../actions/helpSomeoneActionCreators'

import css from './MemberShowPage.scss'

import Comment from '../../components/Comment'

class MemberShowPage extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const member_id = parseInt(this.props.location.search.split('=')[1])
		const { members } = this.props
		if (members.length == 0) {
			this.props.getSingleMember(member_id)
		} else {
			const current_member = members.find((member) => {
				return member.id == member_id 
			})
			console.log(current_member)
			this.props.setCurrentMember(current_member)
		}
	}

	calcTotalDonations(member) {
		const donations = member.donations.map((donation) => {
				return donation.total
			}).reduce((a, b) => {
				return a + b
			}, 0)

		return donations > member.goal ? member.goal : donations
	}

	calcDonationPercentage(member){
		const donations = this.calcTotalDonations(member)
		console.log('donations', donations)
		let donationPercent = (donations / member.goal) * 100;
		if(donationPercent >= 100) return 100;
		if(donationPercent < 99) return Math.ceil(donationPercent);
		else return 99;
	}

	getDonationBarColour(percentage){
		if(percentage <= 33) return "#FBAC3D";
		else if(percentage <= 66) return "#00CB9B";
		else return "#00862C";
	}

	render() {
		const testComment = {
			comment_author: 'Mark',
			comment_date: new Date(),
			comment_content: 'Hope you make it home Tomas! I hope you get a chance to have a lovely dinner with your family too.',
			donation_amount: 'made a £10 donation.'
		}

		const { current_member } = this.props
		const totalDonations = this.calcTotalDonations(current_member)
		const donationPercentage = this.calcDonationPercentage(current_member)
		const textPercentage = donationPercentage + '%'
		console.log(textPercentage)
		const donationBarColour = this.getDonationBarColour(donationPercentage)
		const donationBarStyles = {
			width: textPercentage,
			backgroundColor: donationBarColour
		}

		return (
			<div className="member-show-page">
				<div className="header">
					<h2>{current_member.snippet}</h2>
					<h3><i className="fa fa-check-square-o square-o" />Verified by Streetwork</h3>
				</div>
				<div className="left-section">
					<div className="member-details">
						<img src={`images/${current_member.name}.png`} />
						<div className="social-media">
							<button>share</button>
							<button>tweet</button>
							<button>share</button>
						</div>
						<div className="loaded-story">
							{current_member.info}
						</div>
					</div>
					<div className="make-comment">
						<h3>Post a comment</h3>
						<label htmlFor="comment-box">Send a message</label>
						<textarea id="comment-box" ref="comment-box" className="comment-box" />
						<button className="post-button">Post</button>
						<div className="comment-list">
							<Comment comment={testComment} />
						</div>
					</div>
					
				</div>
				<div className="right-section">
					<div className="donation-section">
						<h4>£{totalDonations}</h4>
						<p>raised of £{current_member.goal} goal</p>
						<div className="member-progress-bar">
							<div className="bar-fill" style={donationBarStyles}></div>
						</div>
						<div className="progress-summary">
							<p>£{current_member.goal - totalDonations} still needed</p>
							<p>{current_member.donations.length} supporters</p>
						</div>
						<div className="donation-controls">
							<h4>
								Select Donation amount
							</h4>
							<select>
								<option value="25">£25</option>
								<option value="50">£50</option>
								<option value="75">£75</option>
								<option value="custom">Custom amount</option>
							</select>
							<div className="support-checkbox">
								<input id="checkbox" type="checkbox" />
								<label htmlFor="checkbox">Add £3 to help support GivingWeb</label>
							</div>
						</div>
						<div className="message-controls">
							<label htmlFor="message">Send a message</label>
							<textarea className="message-text" />
							<div className="name-hide">
								<input id="checkbox-hidename" type="checkbox" />
								<label htmlFor="checkbox-hidename">Hide my name</label>
							</div>
						</div>
						<button className="donate-button">DONATE NOW</button>
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